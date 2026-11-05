import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Self-hosted fonts — no network requests at build time. */
const inter = localFont({
    src: "../fonts/inter-var.woff2",
    weight: "100 900",
    style: "normal",
    variable: "--font-inter",
});

const geistMono = localFont({
    src: "../fonts/geist-mono-var.woff2",
    weight: "100 900",
    style: "normal",
    variable: "--font-geist-mono",
});

const playfairDisplay = localFont({
    src: "../fonts/playfair-italic-var.woff2",
    weight: "400 900",
    style: "italic",
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "Adesope Winner | Backend Engineer",
    description:
        "Backend engineer in Lagos, Nigeria. Building infrastructure and creator tools — Redner, GirdORM, GirdLedger. Essays on architecture, Rust, and engineering workflow.",
    icons: {
        icon: "/adedev.png",
        shortcut: "/adedev.png",
        apple: "/adedev.png",
    },
    openGraph: {
        title: "Adesope Winner | Backend Engineer",
        description: "Building systems that feel simple because the hard parts are handled well.",
        url: "https://adedev.me",
        siteName: "Adesope Winner",
        locale: "en_US",
        type: "website",
    },
};

/* Applied before hydration so the saved theme never flashes the wrong colors. */
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInit }} />
            </head>
            <body
                className={`${inter.variable} ${geistMono.variable} ${playfairDisplay.variable} font-sans`}
            >
                <span className="fixed left-5 top-5 z-50 text-xs font-medium text-fg sm:text-sm">
                    Lagos, Nigeria
                </span>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
