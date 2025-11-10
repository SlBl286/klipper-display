import { TbMetronome } from "react-icons/tb";

import { FaFolderClosed, FaWifi } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { RiSettings3Fill } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from "react-router-dom";
export const  Sidebar = () => {
  return (
    <div className="w-1/12 flex flex-col space-y-2 bg-gray-600 h-full">
      <Link
        to="/"
        className="w-full cursor-pointer flex items-center justify-center py-2 h-1/4 bg-gray-400"
        
      >
        <GoHomeFill size={30} className="text-purple-400" />
      </Link>
      <Link
      to={"/file"}
        className="w-full cursor-pointer flex items-center justify-center py-2 h-1/4"
        
      >
        <FaFolderClosed size={30} className="text-white" />
      </Link>
      <div
        className="w-full cursor-pointer flex items-center justify-center py-2 h-1/4"
        
      >
        <GiSettingsKnobs size={30} className="text-white" />
      </div>
      <div
        className="w-full cursor-pointer flex items-center justify-center py-2 h-1/4"
        
      >
        <RiSettings3Fill size={30} className="text-white" />
      </div>{" "}
      <div
        className="w-full cursor-pointer flex items-center justify-center py-2 h-1/4"
        
      >
        <TbMetronome size={30} className="text-white" />
      </div>
    </div>
  );
};
