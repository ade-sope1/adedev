// src/app/redner/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Redner | Adesope Winner",
    description:
        "Case study: designing a web-first video editing system where video creation feels like writing.",
};

export default function RednerCaseStudy() {
    return (
        <main className="flex min-h-screen flex-col px-6 pb-24">
            <nav className="mx-auto w-full max-w-2xl pt-32 md:pt-36">
                <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    All projects
                </Link>
            </nav>

            <article className="mx-auto w-full max-w-2xl">
                {/* Header Section */}
                <header className="mt-10 border-b border-border pb-12 md:pb-16">
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-fg md:text-7xl">
                        Redner.
                    </h1>
                    <p className="max-w-2xl text-2xl font-medium leading-tight text-muted md:text-4xl">
                        Video creation should feel exactly like writing.
                    </p>

                    <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-8 font-mono text-xs uppercase tracking-widest text-muted md:grid-cols-4">
                        <div>
                            <span className="mb-2 block">Role</span>
                            <span className="text-fg">Creator / Engineer</span>
                        </div>
                        <div>
                            <span className="mb-2 block">Timeline</span>
                            <span className="text-fg">2026 — Present</span>
                        </div>
                        <div>
                            <span className="mb-2 block">Category</span>
                            <span className="text-fg">Creator Tool</span>
                        </div>
                        <div>
                            <span className="mb-2 block">Stack</span>
                            <span className="text-fg">React, WebAudio, Rust</span>
                        </div>
                    </div>
                </header>

                {/* The Problem */}
                <section className="space-y-6 border-b border-border py-16">
                    <h2 className="text-2xl font-bold text-fg md:text-3xl">
                        The Problem
                    </h2>
                    <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted">
                        <p>
                            Modern video editing is inherently broken for the
                            average creator. The paradigm hasn&apos;t changed
                            since the early days of Premiere Pro: complex
                            multi-track timelines, detached asset bins, and a
                            steep learning curve just to sync audio with visual
                            states.
                        </p>
                        <p>
                            I wanted to build a web-first system that abstracts
                            the complexity of the timeline. If you can type out
                            a document, you should be able to orchestrate a
                            video.
                        </p>
                    </div>
                </section>

                {/* Architecture & Engineering */}
                <section className="space-y-6 border-b border-border py-16">
                    <h2 className="text-2xl font-bold text-fg md:text-3xl">
                        Architecture &amp; The Stage Engine
                    </h2>
                    <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted">
                        <p>
                            Building a video editor in the browser is
                            fundamentally an exercise in state management and
                            rendering performance. The core of Redner relies on
                            two distinct systems: the{" "}
                            <span className="font-medium text-fg">
                                Timeline Playback mechanism
                            </span>{" "}
                            and the{" "}
                            <span className="font-medium text-fg">
                                Stage Preview engine
                            </span>
                            .
                        </p>

                        <div className="my-10 rounded-xl border border-border bg-card p-6 md:p-8">
                            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                                Engineering Challenge: The WebAudio API
                            </h3>
                            <p className="text-base leading-relaxed text-fg">
                                Syncing visual state changes with audio
                                playback in a browser is notoriously difficult
                                due to JavaScript&apos;s single-threaded
                                nature. To solve this in Phases 2.3 and 2.4, I
                                decoupled the audio playback layer from the
                                React render cycle. By leveraging the WebAudio
                                API clock as the absolute source of truth, the
                                Stage Engine independently polls for state
                                updates, ensuring frame-perfect synchronization
                                without dropping frames during heavy UI
                                renders.
                            </p>
                        </div>

                        <p>
                            The frontend architecture avoids traditional heavy
                            DOM manipulation, leaning instead on optimized
                            canvas rendering and strict separation between the
                            &quot;editor state&quot; and the &quot;player
                            state.&quot;
                        </p>
                    </div>
                </section>

                {/* Lessons Learned */}
                <section className="space-y-6 py-16">
                    <h2 className="text-2xl font-bold text-fg md:text-3xl">
                        Takeaways
                    </h2>
                    <ul className="max-w-xl space-y-6 list-none text-lg leading-relaxed">
                        <li className="flex gap-4">
                            <span className="text-lg font-mono text-muted">01</span>
                            <span className="text-muted">
                                <strong className="font-semibold text-fg">
                                    State is everything.
                                </strong>{" "}
                                Complex local state in a web app can&apos;t
                                just rely on React Context. You need
                                deterministic, immutable stores to handle
                                fast-scrubbing on a timeline.
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-lg font-mono text-muted">02</span>
                            <span className="text-muted">
                                <strong className="font-semibold text-fg">
                                    Browser APIs are incredibly powerful.
                                </strong>{" "}
                                You don&apos;t always need WASM immediately.
                                Maximizing the WebAudio API and
                                RequestAnimationFrame can get you 90% of the
                                way there.
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-lg font-mono text-muted">03</span>
                            <span className="text-muted">
                                <strong className="font-semibold text-fg">
                                    UX dictates architecture.
                                </strong>{" "}
                                The decision to make video editing feel like
                                &quot;writing&quot; meant throwing away
                                traditional data models for tracks and clips,
                                and engineering a completely new schema.
                            </span>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    );
}
