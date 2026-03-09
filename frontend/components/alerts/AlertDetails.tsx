"use client";

import type { Alert } from "@/types/alert";
import {
  AlertTriangle,
  Server,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

interface AlertDetailsProps {
  alert: Alert | null;
}

/* Severity Badge */

function getSeverityStyle(severity: string) {
  const styles: Record<string, string> = {
    critical: "bg-red-500/10 text-red-400 border-red-500/30",
    high: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    low: "bg-gray-500/10 text-gray-400 border-gray-500/30",
  };

  return styles[severity] ?? styles.low;
}

/* Metadata Row */

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-muted-foreground">{icon}</div>

      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </div>
  );
}

export default function AlertDetails({ alert }: AlertDetailsProps) {
  if (!alert) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-full px-6">
        <AlertTriangle size={28} className="mb-3 text-gray-500" />

        <p className="text-sm">
          Select an alert from the table to view investigation details
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertTriangle size={20} className="text-red-400" />

          <h2 className="text-lg font-semibold text-white">
            {alert.title}
          </h2>
        </div>

        <span
          className={`px-2 py-1 text-xs font-medium border rounded-md capitalize ${getSeverityStyle(
            alert.severity
          )}`}
        >
          {alert.severity}
        </span>
      </div>

      <div className="border-t border-border" />

      {/* Metadata */}
      <div className="grid grid-cols-1 gap-4">
        <MetaRow
          icon={<Server size={16} />}
          label="Source"
          value={alert.source}
        />

        <MetaRow
          icon={<Shield size={16} />}
          label="Severity"
          value={alert.severity}
        />

        <MetaRow
          icon={<Clock size={16} />}
          label="Detected"
          value={alert.time}
        />

        <MetaRow
          icon={<CheckCircle size={16} className="text-green-400" />}
          label="Status"
          value={alert.status}
        />
      </div>

      <div className="border-t border-border" />

      {/* Investigation Notes */}
      <div>
        <p className="text-xs text-muted-foreground mb-2">
          Investigation Notes
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          This alert indicates potentially suspicious activity detected by the
          monitoring system. Analysts should review authentication attempts,
          network traffic patterns, and associated system logs to determine
          whether the event represents a legitimate security threat or a false
          positive.
        </p>
      </div>
    </div>
  );
}