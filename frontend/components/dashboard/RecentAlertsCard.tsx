import SectionCard from "./SectionCard";

type AlertItem = {
  title: string;
  time: string;
  severity: string;
  dot: string;
  badge: string;
};

type RecentAlertsCardProps = {
  alerts: AlertItem[];
};

export default function RecentAlertsCard({
  alerts,
}: RecentAlertsCardProps) {
  return (
    <SectionCard className="p-6">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-white">Recent Alerts</h3>
        <p className="text-sm text-slate-400">
          Latest suspicious or abnormal network events
        </p>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#0f172a] px-4 py-3 transition hover:border-slate-700"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${alert.dot}`} />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-100">
                  {alert.title}
                </p>
              </div>
            </div>

            <div className="ml-4 flex items-center gap-3">
              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${alert.badge}`}
              >
                {alert.severity}
              </span>
              <span className="text-sm text-slate-500">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}