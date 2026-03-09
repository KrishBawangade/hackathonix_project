import { Request, Response } from "express";
import { generateAlerts } from "../simulator/alertSimulator";

export const getAlerts = (req: Request, res: Response) => {
  const alerts = generateAlerts();

  res.json({
    success: true,
    count: alerts.length,
    data: alerts
  });
};