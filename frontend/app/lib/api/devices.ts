import { apiFetch } from "./client";
import { Device } from "@/types/device";

export async function fetchDevices(): Promise<Device[]> {
  return apiFetch<Device[]>("/devices");
}