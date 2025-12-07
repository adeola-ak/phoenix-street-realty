"use client";

import { JsonLd } from "@/components/seo/JsonLd";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/PrimaryButton";

const services = [
	{
		id: "virtual-design",
		label: "Virtual design",
		name: "Virtual interior design consultations",
		tagline:
			"Room-by-room direction for spaces that need a sharper point of view.",
		idealFor: [
			"Homeowners refreshing key rooms before selling or renting",
			"Design-minded renters who want impact without renovations",
			"Landlords who want elevated, durable finishes and layouts",
		],
		includes: [
			"Live video walk-through of your space",
			"Recommendations on layout, palette, and key pieces",
			"Follow-up summary with priorities and next steps",
		],
		note: "Best for 1–2 rooms per session.",
	},
	{
		id: "rental-prep",
		label: "Rental prep",
		name: "Rental-ready property preparation",
		tagline:
			"Turnovers that feel intentional, efficient, and quietly luxurious.",
		idealFor: [
			"Landlords preparing for a new tenant or listing photos",
			"Owners converting primary homes into rentals",
			"Short-term rentals needing a design-led refresh",
		],
		includes: [
			"Rent-ready assessment with a prioritized checklist",
			"Recommendations for finishes, lighting, and furniture",
			"Guidance on photography, online presentation, and flow",
		],
		note: "Designed to support both DIY and existing on-the-ground teams.",
	},
	{
		id: "styling-staging",
		label: "Styling & staging",
		name: "Styling & staging direction",
		tagline: "Homes photographed and shown like understated editorials.",
		idealFor: [
			"Homeowners preparing to hit the market (on or off MLS)",
			"Sellers who want to avoid over-staging or generic looks",
			"Hosts and landlords planning listing photography",
		],
		includes: [
			"Room-by-room styling strategy",
			"Recommendations for art, textiles, and key decor layers",
			"Tips for lighting, angles, and photography styling",
		],
		note: "Pairs well with your existing stager or photographer.",
	},
	{
		id: "landlord-support",
		label: "Landlord support",
		name: "Landlord systems & support",
		tagline:
			"Calm, design-conscious support for modern, detail-driven landlords.",
		idealFor: [
			"First-time landlords building systems from scratch",
			"Owners with multiple units wanting a consistent standard",
			"Anyone needing clearer move-in and move-out workflows",
		],
		includes: [
			"Tenant screening criteria and support",
			"Move-in / move-out checklists and templates",
			"Rent-ready systems tailored to your portfolio",
		],
		note: "We are not a property management company; we help you think like one.",
	},
];

const faqs = [
	{
		q: "Do you work with clients outside my city?",
		a: "Yes. Most design consultations and landlord support services are delivered virtually via video, photos, and floor plans. For select projects, in-person support may be available depending on scope and location.",
	},
	{
		q: "Can I start with just one room or one unit?",
		a: "Absolutely. Many clients start with a single room, unit, or property. Once we establish a standard you love, we can scale that same approach across additional spaces at your pace.",
	},
	{
		q: "Do you handle ongoing property management?",
		a: "Phoenix Street Realty focuses on design-forward strategy, rental prep, and landlord systems. We can help you evaluate and coordinate with local management partners, but we do not operate as a traditional property management company.",
	},
	{
		q: "What if I am not sure which service I need?",
		a: "Start by telling us about your property, timeline, and goals—renting, selling, refreshing, or investing. We will recommend the clearest starting point and outline options from there.",
	},
];

const processSteps = [
	{
		title: "01 · Intake",
		body: 'You tell us about your property, timeline, and what "luxury" means for this space.',
	},
	{
		title: "02 · Strategy",
		body: "We define the look, the priorities, and the level of depth appropriate for your goals.",
	},
	{
		title: "03 · Execution",
		body: "We work through design, prep, or systems—virtually or alongside your existing team.",
	},
	{
		title: "04 · Next move",
		body: "We align your space with your broader portfolio plan: hold, sell, or reinvest.",
	},
];

