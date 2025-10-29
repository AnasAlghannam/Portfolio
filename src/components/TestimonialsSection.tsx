"use client";
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex R.",
      role: "Software Engineer",
      quote:
        "This platform saved our team hours every week. The automation tools are top-notch!",
    },
    {
      name: "Maria K.",
      role: "Project Manager",
      quote: "Seamless and intuitive — perfect for connecting our internal systems.",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow hover:shadow-md transition"
            >
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
