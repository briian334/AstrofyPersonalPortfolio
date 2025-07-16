import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const project = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/project" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			badge: z.string().optional(),
			image: image(),
			technologies: z.array(z.string()),
			links: z
				.object({
					demo: z.string().optional(),
					github: z.string().optional(),
					live: z.string().optional(),
				})
				.optional(),
		}),
});

export const collections = { project };
