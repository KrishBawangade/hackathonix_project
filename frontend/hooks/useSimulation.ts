"use client";

import { useEffect, useState } from "react";
import { AttackSimulation } from "@/types/simulation";

export function useSimulation() {
  const [simulation, setSimulation] = useState<AttackSimulation | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchStatus() {
    try {
      const res = await fetch("http://localhost:5000/simulation/status");
      const data = await res.json();

      setSimulation(data);
    } catch (error) {
      console.error("Failed to fetch simulation status", error);
    } finally {
      setLoading(false);
    }
  }

  async function startDdos() {
    await fetch("http://localhost:5000/simulation/start-ddos", {
      method: "POST",
    });

    fetchStatus();
  }

  async function startPortScan() {
    await fetch("http://localhost:5000/simulation/start-port-scan", {
      method: "POST",
    });

    fetchStatus();
  }

  async function startBruteForce() {
    await fetch("http://localhost:5000/simulation/start-brute-force", {
      method: "POST",
    });

    fetchStatus();
  }

  async function stopSimulation() {
    await fetch("http://localhost:5000/simulation/stop", {
      method: "POST",
    });

    fetchStatus();
  }

  useEffect(() => {
    fetchStatus();

    const interval = setInterval(fetchStatus, 2000);

    return () => clearInterval(interval);
  }, []);

  return {
    simulation,
    loading,
    startDdos,
    startPortScan,
    startBruteForce,
    stopSimulation,
  };
}