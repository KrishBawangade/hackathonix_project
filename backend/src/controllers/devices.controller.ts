import { Request, Response } from "express";
import { generateDevices } from "../simulator/deviceSimulator";

export const getDevices = (req: Request, res: Response) => {
  const devices = generateDevices(15);

  res.json({
    success: true,
    count: devices.length,
    data: devices,
  });
};