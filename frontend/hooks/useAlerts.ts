"use client";

import { useEffect, useState } from "react";
import { Alert } from "@/types/alert";
import { fetchAlerts } from "@/app/lib/api/alerts";

export function useAlerts(refreshInterval = 5000) {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAlerts() {
      try {
        if (isMounted) setLoading(true);

        const data = await fetchAlerts();

        console.log(data)

        if (!isMounted) return;

        setAlerts(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch alerts:", err);

        if (isMounted) {
          setError("Failed to fetch alerts");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    // Initial load
    loadAlerts();

    // Auto refresh (SOC-style live alerts)
    const interval = setInterval(loadAlerts, refreshInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [refreshInterval]);

  return {
    alerts,
    loading,
    error,
  };
}