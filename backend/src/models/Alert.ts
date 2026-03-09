export type AlertSeverity = "critical" | "warning" | "info";

export type AlertType =
  | "HIGH_CPU"
  | "HIGH_MEMORY"
  | "DEVICE_OFFLINE"
  | "TRAFFIC_SPIKE"
  | "DDOS_ATTACK"
  | "PORT_SCAN"
  | "BRUTE_FORCE";

export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;

  type: AlertType;

  severity: AlertSeverity;

  message: string;

  timestamp: number;

  acknowledged: boolean;
}