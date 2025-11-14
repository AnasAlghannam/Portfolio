"use client";
export default function ToolsSection() {
  const tools = ["Vite", "n8n", "Tailwind", "TypeScript", "Shadcn/UI", "OpenAI"];

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <h2 className="text-2xl font-bold text-center mb-6">Tools & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((t, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
