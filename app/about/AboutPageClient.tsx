"use client";

import { motion } from "framer-motion";
import { JsonLd } from "@/components/seo/JsonLd";

export function AboutPageClient() {
	const aboutJsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": "https://phoenixstreetrealty.com/about#organization",
		url: "https://phoenixstreetrealty.com/about",
		name: "Phoenix Street Realty",
		description:
			"A luxury real-estate and interior-design house offering design consults, curated purchasing, vendor recommendations, rental prep, and premium tenant screening.",
	};
	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={aboutJsonLd} />
			<section className="border-b border-neutral-800">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<motion.div
						className="max-w-3xl space-y-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.7 }}
					>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							About
						</p>
						<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-psr-ivory">
							A design-led real estate house for modern owners and
							landlords.
						</h1>
						<p className="text-sm text-psr-soft-white/75">
							Phoenix Street Realty blends luxury interiors,
							thoughtful rental prep, and calm landlord systems
							into one studio. We treat every property as a
							long-term asset and a lived-in space—never just a
							listing.
						</p>
					</motion.div>
				</div>
			</section>

			<section className="border-b border-neutral-800">
				<div className="mx-auto max-w-6xl px-6 py-14 md:py-18 grid gap-10 md:grid-cols-2">
					<motion.div
						className="space-y-4 text-sm text-psr-soft-white/80"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-[var(--font-playfair)] text-lg text-psr-ivory">
							What Phoenix Street stands for
						</h2>
						<p>
							We exist for landlords, owners, and investors who
							care about how their properties feel—not just how
							they perform. Every service, from tenant screening
							to styling, is designed to reduce noise and increase
							clarity.
						</p>
						<p>
							Our lens is design-forward but grounded: we care
							about finishes and photography, but also about
							maintenance, operations, and long-term value.
						</p>
					</motion.div>

					<motion.div
						className="space-y-4 text-sm text-psr-soft-white/80"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6, delay: 0.05 }}
					>
						<h2 className="font-[var(--font-playfair)] text-lg text-psr-ivory">
							Who we’re built for
						</h2>
						<ul className="space-y-2">
							<li>
								• Landlords who want calmer, clearer systems.
							</li>
							<li>
								• Sellers and owners preparing a home for its
								next chapter.
							</li>
							<li>
								• Investors who see interiors and operations as
								part of the same strategy.
							</li>
							<li>
								• Design-minded people who want rentals that
								feel considered, not improvised.
							</li>
						</ul>
						<p>
							If that sounds like you, start with a service that
							feels approachable—like a virtual consult or tenant
							screening—and we can build from there.
						</p>
						<a
							href="https://phoenixstreetrealty.com/contact"
							className="inline-block mt-2 text-[0.75rem] tracking-[0.25em] uppercase text-psr-gold border-b border-psr-gold/50 pb-[2px]"
						>
							Start a conversation →
						</a>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
