import fs from "fs";
import path from "path";
import Link from "next/link";

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

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "app", "posts");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data } = parseFrontmatter(raw);
    return { meta: data, slug: filename.replace(".md", "") };
  });

  const sorted = posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {sorted.map(({ meta, slug }) => (
          <div key={slug} className="border-b pb-4">
            <Link href={`/blog/${slug}`} className="text-xl font-semibold hover:underline">
              {meta.title}
            </Link>
            <p className="text-gray-500 text-sm">{meta.date}</p>
            <p className="mt-2 text-gray-700">{meta.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
