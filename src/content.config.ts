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
    tech: z.array(z.string()).default([]),
    overview: z.string().optional(),
    inspiration: z.string().optional(),
    features: z.array(z.string()).default([]),
    architecture: z.string().optional(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    profileImage: z.string(),
    aboutBrief: z.string(),
    paragraphs: z.array(z.string()).default([]),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    roles: z.array(z.object({
      role: z.string(),
      company: z.string(),
      location: z.string(),
      dates: z.string(),
      current: z.boolean().default(false),
      bullets: z.array(z.string()),
    })),
    earlierRoles: z.array(z.object({
      role: z.string(),
      company: z.string(),
      dates: z.string(),
    })),
    education: z.object({
      degree: z.string(),
      school: z.string(),
      dates: z.string(),
    }),
  }),
});

export const collections = { projects, profile, experience };
