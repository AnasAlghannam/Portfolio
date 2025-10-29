"use client";
export default function HeroSection() {
    return (
        <section className="flex flex-col items-center text-center py-16 sm:py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Build Smarter with Automation
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8">
                Automate tasks, connect your tools, and save hours daily using modern workflow solutions.
            </p>
            <button className="px-6 py-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition">
                Get Started
            </button>
        </section>
    );
}
