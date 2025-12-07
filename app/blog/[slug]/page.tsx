// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BlogPostClient from "./BlogPostClient";

type BlogPostPageProps = {
	params: { slug: string };
};

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		return {
			title: "Article Not Found | Phoenix Street Realty",
			description: "The requested article could not be found.",
		};
	}

	return {
		title: `${post.title} | Phoenix Street Realty`,
		description: post.excerpt ?? post.title,
		keywords: [
			post.category?.toLowerCase(),
			"real estate tips",
			"interior design insights",
			"tenant screening guide",
			"landlord advice",
			"rental property prep",
		],
		openGraph: {
			title: post.title,
			description: post.excerpt ?? post.title,
			url: `https://phoenixstreetrealty.com/blog/${post.slug}`,
			siteName: "Phoenix Street Realty",
			type: "article",
		},
	};
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) notFound();

	return <BlogPostClient post={post} />;
}
