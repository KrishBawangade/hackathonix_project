"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import SectionCard from "./SectionCard";

type TrafficItem = {
  time: string;
  inbound: number;
  outbound: number;
};

type TrafficAnalysisProps = {
  trafficData: TrafficItem[];
};

export default function TrafficAnalysis({
  trafficData,
}: TrafficAnalysisProps) {
  return (
    <SectionCard className="p-6 xl:col-span-2">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-white">
          Network Traffic Analysis
        </h3>
        <p className="text-sm text-slate-400">
          Tracks inbound and outbound traffic volume during different time
          periods
        </p>
      </div>

      <div className="h-80 rounded-xl border border-slate-800 bg-[#0f172a] p-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
            <Bar dataKey="inbound" fill="#22d3ee" radius={[6, 6, 0, 0]} />
            <Bar dataKey="outbound" fill="#60a5fa" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-5 text-sm">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="h-3 w-3 rounded-full bg-cyan-400" />
          Inbound Traffic
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className="h-3 w-3 rounded-full bg-blue-400" />
          Outbound Traffic
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-800 bg-[#0f172a] p-4">
        <p className="text-sm leading-6 text-slate-300">
          <span className="font-semibold text-cyan-300">
            What this graph means:
          </span>{" "}
          inbound traffic represents data entering the network from users,
          connected devices, or external systems. Outbound traffic represents
          data leaving the network as responses, transfers, or service output. A
          sudden increase in inbound traffic may indicate peak usage, unusual
          access patterns, or suspicious activity.
        </p>
      </div>
    </SectionCard>
  );
}