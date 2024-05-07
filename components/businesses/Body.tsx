"use client";

import React, { useState } from "react";
import { Header } from "./header";
import StoryDialog from "./storyDialog";
import MobileSidebar from "./MobileSidebar";
import MainContent from "./main-content";
import { Sidebar } from "./sidebar";

export default function Body() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const onToggleSidebarMenu = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <Header
        onToggleSidebarMenu={onToggleSidebarMenu}
        sidebarOpen={sidebarOpen}
      />

      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <StoryDialog />
            <Sidebar className="hidden lg:block" />
            <MobileSidebar
              onToggleSidebarMenu={onToggleSidebarMenu}
              sidebarOpen={sidebarOpen}
            />
            <MainContent sidebarOpen={sidebarOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
