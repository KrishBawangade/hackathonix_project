"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Monitor,
  AlertTriangle,
  Network,
  Swords,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Devices", path: "/devices", icon: Monitor },
  { name: "Alerts", path: "/alerts", icon: AlertTriangle },
  { name: "Topology", path: "/topology", icon: Network },
  { name: "Simulation", path: "/simulation", icon: Swords },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-background border-r border-border flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">NS</span>
          </div>
          <h1 className="text-sm font-semibold tracking-wide text-foreground">
            NetSecure
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-3 gap-1">

        {navItems.map((item) => {
          const active = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-lg text-sm
                transition-all duration-200
                ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-panel hover:text-foreground"
                }
              `}
            >
              <Icon size={18} strokeWidth={1.8} />
              {item.name}
            </Link>
          );
        })}

      </nav>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-border p-4">
        <div className="text-xs text-muted">
          System Status
        </div>

        <div className="flex items-center gap-2 mt-1 text-sm text-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Operational
        </div>
      </div>

    </aside>
  );
}