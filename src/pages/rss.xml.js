import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'Kiran PK — Writing',
    description: 'Notes from production — concurrency, databases, testing, and the bugs that taught me something.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
