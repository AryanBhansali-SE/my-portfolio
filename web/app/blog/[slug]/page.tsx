import fs from "fs";
import path from "path";

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx < 1) continue;
    data[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { data, content: match[2].trim() };
}

function mdToHtml(md: string): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const inline = (s: string) =>
    esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  const out: string[] = [];
  let inList = false;
  for (const line of md.split("\n")) {
    const h3 = line.match(/^### (.+)$/);
    const h2 = line.match(/^## (.+)$/);
    const h1 = line.match(/^# (.+)$/);
    const li = line.match(/^[-*] (.+)$/);
    if (h3)             { if (inList) { out.push("</ul>"); inList = false; } out.push(`<h3>${inline(h3[1])}</h3>`); }
    else if (h2)        { if (inList) { out.push("</ul>"); inList = false; } out.push(`<h2>${inline(h2[1])}</h2>`); }
    else if (h1)        { if (inList) { out.push("</ul>"); inList = false; } out.push(`<h1>${inline(h1[1])}</h1>`); }
    else if (li)        { if (!inList) { out.push("<ul>"); inList = true; }  out.push(`<li>${inline(li[1])}</li>`); }
    else if (!line.trim()) { if (inList) { out.push("</ul>"); inList = false; } }
    else                { if (inList) { out.push("</ul>"); inList = false; } out.push(`<p>${inline(line)}</p>`); }
  }
  if (inList) out.push("</ul>");
  return out.join("\n");
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "app", "posts");
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = fs.readFileSync(
    path.join(process.cwd(), "app", "posts", `${slug}.md`),
    "utf-8"
  );
  const { data, content } = parseFrontmatter(raw);

  return (
    <article className="blog-post-container">
      <h1 className="post-title">{data.title}</h1>
      <p className="post-date">Published on: {data.date}</p>
      <hr />
      <div className="post-content" dangerouslySetInnerHTML={{ __html: mdToHtml(content) }} />
    </article>
  );
}
