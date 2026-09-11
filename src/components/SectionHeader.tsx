export function SectionHeader({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wide text-white sm:text-base"
      style={{ background: "#0e5c3f" }}
    >
      <span>{label}</span>
      <span aria-hidden="true">›</span>
    </div>
  );
}
