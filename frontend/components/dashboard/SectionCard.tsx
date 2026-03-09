import type { ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionCard({
  children,
  className = "",
}: SectionCardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-[#111827] shadow-[0_8px_24px_rgba(0,0,0,0.22)] ${className}`}
    >
      {children}
    </div>
  );
}