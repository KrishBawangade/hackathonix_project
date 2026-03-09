"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import SectionCard from "./SectionCard";

type AlertTrendItem = {
  day: string;
  alerts: number;
};

type WeeklyAlertTrendProps = {
  alertTrendData: AlertTrendItem[];
};

export default function WeeklyAlertTrend({
  alertTrendData,
}: WeeklyAlertTrendProps) {
  return (
    <SectionCard className="p-6 xl:col-span-2">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-white">
          Weekly Alert Trend
        </h3>
        <p className="text-sm text-slate-400">
          Shows how alert frequency changed during the week
        </p>
      </div>

      <div className="h-72 rounded-xl border border-slate-800 bg-[#0f172a] p-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={alertTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="alerts"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4, fill: "#22c55e" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 rounded-xl border border-slate-800 bg-[#0f172a] p-4">
        <p className="text-sm leading-6 text-slate-300">
          <span className="font-semibold text-emerald-400">
            What this graph means:
          </span>{" "}
          this line chart shows how many alerts were generated each day. Rising
          values may indicate unstable traffic behavior, repeated attack
          attempts, or increasing suspicious activity across the network.
        </p>
      </div>
    </SectionCard>
  );
}