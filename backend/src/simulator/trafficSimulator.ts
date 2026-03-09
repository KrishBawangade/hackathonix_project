import { TrafficMetric } from "../models/TrafficMetric";

interface TrafficOptions {
  points?: number;
  inboundMultiplier?: number;
  outboundMultiplier?: number;
}

export const generateTrafficMetrics = (
  options: TrafficOptions = {}
): TrafficMetric[] => {
  const {
    points = 20,
    inboundMultiplier = 1,
    outboundMultiplier = 1,
  } = options;

  const metrics: TrafficMetric[] = [];
  const now = Date.now();

  for (let i = points - 1; i >= 0; i--) {
    const timestamp = now - i * 60000; // 1 minute intervals

    const inbound = Math.floor((Math.random() * 800 + 200) * inboundMultiplier);
    const outbound = Math.floor((Math.random() * 600 + 100) * outboundMultiplier);

    metrics.push({
      timestamp,
      inbound,
      outbound,
    });
  }

  return metrics;
};