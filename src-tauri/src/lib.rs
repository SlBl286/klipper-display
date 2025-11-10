mod wifi;
use local_ip_address::local_ip;
#[cfg(target_os = "linux")]
use wifi::LinuxWifi as Wifi;
#[cfg(target_os = "windows")]
use wifi::WindowsWifi as Wifi;

use crate::wifi::WifiControl;

#[tauri::command]
fn scan_wifi() ->  Vec<wifi::WifiNetwork> {
    println!("🔍 Đang quét mạng Wi-Fi...");
    let nets: Vec<wifi::WifiNetwork> = Wifi::scan().unwrap();

    for net in nets.iter() {
        println!("📶 {} ({:?}%)", net.ssid, net.signal);
    }

   nets
}

#[tauri::command]
fn connect_wifi(ssid: String, password: String) -> String {
    println!("🔌 Đang kết nối tới mạng Wi-Fi: {}", ssid);
    match Wifi::connect(&ssid, &password) {
        Ok(_) => {
            println!("✅ Kết nối thành công tới mạng Wi-Fi: {}", ssid);
            format!("Kết nối thành công tới mạng Wi-Fi: {}", ssid)
        }
        Err(e) => {
            println!("❌ Kết nối thất bại tới mạng Wi-Fi: {}. Lỗi: {}", ssid, e);
            format!("Kết nối thất bại tới mạng Wi-Fi: {}. Lỗi: {}", ssid, e)
        }
    }
}
#[tauri::command]
fn get_ip() -> String {
    let my_ip = local_ip().unwrap();
    println!("🌐 IP hiện tại: {}", my_ip);
    format!("{}", my_ip)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
   
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![scan_wifi, get_ip,connect_wifi])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
