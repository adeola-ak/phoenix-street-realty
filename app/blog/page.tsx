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
					{/* Intro */}
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

					{/* Grid of posts */}
					<motion.div
						className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.25 }}
						variants={{
							hidden: { opacity: 0, y: 32 },
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
								className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-psr-charcoal-soft via-[#050505] to-psr-charcoal shadow-card-soft/40"
								variants={{
									hidden: { opacity: 0, y: 24 },
									visible: { opacity: 1, y: 0 },
								}}
							>
								{/* gradient “image” band */}
								<div className="aspect-[4/3] w-full bg-gradient-to-br from-black/80 via-psr-charcoal-soft to-psr-charcoal" />

								{/* text area – flex column so link sits at bottom */}
								<div className="flex flex-1 flex-col bg-gradient-to-t from-black/80 via-psr-charcoal-soft/85 to-transparent p-5 text-[0.85rem]">
									<p className="text-[0.6rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
										{post.category}
									</p>

									<h2 className="mt-1 font-[var(--font-playfair)] text-sm font-semibold text-psr-ivory">
										{post.title}
									</h2>

									<p className="mt-2 text-[0.7rem] text-psr-soft-white/55">
										{post.date}
									</p>

									<p className="mt-3 text-psr-soft-white/75">
										{post.excerpt}
									</p>

									<div className="mt-auto pt-4 text-[0.75rem]">
										<a
											href={`https://phoenixstreetrealty.com/blog/${post.slug}`}
											className="inline-flex items-center border-b border-transparent pb-[2px] text-psr-gold transition-colors hover:border-psr-gold"
										>
											Read article →
										</a>
									</div>
								</div>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>
		</main>
	);
}
