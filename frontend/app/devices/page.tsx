"use client";

import { useState, useEffect } from "react";
import { useDevices } from "@/hooks/useDevices";
import { Device } from "@/types/device";
import DeviceTable from "@/components/devices/DeviceTable";
import DeviceDetails from "@/components/devices/DeviceDetails";
import { Server, Activity, AlertTriangle } from "lucide-react";

export default function DevicesPage() {
  const { devices = [], loading, error } = useDevices();

  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  // Reset selected device if list updates and device disappears
  useEffect(() => {
    if (
      selectedDevice &&
      !devices.find((d) => d.id === selectedDevice.id)
    ) {
      setSelectedDevice(null);
    }
  }, [devices, selectedDevice]);

  if (loading) {
    return (
      <div className="p-6 text-muted">
        Loading devices...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-400">
        Failed to load devices
      </div>
    );
  }

  /*
  -------------------------
  Derived Metrics
  -------------------------
  */

  const totalDevices = devices.length;

  const online = devices.filter((d) => d.status === "online").length;

  const offline = devices.filter((d) => d.status === "offline").length;

  const warning = devices.filter((d) => d.status === "warning").length;

  return (
    <div className="p-6 space-y-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-foreground">
        Devices ({totalDevices})
      </h1>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-3 gap-6">

        {/* Total Devices */}
        <div className="relative bg-panel border border-border rounded-xl p-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

          <div className="flex items-center justify-between">

            <div>
              <p className="text-muted text-sm">Total Devices</p>
              <p className="text-5xl font-bold text-primary mt-2">
                {totalDevices}
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