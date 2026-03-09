"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Devices", path: "/devices" },
  { name: "Alerts", path: "/alerts" },
  { name: "Topology", path: "/topology" },
  { name: "Simulation", path: "/simulation" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-background border-r border-border flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <h1 className="text-lg font-semibold tracking-wide text-primary">
          NetSecure
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-3 gap-1">

        {navItems.map((item) => {
          const active = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                px-4 py-2 rounded-lg text-sm transition-colors
                ${active
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-panel hover:text-foreground"}
              `}
            >
              {item.name}
            </Link>
          );
        })}

      </nav>
    </aside>
  );
}