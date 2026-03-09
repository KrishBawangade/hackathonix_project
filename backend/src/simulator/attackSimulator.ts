import { AttackSimulation, AttackType } from "../models/AttackSimulation";
import { generateTrafficMetrics } from "./trafficSimulator";
import { createAlert } from "./alertSimulator";
import { generateDevices } from "./deviceSimulator";

let currentSimulation: AttackSimulation | null = null;

export function startAttackSimulation(type: AttackType) {
  const simulation: AttackSimulation = {
    id: Date.now().toString(),
    type,
    status: "running",
    startedAt: Date.now(),
    affectedDevices: [],
  };

  currentSimulation = simulation;

  return simulation;
}

export function stopSimulation() {
  if (currentSimulation) {
    currentSimulation.status = "stopped";
  }

  const stopped = currentSimulation;
  currentSimulation = null;

  return stopped;
}

export function getSimulationStatus() {
  return currentSimulation;
}

export function simulateAttackEffects() {
  if (!currentSimulation) return;

  const devices = generateDevices();

  const randomDevice = devices[Math.floor(Math.random() * devices.length)];

  switch (currentSimulation.type) {
    case "DDOS":
      generateTrafficMetrics({
        inboundMultiplier: 5,
        outboundMultiplier: 3,
      });

      createAlert({
        deviceId: randomDevice.id,
        deviceName: randomDevice.name,
        type: "DDOS_ATTACK",
        severity: "critical",
        message: `Possible DDoS attack detected on ${randomDevice.name}`,
      });

      break;

    case "PORT_SCAN":
      createAlert({
        deviceId: randomDevice.id,
        deviceName: randomDevice.name,
        type: "PORT_SCAN",
        severity: "warning",
        message: `Multiple ports being scanned on ${randomDevice.name}`,
      });

      break;

    case "BRUTE_FORCE":
      createAlert({
        deviceId: randomDevice.id,
        deviceName: randomDevice.name,
        type: "BRUTE_FORCE",
        severity: "warning",
        message: `Multiple failed login attempts detected on ${randomDevice.name}`,
      });

      break;

    case "TRAFFIC_SPIKE":
      generateTrafficMetrics({
        inboundMultiplier: 3,
        outboundMultiplier: 2,
      });

      createAlert({
        deviceId: randomDevice.id,
        deviceName: randomDevice.name,
        type: "TRAFFIC_SPIKE",
        severity: "warning",
        message: `Suspicious traffic spike detected on ${randomDevice.name}`,
      });

      break;
  }
}