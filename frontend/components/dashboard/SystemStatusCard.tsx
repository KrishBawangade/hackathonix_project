import SectionCard from "./SectionCard";

type SystemStatusItem = {
  name: string;
  status: string;
  color: string;
  dot: string;
};

type SystemStatusCardProps = {
  systemStatus: SystemStatusItem[];
};

export default function SystemStatusCard({
  systemStatus,
}: SystemStatusCardProps) {
  return (
    <SectionCard className="p-6">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-white">System Status</h3>
        <p className="text-sm text-slate-400">
          Current health of critical network components
        </p>
      </div>

      <div className="space-y-4">
        {systemStatus.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#0f172a] px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
              <span className="text-sm text-slate-300">{item.name}</span>
            </div>
            <span className={`text-sm font-medium ${item.color}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}