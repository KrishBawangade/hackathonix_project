export default function TopologyStats() {
  return (
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
  );
}