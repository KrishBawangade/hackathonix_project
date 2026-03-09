export type NodeType =
  | "internet"
  | "firewall"
  | "router"
  | "switch"
  | "server"
  | "iot"
  | "branch"
  | "ids";

type NodeIconProps = {
  type: NodeType;
};

export default function NodeIcon({ type }: NodeIconProps) {
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