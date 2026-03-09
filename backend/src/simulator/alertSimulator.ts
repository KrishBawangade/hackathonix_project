import { Alert, AlertType, AlertSeverity } from "../models/Alert";
import { generateDevices } from "./deviceSimulator";

export const generateAlerts = (): Alert[] => {
  const devices = generateDevices();

  const alerts: Alert[] = [];

  devices.forEach((device) => {
    if (device.status === "offline") {
      alerts.push(
        createAlert({
          deviceId: device.id,
          deviceName: device.name,
          type: "DEVICE_OFFLINE",
          severity: "critical",
          message: `${device.name} is offline`,
        })
      );
    }

    if (device.cpuUsage > 90) {
      alerts.push(
        createAlert({
          deviceId: device.id,
          deviceName: device.name,
          type: "HIGH_CPU",
          severity: "warning",
          message: `${device.name} CPU usage is above 90%`,
        })
      );
    }

    if (device.memoryUsage > 85) {
      alerts.push(
        createAlert({
          deviceId: device.id,
          deviceName: device.name,
          type: "HIGH_MEMORY",
          severity: "warning",
          message: `${device.name} memory usage is high`,
        })
      );
    }
  });

  return alerts;
};

interface AlertOptions {
  deviceId: string;
  deviceName: string;
  type: AlertType;
  severity: AlertSeverity;
  message: string;
}

export const createAlert = ({
  deviceId,
  deviceName,
  type,
  severity,
  message,
}: AlertOptions): Alert => {
  return {
    id: `alert-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    deviceId,
    deviceName,
    type,
    severity,
    message,
    timestamp: Date.now(),
    acknowledged: false,
  };
};