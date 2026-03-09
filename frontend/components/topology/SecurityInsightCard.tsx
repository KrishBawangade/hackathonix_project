export default function SecurityInsightCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
      <h2 className="mb-2 text-2xl font-semibold">Security Insight</h2>
      <p className="mb-5 text-sm text-slate-400">
        Highlighted suspicious path across monitored segments
      </p>

      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
        <p className="text-sm text-slate-400">Alert Path</p>
        <p className="mt-2 text-sm leading-6 text-red-300">
          External traffic entered through the{" "}
          <span className="font-semibold">Firewall</span>, moved into the{" "}
          <span className="font-semibold">Core Router</span>, passed via{" "}
          <span className="font-semibold">Switch B</span>, and triggered detection
          at the <span className="font-semibold">IDS Sensor</span>.
        </p>
      </div>
    </div>
  );
}