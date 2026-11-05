// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    House,
    User,
    FolderOpen,
    BookOpen,
    FileText,
    Mail,
} from "lucide-react";
import { GithubLogo, LinkedinLogo, XLogo } from "./BrandIcons";
import ThemeToggle from "./ThemeToggle";

const socials = [
    { name: "GitHub", href: "https://github.com/ade-sope1", icon: <GithubLogo className="h-[18px] w-[18px]" /> },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/winner-adesope-a28b70319/",
        icon: <LinkedinLogo className="h-[17px] w-[17px]" />,
    },
    { name: "X", href: "https://x.com/ade_sope01", icon: <XLogo className="h-4 w-4" /> },
    { name: "Email", href: "mailto:adesopewinner@gmail.com", icon: <Mail className="h-[18px] w-[18px]" /> },
];

const routes = [
    { name: "Home", href: "/", icon: <House className="h-[18px] w-[18px]" /> },
    { name: "About", href: "/about", icon: <User className="h-[18px] w-[18px]" /> },
    { name: "Projects", href: "/projects", icon: <FolderOpen className="h-[18px] w-[18px]" /> },
    { name: "Notes", href: "/blog", icon: <BookOpen className="h-[18px] w-[18px]" /> },
    { name: "Resume", href: "/resume.pdf", external: true, icon: <FileText className="h-[18px] w-[18px]" /> },
];

function NavLink({
    href,
    name,
    icon,
    active,
    external,
}: {
    href: string;
    name: string;
    icon: React.ReactNode;
    active?: boolean;
    external?: boolean;
}) {
    const className = `flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
        active
            ? "bg-fg text-bg"
            : "text-muted hover:bg-fg/5 hover:text-fg"
    }`;

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className={className}
            >
                {icon}
            </a>
        );
    }

    return (
        <Link href={href} aria-label={name} title={name} className={className}>
            {icon}
        </Link>
    );
}

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed inset-x-0 top-3 z-50 flex justify-center px-2">
            <div className="flex items-center gap-1 rounded-full border border-border bg-bg/85 p-1 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md">
                <div className="flex items-center gap-0.5">
                    {routes.map((route) => {
                        const active =
                            !route.external &&
                            (route.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(route.href));
                        return (
                            <NavLink key={route.href} {...route} active={active} />
                        );
                    })}
                </div>

                <div className="mx-1.5 h-5 w-px bg-border" />

                <div className="hidden items-center gap-0.5 sm:flex">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            title={social.name}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div className="mx-1.5 hidden h-5 w-px bg-border sm:block" />

                <ThemeToggle />
            </div>
        </nav>
    );
}
