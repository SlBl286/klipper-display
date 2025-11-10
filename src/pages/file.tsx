import { useEffect, useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { invoke } from "@tauri-apps/api/core";
export const FilePage = () => {
  const [ip, setIp] =
    useState<{ ssid: string; signal?: number; security?: string }[]>([]);

  useEffect(() => {
    async function loadData() {
      var a = await invoke<
        { ssid: string; signal?: number; security?: string }[]
      >("scan_wifi");
      setIp(a);
    }
    loadData();
  }, []);

  const connectWifi = (ssid: string, password: string) => {
    invoke("connect_wifi", { ssid: ssid, password: password });
  }
  return (
    <div className="w-11/12 flex bg-gray-600 m-4 p-4 rounded-3xl text-white ">
      <div className="w-full grid grid-cols-1 gap-y-2">
          {ip &&
            ip.map((item, index) => (
              <div 
              onClick={()=> {
                connectWifi(item.ssid, "Abcd1234");
              }}
              className="rounded-xl bg-gray-400 w-full flex items-center justify-between" key={item.ssid + item.security}>
                <HiOutlineLightBulb size={30} className="text-purple-500" /> {item.ssid}
              </div>
            ))}
        </div>
    </div>
  );
};
