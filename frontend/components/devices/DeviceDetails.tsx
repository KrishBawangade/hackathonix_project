"use client";

import { Device } from "@/types/device";
import { Server, Network, MapPin, Activity } from "lucide-react";

interface Props {
  device: Device | null;
}

export default function DeviceDetails({ device }: Props) {
  if (!device) {
    return (
      <div className="bg-panel border border-border rounded-lg p-6">
        <p className="text-muted">Select a device to view details</p>
      </div>
    );
  }

  return (
    <div className="bg-panel border border-border rounded-lg p-6">

      <h2 className="text-lg font-semibold text-primary mb-6 border-b border-border pb-2">
        Device Details
      </h2>

      <div className="space-y-5 text-sm">

        <div className="flex items-center gap-3">
          <Server size={16} />
          <div>
            <p className="text-muted">Name</p>
            <p>{device.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Network size={16} />
          <div>
            <p className="text-muted">IP Address</p>
            <p>{device.ip}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Activity size={16} />
          <div>
            <p className="text-muted">Type</p>
            <p>{device.type}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={16} />
          <div>
            <p className="text-muted">Location</p>
            <p>{device.location}</p>
          </div>
        </div>

        <div>
          <p className="text-muted">Status</p>

          {device.status === "online" ? (
            <span className="px-2 py-1 rounded text-xs bg-success/10 text-success">
              ● ONLINE
            </span>
          ) : (
            <span className="px-2 py-1 rounded text-xs bg-danger/10 text-danger">
              ● OFFLINE
            </span>
          )}
        </div>

        <div>
          <p className="text-muted">Last Seen</p>
          <p>{device.lastSeen}</p>
        </div>

      </div>
    </div>
  );
}