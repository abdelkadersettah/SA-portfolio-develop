import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      img: z.string(),
      img_alt: z.string().optional(),
      github: z.string().optional(),
      live: z.string().optional(),
    }),
  }),
};
