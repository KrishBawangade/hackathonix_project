"use client";

import type { ReactNode } from "react";
import type { Alert } from "@/types/alert";

import {
  ShieldAlert,
  AlertTriangle,
  Activity,
  CheckCircle2,
} from "lucide-react";

interface Props {
  alerts: Alert[];
}

interface CardProps {
  title: string;
  value: number;
  icon: ReactNode;
  accent: string;
}

function StatCard({ title, value, icon, accent }: CardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-panel p-5 transition-all hover:border-zinc-600 hover:shadow-lg">

      {/* Accent bar */}
      <div className={`absolute left-0 top-0 h-full w-1 ${accent}`} />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">

          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            {title}
          </span>

          <span className="text-3xl font-bold text-white">
            {value}
          </span>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-muted-foreground">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function AlertStats({ alerts }: Props) {

  let critical = 0;
  let high = 0;
  let open = 0;
  let resolved = 0;

  alerts.forEach((a) => {
    if (a.severity === "critical") critical++;
    if (a.severity === "high") high++;
    if (a.status === "open") open++;
    if (a.status === "resolved") resolved++;
  });

  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

      <StatCard
        title="Critical"
        value={critical}
        icon={<ShieldAlert size={18} className="text-red-400" />}
        accent="bg-red-500"
      />

      <StatCard
        title="High"
        value={high}
        icon={<AlertTriangle size={18} className="text-orange-400" />}
        accent="bg-orange-500"
      />

      <StatCard
        title="Open Alerts"
        value={open}
        icon={<Activity size={18} className="text-yellow-400" />}
        accent="bg-yellow-500"
      />

      <StatCard
        title="Resolved"
        value={resolved}
        icon={<CheckCircle2 size={18} className="text-green-400" />}
        accent="bg-green-500"
      />

    </div>
  );
}