export default function Navbar() {
  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6">

      {/* Title */}
      <div className="text-sm text-muted font-medium">
        Network Monitoring Dashboard
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* System Status */}
        <div className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-medium">
          System Online
        </div>

        {/* User Avatar Placeholder */}
        <div className="w-8 h-8 rounded-full bg-panel border border-border" />

      </div>
    </header>
  );
}