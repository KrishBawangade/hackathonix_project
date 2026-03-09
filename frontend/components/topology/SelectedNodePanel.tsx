import MetricBar from "./MetricBar";

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
  type: "internet" | "firewall" | "router" | "switch" | "server" | "iot" | "branch" | "ids";
  position: string;
};

type SelectedNodePanelProps = {
  selectedNode: TopologyNode;
  getStatusStyles: (status: StatusType) => {
    dot: string;
    border: string;
    text: string;
    badge: string;
  };
};

export default function SelectedNodePanel({
  selectedNode,
  getStatusStyles,
}: SelectedNodePanelProps) {
  return (
    <>
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
            <h3
              className={`mt-1 text-base font-medium ${
                getStatusStyles(selectedNode.status).text
              }`}
            >
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
          <MetricBar
            label="CPU Usage"
            value={selectedNode.cpu}
            colorClass="bg-cyan-400"
          />
          <MetricBar
            label="Latency"
            value={selectedNode.latency}
            colorClass="bg-amber-400"
          />
          <MetricBar
            label="Traffic Volume"
            value={selectedNode.traffic}
            colorClass="bg-emerald-400"
          />
        </div>
      </div>
    </>
  );
}