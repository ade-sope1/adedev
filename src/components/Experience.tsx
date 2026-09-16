// src/components/Experience.tsx
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Varsigram",
    role: "Software Engineer, Backend",
    date: "2025 - 2026",
    location: "Lagos, Nigeria",
    description: [
      "Architected scalable chat microservices supporting 1-on-1 messaging and threaded replies using Socket.io and Node.js.",
      "Designed and maintained core database schemas utilizing Postgres, NeonDB, and Prisma ORM for high-availability data access.",
      "Implemented Test-Driven Development (TDD) and strict CI/CD pipelines to ensure continuous, reliable software delivery in production.",
      "Optimized backend systems in TypeScript, significantly increasing API performance and overall system reliability.",
    ],
    stack: ["TypeScript", "Node.js", "Postgres", "Socket.io", "Prisma"],
  },
];

export default function Experience() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 border-t-2 border-[#f8f4df]/8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="eyebrow font-mono mb-4">03 / Experience</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-normal text-[#f8f4df] mb-2">
          Level Log
        </h2>
        <div className="title-underline" />
        <p className="text-xl text-[#c9d0d8]">
          Production work, systems, and impact.
        </p>
      </motion.div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex flex-col md:flex-row gap-8 md:gap-12 group glass-card p-6 md:p-8"
          >
            <div className="md:w-1/4 shrink-0">
              <span className="text-[#ffce5c] font-mono text-sm tracking-normal block mb-1">
                {exp.date}
              </span>
              <span className="text-[#f8f4df]/45 font-mono text-xs tracking-normal uppercase block">
                {exp.location}
              </span>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-black text-[#f8f4df] mb-2">
                {exp.role}
              </h3>
              <span className="text-[#68e1fd] font-semibold text-lg block mb-6">
                @ {exp.company}
              </span>

              <ul className="space-y-4 mb-8">
                {exp.description.map((item) => (
                  <li
                    key={item}
                    className="text-lg text-[#c9d0d8] leading-relaxed flex gap-4"
                  >
                    <span className="text-[#ffce5c] mt-1.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 pill text-xs font-mono text-[#c9d0d8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
