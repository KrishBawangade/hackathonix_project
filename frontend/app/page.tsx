"use client";

import StatsGrid from "@/components/dashboard/StatsGrid";
import TrafficAnalysis from "@/components/dashboard/TrafficAnalysis";
import SystemStatusCard from "@/components/dashboard/SystemStatusCard";
import RecentAlertsCard from "@/components/dashboard/RecentAlertsCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import WeeklyAlertTrend from "@/components/dashboard/WeeklyAlertTrend";
import NetworkSnapshotCard from "@/components/dashboard/NetworkSnapshotCard";

const trafficData = [
  { time: "00:00", inbound: 40, outbound: 24 },
  { time: "04:00", inbound: 30, outbound: 18 },
  { time: "08:00", inbound: 52, outbound: 30 },
  { time: "12:00", inbound: 78, outbound: 50 },
  { time: "16:00", inbound: 64, outbound: 42 },
  { time: "20:00", inbound: 90, outbound: 60 },
];

const alertTrendData = [
  { day: "Mon", alerts: 2 },
  { day: "Tue", alerts: 4 },
  { day: "Wed", alerts: 3 },
  { day: "Thu", alerts: 6 },
  { day: "Fri", alerts: 5 },
  { day: "Sat", alerts: 7 },
];

const stats = [
  {
    title: "Total Devices",
    value: "128",
    subtext: "+12 added this week",
    valueColor: "text-cyan-300",
    icon: "devices",
  },
  {
    title: "Active Alerts",
    value: "7",
    subtext: "2 critical alerts",
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
    value: "68%",
    subtext: "Moderate load",
    valueColor: "text-blue-400",
    icon: "traffic",
  },
];

const systemStatus = [
  {
    name: "Core Router",
    status: "Online",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  {
    name: "Firewall",
    status: "Protected",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  {
    name: "Load Balancer",
    status: "High Load",
    color: "text-amber-400",
    dot: "bg-amber-400",
  },
  {
    name: "Server Cluster",
    status: "Healthy",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  {
    name: "IDS Sensor",
    status: "Active",
    color: "text-cyan-400",
    dot: "bg-cyan-400",
  },
];

const alerts = [
  {
    title: "DDoS spike detected",
    time: "2 min ago",
    severity: "Critical",
    dot: "bg-red-400",
    badge: "border-red-500/30 bg-red-500/10 text-red-300",
  },
  {
    title: "Suspicious login attempts",
    time: "8 min ago",
    severity: "Medium",
    dot: "bg-amber-400",
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
  {
    title: "Packet drop threshold exceeded",
    time: "14 min ago",
    severity: "Medium",
    dot: "bg-amber-400",
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
  {
    title: "Abnormal traffic on node-7",
    time: "19 min ago",
    severity: "Info",
    dot: "bg-cyan-400",
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  },
];

const activities = [
  "Router-01 connected to network",
  "Firewall rules updated",
  "Simulation attack launched",
  "Alert resolved by admin",
  "Switch-12 latency normalized",
];

const networkSnapshot = [
  { label: "Core Devices", value: "12", valueColor: "text-cyan-300" },
  { label: "Branch Devices", value: "41", valueColor: "text-blue-300" },
  { label: "IoT Devices", value: "36", valueColor: "text-amber-300" },
  { label: "Servers", value: "9", valueColor: "text-emerald-300" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1220] px-6 py-6 text-slate-100">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Network Overview
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Real-time visibility of devices, traffic, system health, alerts, and
            overall network behavior
          </p>
        </div>

        <StatsGrid stats={stats} />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <TrafficAnalysis trafficData={trafficData} />
          <SystemStatusCard systemStatus={systemStatus} />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <RecentAlertsCard alerts={alerts} />
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