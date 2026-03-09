"use client";

import type { Alert } from "@/types/alert";
import {
  AlertTriangle,
  Server,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

interface AlertsTableProps {
  alerts: Alert[];
  selectedAlert: Alert | null;
  onSelectAlert: (alert: Alert) => void;
}

/* Severity Badge Styling */

function getSeverityBadge(severity: string) {
  const styles: Record<string, string> = {
    critical: "bg-red-500/10 text-red-400 border-red-500/30",
    high: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    low: "bg-gray-500/10 text-gray-400 border-gray-500/30",
  };

  return styles[severity] ?? styles.low;
}

/* Status Icon */

function getStatusIcon(status: string) {
  if (status.toLowerCase() === "resolved") {
    return <CheckCircle size={16} className="text-green-400" />;
  }

  return <Clock size={16} className="text-blue-400" />;
}

export default function AlertsTable({
  alerts,
  selectedAlert,
  onSelectAlert,
}: AlertsTableProps) {
  return (
    <div className="h-full overflow-hidden rounded-lg border border-border bg-panel">
      <table className="w-full text-sm">
        {/* Table Header */}
        <thead className="bg-surface border-b border-border text-muted-foreground">
          <tr>
            <th className="px-4 py-3 text-left font-medium">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} />
                Alert
              </div>
            </th>

            <th className="px-4 py-3 text-left font-medium">
              <div className="flex items-center gap-2">
                <Server size={16} />
                Source
              </div>
            </th>

            <th className="px-4 py-3 text-left font-medium">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                Severity
              </div>
            </th>

            <th className="px-4 py-3 text-left font-medium">Status</th>

            <th className="px-4 py-3 text-left font-medium">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                Time
              </div>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {alerts.map((alert) => {
            const isSelected = selectedAlert?.id === alert.id;

            return (
              <tr
                key={alert.id}
                onClick={() => onSelectAlert(alert)}
                className={`border-b border-border cursor-pointer transition-colors
                hover:bg-surface/70
                ${isSelected ? "bg-surface border-l-4 border-red-500" : ""}`}
              >
                {/* Alert Title */}
                <td className="px-4 py-3 font-medium text-white">
                  {alert.title}
                </td>

                {/* Source */}
                <td className="px-4 py-3 text-muted-foreground">
                  {alert.source}
                </td>

                {/* Severity */}
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium border rounded-md capitalize ${getSeverityBadge(
                      alert.severity
                    )}`}
                  >
                    {alert.severity}
                  </span>
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {getStatusIcon(alert.status)}
                    {alert.status}
                  </div>
                </td>

                {/* Time */}
                <td className="px-4 py-3 text-xs font-mono text-muted-foreground">
                  {alert.time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Empty State */}
      {alerts.length === 0 && (
        <div className="flex items-center justify-center p-6 text-sm text-muted-foreground">
          No alerts available
        </div>
      )}
    </div>
  );
}