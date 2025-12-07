import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const baseUrl = "https://phoenixstreetrealty.com";

export default function sitemap(): MetadataRoute.Sitemap {
	// Static top-level pages
	const staticRoutes: MetadataRoute.Sitemap = [
		"",
		"/services",
		"/portfolio",
		"/blog",
		"/about",
		"/contact",
	].map((path) => ({
		url: `${baseUrl}${path}`,
		lastModified: new Date(),
	}));

	// Dynamic blog post routes from your posts data
	const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => {
		// If you later add an updatedAt field, you can use that instead
		let lastModified: Date;
		try {
			lastModified = post.date ? new Date(post.date) : new Date();
		} catch {
			lastModified = new Date();
		}

		return {
			url: `${baseUrl}/blog/${post.slug}`,
			lastModified,
		};
	});

	return [...staticRoutes, ...blogRoutes];
}
