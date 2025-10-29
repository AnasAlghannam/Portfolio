"use client";
export default function CTASection() {
    return (
        <section className="py-16 text-center bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-3xl mx-4 sm:mx-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflow?</h2>
            <p className="mb-6 text-blue-100 max-w-lg mx-auto">
                Start building smarter automations and connect your favorite tools effortlessly.
            </p>
            <button className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-100 transition">
                Join Now
            </button>
        </section>
    );
}
