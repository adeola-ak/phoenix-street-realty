"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

type BlogPostPageProps = {
	params: {
		slug: string;
	};
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<section className="border-b border-neutral-800">
				<div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.6 }}
						transition={{ duration: 0.7 }}
					>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							{post?.category}
						</p>
						<h1 className="mt-2 font-[var(--font-playfair)] text-3xl md:text-4xl">
							{post?.title}
						</h1>
						<p className="mt-2 text-[0.75rem] text-psr-soft-white/50">
							{post?.date}
						</p>
					</motion.div>

					<motion.article
						className="mt-8 space-y-3 text-sm text-psr-soft-white/80"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.7, delay: 0.05 }}
					>
						{post?.content.split("\n").map((line, index) => {
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

					<motion.div
						className="mt-10 text-[0.8rem] text-psr-soft-white/60"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.5 }}
					>
						<a
							href="/blog"
							className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
						>
							Back to journal
						</a>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
