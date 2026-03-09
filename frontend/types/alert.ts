export type Severity = "low" | "medium" | "high" | "critical"

export type AlertStatus = "Open" | "Resolved"

export interface Alert {
  id: string
  title: string
  source: string
  severity: Severity
  status: AlertStatus
  time: string
}