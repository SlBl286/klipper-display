import { useEffect, useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { invoke } from "@tauri-apps/api/core";
export const HomePage = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    async function loadData() {
      setIp(await invoke("get_ip"));
    }
    loadData();
  }, []);
  return (
    <div className="w-11/12 flex bg-gray-600 m-4 p-4 rounded-3xl text-white ">
      <div className="w-2/5 flex flex-col">
        <span className="text-purple-500 font-bold text-2xl">Tên máy in</span>
        <div className="w-full grid grid-cols-2 gap-y-1">
          <div className="rounded-xl bg-gray-400 h-13 w-13 flex items-center justify-center">
            <HiOutlineLightBulb size={30} className="text-purple-500" />
          </div>
          <div className="rounded-xl bg-gray-400 h-13 w-13 flex items-center justify-center">
            <FaWifi size={30} className="text-purple-500" />
          </div>
          <div className="rounded-xl bg-gray-400 h-13 w-13 flex items-center justify-center">
            <HiOutlineLightBulb size={30} className="text-purple-500" />
          </div>
          <div className="rounded-xl bg-gray-400 h-13 w-13 flex items-center justify-center">
            <HiOutlineLightBulb size={30} className="text-purple-500" />
          </div>
          <div className="rounded-xl bg-gray-400 h-13 w-13 flex items-center justify-center">
            <HiOutlineLightBulb size={30} className="text-purple-500" />
          </div>
        </div>
        <span className="font-bold">IP : {ip}</span>
      </div>
      <div className="w-1/5"></div>
      <div className="w-2/5">
        <img src="/tauri.svg" />
      </div>
    </div>
  );
};