export default function ServicesPageClient() {
	const servicesJsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				"@id": "https://phoenixstreetrealty.com/services#tenant-screening",
				name: "Tenant Screening Services",
				serviceType:
					"Tenant screening and background checks for landlords and property owners.",
				provider: {
					"@type": "Organization",
					name: "Phoenix Street Realty",
					url: "https://phoenixstreetrealty.com/",
				},
				areaServed: {
					"@type": "Place",
					name: "United States",
				},
				description:
					"Premium tenant screening with fast turnaround, manual verification, employer and landlord calls, fraud detection, identity checks, credit review, eviction search, and a clear, easy-to-read report for landlords.",
				termsOfService:
					"https://phoenixstreetrealty.com/services#tenant-screening-terms",
			},
			{
				"@type": "Service",
				"@id": "https://phoenixstreetrealty.com/services#design-consults",
				name: "Interior Design Consultations & Rental Prep",
				serviceType:
					"Virtual interior design consultations, rental-ready property preparation, and styling.",
				provider: {
					"@type": "Organization",
					name: "Phoenix Street Realty",
					url: "https://phoenixstreetrealty.com/",
				},
				description:
					"Design-forward services including virtual interior consults, room-by-room styling, curated purchasing of furniture and decor, and recommendations for cleaners, painters, and maintenance providers.",
			},
			{
				"@type": "FAQPage",
				"@id": "https://phoenixstreetrealty.com/services#tenant-screening-faq",
				mainEntity: [
					{
						"@type": "Question",
						name: "What does your tenant screening include?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Our tenant screening includes identity confirmation, criminal and sex offender checks, eviction history, full credit report and score, income and employment verification, prior landlord references, and a clear summary report.",
						},
					},
					{
						"@type": "Question",
						name: "Do you manually verify employers and past landlords?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Yes. We manually contact employers and prior landlords, ask detailed questions, and detect fake or mismatched references when possible.",
						},
					},
					{
						"@type": "Question",
						name: "Can you detect fraud in documents like pay stubs or bank statements?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "We review documents for inconsistencies, manipulation, and red flags in pay stubs and bank statements, and we surface any concerns in the final report.",
						},
					},
					{
						"@type": "Question",
						name: "Are your tenant screening services compliant with housing laws?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Our process is designed to be aligned with FCRA and fair housing guidance, using reputable consumer reporting agencies and fair, consistent criteria for each applicant.",
						},
					},
					{
						"@type": "Question",
						name: "Do you offer bulk screening for multiple units or portfolios?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Yes. We offer bulk or repeat screening packages for landlords, small portfolios, and property managers with multiple applications.",
						},
					},
				],
			},
		],
	};
	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={servicesJsonLd} />
			<IntroSection />
			<ServiceGridSection />
			<ProcessSection />
			<TenantScreeningSection />
			<FaqSection />
		</main>
	);
}

/* ------------------------ INTRO ------------------------ */

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
						Services
					</p>
					<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl">
						Design, prep, and operations for homes that feel quietly
						expensive.
					</h1>
					<p className="text-sm text-psr-soft-white/70">
						Phoenix Street Realty blends interior design, rental
						preparation, and landlord support into one modern house.
						Start with a single room, a single unit, or a single
						decision—and grow into a full portfolio standard.
					</p>
				</motion.div>

				<motion.div
					className="mt-8 flex flex-wrap gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<PrimaryButton href="/contact">
						Tell us about your property
					</PrimaryButton>
					<SecondaryButton href="/contact">
						Ask which service fits
					</SecondaryButton>
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- SERVICE GRID --------------------- */

function ServiceGridSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="grid gap-6 md:grid-cols-2"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={{
						hidden: { opacity: 0, y: 40 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								staggerChildren: 0.12,
								duration: 0.6,
							},
						},
					}}
				>
					{services.map((service) => (
						<motion.article
							key={service.id}
							id={service.id}
							className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-gradient-to-b from-black/85 via-neutral-900/80 to-psr-charcoal p-6 shadow-card-soft/40"
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div>
								<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-gold/85">
									{service.label}
								</p>
								<h2 className="mt-2 font-[var(--font-playfair)] text-sm font-semibold text-psr-ivory">
									{service.name}
								</h2>
								<p className="mt-2 text-[0.8rem] text-psr-soft-white/75">
									{service.tagline}
								</p>

								<div className="mt-4 grid gap-3 text-[0.8rem] md:grid-cols-2">
									<div>
										<p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-psr-soft-white/55">
											Ideal for
										</p>
										<ul className="mt-1 space-y-1 text-psr-soft-white/85">
											{service.idealFor.map((item) => (
												<li key={item}>• {item}</li>
											))}
										</ul>
									</div>
									<div>
										<p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-psr-soft-white/55">
											Includes
										</p>
										<ul className="mt-1 space-y-1 text-psr-soft-white/85">
											{service.includes.map((item) => (
												<li key={item}>• {item}</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							<div className="mt-5 flex items-center justify-between text-[0.75rem] text-psr-soft-white/55">
								<p className="italic">{service.note}</p>
								<SecondaryButton
									href="/contact"
									className="px-4 py-2"
								>
									Inquire
								</SecondaryButton>
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* ------------------------ PROCESS ----------------------- */

function ProcessSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="mb-8 max-w-2xl space-y-3"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
						Process
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						Quiet, structured, and tailored to your level of
						involvement.
					</h2>
					<p className="text-sm text-neutral-800/85">
						Whether you are hands-on or prefer a more private,
						advisory relationship, our process is designed to keep
						decisions clear, timelines realistic, and outcomes
						grounded in both design and performance.
					</p>
				</motion.div>

				<motion.div
					className="grid gap-4 md:grid-cols-4"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7 }}
				>
					{processSteps.map((step) => (
						<div
							key={step.title}
							className="space-y-2 border border-neutral-300/80 bg-psr-soft-white/60 p-4 text-[0.8rem]"
						>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-neutral-800">
								{step.title}
							</p>
							<p className="text-neutral-700">{step.body}</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* -------------------------- TENANT SCREENING -------------- */

function TenantScreeningSection() {
	return (
		<section className="border-t border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<div className="mb-8 grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-start">
					<div className="space-y-4">
						<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-soft-white/60">
							Tenant screening services
						</p>
						<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
							Premium tenant screening and background checks for
							calm, confident landlords.
						</h2>
						<p className="text-sm text-psr-soft-white/75">
							We use trusted third-party data providers (such as
							RentPrep) and add our own verification and judgment
							so you receive more than a raw report. You get a
							clear, design-led perspective on who is moving into
							your property.
						</p>
						<p className="text-sm text-psr-soft-white/70">
							Our process is designed to be fast, compliant, and
							considerate—protecting your investment while
							providing a fair, consistent experience for every
							applicant.
						</p>
					</div>

					<div className="space-y-3 rounded-2xl border border-neutral-800 bg-psr-charcoal-soft/80 p-5 text-[0.85rem] text-psr-soft-white/80 shadow-card-soft/40">
						<p className="font-semibold text-psr-ivory">
							What you receive
						</p>
						<ul className="mt-2 space-y-2">
							<li>• Verified identity and background.</li>
							<li>
								• Criminal and sex offender registry checks.
							</li>
							<li>
								• Eviction history and prior landlord
								references.
							</li>
							<li>
								• Full credit report, credit score, and
								tradeline review.
							</li>
							<li>
								• Employment and income verification where
								applicable.
							</li>
							<li>
								• A clear, easy-to-read summary to support your
								decision.
							</li>
						</ul>
						<p className="mt-3 text-psr-soft-white/65">
							Screening services are offered to landlords, small
							portfolio owners, and design-minded investors who
							want to protect their properties without turning the
							process into a full-time job.
						</p>
					</div>
				</div>

				<div className="mt-10 grid gap-8 md:grid-cols-3 text-[0.85rem] text-psr-soft-white/80">
					{/* Identity & Background */}
					<div className="space-y-3">
						<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-gold/80">
							Identity & background
						</p>
						<ul className="space-y-2">
							<li>• Identity confirmation.</li>
							<li>
								• National, state, and county criminal
								background checks.
							</li>
							<li>• Sex offender registry checks.</li>
							<li>• Eviction history search.</li>
						</ul>
					</div>

					{/* Financial & Credit */}
					<div className="space-y-3">
						<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-gold/80">
							Financial & credit
						</p>
						<ul className="space-y-2">
							<li>• Full credit report and credit score.</li>
							<li>
								• Tradeline review (late payments, collections,
								bankruptcies).
							</li>
							<li>
								• Income and employment verification where
								applicable.
							</li>
						</ul>
					</div>

					{/* Rental history & optional */}
					<div className="space-y-3">
						<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-gold/80">
							Rental history & extras
						</p>
						<ul className="space-y-2">
							<li>
								• Prior landlord references and payment history.
							</li>
							<li>
								• Lease compliance and prior issues where
								available.
							</li>
							<li>
								• Optional social media screening
								(compliance-backed).
							</li>
							<li>
								• Optional document verification (IDs, pay
								stubs, bank statements).
							</li>
							<li>
								• A simple “tenant score” style risk summary.
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 grid gap-8 md:grid-cols-[1.3fr,1fr] text-[0.85rem] text-psr-soft-white/80">
					<div className="space-y-3">
						<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-soft-white/60">
							How it works
						</p>
						<ol className="space-y-2 list-decimal list-inside">
							<li>
								Collect applications and signed screening
								consent from each applicant.
							</li>
							<li>
								We order reports from trusted consumer reporting
								agencies (CRAs) in a compliant way.
							</li>
							<li>
								We add manual work: employment checks, landlord
								calls, and fraud screening as needed.
							</li>
							<li>
								We package everything into a clean, professional
								screening report.
							</li>
							<li>
								We include a clear summary and recommendations
								to support your decision.
							</li>
						</ol>
					</div>
					<div className="space-y-3 rounded-2xl border border-neutral-800 bg-black/50 p-5">
						<p className="font-semibold text-psr-ivory">
							Designed for landlords and small portfolios
						</p>
						<p className="text-psr-soft-white/75">
							Whether you own a single unit or a small portfolio,
							our goal is the same: to help you choose reliable,
							qualified tenants without turning screening into
							guesswork.
						</p>
						<p className="text-psr-soft-white/70">
							To start a screening request or ask about volume
							screening for multiple units, use the contact form
							and mention “tenant screening” in your message.
						</p>
						<a
							href="/contact"
							className="inline-block text-[0.75rem] tracking-[0.25em] uppercase text-psr-gold border-b border-psr-gold/50 pb-[2px] mt-2"
						>
							Request screening →
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

/* -------------------------- FAQ ------------------------- */

function FaqSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-2xl space-y-3"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						FAQ
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						Questions before you book a call.
					</h2>
					<p className="text-sm text-psr-soft-white/70">
						If you are between services or curious how we might
						partner across design and investing, these are a few of
						the conversations that come up most often.
					</p>
				</motion.div>

				<motion.div
					className="mt-8 space-y-3"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					{faqs.map((item) => (
						<details
							key={item.q}
							className="group rounded-2xl border border-neutral-800 bg-black/40 p-4 text-[0.85rem]"
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-psr-soft-white">
								<span>{item.q}</span>
								<span className="text-xs text-psr-soft-white/50 group-open:hidden">
									+
								</span>
								<span className="hidden text-xs text-psr-soft-white/50 group-open:inline">
									−
								</span>
							</summary>
							<p className="mt-2 text-psr-soft-white/70">
								{item.a}
							</p>
						</details>
					))}
				</motion.div>

				<motion.div
					className="mt-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
				>
					<SecondaryButton href="/contact">
						Ask a specific question
					</SecondaryButton>
				</motion.div>
			</div>
		</section>
	);
}
