import { Request, Response } from "express";
import {
  startAttackSimulation,
  stopSimulation,
  getSimulationStatus
} from "../simulator/attackSimulator";

export const startDdosSimulation = (req: Request, res: Response) => {
  const simulation = startAttackSimulation("DDOS");

  res.json({
    success: true,
    message: "DDoS simulation started",
    data: simulation
  });
};

export const startPortScanSimulation = (req: Request, res: Response) => {
  const simulation = startAttackSimulation("PORT_SCAN");

  res.json({
    success: true,
    message: "Port scan simulation started",
    data: simulation
  });
};

export const startBruteForceSimulation = (req: Request, res: Response) => {
  const simulation = startAttackSimulation("BRUTE_FORCE");

  res.json({
    success: true,
    message: "Brute force simulation started",
    data: simulation
  });
};

export const stopAttackSimulation = (req: Request, res: Response) => {
  const result = stopSimulation();

  res.json({
    success: true,
    message: "Simulation stopped",
    data: result
  });
};

export const getSimulation = (req: Request, res: Response) => {
  const simulation = getSimulationStatus();

  res.json({
    success: true,
    data: simulation
  });
};