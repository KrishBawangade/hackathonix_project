export type AttackType =
  | "DDOS"
  | "PORT_SCAN"
  | "BRUTE_FORCE"
  | "TRAFFIC_SPIKE";

export interface AttackSimulation {
  id: string;
  type: AttackType;
  status: "running" | "stopped";
  startedAt: number;
  affectedDevices: string[];
}