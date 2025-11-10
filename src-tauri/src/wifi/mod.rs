#[cfg(target_os = "windows")]
mod windows;
#[cfg(target_os = "linux")]
mod linux;

use serde::Serialize;
use tauri::ipc::InvokeResponseBody;
#[cfg(target_os = "windows")]
pub use windows::*;

#[cfg(target_os = "linux")]
pub use linux::*;
#[derive(Serialize)]
pub struct WifiNetwork {
    pub ssid: String,
    pub signal: Option<i32>,
    pub security: Option<String>,
}
impl Into<InvokeResponseBody> for WifiNetwork {
    fn into(self) -> InvokeResponseBody {
        InvokeResponseBody::Json(
            serde_json::json!({
                "ssid": self.ssid,
                "signal": self.signal,
                "security": self.security,
            }).to_string()
        )
    }
}
pub trait WifiControl {
    fn scan() -> anyhow::Result<Vec<WifiNetwork>>;
    fn connect(ssid: &str, password: &str) -> anyhow::Result<()>;
}
