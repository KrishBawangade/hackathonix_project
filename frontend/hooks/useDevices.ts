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
        type: "Router",
        status: "online",
        location: "Data Center",
        lastSeen: "2 sec ago",
      },
      {
        id: "2",
        name: "Firewall",
        ip: "192.168.1.254",
        type: "Firewall",
        status: "online",
        location: "Gateway",
        lastSeen: "5 sec ago",
      },
      {
        id: "3",
        name: "Database Server",
        ip: "192.168.1.10",
        type: "Server",
        status: "offline",
        location: "Data Center",
        lastSeen: "10 min ago",
      },
    ];

    setDevices(mockDevices);
    setLoading(false);
  }, []);

  return { devices, loading };
}