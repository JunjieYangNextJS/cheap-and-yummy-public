import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Sidebar } from "./sidebar";

interface Props {
  sidebarOpen: boolean;
  onToggleSidebarMenu: () => void;
}

const MobileSidebar = ({ onToggleSidebarMenu, sidebarOpen }: Props) => {
  const animation = sidebarOpen ? "translate-x-0" : "translate-x-[-100%]";

  //   const scrollToTopAndCloseNav = () => {
  //     window.scrollTo(0, 0);
  //     closeNav();
  //   };

  return (
    <div
      className={`fixed ${animation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] `}
    >
      <X onClick={onToggleSidebarMenu} className="mt-5 ml-5" />
      <Sidebar />
      {/* <div
        onClick={onToggleSidebarMenu}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <Menu />
      </div> */}
    </div>
  );
};

export default MobileSidebar;
