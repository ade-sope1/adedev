// src/app/page.tsx
// Landing page — minimal intro with a script wordmark and short paragraphs.

import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col px-6 md:px-0">
            <header className="mx-auto w-full max-w-2xl pb-14 pt-32 md:pt-40">
                <h1 className="whitespace-nowrap font-script text-4xl italic leading-none tracking-normal text-fg sm:text-6xl md:text-[88px]">
                    Adesope Winner
                </h1>
            </header>

            <section className="mx-auto w-full max-w-2xl space-y-7 text-base leading-relaxed text-muted md:text-lg">
                <p>
                    I&apos;m a software engineer based in Lagos, Nigeria. I build
                    infrastructure — APIs, databases, and ledger systems — in{" "}
                    <Link href="/about" className="text-link">
                        Rust and TypeScript
                    </Link>
                    . I favor software that feels simple because the hard parts
                    are handled well.
                </p>

                <p>
                    I&apos;m building{" "}
                    <Link href="/projects" className="text-link">
                        Redner
                    </Link>
                    , a web-first video editing system that makes creating video
                    feel like writing. I designed its{" "}
                    <Link href="/redner" className="text-link">
                        timeline engine
                    </Link>{" "}
                    around the WebAudio clock, and wrote{" "}
                    <Link href="/blog" className="text-link">
                        essays
                    </Link>{" "}
                    about the architecture along the way.
                </p>

                <p>
                    I keep a{" "}
                    <Link href="/blog" className="text-link">
                        library of notes
                    </Link>{" "}
                    on the systems I build — a{" "}
                    <Link href="/projects" className="text-link">
                        type-safe ORM
                    </Link>
                    , a{" "}
                    <Link href="/projects" className="text-link">
                        financial ledger in Rust
                    </Link>
                    , and what I got wrong{" "}
                    <Link href="/blog/girdorm-mistakes" className="text-link">
                        making them
                    </Link>
                    .
                </p>

                <p>
                    If you want to see the work where it&apos;s from, look at my{" "}
                    <Link href="/work" className="text-link">
                        experience
                    </Link>{" "}
                    and grab my{" "}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link">
                        resume
                    </a>
                    .
                </p>

                <p>
                    If you have a hard backend problem, my inbox is open —{" "}
                    <a href="mailto:adesopewinner@gmail.com" className="text-link">
                        say hello
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}
