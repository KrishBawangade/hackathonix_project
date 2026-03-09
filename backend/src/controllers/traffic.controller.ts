import { Request, Response } from "express";
import { generateTrafficMetrics } from "../simulator/trafficSimulator";

export const getTraffic = (req: Request, res: Response) => {
  try {
    const trafficData = generateTrafficMetrics(30);

    res.json({
      success: true,
      count: trafficData.length,
      data: trafficData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch traffic metrics",
    });
  }
};