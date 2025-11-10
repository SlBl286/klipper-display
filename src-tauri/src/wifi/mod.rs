#[cfg(target_os = "windows")]
mod windows;
#[cfg(target_os = "linux")]
mod linux;

#[cfg(target_os = "windows")]
pub use windows::*;

#[cfg(target_os = "linux")]
pub use linux::*;

pub struct WifiNetwork {
    pub ssid: String,
    pub signal: Option<i32>,
    pub security: Option<String>,
}

pub trait WifiControl {
    fn scan() -> anyhow::Result<Vec<WifiNetwork>>;
    fn connect(ssid: &str, password: &str) -> anyhow::Result<()>;
}
