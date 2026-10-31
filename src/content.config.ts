import { defineCollection} from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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

const journal = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/journal",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: z.string().optional(),
  }),
});

const travel = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/travel",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: z.string().optional(),
  }),
});

export const collections = {
  journal,
  quotes,
  travel
};

