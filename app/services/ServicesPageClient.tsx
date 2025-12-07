"use client";

import { motion } from "framer-motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { SecondaryButton } from "@/components/ui/PrimaryButton";

export default function ServicesPageClient() {
	const servicesJsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				"@id": "https://phoenixstreetrealty.com/services#tenant-screening",
				name: "Tenant Screening & Applicant Verification",
				serviceType:
					"Tenant screening and rental applicant verification for landlords and property owners.",
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
					"Premium tenant screening with fast turnaround, manual verification, employment and landlord calls, fraud detection, identity checks, eviction and criminal search, and a clear, easy-to-read report for landlords.",
				termsOfService:
					"https://phoenixstreetrealty.com/services#tenant-screening-terms",
			},
			{
				"@type": "Service",
				"@id": "https://phoenixstreetrealty.com/services#design-consults",
				name: "Interior Design Consultations & Rental Prep",
				serviceType:
					"Virtual interior design consultations, rental-ready property prep, and styling.",
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
							text: "Our tenant screening includes identity confirmation, criminal and sex offender checks, eviction history, a full credit report, income and employment verification, prior landlord references, and a clear summary report.",
						},
					},
					{
						"@type": "Question",
						name: "Do you manually verify employers and past landlords?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Yes. We manually contact employers and prior landlords, ask detailed questions, and watch for signs of fake or mismatched references.",
						},
					},
					{
						"@type": "Question",
						name: "Can you detect fraud in documents like pay stubs or bank statements?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "We review documents for inconsistencies, manipulation, and red flags in pay stubs and bank statements, and surface any concerns in the final report.",
						},
					},
					{
						"@type": "Question",
						name: "Are your tenant screening services designed to be compliant?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Our process is designed to align with FCRA and fair housing guidance by using reputable reporting sources and consistent criteria across applicants.",
						},
					},
					{
						"@type": "Question",
						name: "Do you offer bulk screening for multiple units or portfolios?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Yes. We offer bulk or repeat screening options for landlords, small portfolios, and property managers with multiple applications.",
						},
					},
					{
						"@type": "Service",
						"@id": "https://phoenixstreetrealty.com/services#tenant-screening",
						name: "Tenant Screening & Applicant Verification",
						serviceType:
							"Tenant screening and rental applicant verification for landlords and property owners.",
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
							"Premium tenant screening with fast turnaround, manual verification, employment and landlord calls, fraud detection, identity checks, eviction and criminal search, and a clear, easy-to-read report for landlords.",
						termsOfService:
							"https://phoenixstreetrealty.com/services#tenant-screening-terms",
					},
				],
			},
		],
	};

	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={servicesJsonLd} />
			<IntroSection />
			<TenantScreeningSection />
			<DesignConsultsSection />
			<RentalPrepSection />
			<LandlordSupportSection />
			<TenantScreeningFAQSection />
		</main>
	);
}

/* ---------------------- INTRO SECTION ---------------------- */

function IntroSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-3xl space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Services
					</p>
					<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-psr-ivory">
						Design, prep, and operations for homes that feel quietly
						expensive.
					</h1>
					<p className="text-sm text-psr-soft-white/75">
						Phoenix Street Realty blends interior design with rental
						preparation, and landlord support into one modern house.
						Start with a single room, a single unit, or a single
						decision and grow into a full portfolio standard.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

/* ----------------- TENANT SCREENING SECTION ---------------- */

