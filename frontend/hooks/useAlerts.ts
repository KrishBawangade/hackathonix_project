import { useState } from "react"
import { Alert } from "@/types/alert"

export function useAlerts() {

  const [alerts] = useState<Alert[]>([
    {
      id: "1",
      title: "Suspicious Login Attempt",
      source: "Auth Server",
      severity: "high",
      status: "Open",
      time: "2 min ago"
    },
    {
      id: "2",
      title: "Port Scan Detected",
      source: "Firewall",
      severity: "medium",
      status: "Open",
      time: "10 min ago"
    },
    {
      id: "3",
      title: "Malware Activity",
      source: "Endpoint Security",
      severity: "critical",
      status: "Resolved",
      time: "30 min ago"
    }
  ])

  return {
    alerts
  }
}