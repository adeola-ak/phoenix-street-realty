"use client";

import { motion } from "framer-motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function ContactPageClient() {
	const contactJsonLd = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact Phoenix Street Realty",
		url: "https://phoenixstreetrealty.com/contact",
		description:
			"Private inquiry page for Phoenix Street Realty, offering tenant screening, interior design consults, rental prep, and landlord support.",
		about: [
			{
				"@type": "Service",
				name: "Tenant Screening & Applicant Verification",
			},
			{
				"@type": "Service",
				name: "Virtual Interior Design Consultations",
			},
			{
				"@type": "Service",
				name: "Rental-Ready Prep & Styling",
			},
			{
				"@type": "Service",
				name: "Landlord Systems & Support",
			},
		],
	};

	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<JsonLd data={contactJsonLd} />
			<IntroSection />
			<FormSection />
			<SidebarSection />
		</main>
	);
}

/* --------------------------- INTRO --------------------------- */

function IntroSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-3xl space-y-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Contact
					</p>
					<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-psr-ivory">
						Share your property, your applicants, or your next
						decision.
					</h1>
					<p className="text-sm text-psr-soft-white/75">
						For design consults, tenant screening, or start a
						conversation about a rental-ready prep or landlord
						system. Share a few details below. Your inquiry is
						reviewed privately, and we respond with clear,
						straightforward next steps.
					</p>

					<div className="space-y-2 text-[0.8rem] text-psr-soft-white/60">
						<p>We are a good fit if you are:</p>
						<ul className="space-y-1">
							<li>• Preparing a home to sell or quietly list</li>
							<li>• Elevating a rental or short-term stay</li>
							<li>
								• Building or refining a design-led portfolio
							</li>
							<li>
								• A landlord ready for calmer, more intentional
								systems
							</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------------- FORM ---------------------------- */

function FormSection() {
	return (
		<section className="border-b border-neutral-800">
			<div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
				<motion.div
					className="grid gap-10 md:grid-cols-[1.5fr,1fr]"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.5 }}
				>
					<form
						className="space-y-6 rounded-2xl border border-neutral-800 bg-black/40 p-6 text-[0.85rem] shadow-card-soft/40"
						method="POST"
						action="https://formspree.io/f/xdkqdqyg"
					>
						{/* Formspree meta fields */}
						<input
							type="hidden"
							name="_subject"
							value="New inquiry from Phoenix Street Realty contact form"
						/>
						{/* Simple anti-bot honeypot field (hidden from real users) */}
						<input
							type="text"
							name="_gotcha"
							style={{ display: "none" }}
							tabIndex={-1}
							autoComplete="off"
						/>

						{/* Inquiry type */}
						<div className="space-y-2">
							<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
								What can we help you with?
							</p>
							<div className="grid gap-2 md:grid-cols-2">
								<label className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white/80 hover:border-psr-gold/70">
									<input
										type="radio"
										name="Inquiry type"
										value="Tenant screening"
										className="h-3 w-3 border border-neutral-500 bg-transparent text-psr-gold"
										defaultChecked
									/>
									<span className="text-[0.8rem]">
										Book tenant screening
									</span>
								</label>
								<label className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white/80 hover:border-psr-gold/70">
									<input
										type="radio"
										name="Inquiry type"
										value="Design consult or rental prep"
										className="h-3 w-3 border border-neutral-500 bg-transparent text-psr-gold"
									/>
									<span className="text-[0.8rem]">
										Book a design / rental consult
									</span>
								</label>
								<label className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white/80 hover:border-psr-gold/70">
									<input
										type="radio"
										name="Inquiry type"
										value="Landlord systems or support"
										className="h-3 w-3 border border-neutral-500 bg-transparent text-psr-gold"
									/>
									<span className="text-[0.8rem]">
										Landlord systems &amp; support
									</span>
								</label>
								<label className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white/80 hover:border-psr-gold/70">
									<input
										type="radio"
										name="Inquiry type"
										value="Other"
										className="h-3 w-3 border border-neutral-500 bg-transparent text-psr-gold"
									/>
									<span className="text-[0.8rem]">
										Other / not sure yet
									</span>
								</label>
							</div>
						</div>

						{/* Contact info */}
						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-1">
								<label
									htmlFor="name"
									className="text-[0.75rem] text-psr-soft-white/75"
								>
									Full name
								</label>
								<input
									id="name"
									name="Name"
									type="text"
									required
									className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white placeholder:text-psr-soft-white/40 focus:outline-none focus-visible:ring focus-visible:ring-psr-gold/50"
									placeholder="Jane Doe"
								/>
							</div>
							<div className="space-y-1">
								<label
									htmlFor="email"
									className="text-[0.75rem] text-psr-soft-white/75"
								>
									Email
								</label>
								<input
									id="email"
									name="Email"
									type="email"
									required
									className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white placeholder:text-psr-soft-white/40 focus:outline-none focus-visible:ring focus-visible:ring-psr-gold/50"
									placeholder="you@company.com"
								/>
							</div>
						</div>

						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-1">
								<label
									htmlFor="phone"
									className="text-[0.75rem] text-psr-soft-white/75"
								>
									Phone (optional)
								</label>
								<input
									id="phone"
									name="Phone"
									type="tel"
									className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white placeholder:text-psr-soft-white/40 focus:outline-none focus-visible:ring focus-visible:ring-psr-gold/50"
									placeholder="For quicker follow-up"
								/>
							</div>
							<div className="space-y-1">
								<label
									htmlFor="location"
									className="text-[0.75rem] text-psr-soft-white/75"
								>
									Property location
								</label>
								<input
									id="location"
									name="Property location"
									type="text"
									className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white placeholder:text-psr-soft-white/40 focus:outline-none focus-visible:ring focus-visible:ring-psr-gold/50"
									placeholder="City, neighborhood, or ZIP"
								/>
							</div>
						</div>

						{/* Context */}
						{/* note: keep this exactly how you had it, just no encType */}
						<div className="space-y-1">
							<label
								htmlFor="details"
								className="text-[0.75rem] text-psr-soft-white/75"
							>
								Share the context
							</label>
							<textarea
								id="details"
								name="Details"
								rows={5}
								className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-psr-soft-white placeholder:text-psr-soft-white/40 focus:outline-none focus-visible:ring focus-visible:ring-psr-gold/50"
								placeholder="For tenant screening: number of applicants, unit type, rent amount, timing.&#10;For design or prep: rooms or spaces, current state, timeline, and goals."
							/>
						</div>

						{/* Submit */}
						<div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
							<PrimaryButton type="submit">
								Submit private inquiry
							</PrimaryButton>
							<p className="text-[0.75rem] text-psr-soft-white/55">
								We aim to respond within 1–2 business days. For
								urgent tenant screening, mention your timing in
								the details.
							</p>
						</div>
					</form>

					<RightColumnExplainer />
				</motion.div>
			</div>
		</section>
	);
}

