import { apiFetch } from "./client";
import { Alert } from "@/types/alert";

export async function fetchAlerts(): Promise<Alert[]> {
  return apiFetch<Alert[]>("/alerts");
}