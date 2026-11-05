// src/components/Footer.tsx
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubLogo, LinkedinLogo, XLogo } from "./BrandIcons";

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

export default function Footer() {
    return (
        <footer className="flex w-full items-center justify-center gap-6 pb-16 pt-24 text-sm text-muted">
            <span className="font-medium">
                © {new Date().getFullYear()} /{" "}
                <Link href="/" className="text-fg hover:underline">
                    Adesope Winner
                </Link>
            </span>

            <div className="flex items-center gap-5">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        className="text-muted transition-colors hover:text-fg"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
}