function TenantScreeningSection() {
	return (
		<section
			id="tenant-screening"
			className="border-b border-neutral-800 bg-black/40"
		>
			<div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr,1fr] md:py-20">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-gold/85">
						Tenant Screening & Applicant Verification
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
						Premium tenant screening and background checks for calm,
						confident landlords.
					</h2>
					<p className="text-sm text-psr-soft-white/80">
						Most screening tools give you a stack of data. We give
						you clarity. Phoenix Street Realty combines certified
						tenant reports with human-level verification—calls,
						questions, and pattern recognition—to protect your
						property from the wrong tenant.
					</p>

					<p className="text-sm text-psr-soft-white/75">
						Our process is designed to be fast, compliant, and
						considerate—protecting your investment while providing a
						fair, consistent experience for every applicant.
					</p>

					<div className="grid gap-4 pt-4 text-[0.85rem] md:grid-cols-2">
						<div className="space-y-2">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								Identity & background
							</p>
							<ul className="space-y-1 text-psr-soft-white/75">
								<li>• Identity confirmation</li>
								<li>
									• Criminal background checks (national,
									state, county)
								</li>
								<li>• Sex offender registry search</li>
								<li>
									• Address history and cross-database
									consistency
								</li>
							</ul>
						</div>
						<div className="space-y-2">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								Financial & credit
							</p>
							<ul className="space-y-1 text-psr-soft-white/75">
								<li>• Full credit report and score</li>
								<li>
									• Tradeline review (late payments,
									collections, bankruptcies)
								</li>
								<li>• Income and employment verification</li>
								<li>• Debt-to-income context</li>
							</ul>
						</div>
						<div className="space-y-2">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								Rental history
							</p>
							<ul className="space-y-1 text-psr-soft-white/75">
								<li>• Prior landlord references</li>
								<li>• Payment and late-rent patterns</li>
								<li>• Lease compliance issues</li>
								<li>• Eviction history search</li>
							</ul>
						</div>
						<div className="space-y-2">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								Fraud & inconsistency checks
							</p>
							<ul className="space-y-1 text-psr-soft-white/75">
								<li>
									• Document review (IDs, pay stubs, bank
									statements)
								</li>
								<li>• Fake employer & fake landlord signals</li>
								<li>
									• Optional social media and open-source
									sanity checks
								</li>
								<li>• Clear risk summary and notes</li>
							</ul>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="space-y-4 rounded-2xl border border-psr-gold/60 bg-black/50 p-5 text-[0.85rem] text-psr-soft-white/80 shadow-card-soft/40"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-gold/85">
						How it works
					</p>
					<ol className="mt-2 space-y-2">
						<li>
							<span className="font-semibold text-psr-soft-white">
								01 — Applicant applies.
							</span>{" "}
							We send a secure link for consent and basic
							application data.
						</li>
						<li>
							<span className="font-semibold text-psr-soft-white">
								02 — Data & reports.
							</span>{" "}
							We pull credit, background, eviction, and address
							history through reputable reporting sources.
						</li>
						<li>
							<span className="font-semibold text-psr-soft-white">
								03 — Manual verification.
							</span>{" "}
							We contact employers and past landlords, review pay
							stubs and bank statements, and look for fraud
							signals.
						</li>
						<li>
							<span className="font-semibold text-psr-soft-white">
								04 — Clear decision support.
							</span>{" "}
							You receive a clean, professional report with risk
							context and recommendations—not a raw data dump.
						</li>
					</ol>
					<p className="mt-3 text-psr-soft-white/70">
						Screening options available for single units, small
						portfolios, or recurring applicants. Bulk pricing
						discussed during onboarding.
					</p>
					<div className="pt-2">
						<a
							href="https://phoenixstreetrealty.com/contact"
							className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
						>
							Start a tenant screening request →
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ------------- DESIGN CONSULTS & STYLING SECTION ------------- */

function DesignConsultsSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr,1fr] md:py-20">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Virtual Interior Design & Styling
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
						Quiet, structured, and tailored to your level of
						involvement.
					</h2>
					<p className="text-sm text-psr-soft-white/80">
						From single rooms to entire apartments, our virtual
						design sessions focus on layout, palette, and pieces
						that match both your taste and the property’s future—
						whether that is a long-term rental, a sale, or simply a
						more intentional home.
					</p>
					<div className="grid gap-4 pt-4 text-[0.85rem] md:grid-cols-2">
						<div className="space-y-1 text-psr-soft-white/75">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								What we cover
							</p>
							<ul className="space-y-1">
								<li>• Layout and furniture planning</li>
								<li>• Color, materials, and lighting</li>
								<li>• Styling details and layers</li>
								<li>
									• Rental-safe updates that still feel
									upgraded
								</li>
							</ul>
						</div>
						<div className="space-y-1 text-psr-soft-white/75">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								After the call
							</p>
							<ul className="space-y-1">
								<li>• A concise recap of key decisions</li>
								<li>• Shoppable links for agreed pieces</li>
								<li>
									• Options at multiple price tiers when
									helpful
								</li>
								<li>
									• Light sourcing support as you execute the
									plan
								</li>
							</ul>
						</div>
					</div>
					<p className="text-[0.85rem] text-psr-soft-white/70">
						We can also coordinate with your existing team—agents,
						contractors, or photographers—so the design supports the
						listing or rental strategy.
					</p>
				</motion.div>
				<motion.div
					className="space-y-3 rounded-2xl border border-neutral-800 bg-psr-charcoal-soft/70 p-5 text-[0.85rem] text-psr-soft-white/80"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					<p className="font-semibold text-psr-soft-white">
						Ideal for
					</p>
					<ul className="mt-1 space-y-1">
						<li>• Owners refreshing a primary home</li>
						<li>• Landlords elevating a key unit</li>
						<li>• Sellers preparing a quiet listing</li>
						<li>• Design clients wanting a second opinion</li>
					</ul>
					<p className="mt-3 text-psr-soft-white/70">
						Sessions are conducted virtually, with follow-up
						delivered in a clean, editorial-style recap instead of a
						heavy design package.
					</p>
					<div className="pt-2">
						<a
							href="https://phoenixstreetrealty.com/contact"
							className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
						>
							Request a design consult →
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ----------------- RENTAL PREP & STAGING SECTION ---------------- */

function RentalPrepSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr,1fr] md:py-20">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
						Rental-ready prep & light staging
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						Rentals that feel considered, not improvised.
					</h2>
					<p className="text-sm text-neutral-800/85">
						We build rent-ready plans that balance durability,
						photography, and everyday use. The goal is not to
						over-stage, but to set a standard that attracts the
						right tenant and keeps the unit desirable between
						cycles.
					</p>
					<div className="grid gap-4 pt-4 text-[0.85rem] md:grid-cols-2">
						<div className="space-y-1">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-ember/80">
								What’s included
							</p>
							<ul className="space-y-1 text-neutral-800/85">
								<li>• Walkthrough and rent-ready assessment</li>
								<li>• Recommended updates and priorities</li>
								<li>
									• Paint, lighting, and hardware suggestions
								</li>
								<li>
									• Photography direction and basic styling
								</li>
							</ul>
						</div>
						<div className="space-y-1">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-ember/80">
								Trusted vendors
							</p>
							<ul className="space-y-1 text-neutral-800/85">
								<li>• Cleaner recommendations</li>
								<li>• Painter and handyman referrals</li>
								<li>• Maintenance and repair guidance</li>
								<li>• Coordination notes for your team</li>
							</ul>
						</div>
					</div>
					<p className="text-[0.85rem] text-neutral-800/85">
						For select projects, we can also help source key pieces
						and styling layers so the rental photographs like an
						editorial, not an afterthought.
					</p>
				</motion.div>
				<motion.div
					className="space-y-3 rounded-2xl border border-neutral-300/80 bg-psr-soft-white/80 p-5 text-[0.85rem] text-neutral-800"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					<p className="font-semibold">
						Perfect when you are about to list.
					</p>
					<p>
						Whether you are turning over one unit or quietly
						bringing a home to market, we help you decide what is
						actually worth doing—and what is not.
					</p>
					<div className="pt-2">
						<a
							href="https://phoenixstreetrealty.com/contact"
							className="border-b border-transparent pb-[2px] text-psr-ember hover:border-psr-ember"
						>
							Share an upcoming vacancy →
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ---------------------- LANDLORD SUPPORT ---------------------- */

function LandlordSupportSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr,1fr] md:py-20">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Landlord support & operating systems
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
						Calm, design-minded operations for modern landlords.
					</h2>
					<p className="text-sm text-psr-soft-white/80">
						We help you build simple, premium-feeling systems for
						applications, move-ins, checklists, and communication—
						so you are not constantly reinventing your process for
						each tenant.
					</p>
					<div className="grid gap-4 pt-4 text-[0.85rem] md:grid-cols-2">
						<div className="space-y-1 text-psr-soft-white/75">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								Systems we support
							</p>
							<ul className="space-y-1">
								<li>• Application and screening workflows</li>
								<li>• Move-in and move-out checklists</li>
								<li>• Rent-ready property standards</li>
								<li>• Documentation and record keeping</li>
							</ul>
						</div>
						<div className="space-y-1 text-psr-soft-white/75">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								For growing owners
							</p>
							<ul className="space-y-1">
								<li>• Small portfolio owners</li>
								<li>• First-time or “accidental” landlords</li>
								<li>
									• Hybrid self-managed and agent-supported
								</li>
								<li>• Owners preparing to scale</li>
							</ul>
						</div>
					</div>
					<p className="text-[0.85rem] text-psr-soft-white/75">
						The goal is a calm, quietly professional experience for
						your tenants and for you—without turning your life into
						a second full-time job.
					</p>
				</motion.div>
				<motion.div
					className="space-y-3 rounded-2xl border border-neutral-800 bg-black/40 p-5 text-[0.85rem] text-psr-soft-white/80"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					<p className="font-semibold text-psr-soft-white">
						Consulting, not property management.
					</p>
					<p>
						We are not a traditional property management company.
						Instead, we sit beside you as an advisor on systems,
						process, and presentation—so you can run your own
						portfolio with more confidence.
					</p>
					<div className="pt-2">
						<a
							href="https://phoenixstreetrealty.com/contact"
							className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
						>
							Discuss landlord support →
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ---------------------- TENANT FAQ SECTION ---------------------- */

function TenantScreeningFAQSection() {
	return (
		<section
			id="tenant-screening-faq"
			className="border-b border-neutral-800 bg-black/35"
		>
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="mb-6 max-w-3xl space-y-3"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						FAQs
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl text-psr-ivory">
						Questions before you book a call.
					</h2>
					<p className="text-sm text-psr-soft-white/75">
						If you are between services or curious how we might
						partner across design and investing, these are a few of
						the conversations that come up most often.
					</p>
				</motion.div>
				<motion.div
					className="space-y-4 text-[0.9rem] text-psr-soft-white/80"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					<FAQItem
						question="How is your tenant screening different from a basic online background check?"
						answer="Most low-cost services simply pull records and hand you a raw report. We combine certified screening data with manual verification—calling employers and landlords, reviewing documents, and flagging inconsistencies—so you receive a clear view of who is applying, not just a PDF of results."
					/>
					<FAQItem
						question="How quickly will I receive results?"
						answer="Turnaround time depends on the responsiveness of employers and landlords, but many screenings can be completed within 24–72 hours. We keep you updated so you are never wondering where things stand."
					/>
					<FAQItem
						question="Can you help me interpret the report and make a decision?"
						answer="Yes. Along with the report, we provide clear context and a risk summary. We do not make the decision for you, but we do explain what we are seeing so that your choice is informed, calm, and defensible."
					/>
					<FAQItem
						question="Do you offer screening for multiple units or recurring applicants?"
						answer="Yes. If you have several units or an ongoing need for tenant screening, we can discuss a recurring or bulk structure that fits your portfolio."
					/>
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

type FAQItemProps = {
	question: string;
	answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
	return (
		<div className="rounded-2xl border border-neutral-800 bg-black/40 p-4">
			<p className="text-[0.75rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
				Question
			</p>
			<p className="mt-1 text-sm font-semibold text-psr-soft-white">
				{question}
			</p>
			<p className="mt-2 text-[0.85rem] text-psr-soft-white/80">
				{answer}
			</p>
		</div>
	);
}
