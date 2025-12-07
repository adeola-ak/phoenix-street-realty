"use client";

import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/PrimaryButton";
import { JsonLd } from "@/components/seo/JsonLd";

export default function HomePageClient() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": "https://phoenixstreetrealty.com/#website",
				url: "https://phoenixstreetrealty.com/",
				name: "Phoenix Street Realty",
				description:
					"Luxury real estate, tenant screening, and interior design consults for sellers, landlords, and investors.",
				inLanguage: "en",
				publisher: {
					"@id": "https://phoenixstreetrealty.com/#organization",
				},
			},
			{
				"@type": "Organization",
				"@id": "https://phoenixstreetrealty.com/#organization",
				name: "Phoenix Street Realty",
				url: "https://phoenixstreetrealty.com/",
				description:
					"A luxury real-estate and home-design house offering tenant screening, design consults, rental prep, curated purchasing, and landlord support.",
				logo: {
					"@type": "ImageObject",
					url: "https://phoenixstreetrealty.com/logo.png",
				},
			},
		],
	};
	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={jsonLd} />
			<HeroSection />
			<ServicesTeaserSection />
			<BrandStatementSection />
			<AudienceStripSection />
			<PortfolioTeaserSection />
			<VisionSection />
			<JournalTeaserSection />
			<FinalCtaSection />
		</main>
	);
}

/* ------------------------- HERO ------------------------- */

function HeroSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 md:flex-row md:items-center lg:gap-20">
				<div className="flex-1 space-y-8">
					<motion.p
						className="text-[0.6rem] tracking-[0.35em] uppercase text-psr-soft-white/60"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Phoenix Street Realty
					</motion.p>

					<motion.h1
						className="font-[var(--font-playfair)] text-4xl leading-tight md:text-5xl lg:text-[3.5rem] text-psr-ivory"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						Luxury real estate
						<span className="block text-psr-soft-white/90">
							with a designer’s point of view.
						</span>
					</motion.h1>

					<motion.p
						className="max-w-xl text-sm text-psr-soft-white/70"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						A high-end private real estate and home-design house
						blending quiet wealth, modern architectural minimalism,
						and editorial interiors—for sellers, landlords, and
						investors who treat home as a lifestyle asset.
					</motion.p>

					<motion.div
						className="flex flex-wrap gap-4 pt-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						<PrimaryButton href="/contact">
							Book a private consult
						</PrimaryButton>
						<SecondaryButton href="/portfolio">
							View our work
						</SecondaryButton>
					</motion.div>

					<motion.div
						className="mt-6 flex flex-wrap gap-8 text-[0.7rem] text-psr-soft-white/55"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.4 }}
					>
						<div>
							<p className="font-semibold text-psr-soft-white">
								Quiet wealth
							</p>
							<p>
								Design, operations, and returns with restraint.
							</p>
						</div>
						<div>
							<p className="font-semibold text-psr-soft-white">
								For visionaries
							</p>
							<p>
								Sellers, landlords, and investors with a point
								of view.
							</p>
						</div>
					</motion.div>
				</div>

				{/* Right: cinematic “hero card” */}
				<motion.div
					className="flex-1"
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.25 }}
				>
					<div className="relative mx-auto max-w-md">
						<div className="rounded-2xl border border-psr-soft-white/10 bg-gradient-to-b from-black via-psr-charcoal-soft to-black p-3 shadow-card-soft">
							<div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,_#1a1a1a,_#050505)]">
								<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/40" />
								<div className="absolute right-6 top-10 h-40 w-px bg-psr-gold/70" />
								<div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-psr-charcoal via-transparent" />
							</div>
						</div>

						<div className="pointer-events-none absolute -bottom-8 left-6 rounded-2xl border border-psr-soft-white/10 bg-psr-charcoal/90 px-4 py-3 text-[0.7rem] text-psr-soft-white/80 backdrop-blur">
							<div className="flex gap-6">
								<div>
									<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-soft-white/40">
										design-led rentals
									</p>
									<p className="mt-1 text-sm font-semibold text-psr-soft-white">
										90%+
									</p>
									<p className="text-[0.65rem] text-psr-soft-white/50">
										occupancy across stages
									</p>
								</div>
								<div>
									<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-soft-white/40">
										portfolio vision
									</p>
									<p className="mt-1 text-sm font-semibold text-psr-soft-white">
										design × returns
									</p>
									<p className="text-[0.65rem] text-psr-soft-white/50">
										homes as lifestyle assets
									</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ----------------- “WHAT WE DO RIGHT NOW” ---------------- */

