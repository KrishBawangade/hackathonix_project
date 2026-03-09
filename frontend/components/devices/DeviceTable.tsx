"use client";

import { Device } from "@/types/device";
import { Router, Shield, Server } from "lucide-react";

interface Props {
  devices: Device[];
  onSelect: (device: Device) => void;
  selectedDevice: Device | null;
}

export default function DeviceTable({
  devices,
  onSelect,
  selectedDevice,
}: Props) {
  return (
    <div className="bg-panel border border-border rounded-lg p-4">
      <table className="w-full text-sm">
        <thead className="border-b border-border text-muted">
          <tr>
            <th className="text-left p-3">Device</th>
            <th className="text-left p-3">IP Address</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">Location</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Last Seen</th>
          </tr>
        </thead>

        <tbody>
          {devices.map((device) => (
            <tr
              key={device.id}
              onClick={() => onSelect(device)}
              className={`border-b border-border cursor-pointer transition
              hover:bg-surface/60
              ${
                selectedDevice?.id === device.id
                  ? "bg-surface border-l-4 border-primary"
                  : ""
              }`}
            >
              <td className="p-3 flex items-center gap-2 font-medium">

                {device.type === "Router" && <Router size={16} />}
                {device.type === "Firewall" && <Shield size={16} />}
                {device.type === "Server" && <Server size={16} />}

                {device.name}
              </td>

              <td className="p-3">{device.ip}</td>

              <td className="p-3">
                <span className="px-2 py-1 border border-border rounded text-xs bg-surface uppercase">
                  {device.type}
                </span>
              </td>

              <td className="p-3">{device.location}</td>

              <td className="p-3">
                {device.status === "online" ? (
                  <span className="px-2 py-1 rounded text-xs bg-success/10 text-success">
                    ● ONLINE
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded text-xs bg-danger/10 text-danger">
                    ● OFFLINE
                  </span>
                )}
              </td>

              <td className="p-3 text-muted">{device.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}