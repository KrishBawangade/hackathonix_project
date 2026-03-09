"use client";

import { useDevices } from "@/hooks/useDevices";
import { useAlerts } from "@/hooks/useAlerts";
import { useTraffic } from "@/hooks/useTraffic";

import StatsGrid from "@/components/dashboard/StatsGrid";
import TrafficAnalysis from "@/components/dashboard/TrafficAnalysis";
import SystemStatusCard from "@/components/dashboard/SystemStatusCard";
import RecentAlertsCard from "@/components/dashboard/RecentAlertsCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import WeeklyAlertTrend from "@/components/dashboard/WeeklyAlertTrend";
import NetworkSnapshotCard from "@/components/dashboard/NetworkSnapshotCard";

export default function Home() {
  const { devices = [] } = useDevices();
  const { alerts = [] } = useAlerts();
  const { traffic = [] } = useTraffic();

  /*
  -----------------------------
  Derived Stats
  -----------------------------
  */

  const totalDevices = devices?.length || 0;

  const activeAlerts = alerts?.filter((a) => !a.acknowledged) || [];
  const criticalAlerts = alerts?.filter(
    (a) => a.severity === "critical" && !a.acknowledged
  );

  const trafficLoad =
    traffic && traffic.length > 0
      ? Math.round(
          (traffic[traffic.length - 1].inbound +
            traffic[traffic.length - 1].outbound) /
            2
        )
      : 0;

  const stats = [
    {
      title: "Total Devices",
      value: totalDevices.toString(),
      subtext: `${devices.filter((d) => d.status === "online").length} online`,
      valueColor: "text-cyan-300",
      icon: "devices",
    },
    {
      title: "Active Alerts",
      value: activeAlerts.length.toString(),
      subtext: `${criticalAlerts?.length || 0} critical alerts`,
      valueColor: "text-red-400",
      icon: "alerts",
    },
    {
      title: "Network Uptime",
      value: "99.92%",
      subtext: "Stable performance",
      valueColor: "text-emerald-400",
      icon: "uptime",
    },
    {
      title: "Traffic Load",
      value: `${trafficLoad}%`,
      subtext: "Current traffic utilization",
      valueColor: "text-blue-400",
      icon: "traffic",
    },
  ];

  /*
  -----------------------------
  Traffic Chart Data
  -----------------------------
  */

  const trafficData =
    traffic?.map((t) => ({
      time: new Date(t.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      inbound: t.inbound,
      outbound: t.outbound,
    })) || [];

  /*
  -----------------------------
  System Status (derived from devices)
  -----------------------------
  */

  const systemStatus =
    devices?.slice(0, 5).map((device) => ({
      name: device.name,
      status:
        device.status === "online"
          ? "Online"
          : device.status === "warning"
          ? "Warning"
          : "Offline",
      color:
        device.status === "online"
          ? "text-emerald-400"
          : device.status === "warning"
          ? "text-amber-400"
          : "text-red-400",
      dot:
        device.status === "online"
          ? "bg-emerald-400"
          : device.status === "warning"
          ? "bg-amber-400"
          : "bg-red-400",
    })) || [];

  /*
  -----------------------------
  Recent Alerts
  -----------------------------
  */

  const recentAlerts =
    alerts?.slice(0, 4).map((alert) => ({
      title: alert.message,
      time: new Date(alert.timestamp).toLocaleTimeString(),
      severity: alert.severity,
      dot:
        alert.severity === "critical"
          ? "bg-red-400"
          : alert.severity === "warning"
          ? "bg-amber-400"
          : "bg-cyan-400",
      badge:
        alert.severity === "critical"
          ? "border-red-500/30 bg-red-500/10 text-red-300"
          : alert.severity === "warning"
          ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
          : "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    })) || [];

  /*
  -----------------------------
  Activity (Simulated)
  -----------------------------
  */

  const activities = [
    "Router-01 connected to network",
    "Firewall rules updated",
    "Simulation attack launched",
    "Alert resolved by admin",
    "Switch latency normalized",
  ];

  /*
  -----------------------------
  Weekly Alert Trend
  -----------------------------
  */

  const alertTrendData = [
    { day: "Mon", alerts: 2 },
    { day: "Tue", alerts: 4 },
    { day: "Wed", alerts: 3 },
    { day: "Thu", alerts: 6 },
    { day: "Fri", alerts: 5 },
    { day: "Sat", alerts: 7 },
  ];

  /*
  -----------------------------
  Network Snapshot
  -----------------------------
  */

  const networkSnapshot = [
    {
      label: "Core Devices",
      value: devices.filter((d) => d.type === "router").length.toString(),
      valueColor: "text-cyan-300",
    },
    {
      label: "Servers",
      value: devices.filter((d) => d.type === "server").length.toString(),
      valueColor: "text-emerald-300",
    },
    {
      label: "Switches",
      value: devices.filter((d) => d.type === "switch").length.toString(),
      valueColor: "text-blue-300",
    },
    {
      label: "Firewalls",
      value: devices.filter((d) => d.type === "firewall").length.toString(),
      valueColor: "text-amber-300",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] px-6 py-6 text-slate-100">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Network Overview
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Real-time visibility of devices, traffic, system health, alerts,
            and overall network behavior
          </p>
        </div>

        <StatsGrid stats={stats} />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <TrafficAnalysis trafficData={trafficData} />
          <SystemStatusCard systemStatus={systemStatus} />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <RecentAlertsCard alerts={recentAlerts} />
          <RecentActivityCard activities={activities} />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <WeeklyAlertTrend alertTrendData={alertTrendData} />
          <NetworkSnapshotCard networkSnapshot={networkSnapshot} />
        </div>
      </div>
    </div>
  );
}