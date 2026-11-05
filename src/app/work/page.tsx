// src/app/work/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Experience | Adesope Winner",
    description: "The teams, products, and roles that shaped my engineering career.",
};

const experiences = [
    {
        company: "Varsigram",
        role: "Software Engineer, Backend",
        date: "2025 — 2026",
        location: "Lagos, Nigeria",
        description: [
            "Architected scalable chat microservices supporting 1-on-1 messaging and threaded replies using Socket.io and Node.js.",
            "Designed and maintained core database schemas utilizing Postgres, NeonDB, and Prisma ORM for high-availability data access.",
            "Implemented Test-Driven Development (TDD) and strict CI/CD pipelines to ensure continuous, reliable delivery in production.",
            "Optimized backend systems in TypeScript, significantly increasing API performance and overall system reliability.",
        ],
        stack: ["TypeScript", "Node.js", "Postgres", "Socket.io", "Prisma"],
    },
];

export default function WorkPage() {
    return (
        <main className="flex min-h-screen flex-col px-6">
            <header className="mx-auto w-full max-w-2xl pb-14 pt-36 md:pt-44">
                <h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
                    Experience
                </h1>
                <p className="mt-4 text-lg text-muted">
                    The teams, products, and roles that shaped my engineering
                    career.
                </p>
            </header>

            <section className="mx-auto w-full max-w-2xl pb-20">
                {experiences.map((exp) => (
                    <article key={exp.company} className="border-b border-border py-9">
                        <p className="font-mono text-sm text-muted">
                            {exp.date} · {exp.location}
                        </p>
                        <h2 className="mt-3 text-2xl font-bold text-fg md:text-3xl">
                            {exp.role}
                        </h2>
                        <p className="mt-1 text-lg font-medium text-muted">
                            @ {exp.company}
                        </p>

                        <ul className="mt-6 space-y-4">
                            {exp.description.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-4 leading-relaxed text-muted"
                                >
                                    <span className="mt-1.5 text-fg">+</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-sm text-muted">
                            {exp.stack.join(" · ")}
                        </p>
                    </article>
                ))}

                <div className="py-9">
                    <p className="font-mono text-sm text-muted">Ongoing</p>
                    <h2 className="mt-3 text-2xl font-bold text-fg md:text-3xl">
                        Independent Projects
                    </h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted">
                        Redner, GirdORM, and GirdLedger — the systems I design
                        and build outside of work. Read about them on{" "}
                        <Link href="/projects" className="text-link">
                            the projects page
                        </Link>
                        .
                    </p>
                    <Link
                        href="/projects"
                        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-fg hover:opacity-70"
                    >
                        View projects
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