const servicesTeaser = [
	{
		label: "Virtual",
		title: "Interior Design Consults",
		body: "Room-by-room guidance on layout, palette, and pieces—delivered privately over video.",
	},
	{
		label: "Rental ready",
		title: "Property Prep",
		body: "Rent-ready plans, finishes, and photographs so rentals feel considered, not improvised.",
	},
	{
		label: "Landlord",
		title: "Tenant Screening & Landlord Systems",
		body: "Premium tenant screening, background checks, and calm landlord systems so you can make decisions with confidence.",
	},
];

function ServicesTeaserSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 pb-16 pt-6 md:pb-20 md:pt-10">
				<motion.div
					className="mb-10 space-y-2"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Our core services.
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
						Design-forward services for sellers, landlords, and
						modern owners.
					</h2>
					<p className="max-w-xl text-[0.85rem] text-psr-soft-white/70 leading-relaxed">
						A selection of services designed to elevate rentals,
						refine interiors, and prepare both homes and landlords
						for their next chapter.
					</p>
				</motion.div>

				<motion.div
					className="grid gap-6 md:grid-cols-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.25 }}
					variants={{
						hidden: { opacity: 0, y: 32 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.6, staggerChildren: 0.1 },
						},
					}}
				>
					{servicesTeaser.map((service) => (
						<motion.div
							key={service.title}
							className="flex flex-col justify-between rounded-2xl border border-psr-gold/40 bg-psr-charcoal-soft/60 px-6 py-6 shadow-card-soft/40"
							variants={{
								hidden: { opacity: 0, y: 24 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div>
								<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-gold/85">
									{service.label}
								</p>
								<h3 className="mt-3 font-[var(--font-playfair)] text-sm font-medium text-psr-ivory">
									{service.title}
								</h3>
								<p className="mt-3 text-[0.8rem] text-psr-soft-white/75">
									{service.body}
								</p>
							</div>
							<div className="mt-5 text-[0.75rem] text-psr-soft-white/60">
								<a
									href="/services"
									className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
								>
									View all services →
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- BRAND STATEMENT --------------------- */

function BrandStatementSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr,1fr] md:py-20">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
						A private real estate & design house
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						Real estate, interior design, and portfolio strategy
						under one roof.
					</h2>
				</motion.div>
				<motion.div
					className="space-y-3 text-sm text-neutral-800/80"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					<p>
						Phoenix Street Realty operates at the intersection of
						real estate investing and high-end interior design.
						Rentals, renovations, and listings are treated as
						long-term assets—not one-off transactions.
					</p>
					<p>
						From virtual interior consults and rent-ready prep to
						portfolio conversations, we help sellers, landlords, and
						design-minded investors make decisions that look as good
						as they perform.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- AUDIENCE STRIP --------------------- */

const audiences = [
	{
		label: "Sellers",
		text: "Preparing a home to hit the market quietly and beautifully.",
	},
	{
		label: "Landlords",
		text: "Design-led rentals that stay desirable and rent-ready.",
	},
	{
		label: "Design clients",
		text: "Virtual styling and space planning with a clear point of view.",
	},
	{
		label: "Investors",
		text: "Acquisitions, renovations, and holds with design at the core.",
	},
];

function AudienceStripSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-10">
				<motion.div
					className="grid gap-6 border border-neutral-800/90 bg-black/40 px-4 py-6 text-[0.8rem] md:grid-cols-4 md:px-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					{audiences.map((item, i) => (
						<div
							key={item.label}
							className={`space-y-2 ${
								i !== audiences.length - 1
									? "border-b border-neutral-800 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4"
									: ""
							}`}
						>
							<p className="text-[0.6rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								{item.label}
							</p>
							<p className="text-psr-soft-white/75">
								{item.text}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- PORTFOLIO TEASER --------------------- */

const portfolioItems = [
	{
		tag: "Rental refresh",
		title: "Downtown loft, off-market rental prep",
		copy: "A moody living space reworked for long-term tenants and editorial-level photos.",
	},
	{
		tag: "Seller staging",
		title: "Townhouse, quiet-listing styling direction",
		copy: "Soft staging layers that photographed like a spread and showed like a home.",
	},
	{
		tag: "Virtual design",
		title: "City apartment, remote living room redesign",
		copy: "A full furniture and palette overhaul guided entirely over video.",
	},
];

function PortfolioTeaserSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<div>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/50">
							Portfolio
						</p>
						<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
							Spaces with a story.
						</h2>
					</div>
					<a
						href="/portfolio"
						className="text-[0.7rem] tracking-[0.25em] uppercase text-psr-gold"
					>
						Explore the portfolio →
					</a>
				</motion.div>

				<motion.div
					className="grid gap-6 md:grid-cols-3"
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
					{portfolioItems.map((item) => (
						<motion.div
							key={item.title}
							className="flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-psr-charcoal-soft via-[#050505] to-psr-charcoal shadow-card-soft/40"
							variants={{
								hidden: { opacity: 0, y: 24 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							{/* image / placeholder */}
							<div className="aspect-[4/3] w-full bg-gradient-to-br from-black/80 via-psr-charcoal-soft to-psr-charcoal" />

							{/* text area */}
							<div className="space-y-2 bg-gradient-to-t from-black/80 via-psr-charcoal-soft/85 to-transparent p-5 text-[0.8rem]">
								<p className="text-[0.6rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
									{item.tag}
								</p>
								<p className="font-[var(--font-playfair)] text-psr-ivory">
									{item.title}
								</p>
								<p className="text-psr-soft-white/70">
									{item.copy}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- VISION / INVESTMENT --------------------- */

const visionSteps = [
	{
		title: "Acquire",
		body: "Identify properties with strong bones, light, and layout potential.",
	},
	{
		title: "Renovate",
		body: "Apply a design lens that balances durability, comfort, and aesthetics.",
	},
	{
		title: "Design & stage",
		body: "Style spaces to live beautifully and photograph like an editorial.",
	},
	{
		title: "Hold or flip",
		body: "Decide whether the home belongs in a long-term portfolio or on the market.",
	},
];

function VisionSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
						Investment focus
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						where design and returns speak the same language.
					</h2>
					<p className="text-sm text-neutral-800/85">
						Phoenix Street Realty is building a design-led
						portfolio: acquisitions, renovations, and rentals that
						feel as good to live in as they look online. Less
						volume, more intention.
					</p>
				</motion.div>
				<motion.div
					className="space-y-4 rounded-2xl border border-neutral-300/80 bg-psr-soft-white/70 p-5 text-sm text-neutral-900"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					{visionSteps.map((step, index) => (
						<div
							key={step.title}
							className="flex gap-4 border-b border-neutral-300/60 pb-4 last:border-b-0 last:pb-0"
						>
							<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-psr-gold text-[0.7rem] font-semibold text-psr-gold">
								{index + 1}
							</div>
							<div>
								<p className="font-semibold">{step.title}</p>
								<p className="text-[0.8rem] text-neutral-700">
									{step.body}
								</p>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- JOURNAL TEASER --------------------- */

function JournalTeaserSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<div>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/50">
							Journal
						</p>
						<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
							Thoughts from inside the house.
						</h2>
					</div>
					<a
						href="/blog"
						className="text-[0.7rem] tracking-[0.25em] uppercase text-psr-gold"
					>
						Read the journal →
					</a>
				</motion.div>
				<motion.p
					className="max-w-xl text-[0.8rem] text-psr-soft-white/70"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6 }}
				>
					Design tricks for rentals, calm-landlord systems, and
					design-minded investing—short, sharp, and written for people
					who are serious about the spaces they own.
				</motion.p>
			</div>
		</section>
	);
}

/* --------------------- FINAL CTA --------------------- */

function FinalCtaSection() {
	return (
		<section className="bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-2xl space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
						Private inquiry
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						tell us about your property.
					</h2>
					<p className="text-sm text-neutral-800/85">
						For design-led rentals, off-market preparations, or
						portfolio conversations, share a few details and we will
						respond personally.
					</p>
				</motion.div>
				<motion.div
					className="mt-6 flex flex-wrap items-center gap-4"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6, delay: 0.05 }}
				>
					<PrimaryButton href="/contact">
						Submit a private inquiry
					</PrimaryButton>
					<p className="text-[0.75rem] text-neutral-700">
						Or email us at{" "}
						<a
							href="mailto:hello@phoenixstreetrealty.com"
							className="border-b border-neutral-500 pb-[1px]"
						>
							hello@phoenixstreetrealty.com
						</a>
						.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
