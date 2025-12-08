import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BlogPostClient from "./BlogPostClient";

type BlogPostParams = {
	slug: string;
};

// In Next 15, params is a Promise
type BlogPostPageProps = {
	params: Promise<BlogPostParams>;
};

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params; // ✅ unwrap params
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		return {
			title: "Article Not Found | Phoenix Street Realty",
			description: "The requested article could not be found.",
		};
	}

	return {
		title: `${post.title} | Phoenix Street Realty`,
		description: post.excerpt ?? post.title,
		openGraph: {
			title: post.title,
			description: post.excerpt ?? post.title,
			url: `https://phoenixstreetrealty.com/blog/${post.slug}`,
			siteName: "Phoenix Street Realty",
			type: "article",
		},
		alternates: {
			canonical: `https://phoenixstreetrealty.com/blog/${post.slug}`,
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params; // ✅ unwrap params

	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	return <BlogPostClient post={post} />;
}
