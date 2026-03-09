export type AlertSeverity = "critical" | "warning" | "info";

export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;

  type:
    | "HIGH_CPU"
    | "HIGH_MEMORY"
    | "DEVICE_OFFLINE"
    | "TRAFFIC_SPIKE";

  severity: AlertSeverity;

  message: string;

  timestamp: number;

  acknowledged: boolean;
}