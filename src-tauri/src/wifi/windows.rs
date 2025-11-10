use super::{WifiControl, WifiNetwork};
use std::process::Command;
use anyhow::{anyhow, Result};

pub struct WindowsWifi;

impl WifiControl for WindowsWifi {
    fn scan() -> Result<Vec<WifiNetwork>> {
        let output = Command::new("netsh")
            .args(["wlan", "show", "networks", "mode=Bssid"])
            .output()?;
        let stdout = String::from_utf8_lossy(&output.stdout);
        let mut nets = Vec::new();

        for block in stdout.split("\r\n\r\n") {
            if let Some(ssid_line) = block.lines().find(|l| l.contains("SSID ")) {
                let ssid = ssid_line.split(':').nth(1).unwrap_or("").trim().to_string();
                let signal = block
                    .lines()
                    .find(|l| l.contains("Signal"))
                    .and_then(|s| s.split(':').nth(1))
                    .and_then(|v| v.trim().trim_end_matches('%').parse::<i32>().ok());
                nets.push(WifiNetwork {
                    ssid,
                    signal,
                    security: None,
                });
            }
        }
        Ok(nets)
    }

    fn connect(ssid: &str, _password: &str) -> Result<()> {
        let out = Command::new("netsh")
            .args(["wlan", "connect", &format!("name={}", ssid)])
            .output()?;
        if out.status.success() {
            Ok(())
        } else {
            Err(anyhow!("Kết nối thất bại: {}", String::from_utf8_lossy(&out.stderr)))
        }
    }
}
