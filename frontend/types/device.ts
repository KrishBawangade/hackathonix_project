export type DeviceStatus = "online" | "offline" | "warning";

export type DeviceType = "router" | "server" | "switch" | "firewall";

export interface Device {
  id: string;
  name: string;
  ip: string;

  type: DeviceType;
  status: DeviceStatus;

  cpuUsage: number;
  memoryUsage: number;

  networkIn: number;
  networkOut: number;

  lastSeen: string;
}