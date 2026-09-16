// src/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Email", href: "mailto:adesopewinner@gmail.com" },
  { name: "GitHub", href: "https://github.com/ade-sope1" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/winner-adesope-a28b70319/",
  },
  { name: "X", href: "https://x.com/ade_sope01" },
];

export default function Contact() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 md:py-44">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start"
      >
        <span className="eyebrow font-mono mb-4">08 / Contact</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-normal text-[#f8f4df] mb-4 max-w-3xl leading-tight">
          Start a serious build{" "}
          <span className="text-[#68e1fd]">with personality</span>
        </h2>
        <div className="title-underline" />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border-2 border-[#f8f4df]/15 bg-[#11131f]/70 px-4 py-4 text-lg font-semibold text-[#c9d0d8] shadow-[5px_5px_0_#050712] transition-all hover:-translate-y-1 hover:text-[#f8f4df]"
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 text-[#ffce5c] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
