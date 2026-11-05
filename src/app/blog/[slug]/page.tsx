// src/app/blog/[slug]/page.tsx
import type { ComponentProps } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllNotes, readNoteFile } from "@/lib/notes";

const components = {
    h2: (props: ComponentProps<"h2">) => (
        <h2 className="mt-12 mb-6 text-2xl font-bold text-fg" {...props} />
    ),
    p: (props: ComponentProps<"p">) => <p className="mb-6" {...props} />,
    ul: (props: ComponentProps<"ul">) => (
        <ul className="my-6 list-disc space-y-3 pl-6 text-muted" {...props} />
    ),
    ol: (props: ComponentProps<"ol">) => (
        <ol className="my-6 list-decimal space-y-3 pl-6 text-muted" {...props} />
    ),
    li: (props: ComponentProps<"li">) => <li className="pl-2" {...props} />,
    strong: (props: ComponentProps<"strong">) => (
        <strong className="font-semibold text-fg" {...props} />
    ),
    blockquote: (props: ComponentProps<"blockquote">) => (
        <blockquote
            className="my-12 border-l-4 border-fg/30 pl-6 italic text-muted"
            {...props}
        />
    ),
};

export default async function NotePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const source = readNoteFile(slug);

    if (!source) {
        notFound();
    }

    const { content, frontmatter } = await compileMDX<{
        title: string;
        date: string;
        category: string;
    }>({
        source,
        components,
        options: { parseFrontmatter: true },
    });

    return (
        <main className="flex min-h-screen flex-col px-6">
            <nav className="mx-auto w-full max-w-2xl pt-32 md:pt-36">
                <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    All notes
                </Link>
            </nav>

            <article className="mx-auto w-full max-w-2xl">
                <header className="mb-12 mt-10 border-b border-border pb-10">
                    <div className="mb-6 flex gap-3 font-mono text-sm uppercase text-muted">
                        <span>{frontmatter.date}</span>
                        <span>/</span>
                        <span>{frontmatter.category}</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-fg md:text-5xl">
                        {frontmatter.title}
                    </h1>
                </header>

                <div className="pb-16 text-lg leading-relaxed text-muted">
                    {content}
                </div>
            </article>
        </main>
    );
}
