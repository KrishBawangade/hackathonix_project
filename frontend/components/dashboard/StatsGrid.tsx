import SectionCard from "./SectionCard";
import StatIcon from "./StatIcon";

type StatItem = {
  title: string;
  value: string;
  subtext: string;
  valueColor: string;
  icon: string;
};

type StatsGridProps = {
  stats: StatItem[];
};

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <SectionCard
          key={item.title}
          className="p-5 transition duration-300 hover:border-slate-700 hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">{item.title}</p>
              <h2 className={`mt-3 text-4xl font-bold ${item.valueColor}`}>
                {item.value}
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-[#0f172a] text-cyan-300">
              <StatIcon type={item.icon} />
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">{item.subtext}</p>
        </SectionCard>
      ))}
    </div>
  );
}