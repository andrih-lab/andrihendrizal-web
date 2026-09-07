import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

// Satu feed gabungan dua bahasa di /rss.xml (Bagian 5 Writing dokumen
// rancang bangun — bukan feed terpisah per bahasa).
export async function GET(context: APIContext) {
  const posts = (
    await getCollection('writing', (entry: CollectionEntry<'writing'>) => !entry.data.draft)
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Andri Hendrizal',
    description: 'Writing on mangrove ecology, blue carbon, and research methods.',
    site: context.site!,
    items: posts.map((post) => {
      const slug = post.id.split('/').slice(1).join('/');
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/${post.data.lang}/writing/${slug}/`,
        categories: post.data.tags,
      };
    }),
  });
}
