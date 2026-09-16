// src/components/SelectedProjects.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";
import Link from "next/link";

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
      "A lightweight, type-safe TypeScript Object-Relational Mapper (ORM) built from scratch for SQLite, designed as a fast alternative to Prisma.",
    tech: ["TypeScript", "SQLite", "AST Parsing"],
    link: "#girdorm-case-study",
    github: "https://github.com/ade-sope1/girdorm",
  },
  {
    title: "GirdLedger",
    category: "Infrastructure / Fintech",
    description:
      "A high-performance financial ledger engine built in Rust to handle complex transaction types and deterministic account state logic.",
    tech: ["Rust", "Axum", "Postgres"],
    link: "#girdledger-case-study",
    github: "https://github.com/ade-sope1/girdledger",
  },
];

export default function SelectedProjects() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="eyebrow font-mono mb-4">04 / Work</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-normal text-[#f8f4df] mb-2">
          Quest Board
        </h2>
        <div className="title-underline" />
        <p className="text-xl text-[#c9d0d8]">
          Selected builds across creator tools, infrastructure, and systems work.
        </p>
      </motion.div>

      <div className="space-y-12 md:space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="group relative flex flex-col items-start pixel-card px-6 py-8 transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-2 bg-[#f8f4df]/10 mb-8 group-hover:bg-[#68e1fd]/45 transition-colors duration-500" />

            <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="md:w-2/3">
                <span className="text-[#ffce5c] font-mono text-sm tracking-normal uppercase mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-[#f8f4df] mb-6 group-hover:text-[#68e1fd] transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-[#c9d0d8] leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 pill text-sm text-[#c9d0d8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="md:w-1/3 flex flex-col items-start md:items-end mt-6 md:mt-0 gap-6">
                {/* Main Action: Read Case Study */}
                <Link
                  href={project.link}
                  className="flex items-center gap-2 text-[#f8f4df] hover:text-[#68e1fd] transition-colors font-semibold text-lg"
                >
                  Read Case Study
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>

                {/* Secondary Actions: Code & Live Site */}
                <div className="flex items-center gap-4 text-[#c9d0d8]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#f8f4df] transition-colors text-sm font-medium"
                    >
                      <Code className="w-4 h-4" />
                      Source
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#f8f4df] transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All GitHub Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mt-20 flex justify-center md:justify-start"
      >
        <a
          href="https://github.com/ade-sope1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 btn-secondary transition-all font-semibold"
        >
          View remaining projects on GitHub
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
