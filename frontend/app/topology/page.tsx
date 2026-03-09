"use client";

import { useMemo, useState } from "react";

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

const topologyNodes: TopologyNode[] = [
  {
    id: "internet",
    name: "Internet",
    subtitle: "External Gateway",
    ip: "203.0.113.10",
    status: "monitoring",
    load: "External",
    connections: "Firewall",
    lastActivity: "Live traffic detected",
    cpu: 15,
    latency: 12,
    traffic: 88,
    type: "internet",
    position: "left-1/2 top-8 -translate-x-1/2",
  },
  {
    id: "firewall",
    name: "Firewall",
    subtitle: "Protected",
    ip: "192.168.1.254",
    status: "healthy",
    load: "34%",
    connections: "Internet, Core Router",
    lastActivity: "Rules updated 5 min ago",
    cpu: 34,
    latency: 9,
    traffic: 62,
    type: "firewall",
    position: "left-1/2 top-40 -translate-x-1/2",
  },
  {
    id: "router",
    name: "Core Router",
    subtitle: "Central Traffic Control",
    ip: "192.168.1.1",
    status: "monitoring",
    load: "72%",
    connections: "Firewall, Switch A, Switch B",
    lastActivity: "Traffic spike routed 2 min ago",
    cpu: 72,
    latency: 14,
    traffic: 81,
    type: "router",
    position: "left-1/2 top-72 -translate-x-1/2",
  },
  {
    id: "switch-a",
    name: "Switch A",
    subtitle: "Healthy",
    ip: "192.168.1.21",
    status: "healthy",
    load: "41%",
    connections: "Core Router, Server Cluster, IoT Hub",
    lastActivity: "Stable traffic",
    cpu: 41,
    latency: 8,
    traffic: 46,
    type: "switch",
    position: "left-[28%] top-[25.5rem] -translate-x-1/2",
  },
  {
    id: "switch-b",
    name: "Switch B",
    subtitle: "Moderate Load",
    ip: "192.168.1.22",
    status: "warning",
    load: "67%",
    connections: "Core Router, Branch Office, IDS Sensor",
    lastActivity: "Packet inspection active",
    cpu: 67,
    latency: 19,
    traffic: 73,
    type: "switch",
    position: "left-[72%] top-[25.5rem] -translate-x-1/2",
  },
  {
    id: "server-cluster",
    name: "Server Cluster",
    subtitle: "Healthy",
    ip: "192.168.1.50",
    status: "healthy",
    load: "58%",
    connections: "Switch A",
    lastActivity: "Services operational",
    cpu: 58,
    latency: 10,
    traffic: 64,
    type: "server",
    position: "left-[14%] top-[34rem] -translate-x-1/2",
  },
  {
    id: "iot-hub",
    name: "IoT Hub",
    subtitle: "Under Watch",
    ip: "192.168.1.80",
    status: "warning",
    load: "63%",
    connections: "Switch A",
    lastActivity: "Irregular packets observed",
    cpu: 63,
    latency: 25,
    traffic: 59,
    type: "iot",
    position: "left-[38%] top-[34rem] -translate-x-1/2",
  },
  {
    id: "branch-office",
    name: "Branch Office",
    subtitle: "Connected",
    ip: "10.1.0.12",
    status: "monitoring",
    load: "49%",
    connections: "Switch B",
    lastActivity: "WAN link stable",
    cpu: 49,
    latency: 21,
    traffic: 52,
    type: "branch",
    position: "left-[62%] top-[34rem] -translate-x-1/2",
  },
  {
    id: "ids-sensor",
    name: "IDS Sensor",
    subtitle: "Suspicious Traffic",
    ip: "192.168.1.91",
    status: "critical",
    load: "84%",
    connections: "Switch B",
    lastActivity: "Threat signature detected 2 min ago",
    cpu: 84,
    latency: 31,
    traffic: 90,
    type: "ids",
    position: "left-[86%] top-[34rem] -translate-x-1/2",
  },
];

const topologyLines: TopologyLine[] = [
  {
    id: "internet-firewall",
    suspicious: true,
    className: "left-1/2 top-[6.1rem] h-16 w-[2px] -translate-x-1/2",
  },
  {
    id: "firewall-router",
    suspicious: true,
    className: "left-1/2 top-[14.2rem] h-16 w-[2px] -translate-x-1/2",
  },
  {
    id: "router-split",
    className: "left-1/2 top-[22.25rem] h-8 w-[2px] -translate-x-1/2",
  },
  {
    id: "router-horizontal",
    className: "left-[28%] top-[24.2rem] h-[2px] w-[44%]",
  },
  {
    id: "switch-a-down",
    className: "left-[28%] top-[24.2rem] h-12 w-[2px] -translate-x-1/2",
  },
  {
    id: "switch-b-down",
    suspicious: true,
    className: "left-[72%] top-[24.2rem] h-12 w-[2px] -translate-x-1/2",
  },
  {
    id: "bottom-horizontal",
    className: "left-[14%] top-[32.9rem] h-[2px] w-[72%]",
  },
  {
    id: "server-up",
    className: "left-[14%] top-[32.9rem] h-10 w-[2px] -translate-x-1/2",
  },
  {
    id: "iot-up",
    className: "left-[38%] top-[32.9rem] h-10 w-[2px] -translate-x-1/2",
  },
  {
    id: "branch-up",
    className: "left-[62%] top-[32.9rem] h-10 w-[2px] -translate-x-1/2",
  },
  {
    id: "ids-up",
    suspicious: true,
    className: "left-[86%] top-[32.9rem] h-10 w-[2px] -translate-x-1/2",
  },
];

