import { Request, Response } from "express";
import { generateAlerts } from "../simulator/alertSimulator";

export const getAlerts = (req: Request, res: Response) => {
  const alerts = generateAlerts();

  // Optional query limit (ex: /alerts?limit=20)
  const limit = Number(req.query.limit) || alerts.length;

  const sortedAlerts = alerts
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);

  res.json({
    success: true,
    count: sortedAlerts.length,
    data: sortedAlerts,
  });
};