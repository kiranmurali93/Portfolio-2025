import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    bannerImage: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    year: z.number(),
    featured: z.boolean().optional(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    profileImage: z.string(),
    aboutBrief: z.string(),
  }),
});

export const collections = { projects, profile };
