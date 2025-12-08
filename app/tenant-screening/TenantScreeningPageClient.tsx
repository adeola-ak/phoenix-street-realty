"use client";

import { motion } from "framer-motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { PrimaryButton, SecondaryButton } from "@/components/ui/PrimaryButton";

export default function TenantScreeningPageClient() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": "https://phoenixstreetrealty.com/tenant-screening",
				url: "https://phoenixstreetrealty.com/tenant-screening",
				name: "Tenant Screening Services | Phoenix Street Realty",
				description:
					"Premium tenant screening and background checks for landlords and property owners, with manual verification, fraud detection, and clear decision support.",
				about: {
					"@type": "Service",
					name: "Tenant Screening & Applicant Verification",
				},
			},
			{
				"@type": "Service",
				"@id": "https://phoenixstreetrealty.com/tenant-screening#standard",
				name: "Standard Tenant Screening",
				serviceType:
					"Standard tenant screening for individual units and small landlords.",
				provider: {
					"@type": "Organization",
					name: "Phoenix Street Realty",
					url: "https://phoenixstreetrealty.com/",
				},
				description:
					"Identity confirmation, criminal and eviction checks, full credit report and score for rental applicants.",
				areaServed: {
					"@type": "Place",
					name: "United States",
				},
			},
			{
				"@type": "Service",
				"@id": "https://phoenixstreetrealty.com/tenant-screening#premium",
				name: "Premium Tenant Screening",
				serviceType:
					"Premium tenant screening with manual verification and fraud checks.",
				provider: {
					"@type": "Organization",
					name: "Phoenix Street Realty",
					url: "https://phoenixstreetrealty.com/",
				},
				description:
					"Everything in the standard screening plus manual employer and landlord calls, document review, and a detailed risk summary.",
			},
			{
				"@type": "Service",
				"@id": "https://phoenixstreetrealty.com/tenant-screening#portfolio",
				name: "Portfolio & Multi-Unit Screening",
				serviceType:
					"Recurring tenant screening support for small portfolios and multi-unit owners.",
				provider: {
					"@type": "Organization",
					name: "Phoenix Street Realty",
					url: "https://phoenixstreetrealty.com/",
				},
				description:
					"Ongoing screening support, simple workflows, and bulk-friendly structures for owners with multiple units or repeat screening needs.",
			},
		],
	};

	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={jsonLd} />
			<HeroSection />
			<TierSection />
			<ProcessSection />
			<DifferentiatorSection />
			<FaqSection />
			<FinalCtaSection />
		</main>
	);
}

/* --------------------------- HERO --------------------------- */

function HeroSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pb-20 md:pt-24">
				<motion.div
					className="grid gap-10 md:grid-cols-[1.4fr,1fr]"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<div className="space-y-5">
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							Tenant screening &amp; background checks
						</p>
						<h1 className="font-[var(--font-playfair)] text-3xl leading-tight text-psr-ivory md:text-4xl">
							Premium tenant screening for landlords who cannot
							afford to guess.
						</h1>
						<p className="text-sm text-psr-soft-white/80">
							Most services deliver a stack of data and leave you
							to interpret it. Phoenix Street Realty combines
							certified reports with manual verification—calls,
							questions, and fraud checks—so you can make calm,
							confident decisions about who lives in your
							property.
						</p>
						<div className="flex flex-wrap gap-3 pt-3 text-[0.8rem] text-psr-soft-white/70">
							<span>
								• Identity, background, and eviction history
							</span>
							<span>• Credit and income verification</span>
							<span>• Employer &amp; landlord calls</span>
							<span>• Fraud and inconsistency checks</span>
						</div>
						<div className="mt-6 flex flex-wrap gap-4">
							<PrimaryButton href="https://phoenixstreetrealty.com/contact">
								Start a screening request
							</PrimaryButton>
							<SecondaryButton href="https://phoenixstreetrealty.com/contact">
								Ask a question first
							</SecondaryButton>
						</div>
					</div>

					<div className="space-y-4 rounded-2xl border border-psr-gold/60 bg-black/45 p-5 text-[0.85rem] text-psr-soft-white/80 shadow-card-soft/40">
						<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-gold/85">
							Designed for
						</p>
						<ul className="mt-2 space-y-2">
							<li>• Landlords with one or a few rentals</li>
							<li>• Owners self-managing premium units</li>
							<li>
								• Small portfolio owners who still expect rigor
							</li>
							<li>• Anyone burned by a bad tenant in the past</li>
						</ul>
						<p className="mt-3 text-psr-soft-white/70">
							We operate quietly, professionally, and with the
							same level of detail you put into the property
							itself.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- TIERED STRUCTURE --------------------- */

