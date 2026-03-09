export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 overflow-y-auto p-6 bg-[#0f172a]">
      {children}
    </main>
  );
}