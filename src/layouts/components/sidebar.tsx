import { TbMetronome } from "react-icons/tb";

import { FaFolderClosed, FaWifi } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { RiSettings3Fill } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
export const Sidebar = () => {
  const path = window.location.pathname;
  return (
    <div className="w-1/12 flex flex-col space-y-2 bg-gray-600 h-full">
      <Link
        to="/"
        className={cn(
          "w-full cursor-pointer flex items-center justify-center py-2 h-1/4",
          path === "/" ? "bg-gray-400 text-purple-400" : " bg-gray-600 text-white" 
        )}
      >
        <GoHomeFill size={30} />
      </Link>
      <Link
        to={"/file"}
       className={cn(
          "w-full cursor-pointer flex items-center justify-center py-2 h-1/4",
          path === "/file" ? "bg-gray-400 text-purple-400" : " bg-gray-600 text-white" 
        )}
      >
        <FaFolderClosed size={30} />
      </Link>
      <Link
        to={"/control"}
       className={cn(
          "w-full cursor-pointer flex items-center justify-center py-2 h-1/4",
          path === "/control" ? "bg-gray-400 text-purple-400" : " bg-gray-600 text-white" 
        )}
      >
        <GiSettingsKnobs size={30} />
      </Link>
      <Link 
         to={"/settings"}
      className={cn(
          "w-full cursor-pointer flex items-center justify-center py-2 h-1/4",
          path === "/settings" ? "bg-gray-400 text-purple-400" : " bg-gray-600 text-white" 
        )}>
        <RiSettings3Fill size={30}  />
      </Link>{" "}
      <Link 
           to={"/tuning"}
      className={cn(
          "w-full cursor-pointer flex items-center justify-center py-2 h-1/4",
          path === "/tuning" ?  "bg-gray-400 text-purple-400" : " bg-gray-600 text-white" 
        )}>
        <TbMetronome size={30} />
      </Link>
    </div>
  );
};
