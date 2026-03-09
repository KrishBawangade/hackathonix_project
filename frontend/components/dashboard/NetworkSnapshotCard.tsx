import SectionCard from "./SectionCard";

type SnapshotItem = {
  label: string;
  value: string;
  valueColor: string;
};

type NetworkSnapshotCardProps = {
  networkSnapshot: SnapshotItem[];
};

export default function NetworkSnapshotCard({
  networkSnapshot,
}: NetworkSnapshotCardProps) {
  return (
    <SectionCard className="p-6">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-white">
          Network Snapshot
        </h3>
        <p className="text-sm text-slate-400">
          Segment and node distribution overview
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {networkSnapshot.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-800 bg-[#0f172a] p-4 transition hover:border-slate-700"
          >
            <p className="text-xs text-slate-400">{item.label}</p>
            <h4 className={`mt-2 text-2xl font-bold ${item.valueColor}`}>
              {item.value}
            </h4>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}