/* ------------------------ RIGHT COLUMN ------------------------ */

function RightColumnExplainer() {
	return (
		<div className="space-y-6 text-[0.85rem] text-psr-soft-white/80">
			<div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
				<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
					For tenant screening
				</p>
				<p className="mt-2 text-sm text-psr-soft-white">
					You can use this form to start a new applicant screening, or
					to ask a question about our process before you proceed.
				</p>
				<ul className="mt-3 space-y-1 text-psr-soft-white/75">
					<li>• Single-unit or small portfolio friendly</li>
					<li>• Manual verification, not just automated data</li>
					<li>• Clear, landlord-friendly reporting</li>
				</ul>
			</div>
			<div className="rounded-2xl border border-neutral-800 bg-black/30 p-5">
				<p className="text-[0.65rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
					For design & prep
				</p>
				<p className="mt-2 text-sm text-psr-soft-white">
					Whether you are refining a primary home, elevating a rental,
					or quietly preparing a listing, we will start by
					understanding the property and how you live—or how you want
					it to be experienced.
				</p>
				<ul className="mt-3 space-y-1 text-psr-soft-white/75">
					<li>• Virtual consults with structured follow-up</li>
					<li>• Help purchasing key pieces and finishes</li>
					<li>
						• Recommendations for cleaners, painters, and support
					</li>
				</ul>
			</div>
		</div>
	);
}

/* ---------------------- SIDEBAR BOTTOM ----------------------- */

function SidebarSection() {
	return (
		<section className="border-t border-neutral-800 bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
				<motion.div
					className="grid gap-8 md:grid-cols-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.5 }}
				>
					<div className="space-y-3 text-sm text-neutral-800/85">
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
							Other ways to reach us
						</p>
						<p>
							If you prefer not to use a form, you can reach out
							directly by email. Include a brief description of
							what you are looking for and we will follow up with
							next steps.
						</p>
						<p className="text-[0.85rem]">
							Email:{" "}
							<a
								href="mailto:phoenixstreetrealty@gmail.com"
								className="border-b border-neutral-500 pb-[1px]"
							>
								phoenixstreetrealty@gmail.com
							</a>
						</p>
					</div>
					<div className="space-y-3 text-[0.85rem] text-neutral-800/85">
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
							What to expect
						</p>
						<ul className="space-y-2">
							<li>
								• A direct, human reply—no automated chatbot.
							</li>
							<li>
								• If we are not the right fit, we will say so
								clearly.
							</li>
							<li>
								• For screening or design, we may suggest a
								short follow-up call.
							</li>
							<li>
								• Your details stay private and are used only to
								respond to your inquiry.
							</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
