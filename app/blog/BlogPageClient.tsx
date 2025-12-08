"use client";

import { motion } from "framer-motion";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Post } from "@/data/posts";
import Link from "next/link";

type BlogPostClientProps = {
	post: Post;
};

export default function BlogPostClient({ post }: BlogPostClientProps) {
	const postJsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		articleSection: post.category,
		datePublished: post.date,
		abstract: post.excerpt,
		url: `https://phoenixstreetrealty.com/blog/${post.slug}`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://phoenixstreetrealty.com/blog/${post.slug}`,
		},
		publisher: {
			"@type": "Organization",
			name: "Phoenix Street Realty",
			url: "https://phoenixstreetrealty.com",
		},
	};

	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={postJsonLd} />

			<section className="border-b border-neutral-800">
				<div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
					{/* Heading */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.6 }}
						transition={{ duration: 0.7 }}
					>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							{post.category}
						</p>
						<h1 className="mt-2 font-[var(--font-playfair)] text-3xl md:text-4xl text-psr-ivory">
							{post.title}
						</h1>
						<p className="mt-2 text-[0.75rem] text-psr-soft-white/50">
							{post.date}
						</p>
					</motion.div>

					{/* Gradient hero “image” */}
					<motion.div
						className="relative mt-8 overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-black/85 via-psr-charcoal-soft to-psr-charcoal"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.7, delay: 0.05 }}
					>
						<div className="aspect-[16/9] w-full" />
						{/* Optional subtle overlay strip at the bottom */}
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
					</motion.div>

					{/* Content */}
					<motion.article
						className="mt-8 space-y-3 text-sm text-psr-soft-white/80"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						{post.content.split("\n").map((line, index) => {
							if (line.startsWith("### ")) {
								return (
									<h2
										key={index}
										className="mt-6 font-[var(--font-playfair)] text-lg text-psr-soft-white"
									>
										{line.replace("### ", "")}
									</h2>
								);
							}
							if (!line.trim()) {
								return <div key={index} className="h-2" />;
							}
							return <p key={index}>{line.trim()}</p>;
						})}
					</motion.article>

					{/* Back link */}
					<motion.div
						className="mt-10 text-[0.8rem] text-psr-soft-white/60"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.5 }}
					>
						<Link
							href="/blog"
							className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
						>
							Back to journal
						</Link>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
