use super::{WifiControl, WifiNetwork};
use wifi_rs::prelude::*;
use anyhow::{anyhow, Result};

pub struct LinuxWifi;

impl WifiControl for LinuxWifi {
    fn scan() -> Result<Vec<WifiNetwork>> {
        let nets = wifi_rs::scan().map_err(|e| anyhow!("{:?}", e))?;
        Ok(nets
            .into_iter()
            .map(|n| WifiNetwork {
                ssid: n.ssid.unwrap_or_default(),
                signal: n.signal_level,
                security: n.security,
            })
            .collect())
    }

    fn connect(ssid: &str, password: &str) -> Result<()> {
        wifi_rs::connect(ssid, password).map_err(|e| anyhow!("{:?}", e))
    }
}
