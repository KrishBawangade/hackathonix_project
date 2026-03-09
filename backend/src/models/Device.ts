export type DeviceStatus = "online" | "offline" | "warning";

export interface Device {
  id: string;
  name: string;
  ip: string;
  type: "router" | "server" | "switch" | "firewall";
  status: DeviceStatus;

  cpuUsage: number;
  memoryUsage: number;

  networkIn: number;
  networkOut: number;

  lastSeen: string;
}