import { apiFetch } from "./client";

export function startDdos() {
  return fetch("http://localhost:5000/simulation/start-ddos", {
    method: "POST",
  });
}

export function startPortScan() {
  return fetch("http://localhost:5000/simulation/start-port-scan", {
    method: "POST",
  });
}

export function startBruteForce() {
  return fetch("http://localhost:5000/simulation/start-brute-force", {
    method: "POST",
  });
}

export function stopSimulation() {
  return fetch("http://localhost:5000/simulation/stop", {
    method: "POST",
  });
}

export function getSimulationStatus() {
  return apiFetch("/simulation/status");
}