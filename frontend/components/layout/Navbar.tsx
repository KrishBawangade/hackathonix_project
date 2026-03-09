"use client";

import { Bell, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
      relative
      h-16
      flex items-center justify-between px-6
      sticky top-0 z-40

      bg-background/30
      backdrop-blur-2xl
      [backdrop-filter:blur(20px)]

      border-b border-border/40
      shadow-[0_4px_20px_rgba(0,0,0,0.35)]
      "
    >
      {/* Gradient Overlay */}
      <div
        className="
        pointer-events-none
        absolute inset-0
        bg-gradient-to-r
        from-blue-500/10
        via-cyan-400/10
        to-purple-500/10
        opacity-40
        "
      />

      {/* Left Section */}
      <div className="relative z-10 flex items-center gap-6">
        <h1 className="text-sm font-medium text-muted">
          Security Dashboard
        </h1>

        {/* Search */}
        <div className="hidden md:flex items-center bg-panel/80 border border-border/60 rounded-lg px-3 py-2 backdrop-blur transition focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30">
          <Search size={16} className="text-muted mr-2" />
          <input
            type="text"
            placeholder="Search devices, alerts..."
            className="bg-transparent outline-none text-sm text-muted placeholder:text-muted/60 w-56"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 flex items-center gap-5">
        {/* Alerts */}
        <button className="relative text-muted hover:text-foreground transition">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 min-w-[14px] h-[14px] flex items-center justify-center text-[9px] font-medium bg-danger text-white rounded-full leading-none">
            3
          </span>
        </button>

        {/* System Status */}
        <div className="flex items-center gap-2 text-xs bg-success/10 border border-success/20 text-success px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-success rounded-full"></span>
          System Online
        </div>

        {/* Avatar */}
        <div className="relative">
          <button className="w-9 h-9 rounded-full bg-panel/80 border border-border flex items-center justify-center hover:border-primary/40 hover:bg-surface transition backdrop-blur">
            <User size={16} className="text-muted" />
          </button>

          <span className="absolute bottom-0 right-0 w-2 h-2 bg-success rounded-full"></span>
        </div>
      </div>
    </header>
  );
}