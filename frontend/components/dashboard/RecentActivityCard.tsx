import SectionCard from "./SectionCard";

type RecentActivityCardProps = {
  activities: string[];
};

export default function RecentActivityCard({
  activities,
}: RecentActivityCardProps) {
  return (
    <SectionCard className="p-6">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-white">Recent Activity</h3>
        <p className="text-sm text-slate-400">
          Timeline of system and administrator events
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-cyan-400" />
              {index !== activities.length - 1 && (
                <div className="mt-1 h-10 w-[2px] bg-slate-700" />
              )}
            </div>
            <div>
              <p className="text-sm text-slate-200">{activity}</p>
              <p className="mt-1 text-xs text-slate-500">
                {index * 3 + 2} min ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}