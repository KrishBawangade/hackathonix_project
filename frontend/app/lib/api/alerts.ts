import { apiFetch } from "./client";
import { Alert } from "@/types/alert";

export async function fetchAlerts(): Promise<Alert[]> {
  const res = await apiFetch<{
    success: boolean;
    count: number;
    data: Alert[];
  }>("/alerts");

  return res.data;
}