function getStatusStyles(status: StatusType) {
  if (status === "healthy") {
    return {
      dot: "bg-emerald-400",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      badge: "Healthy",
    };
  }

  if (status === "warning") {
    return {
      dot: "bg-amber-400",
      border: "border-amber-500/30",
      text: "text-amber-400",
      badge: "Warning",
    };
  }

  if (status === "critical") {
    return {
      dot: "bg-red-400",
      border: "border-red-500/30",
      text: "text-red-400",
      badge: "Critical",
    };
  }

  return {
    dot: "bg-cyan-400",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    badge: "Monitoring",
  };
}

function NodeIcon({ type }: { type: NodeType }) {
  const common = "h-4 w-4";

  if (type === "internet") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  if (type === "firewall") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
        <path d="M9 11h6" />
        <path d="M9 14h6" />
      </svg>
    );
  }

  if (type === "router" || type === "switch") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M7 12h.01" />
        <path d="M11 12h.01" />
        <path d="M15 12h.01" />
      </svg>
    );
  }

  if (type === "server") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="4" y="4" width="16" height="6" rx="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" />
        <path d="M8 7h.01" />
        <path d="M8 17h.01" />
      </svg>
    );
  }

  if (type === "iot") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 6h2" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    );
  }

  if (type === "branch") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M3 21h18" />
        <path d="M5 21V9l7-4 7 4v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function MetricBar({
  label,
  value,
  colorClass,
}: {
  label: string;
  value: number;
  colorClass: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-400">{label}</span>
        <span className="font-medium text-white">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <div
          className={`h-2 rounded-full ${colorClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function TopologyPage() {
  const [selectedNodeId, setSelectedNodeId] = useState("router");

  const selectedNode = useMemo(
    () => topologyNodes.find((node) => node.id === selectedNodeId) ?? topologyNodes[2],
    [selectedNodeId]
  );

  const suspiciousNodeIds = new Set(["internet", "firewall", "router", "switch-b", "ids-sensor"]);

  return (
    <div className="min-h-screen bg-[#0b1220] p-6 text-white">
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">Topology Overview</h1>
        <p className="text-slate-400">
          Visual map of network nodes, connections, health states, and suspicious segments.
        </p>
      </div>

      {/* Topology Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-[#111827] p-4">
          <p className="text-sm text-slate-400">Total Nodes</p>
          <h2 className="text-2xl font-bold text-cyan-300">24</h2>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#111827] p-4">
          <p className="text-sm text-slate-400">Active Connections</p>
          <h2 className="text-2xl font-bold text-blue-300">38</h2>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#111827] p-4">
          <p className="text-sm text-slate-400">Critical Devices</p>
          <h2 className="text-2xl font-bold text-red-400">2</h2>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#111827] p-4">
          <p className="text-sm text-slate-400">Suspicious Segments</p>
          <h2 className="text-2xl font-bold text-amber-400">1</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Main Topology Map */}
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
              {/* Lines */}
              {topologyLines.map((line) => (
                <div
                  key={line.id}
                  className={`absolute ${line.className} ${
                    line.suspicious ? "bg-red-500/60" : "bg-slate-600"
                  }`}
                />
              ))}

              {/* Packet Indicators */}
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

              {/* Nodes */}
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

        {/* Right Panel */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
            <h2 className="mb-2 text-2xl font-semibold">Selected Node</h2>
            <p className="mb-5 text-sm text-slate-400">
              Current details of the focused network device
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-cyan-500/20 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">Device Name</p>
                <h3 className="mt-1 text-xl font-semibold text-cyan-300">
                  {selectedNode.name}
                </h3>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">IP Address</p>
                <h3 className="mt-1 text-base font-medium text-white">
                  {selectedNode.ip}
                </h3>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">Status</p>
                <h3 className={`mt-1 text-base font-medium ${getStatusStyles(selectedNode.status).text}`}>
                  {getStatusStyles(selectedNode.status).badge}
                </h3>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">Traffic Load</p>
                <h3 className="mt-1 text-base font-medium text-blue-300">
                  {selectedNode.load}
                </h3>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">Connected Nodes</p>
                <h3 className="mt-1 text-base font-medium text-white">
                  {selectedNode.connections}
                </h3>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">Last Activity</p>
                <h3 className="mt-1 text-base font-medium text-slate-200">
                  {selectedNode.lastActivity}
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
            <h2 className="mb-2 text-2xl font-semibold">Node Performance</h2>
            <p className="mb-5 text-sm text-slate-400">
              Current performance indicators for the selected node
            </p>

            <div className="space-y-5 rounded-xl border border-slate-800 bg-[#0f172a] p-4">
              <MetricBar label="CPU Usage" value={selectedNode.cpu} colorClass="bg-cyan-400" />
              <MetricBar label="Latency" value={selectedNode.latency} colorClass="bg-amber-400" />
              <MetricBar label="Traffic Volume" value={selectedNode.traffic} colorClass="bg-emerald-400" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
            <h2 className="mb-2 text-2xl font-semibold">Security Insight</h2>
            <p className="mb-5 text-sm text-slate-400">
              Highlighted suspicious path across monitored segments
            </p>

            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <p className="text-sm text-slate-400">Alert Path</p>
              <p className="mt-2 text-sm leading-6 text-red-300">
                External traffic entered through the <span className="font-semibold">Firewall</span>,
                moved into the <span className="font-semibold">Core Router</span>, passed via{" "}
                <span className="font-semibold">Switch B</span>, and triggered detection at the{" "}
                <span className="font-semibold">IDS Sensor</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}