"use client";

import { JsonLd } from "@/components/seo/JsonLd";
import { motion } from "framer-motion";

const projects = [
	{
		tag: "Rental refresh",
		title: "Downtown loft, rent-ready transformation",
		location: "City core",
		services: ["Rental prep", "Virtual design direction"],
		copy: "A dark, underused loft reworked for long-term tenants and editorial-level listing photography.",
	},
	{
		tag: "Seller staging",
		title: "Townhouse, quiet listing styling",
		location: "Historic district",
		services: ["Styling & staging direction"],
		copy: "Light, layered styling that photographed like a magazine spread and showed like a home, not a set.",
	},
	{
		tag: "Virtual design",
		title: "Apartment, remote living room redesign",
		location: "High-rise",
		services: ["Virtual design consult", "Layout strategy"],
		copy: "A full furniture and palette overhaul guided entirely over video for a design-minded renter.",
	},
	{
		tag: "Landlord systems",
		title: "Multi-unit portfolio, calm landlord systems",
		location: "Multiple neighborhoods",
		services: ["Landlord support", "Checklist & workflow design"],
		copy: "Turnovers, inspections, and communications designed to feel structured, repeatable, and premium.",
	},
];

export default function PortfolioPageClient() {
	const portfolioJsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"@id": "https://phoenixstreetrealty.com/portfolio",
		url: "https://phoenixstreetrealty.com/portfolio",
		name: "Portfolio – Phoenix Street Realty",
		description:
			"Design-led interior transformations, styled rentals, and portfolio-ready spaces by Phoenix Street Realty.",
	};
	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={portfolioJsonLd} />
			<IntroSection />
			<ProjectGridSection />
			<FuturePortfolioSection />
		</main>
	);
}

/* ------------------------- INTRO ------------------------ */

function IntroSection() {
	return (
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
						Portfolio
					</p>
					<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl">
						Spaces we have reimagined, refreshed, and prepared.
					</h1>
					<p className="text-sm text-psr-soft-white/70">
						A closer look at rentals, listings, and interiors we
						have reworked for photography, everyday living, and
						long-term value.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

/* ----------------------- PROJECT GRID -------------------- */

function ProjectGridSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="mt-8 grid gap-6 md:grid-cols-2"
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
					{projects.map((project) => (
						<motion.article
							key={project.title}
							className="flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-psr-charcoal-soft via-[#050505] to-psr-charcoal shadow-card-soft/40"
							variants={{
								hidden: { opacity: 0, y: 24 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							{/* image / placeholder */}
							<div className="aspect-[4/3] w-full bg-gradient-to-br from-black/80 via-psr-charcoal-soft to-psr-charcoal" />

							{/* text area – same style as teaser, more content */}
							<div className="space-y-3 bg-gradient-to-t from-black/80 via-psr-charcoal-soft/85 to-transparent p-5 text-[0.85rem]">
								<p className="text-[0.6rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
									{project.tag}
								</p>

								<h2 className="font-[var(--font-playfair)] text-sm font-semibold text-psr-ivory">
									{project.title}
								</h2>

								<p className="text-psr-soft-white/65">
									<span className="font-semibold text-psr-soft-white/80">
										Location:
									</span>{" "}
									{project.location}
								</p>

								<p className="text-psr-soft-white/75">
									{project.copy}
								</p>

								{project.services &&
									project.services.length > 0 && (
										<p className="text-psr-soft-white/65">
											<span className="font-semibold text-psr-soft-white/80">
												Services:
											</span>{" "}
											{project.services.join(" · ")}
										</p>
									)}
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* ------------------- FUTURE PORTFOLIO -------------------- */

function FuturePortfolioSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="grid gap-10 md:grid-cols-[1.4fr,1fr]"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<div className="space-y-4">
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
							Looking ahead
						</p>
						<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
							From design-led projects to a design-led portfolio.
						</h2>
						<p className="text-sm text-neutral-800/85">
							Phoenix Street Realty is actively building and
							curating a portfolio of design-forward properties.
							Over time, this space will expand to showcase
							renovations, before-and-after transformations, and
							select rentals and sales that reflect our point of
							view.
						</p>
						<p className="text-sm text-neutral-800/80">
							We are less focused on volume and more focused on a
							consistent standard—spaces that feel considered,
							durable, and quietly confident.
						</p>
					</div>
					<div className="space-y-3 rounded-2xl border border-neutral-300/80 bg-psr-soft-white/70 p-5 text-[0.85rem] text-neutral-800">
						<p className="font-semibold">
							Future portfolio features
						</p>
						<ul className="mt-2 space-y-2">
							<li>
								• Renovation case studies with floor plans and
								key decisions.
							</li>
							<li>
								• Before / after galleries styled like editorial
								spreads.
							</li>
							<li>
								• Select rentals and quiet listings when
								appropriate.
							</li>
							<li>
								• Design notes and materials palettes by
								project.
							</li>
						</ul>
						<p className="mt-3 text-neutral-700">
							For early access to upcoming projects or potential
							partnerships, share more about your goals on the
							contact page.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
