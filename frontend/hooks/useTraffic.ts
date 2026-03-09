"use client";

import { useEffect, useState } from "react";
import { TrafficMetric } from "@/types/traffic";

export function useTraffic() {
  const [traffic, setTraffic] = useState<TrafficMetric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const now = Date.now();

    const mockTraffic: TrafficMetric[] = Array.from({ length: 20 }, (_, i) => ({
      timestamp: now - (20 - i) * 5000,
      inbound: Math.floor(Math.random() * 500) + 100,
      outbound: Math.floor(Math.random() * 400) + 80,
    }));

    setTraffic(mockTraffic);
    setLoading(false);
  }, []);

  return { traffic, loading };
}