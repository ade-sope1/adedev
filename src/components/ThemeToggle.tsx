// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
            // Ignore storage failures (private mode, etc.)
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
        >
            {/* Render Sun unmounted (canonical SSR theme) to avoid hydration mismatch */}
            {mounted && isDark ? (
                <Sun className="h-[18px] w-[18px]" />
            ) : (
                <Moon className="h-[18px] w-[18px]" />
            )}
        </button>
    );
}
