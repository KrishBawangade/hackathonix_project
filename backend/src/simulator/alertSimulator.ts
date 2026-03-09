import { Alert } from "../models/Alert";
import { generateDevices } from "./deviceSimulator";

export const generateAlerts = (): Alert[] => {
  const devices = generateDevices();

  const alerts: Alert[] = [];

  devices.forEach((device) => {
    if (device.status === "offline") {
      alerts.push({
        id: `alert-${Date.now()}-${device.id}`,
        deviceId: device.id,
        deviceName: device.name,
        type: "DEVICE_OFFLINE",
        severity: "critical",
        message: `${device.name} is offline`,
        timestamp: Date.now(),
        acknowledged: false
      });
    }

    if (device.cpuUsage > 90) {
      alerts.push({
        id: `alert-${Date.now()}-${device.id}-cpu`,
        deviceId: device.id,
        deviceName: device.name,
        type: "HIGH_CPU",
        severity: "warning",
        message: `${device.name} CPU usage is above 90%`,
        timestamp: Date.now(),
        acknowledged: false
      });
    }

    if (device.memoryUsage > 85) {
      alerts.push({
        id: `alert-${Date.now()}-${device.id}-mem`,
        deviceId: device.id,
        deviceName: device.name,
        type: "HIGH_MEMORY",
        severity: "warning",
        message: `${device.name} memory usage is high`,
        timestamp: Date.now(),
        acknowledged: false
      });
    }
  });

  return alerts;
};