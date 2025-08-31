"use client";

import { useState } from "react";
import HeroSidebar from "@/components/navigation/HeroSidebar";

function WebLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex flex-col sm:grid sm:grid-cols-[auto_1fr]">
      {/* Sidebar or Mobile Navbar */}
      <div
        className="sm:h-full"
        style={{
          width: collapsed ? "60px" : "240px",
          display: "none",
        }}
      />

      <HeroSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Page Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export default WebLayout;
