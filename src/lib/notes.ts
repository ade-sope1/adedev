// src/lib/notes.ts
// Shared helpers for reading the MDX notes in content/notes.

import fs from "fs";
import path from "path";

export type NoteFrontmatter = {
    title: string;
    date: string;
    category: string;
};

export type NoteSummary = NoteFrontmatter & {
    slug: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content/notes");

export function getAllNotes(): NoteSummary[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];

    return fs
        .readdirSync(CONTENT_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
            const frontmatter = parseFrontmatter(raw);
            return {
                slug: file.replace(/\.mdx$/, ""),
                ...(frontmatter as NoteFrontmatter),
            };
        })
        .sort((a, b) => compareDates(a.date, b.date));
}

export function getNoteFile(slug: string): string | null {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    return fs.existsSync(filePath) ? filePath : null;
}

export function readNoteFile(slug: string): string {
    const file = getNoteFile(slug);
    if (!file) return "";
    return fs.readFileSync(file, "utf8");
}

/* Minimal frontmatter parser (--- delimited YAML at the top of the file). */
function parseFrontmatter(source: string): Record<string, string> {
    const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
    if (!match) return {};

    const result: Record<string, string> = {};
    for (const line of match[1].split(/\r?\n/)) {
        const key = line.match(/^(\w+):\s*(.+)$/);
        if (key) {
            result[key[1]] = key[2].replace(/^["']|["']$/g, "");
        }
    }
    return result;
}

/* Notes use "MM.YYYY" — sort descending, newest first. */
function compareDates(a: string, b: string): number {
    const toTime = (value: string) => {
        const [month, year] = value.split(".");
        return new Date(`${year}-${month ?? "01"}-01`).getTime();
    };
    return toTime(b) - toTime(a);
}
