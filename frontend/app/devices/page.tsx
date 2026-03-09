"use client";

import { useState } from "react";
import { useDevices } from "@/hooks/useDevices";
import { Device } from "@/types/device";
import DeviceTable from "@/components/devices/DeviceTable";
import DeviceDetails from "@/components/devices/DeviceDetails";
import { Server, Activity, AlertTriangle } from "lucide-react";

export default function DevicesPage() {
  const { devices, loading } = useDevices();
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  if (loading) {
    return <div className="p-6 text-muted">Loading devices...</div>;
  }

  const online = devices.filter((d) => d.status === "online").length;
  const offline = devices.filter((d) => d.status === "offline").length;

  return (
    <div className="p-6 space-y-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-foreground">
        Devices ({devices.length})
      </h1>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-3 gap-6">

        {/* Total Devices */}
        <div className="relative bg-panel border border-border rounded-xl p-6 overflow-hidden">

          {/* Accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

          <div className="flex items-center justify-between">

            <div>
              <p className="text-muted text-sm">Total Devices</p>
              <p className="text-5xl font-bold text-primary mt-2">
                {devices.length}
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <Server size={26} className="text-primary" />
            </div>

          </div>
        </div>


        {/* Online Devices */}
        <div className="relative bg-panel border border-border rounded-xl p-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-success"></div>

          <div className="flex items-center justify-between">

            <div>
              <p className="text-muted text-sm">Online</p>
              <p className="text-5xl font-bold text-success mt-2">
                {online}
              </p>
            </div>

            <div className="bg-success/10 p-4 rounded-lg">
              <Activity size={26} className="text-success" />
            </div>

          </div>
        </div>


        {/* Offline Devices */}
        <div className="relative bg-panel border border-border rounded-xl p-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-danger"></div>

          <div className="flex items-center justify-between">

            <div>
              <p className="text-muted text-sm">Offline</p>
              <p className="text-5xl font-bold text-danger mt-2">
                {offline}
              </p>
            </div>

            <div className="bg-danger/10 p-4 rounded-lg">
              <AlertTriangle size={26} className="text-danger" />
            </div>

          </div>
        </div>

      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-3 gap-6">

        {/* Device Table */}
        <div className="col-span-2">
          <DeviceTable
            devices={devices}
            onSelect={setSelectedDevice}
            selectedDevice={selectedDevice}
          />
        </div>

        {/* Device Details */}
        <div className="col-span-1">
          <DeviceDetails device={selectedDevice} />
        </div>

      </div>

    </div>
  );
}