"use client";
export default function TrustedCompanies() {
  const companies = ["Google", "Meta", "Airbnb", "Stripe", "Amazon"];
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
        Trusted by teams worldwide
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {companies.map((c, i) => (
          <span
            key={i}
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-medium"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
