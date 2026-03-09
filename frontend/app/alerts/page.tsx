"use client";

import { useState, useEffect } from "react";

import AlertStats from "@/components/alerts/AlertStats";
import AlertsTable from "@/components/alerts/AlertsTable";
import AlertDetails from "@/components/alerts/AlertDetails";

import { useAlerts } from "@/hooks/useAlerts";
import type { Alert } from "@/types/alert";

export default function AlertsPage() {
  const { alerts = [], loading, error } = useAlerts();

  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  /* Auto-select first alert when data loads */

  useEffect(() => {
    if (alerts.length > 0 && !selectedAlert) {
      setSelectedAlert(alerts[0]);
    }
  }, [alerts, selectedAlert]);

  if (loading) {
    return (
      <div className="p-6 text-muted-foreground">
        Loading alerts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-400">
        Failed to load alerts
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 h-full">

      {/* Page Header */}

      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white tracking-tight">
            Security Alerts
          </h1>

          <p className="text-sm text-muted-foreground">
            Monitor, investigate and respond to detected network threats
          </p>
        </div>
      </header>

      {/* Alert Metrics */}

      <AlertStats alerts={alerts} />

      {/* SOC Workspace */}

      <section className="grid grid-cols-12 gap-6 flex-1 min-h-0">

        {/* Alerts Table */}

        <div className="col-span-12 lg:col-span-7 flex flex-col bg-panel border border-border rounded-lg overflow-hidden">

          <div className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-medium text-white">
              Active Alerts
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            <AlertsTable
              alerts={alerts}
              selectedAlert={selectedAlert}
              onSelectAlert={setSelectedAlert}
            />
          </div>

        </div>

        {/* Alert Investigation Panel */}

        <div className="col-span-12 lg:col-span-5 flex flex-col bg-panel border border-border rounded-lg overflow-hidden">

          <div className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-medium text-white">
              Alert Investigation
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-1">
            <AlertDetails alert={selectedAlert} />
          </div>

        </div>

      </section>

    </div>
  );
}