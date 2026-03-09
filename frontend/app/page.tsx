export default function Home() {
  return (
    <div className="space-y-8">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Security Dashboard
        </h1>
        <p className="text-sm text-muted mt-1">
          Real-time network monitoring overview
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-6">

        <div className="bg-panel border border-border rounded-xl p-5">
          <p className="text-sm text-muted">Active Devices</p>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>

        <div className="bg-panel border border-border rounded-xl p-5">
          <p className="text-sm text-muted">Alerts Today</p>
          <p className="text-3xl font-bold text-warning mt-2">18</p>
        </div>

        <div className="bg-panel border border-border rounded-xl p-5">
          <p className="text-sm text-muted">Critical Threats</p>
          <p className="text-3xl font-bold text-danger mt-2">3</p>
        </div>

        <div className="bg-panel border border-border rounded-xl p-5">
          <p className="text-sm text-muted">Network Traffic</p>
          <p className="text-3xl font-bold text-primary mt-2">1.8 GB/s</p>
        </div>

      </div>

      {/* Large Panels */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-panel border border-border rounded-xl p-6 h-[350px]">
          <h2 className="text-sm text-muted mb-4">Network Traffic Graph</h2>

          <div className="flex items-center justify-center h-full text-muted">
            Traffic visualization coming soon
          </div>
        </div>

        <div className="bg-panel border border-border rounded-xl p-6 h-[350px]">
          <h2 className="text-sm text-muted mb-4">Recent Alerts</h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-danger">Port Scan Detected</span>
              <span className="text-muted font-mono">192.168.1.22</span>
            </div>

            <div className="flex justify-between">
              <span className="text-warning">Suspicious Login</span>
              <span className="text-muted font-mono">10.0.0.14</span>
            </div>

            <div className="flex justify-between">
              <span className="text-success">Device Connected</span>
              <span className="text-muted font-mono">172.16.2.8</span>
            </div>

          </div>
        </div>

      </div>

      {/* Large Scroll Area (for blur testing) */}
      <div className="bg-panel border border-border rounded-xl p-6 h-[800px]">
        <h2 className="text-sm text-muted mb-4">Network Activity Log</h2>

        <div className="space-y-2 text-sm font-mono text-muted">
          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i}>
              [{new Date().toLocaleTimeString()}] Packet received from
              192.168.0.{i}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}