function TierSection() {
	return (
		<section className="border-b border-neutral-800 bg-black/40">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-3xl space-y-3"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Screening options
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl text-psr-ivory md:text-3xl">
						Three ways to screen—same level of care.
					</h2>
					<p className="text-sm text-psr-soft-white/80">
						Whether you are vetting a single applicant or screening
						across a small portfolio, each option is designed to
						give you a complete, human-readable picture—never just a
						score.
					</p>
				</motion.div>

				<motion.div
					className="mt-8 grid gap-6 md:grid-cols-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: { opacity: 0, y: 30 },
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
					<TierCard
						id="standard"
						label="Standard"
						title="Standard screening"
						subtitle="For straightforward units and first-time landlords."
						items={[
							"Identity confirmation and address history",
							"National, state, and county criminal checks",
							"Sex offender registry search",
							"Eviction and court record search",
							"Full credit report and score",
						]}
						footer="Ideal when you need a clean, compliant baseline on a single applicant."
					/>
					<TierCard
						id="premium"
						label="Premium"
						title="Premium screening"
						subtitle="For owners who want deeper verification."
						highlight
						items={[
							"Everything in Standard screening",
							"Employment and income verification",
							"Phone calls to current and/or prior landlords",
							"Review of IDs, pay stubs, and bank statements",
							"Fraud and inconsistency checks with notes",
						]}
						footer="Perfect when the property is high-value, the rent is premium, or you have any hesitation at all."
					/>
					<TierCard
						id="portfolio"
						label="Portfolio"
						title="Portfolio & multi-unit"
						subtitle="For recurring screening and multiple units."
						items={[
							"Customized screening workflow for your units",
							"Consistent criteria across all applicants",
							"Bulk-friendly structure for repeated screenings",
							"Calm reporting that supports your policies",
							"Optional summary views across multiple applicants",
						]}
						footer="Built for owners and small managers who want a steady, reliable process instead of one-off decisions."
					/>
				</motion.div>
			</div>
		</section>
	);
}

type TierCardProps = {
	id: string;
	label: string;
	title: string;
	subtitle: string;
	items: string[];
	footer: string;
	highlight?: boolean;
};

function TierCard({
	id,
	label,
	title,
	subtitle,
	items,
	footer,
	highlight,
}: TierCardProps) {
	return (
		<motion.article
			id={id}
			className={`flex flex-col rounded-2xl border bg-black/50 p-5 text-[0.85rem] text-psr-soft-white/80 shadow-card-soft/40 ${
				highlight ? "border-psr-gold/80" : "border-neutral-800"
			}`}
			variants={{
				hidden: { opacity: 0, y: 24 },
				visible: { opacity: 1, y: 0 },
			}}
		>
			<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
				{label}
			</p>
			<p className="mt-2 font-[var(--font-playfair)] text-sm text-psr-ivory">
				{title}
			</p>
			<p className="mt-1 text-psr-soft-white/75">{subtitle}</p>
			<ul className="mt-3 flex-1 space-y-1.5">
				{items.map((item) => (
					<li key={item}>• {item}</li>
				))}
			</ul>
			<p className="mt-3 text-psr-soft-white/70">{footer}</p>
		</motion.article>
	);
}

/* ---------------------- PROCESS SECTION ---------------------- */

function ProcessSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-3xl space-y-3"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
						How it works
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						From application to clear, calm recommendation.
					</h2>
					<p className="text-sm text-neutral-800/85">
						The flow is built to be fast, thorough, and respectful
						of both your time and the applicant’s.
					</p>
				</motion.div>

				<motion.ol
					className="mt-8 grid gap-4 text-[0.9rem] md:grid-cols-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7 }}
				>
					<Step
						step="01"
						title="Share the unit"
						body="You tell us about the property, rent, timing, and what you are hoping to avoid or protect."
					/>
					<Step
						step="02"
						title="Applicant consent"
						body="Your applicant receives a secure link to provide consent and the information we need to screen."
					/>
					<Step
						step="03"
						title="Reports & verification"
						body="We pull background, credit, and eviction data, then verify employment, income, and landlord history."
					/>
					<Step
						step="04"
						title="Report & support"
						body="You receive a clear report with context and risk notes. You make the final decision—never us."
					/>
				</motion.ol>
			</div>
		</section>
	);
}

type StepProps = {
	step: string;
	title: string;
	body: string;
};

function Step({ step, title, body }: StepProps) {
	return (
		<li className="flex flex-col gap-2 rounded-2xl border border-neutral-300/80 bg-psr-soft-white/80 p-4">
			<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-ember/80">
				{step}
			</p>
			<p className="text-sm font-semibold text-neutral-900">{title}</p>
			<p className="text-[0.85rem] text-neutral-800/85">{body}</p>
		</li>
	);
}

