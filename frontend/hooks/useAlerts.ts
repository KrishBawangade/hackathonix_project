import { useState } from "react";
import { Alert } from "@/types/alert";

export function useAlerts() {
  const [alerts] = useState<Alert[]>([
    {
      id: "1",
      deviceId: "device-1",
      deviceName: "Auth Server",
      type: "BRUTE_FORCE",
      severity: "critical",
      message: "Multiple failed login attempts detected",
      timestamp: Date.now() - 2 * 60 * 1000,
      acknowledged: false,
    },
    {
      id: "2",
      deviceId: "device-2",
      deviceName: "Firewall",
      type: "PORT_SCAN",
      severity: "warning",
      message: "Port scanning activity detected",
      timestamp: Date.now() - 10 * 60 * 1000,
      acknowledged: false,
    },
    {
      id: "3",
      deviceId: "device-3",
      deviceName: "Endpoint Security",
      type: "DDOS_ATTACK",
      severity: "critical",
      message: "Abnormal traffic spike detected",
      timestamp: Date.now() - 30 * 60 * 1000,
      acknowledged: true,
    },
  ]);

  return {
    alerts,
  };
}