import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://kiranpk.dev';

  const profile = await getEntry('profile', 'info');
  const projects = await getCollection('projects');
  const posts = await getCollection('blog');

  const sortedProjects = projects.sort((a, b) => (b.data.year ?? 0) - (a.data.year ?? 0));
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const lines: string[] = [];
  lines.push('# Kiran PK');
  lines.push('');
  lines.push(`> ${profile?.data.aboutBrief ?? 'Backend-focused software engineer building and owning production systems across fintech and SaaS.'}`);
  lines.push('');
  lines.push('Kiran PK is a software engineer specializing in Node.js, TypeScript, PostgreSQL, AWS, and Golang, with experience across fintech and SaaS products.');
  lines.push('');

  lines.push('## Pages');
  lines.push('');
  lines.push(`- [About](${base}/): Background, current role, and how to get in touch.`);
  lines.push(`- [Experience](${base}/experience): Work history — GeoServe, Dexif, SuperHire, and earlier roles.`);
  lines.push(`- [Projects](${base}/projects): Software projects, including Scalperr and FocusFlow.`);
  lines.push(`- [Writing](${base}/blog): Technical blog posts on systems, concurrency, Go, and debugging.`);
  lines.push('');

  lines.push('## Projects');
  lines.push('');
  for (const p of sortedProjects) {
    lines.push(`- [${p.data.title}](${base}/projects#${p.id}) (${p.data.year}): ${p.data.description}`);
  }
  lines.push('');

  lines.push('## Writing');
  lines.push('');
  for (const post of sortedPosts) {
    lines.push(`- [${post.data.title}](${base}/blog/${post.id}): ${post.data.summary}`);
  }
  lines.push('');

  lines.push('## Contact');
  lines.push('');
  lines.push('- Email: kiranmurali93@gmail.com');
  lines.push(`- X: https://x.com/kiran__pk`);
  lines.push(`- LinkedIn: https://www.linkedin.com/in/kiran-p-k/`);
  lines.push(`- GitHub: https://github.com/kiranmurali93`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
