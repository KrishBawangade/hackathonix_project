import { apiFetch } from "./client";
import { Device } from "@/types/device";

export async function fetchDevices(): Promise<Device[]> {
  const res = await apiFetch<{
    success: boolean;
    count: number;
    data: Device[];
  }>("/devices");

  return res.data;
}