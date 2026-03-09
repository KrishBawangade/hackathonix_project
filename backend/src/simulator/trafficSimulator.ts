import { TrafficMetric } from "../models/TrafficMetric";

export const generateTrafficMetrics = (points: number = 20): TrafficMetric[] => {
  const metrics: TrafficMetric[] = [];

  const now = Date.now();

  for (let i = points - 1; i >= 0; i--) {
    const timestamp = now - i * 60000; // 1 minute intervals

    const inbound = Math.floor(Math.random() * 800 + 200);
    const outbound = Math.floor(Math.random() * 600 + 100);

    metrics.push({
      timestamp,
      inbound,
      outbound,
    });
  }

  return metrics;
};