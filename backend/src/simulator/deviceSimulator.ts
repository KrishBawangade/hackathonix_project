import { Device } from "../models/Device";

const deviceTypes = ["router", "server", "switch", "firewall"] as const;

export function generateDevices(count: number = 12): Device[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: `dev-${i + 1}`,
    name: `Device-${i + 1}`,
    ip: `192.168.1.${i + 10}`,
    type: deviceTypes[Math.floor(Math.random() * deviceTypes.length)],

    status: Math.random() > 0.1 ? "online" : "warning",

    cpuUsage: Math.floor(Math.random() * 100),
    memoryUsage: Math.floor(Math.random() * 100),

    networkIn: Math.floor(Math.random() * 1000),
    networkOut: Math.floor(Math.random() * 1000),

    lastSeen: new Date().toISOString(),
  }));
}