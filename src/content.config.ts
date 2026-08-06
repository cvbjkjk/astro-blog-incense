import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
});

const blog = defineCollection({
	// English articles only
	loader: glob({ base: "./src/content/blog", pattern: "*.{md,mdx}" }),
	schema: blogSchema,
});

const blogDe = defineCollection({
	// German articles in de/ subdirectory
	loader: glob({ base: "./src/content/blog/de", pattern: "**/*.{md,mdx}" }),
	schema: blogSchema,
});

export const collections = { blog, blogDe };
