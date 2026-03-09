"use client";

import { useEffect, useState } from "react";
import { Device } from "@/types/device";

export function useDevices() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockDevices: Device[] = [
      {
        id: "1",
        name: "Core Router",
        ip: "192.168.1.1",
        type: "router",
        status: "online",

        cpuUsage: 42,
        memoryUsage: 68,

        networkIn: 320,
        networkOut: 280,

        lastSeen: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Firewall Gateway",
        ip: "192.168.1.254",
        type: "firewall",
        status: "online",

        cpuUsage: 55,
        memoryUsage: 47,

        networkIn: 410,
        networkOut: 390,

        lastSeen: new Date().toISOString(),
      },
      {
        id: "3",
        name: "Database Server",
        ip: "192.168.1.10",
        type: "server",
        status: "warning",

        cpuUsage: 87,
        memoryUsage: 91,

        networkIn: 210,
        networkOut: 150,

        lastSeen: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      },
      {
        id: "4",
        name: "Access Switch",
        ip: "192.168.1.20",
        type: "switch",
        status: "offline",

        cpuUsage: 0,
        memoryUsage: 0,

        networkIn: 0,
        networkOut: 0,

        lastSeen: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      },
    ];

    setDevices(mockDevices);
    setLoading(false);
  }, []);

  return { devices, loading };
}