/* ------------------- DIFFERENTIATOR SECTION ------------------ */

function DifferentiatorSection() {
	return (
		<section className="border-b border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="grid gap-10 md:grid-cols-[1.4fr,1fr]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<div className="space-y-4 text-sm text-psr-soft-white/80">
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							Why Phoenix Street
						</p>
						<h2 className="font-[var(--font-playfair)] text-2xl text-psr-ivory md:text-3xl">
							Not just data. Interpretation and pattern
							recognition.
						</h2>
						<p>
							We do not reduce applicants to a single score. We
							look at how their records, documents, and references
							line up—and where they do not. That includes
							spotting fake employers, mismatched landlord
							numbers, and documents that do not feel right.
						</p>
						<ul className="mt-2 space-y-1.5 text-psr-soft-white/75">
							<li>• Manual verification by a real person</li>
							<li>
								• Document review for red flags and manipulation
							</li>
							<li>• Calm, neutral communication style</li>
							<li>
								• Designed to support fair, consistent decisions
							</li>
						</ul>
					</div>
					<div className="space-y-3 rounded-2xl border border-neutral-800 bg-black/40 p-5 text-[0.85rem] text-psr-soft-white/80">
						<p className="font-semibold text-psr-soft-white">
							What you can expect from us
						</p>
						<ul className="mt-2 space-y-1.5">
							<li>• A clear outline of what we checked</li>
							<li>• Notes where something needs a second look</li>
							<li>• No hard sell—we present risk, you decide</li>
							<li>
								• Professional outreach to employers and
								landlords when needed
							</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* -------------------------- FAQ ----------------------------- */

function FaqSection() {
	return (
		<section id="faq" className="border-b border-neutral-800 bg-black/35">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="mb-6 max-w-3xl space-y-3"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Questions, answered
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl text-psr-ivory md:text-3xl">
						Answers that help you choose the right service with
						confidence.
					</h2>
					<p className="text-sm text-psr-soft-white/75">
						A quick overview of timing, what is included, and how
						our work fits into your existing application flow.
					</p>
				</motion.div>

				<motion.div
					className="space-y-4 text-[0.9rem] text-psr-soft-white/80"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, delay: 0.05 }}
				>
					<FaqItem
						question="Can I use your tenant screening for just one unit?"
						answer="Yes. Many of our clients are owners with a single unit or a small number of rentals who still want a high bar for who they hand the keys to."
					/>
					<FaqItem
						question="How does this fit into my current application process?"
						answer="You can continue to collect applications as you normally do. When you have a candidate you want to screen, we step in to handle the verification and reporting, then hand back clear results you can act on."
					/>
					<FaqItem
						question="Do you offer pricing for multiple units or recurring screening?"
						answer="Yes. If you have multiple units or ongoing screening needs, we can structure a portfolio-friendly rhythm so each new applicant flows through the same calm, consistent process."
					/>
					<FaqItem
						question="How is your tenant screening different from a basic online background check?"
						answer="Most low-cost services simply pull records and hand you a raw report. We combine certified screening data with manual verification—calling employers and landlords, reviewing documents, and flagging inconsistencies—so you receive a clear view of who is applying, not just a PDF of results."
					/>
					<FaqItem
						question="How quickly will I receive results?"
						answer="Turnaround time depends on the responsiveness of employers and landlords, but many screenings can be completed within 24–72 hours. We keep you updated so you are never wondering where things stand."
					/>
					<FaqItem
						question="Can you help me interpret the report and make a decision?"
						answer="Yes. Along with the report, we provide clear context and a risk summary. We do not make the decision for you, but we do explain what we are seeing so that your choice is informed, calm, and defensible."
					/>
				</motion.div>
			</div>
		</section>
	);
}

type FaqItemProps = {
	question: string;
	answer: string;
};

function FaqItem({ question, answer }: FaqItemProps) {
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

/* ------------------------ FINAL CTA ------------------------- */

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
						Next step
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						Share your unit, your applicants, and your timing.
					</h2>
					<p className="text-sm text-neutral-800/85">
						A short note is enough to begin. Let us know about the
						property, your ideal tenant profile, and how quickly you
						need to move. We will respond personally with a clear
						next step.
					</p>
				</motion.div>
				<motion.div
					className="mt-6 flex flex-wrap items-center gap-4"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6, delay: 0.05 }}
				>
					<PrimaryButton href="https://phoenixstreetrealty.com/contact">
						Start a tenant screening inquiry
					</PrimaryButton>
					<p className="text-[0.75rem] text-neutral-700">
						Or email us at{" "}
						<a
							href="mailto:phoenixstreetrealty@gmail.com"
							className="border-b border-neutral-500 pb-[1px]"
						>
							phoenixstreetrealty@gmail.com
						</a>
						.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
