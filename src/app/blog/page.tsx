// src/app/blog/page.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllNotes } from "@/lib/notes";

export const metadata = {
    title: "Notes | Adesope Winner",
    description: "Short essays on engineering, architecture, and workflow.",
};

export default function BlogIndex() {
    const notes = getAllNotes();

    return (
        <main className="flex min-h-screen flex-col px-6">
            <header className="mx-auto w-full max-w-2xl pb-14 pt-36 md:pt-44">
                <h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
                    Notes
                </h1>
                <p className="mt-4 text-lg text-muted">
                    Short essays on engineering, architecture, and workflow.
                </p>
            </header>

            <section className="mx-auto w-full max-w-2xl">
                <div className="flex flex-col">
                    {notes.map((note) => (
                        <Link
                            key={note.slug}
                            href={`/blog/${note.slug}`}
                            className="group flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-center md:gap-10"
                        >
                            <span className="w-20 shrink-0 font-mono text-sm text-muted">
                                {note.date}
                            </span>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-fg transition-colors group-hover:text-muted md:text-2xl">
                                    {note.title}
                                </h2>
                                <p className="mt-1 text-sm text-muted md:hidden">
                                    {note.category}
                                </p>
                            </div>
                            <span className="hidden items-center gap-1 text-sm text-muted transition-colors group-hover:text-fg md:flex">
                                {note.category}
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </Link>
                    ))}

                    {notes.length === 0 && (
                        <p className="py-7 text-muted">Nothing here yet.</p>
                    )}
                </div>
            </section>
        </main>
    );
}
