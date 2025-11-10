mod wifi;

use local_ip_address::local_ip;
#[cfg(target_os = "linux")]
use wifi::LinuxWifi as Wifi;
#[cfg(target_os = "windows")]
use wifi::WindowsWifi as Wifi;

use crate::wifi::WifiControl;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_ip() -> String {
    let my_ip = local_ip().unwrap();
    println!("🌐 IP hiện tại: {}", my_ip);
    format!("{}", my_ip)
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
        .invoke_handler(tauri::generate_handler![greet, get_ip])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
