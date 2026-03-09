"use client";

import { useEffect, useState } from "react";
import { Device } from "@/types/device";
import { fetchDevices } from "@/app/lib/api/devices";

export function useDevices() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDevices() {
      try {
        setLoading(true);

        const data = await fetchDevices();

        console.log(data)

        setDevices(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch devices:", err);
        setError("Failed to fetch devices");
      } finally {
        setLoading(false);
      }
    }

    loadDevices();
  }, []);

  return {
    devices,
    loading,
    error,
  };
}