// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Adesope Winner",
    description: "A fuller introduction to my background and stack.",
};

const nowItems = [
    { label: "Building", value: "Creator tools with real-time systems and clean UX." },
    { label: "Focus", value: "Backend infrastructure, deterministic state, and performance." },
    { label: "Open to", value: "Backend and product engineering roles." },
];

const stackCategories = [
    { title: "Languages", skills: ["TypeScript", "JavaScript", "Rust", "C", "SQL"] },
    { title: "Backend & Core", skills: ["Node.js", "Express", "NestJS", "Axum", "Socket.io"] },
    { title: "Databases & ORMs", skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma"] },
    { title: "Infrastructure & Cloud", skills: ["Docker", "CI/CD", "Git", "NeonDB", "WebAudio API"] },
];

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col px-6">
            <header className="mx-auto w-full max-w-2xl pb-14 pt-36 md:pt-44">
                <h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
                    About
                </h1>
            </header>

            <section className="mx-auto w-full max-w-2xl space-y-7 text-base leading-relaxed text-muted md:text-lg">
                <p>
                    I&apos;m a software engineer based in Lagos, Nigeria. I
                    design systems, build core infrastructure, and ship
                    deterministic software that keeps complex problems simple.
                </p>

                <p>
                    My work is anchored in TypeScript, Node.js, and Rust — from
                    scalable microservices to monolithic applications where
                    correctness, latency, and reliability matter most. I care
                    about architecture as much as implementation: I plan
                    schemas, state machines, and interfaces first, then execute
                    with speed and discipline.
                </p>

                <p>
                    Most of my time goes into backend systems and creator tools
                    — different angles on the same question: how do you build
                    things that hold up under real use?
                </p>
            </section>

            <section className="mx-auto w-full max-w-2xl pb-24 pt-16">
                <h2 className="mb-8 border-b border-border pb-3 text-2xl font-bold text-fg">
                    Now
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    {nowItems.map((item) => (
                        <div key={item.label}>
                            <span className="font-mono text-xs uppercase text-muted">
                                {item.label}
                            </span>
                            <p className="mt-3 leading-relaxed text-fg">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto w-full max-w-2xl pb-24">
                <h2 className="mb-8 border-b border-border pb-3 text-2xl font-bold text-fg">
                    Stack
                </h2>
                <div className="flex flex-col gap-8">
                    {stackCategories.map((category) => (
                        <div key={category.title}>
                            <span className="font-mono text-xs uppercase text-muted">
                                {category.title}
                            </span>
                            <p className="mt-2 text-lg text-fg">
                                {category.skills.join(" · ")}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
