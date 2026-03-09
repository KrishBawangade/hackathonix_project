import { TrafficMetric } from "@/types/traffic";
import { apiFetch } from "./client";

export async function fetchTraffic(): Promise<TrafficMetric[]> {
  return apiFetch<TrafficMetric[]>("/traffic");
}