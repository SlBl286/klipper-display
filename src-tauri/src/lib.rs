mod wifi;

#[cfg(target_os = "windows")]
use wifi::WindowsWifi as Wifi;
#[cfg(target_os = "linux")]
use wifi::LinuxWifi as Wifi;

use crate::wifi::WifiControl;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
     println!("🔍 Đang quét mạng Wi-Fi...");
    let nets = Wifi::scan().unwrap();

    for net in nets.iter() {
        println!("📶 {} ({:?}%)", net.ssid, net.signal);
    }
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
