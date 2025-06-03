import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.string().optional(),
	heroImage: z.string().optional(),
	badge: z.string().optional(),
	tags: z
		.array(z.string())
		.refine((items) => new Set(items).size === items.length, {
			message: "tags must be unique",
		})
		.optional(),
});

const storeSchema = z.object({
	title: z.string(),
	description: z.string(),
	custom_link_label: z.string(),
	custom_link: z.string().optional(),
	updatedDate: z.coerce.date(),
	pricing: z.string().optional(),
	oldPricing: z.string().optional(),
	badge: z.string().optional(),
	checkoutUrl: z.string().optional(),
	heroImage: z.string().optional(),
});

const projectSchema = z.object({
	id: z.number(),
	title: z.string(),
	slug: z.string(),
	description: z.string(),
	startDate: z.string(),
	badge: z.string().optional(),
	image: z.string(),
	technologies: z.array(z.string()),
	lang: z.enum(["es", "en"]),
	links: z
		.object({
			demo: z.string().optional(),
			github: z.string().optional(),
			live: z.string().optional(),
		})
		.optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ type: "content", schema: blogSchema });
const storeCollection = defineCollection({ type: "content", schema: storeSchema });
const projectCollection = defineCollection({ type: "content", schema: projectSchema });

export const collections = {
	blog: blogCollection,
	store: storeCollection,
	project: projectCollection,
};
