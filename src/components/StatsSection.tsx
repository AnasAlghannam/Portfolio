"use client";
export default function StatsSection() {
  const stats = [
    { label: "Workflows Automated", value: "1.2K+" },
    { label: "Integrations", value: "80+" },
    { label: "Active Users", value: "4.5K+" },
  ];
  return (
    <section className="flex justify-center bg-white dark:bg-gray-950 py-12">
      <div className="grid grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-2xl font-semibold">{s.value}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
