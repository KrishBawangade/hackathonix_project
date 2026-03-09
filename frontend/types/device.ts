export type DeviceStatus = "online" | "offline";

export interface Device {
  id: string;
  name: string;
  ip: string;
  type: string;
  status: DeviceStatus;
  location: string;
  lastSeen: string;
}