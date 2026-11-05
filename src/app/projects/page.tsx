// src/app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Projects | Adesope Winner",
    description: "Selected builds across creator tools, infrastructure, and systems work.",
};

const projects = [
    {
        title: "Redner",
        category: "Creator Tools",
        description:
            "Video creation should feel like writing. A web-first video editing system featuring a custom timeline playback and stage preview engine.",
        tech: ["React", "Rust", "WebAudio API"],
        link: "/redner",
        github: "https://github.com/ade-sope1/redner",
        live: "https://redner.app",
    },
    {
        title: "GirdORM",
        category: "Infrastructure",
        description:
            "A lightweight, type-safe TypeScript Object-Relational Mapper built from scratch for SQLite, designed as a fast alternative to Prisma.",
        tech: ["TypeScript", "SQLite", "AST Parsing"],
        link: "https://github.com/ade-sope1/girdorm",
        github: "https://github.com/ade-sope1/girdorm",
    },
    {
        title: "GirdLedger",
        category: "Infrastructure / Fintech",
        description:
            "A high-performance financial ledger engine built in Rust to handle complex transaction types and deterministic account state logic.",
        tech: ["Rust", "Axum", "Postgres"],
        link: "https://github.com/ade-sope1/girdledger",
        github: "https://github.com/ade-sope1/girdledger",
    },
];

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col px-6">
            <header className="mx-auto w-full max-w-2xl pb-14 pt-36 md:pt-44">
                <h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
                    Selected Work
                </h1>
                <p className="mt-4 text-lg text-muted">
                    Products that best represent the things I like to build.
                </p>
            </header>

            <section className="mx-auto w-full max-w-2xl pb-20">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="border-b border-border py-9"
                    >
                        <p className="font-mono text-sm uppercase text-muted">
                            {project.category}
                        </p>

                        <h2 className="mt-3 text-2xl font-bold text-fg md:text-3xl">
                            <Link
                                href={project.link}
                                target={project.link.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="row-link"
                            >
                                {project.title}
                            </Link>
                        </h2>

                        <p className="mt-4 max-w-xl leading-relaxed text-muted">
                            {project.description}
                        </p>

                        <p className="mt-4 text-sm text-muted">
                            {project.tech.join(" · ")}
                        </p>

                        <div className="mt-5 flex items-center gap-6 text-sm font-medium">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-fg transition-opacity hover:opacity-70"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Visit
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                                >
                                    <Code className="h-4 w-4" />
                                    Source
                                </a>
                            )}
                        </div>
                    </article>
                ))}

                <div className="pt-12">
                    <a
                        href="https://github.com/ade-sope1?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-lg font-semibold text-fg"
                    >
                        <span className="row-link">View remaining projects on GitHub</span>
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </div>
            </section>
        </main>
    );
}
