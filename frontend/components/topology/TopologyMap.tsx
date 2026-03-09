"use client";

import NodeIcon from "./NodeIcon";

type NodeType =
  | "internet"
  | "firewall"
  | "router"
  | "switch"
  | "server"
  | "iot"
  | "branch"
  | "ids";

type StatusType = "healthy" | "warning" | "critical" | "monitoring";

type TopologyNode = {
  id: string;
  name: string;
  subtitle: string;
  ip: string;
  status: StatusType;
  load: string;
  connections: string;
  lastActivity: string;
  cpu: number;
  latency: number;
  traffic: number;
  type: NodeType;
  position: string;
};

type TopologyLine = {
  id: string;
  className: string;
  suspicious?: boolean;
};

type TopologyMapProps = {
  topologyNodes: TopologyNode[];
  topologyLines: TopologyLine[];
  selectedNodeId: string;
  setSelectedNodeId: (id: string) => void;
  suspiciousNodeIds: Set<string>;
  getStatusStyles: (status: StatusType) => {
    dot: string;
    border: string;
    text: string;
    badge: string;
  };
};

export default function TopologyMap({
  topologyNodes,
  topologyLines,
  selectedNodeId,
  setSelectedNodeId,
  suspiciousNodeIds,
  getStatusStyles,
}: TopologyMapProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 xl:col-span-2">
      <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Network Map</h2>
          <p className="text-sm text-slate-400">
            Click a node to inspect device status, load, and linked segments
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            Healthy
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            Warning
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            Critical
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-cyan-400" />
            Monitoring
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6">
        <div className="relative h-[42rem] overflow-x-auto rounded-xl">
          {topologyLines.map((line) => (
            <div
              key={line.id}
              className={`absolute ${line.className} ${
                line.suspicious ? "bg-red-500/60" : "bg-slate-600"
              }`}
            />
          ))}

          <div className="absolute left-1/2 top-[7.5rem] -translate-x-1/2">
            <span className="block h-2.5 w-2.5 rounded-full bg-red-400 animate-ping" />
          </div>
          <div className="absolute left-1/2 top-[16rem] -translate-x-1/2">
            <span className="block h-2.5 w-2.5 rounded-full bg-red-400 animate-ping" />
          </div>
          <div className="absolute left-[72%] top-[26.6rem] -translate-x-1/2">
            <span className="block h-2.5 w-2.5 rounded-full bg-red-400 animate-ping" />
          </div>
          <div className="absolute left-[86%] top-[34.6rem] -translate-x-1/2">
            <span className="block h-2.5 w-2.5 rounded-full bg-red-400 animate-pulse" />
          </div>
          <div className="absolute left-[28%] top-[26.2rem] -translate-x-1/2">
            <span className="block h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          {topologyNodes.map((node) => {
            const styles = getStatusStyles(node.status);
            const isSelected = selectedNodeId === node.id;
            const isSuspiciousPath = suspiciousNodeIds.has(node.id);

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedNodeId(node.id)}
                className={`absolute ${node.position} w-40 rounded-xl border bg-[#08111f] p-4 text-left transition hover:-translate-y-1 hover:border-slate-600 ${
                  isSelected
                    ? "border-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.35)]"
                    : `${styles.border}`
                } ${isSuspiciousPath ? "shadow-[0_0_18px_rgba(239,68,68,0.08)]" : ""}`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${styles.dot}`} />
                  <span className={`${styles.text}`}>
                    <NodeIcon type={node.type} />
                  </span>
                  <p className="text-sm font-semibold text-white">{node.name}</p>
                </div>
                <p className="text-xs text-slate-400">{node.subtitle}</p>
                {isSuspiciousPath && (
                  <div className="mt-3 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-2 py-1 text-[10px] font-medium text-red-300">
                    Suspicious Path
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}