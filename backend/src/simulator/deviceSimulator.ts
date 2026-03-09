import { Device } from "../models/Device";

const deviceTypes = ["router", "server", "switch", "firewall"] as const;

function generateStatus(): Device["status"] {
  const rand = Math.random();

  if (rand < 0.7) return "online";
  return "offline";
}

export function generateDevices(count: number = 12): Device[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: `dev-${i + 1}`,
    name: `Device-${i + 1}`,
    ip: `192.168.1.${i + 10}`,
    type: deviceTypes[Math.floor(Math.random() * deviceTypes.length)],

    status: generateStatus(),

    cpuUsage: Math.floor(Math.random() * 100),
    memoryUsage: Math.floor(Math.random() * 100),

    networkIn: Math.floor(Math.random() * 1000),
    networkOut: Math.floor(Math.random() * 1000),

    lastSeen: new Date().toISOString(),
  }));
}