import { useEffect, useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { invoke } from "@tauri-apps/api/core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export const SettingPage = () => {
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
    <div className="w-11/12 flex text-white ">
      <Tabs defaultValue="setting" className="w-full rounded-none ring-0 ">
        <TabsList className="w-full p-0 border-0 shadow-none rounded-none text-white bg-gray-600">
        <TabsTrigger value="setting" className="data-[state=active]:bg-gray-300 rounded-none shadow-none border-none ring-0">
            Settings
        </TabsTrigger>
         <TabsTrigger value="network">
            Network
        </TabsTrigger>
         <TabsTrigger value="info">
            Info
        </TabsTrigger>
           <TabsTrigger value="camera">
            Camera
        </TabsTrigger>
        </TabsList>
        <TabsContent value="setting">

        </TabsContent>
      </Tabs>
    </div>
  );
};
