"use client";

import { JsonLd } from "@/components/seo/JsonLd";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";

export default function BlogPage() {
	const blogJsonLd = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"@id": "https://phoenixstreetrealty.com/blog",
		url: "https://phoenixstreetrealty.com/blog",
		name: "Journal – Phoenix Street Realty",
		description:
			"Luxury real estate, tenant screening, landlord systems, and interior design insights from Phoenix Street Realty.",
	};

	const sortedPosts = [...posts].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={blogJsonLd} />

			<section className="border-b border-neutral-800">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<motion.div
						className="max-w-3xl space-y-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.7 }}
					>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							Journal
						</p>
						<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl">
							Thoughts from inside the house.
						</h1>
						<p className="text-sm text-psr-soft-white/70">
							Design tweaks for rentals, calm landlord systems,
							and design-minded investing—short and sharp, written
							for people serious about the spaces they own.
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-6 md:grid-cols-3"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.25 }}
						variants={{
							hidden: { opacity: 0, y: 40 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.6,
									staggerChildren: 0.12,
								},
							},
						}}
					>
						{sortedPosts.map((post) => (
							<motion.article
								key={post.slug}
								className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-black/40 p-5"
								variants={{
									hidden: { opacity: 0, y: 30 },
									visible: { opacity: 1, y: 0 },
								}}
							>
								<div className="space-y-2">
									<p className="text-[0.6rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
										{post.category}
									</p>
									<h2 className="text-sm font-semibold text-psr-soft-white">
										{post.title}
									</h2>
									<p className="text-[0.7rem] text-psr-soft-white/50">
										{post.date}
									</p>
									<p className="text-[0.8rem] text-psr-soft-white/65">
										{post.excerpt}
									</p>
								</div>
								<div className="mt-4 text-[0.7rem]">
									<a
										href={`/blog/${post.slug}`}
										className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
									>
										Read article →
									</a>
								</div>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>
		</main>
	);
}
