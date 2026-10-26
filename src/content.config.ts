import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const quotes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/quotes",
  }),
  schema: z.object({
    author: z.string(),
    source: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { quotes };