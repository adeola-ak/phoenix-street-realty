import { PrimaryButton, SecondaryButton } from "@/components/ui/PrimaryButton";

const services = [
	{
		id: "virtual-design",
		name: "Virtual interior design consultations",
		tagline: "Room-by-room design support—wherever you are.",
		idealFor: [
			"Homeowners refreshing key rooms",
			"Design-minded renters",
			"Landlords wanting elevated but durable finishes",
		],
		includes: [
			"Live video session to walk your space",
			"Concept guidance on layout, color, and furniture",
			"Follow-up summary with key recommendations",
		],
		startingAt: "Starting at 60-minute sessions",
	},
	{
		id: "rental-prep",
		name: "Rental-ready property prep",
		tagline: "Make your rental feel premium, durable, and move-in ready.",
		idealFor: [
			"Landlords preparing for a new tenant",
			"Owners converting a home into a rental",
			"Hosts getting ready for listing photography",
		],
		includes: [
			"Rent-ready assessment of your space",
			"Custom checklist for repairs and upgrades",
			"Guidance on finishes, lighting, and furniture",
		],
		startingAt: "Ideal before listing photos or showings",
	},
	{
		id: "styling-staging",
		name: "Home styling & staging guidance",
		tagline: "Styling that photographs beautifully and feels inviting.",
		idealFor: [
			"Homeowners preparing to sell",
			"Short-term rental hosts",
			"Landlords wanting stronger listing photos",
		],
		includes: [
			"Styling strategy for key rooms",
			"Recommendations for decor, art, and soft goods",
			"Tips for maximizing natural light and flow",
		],
		startingAt: "Designed to support both DIY and pro staging",
	},
	{
		id: "landlord-support",
		name: "Landlord support services",
		tagline: "Calm, structured support for modern landlords.",
		idealFor: [
			"First-time landlords",
			"Owners with multiple units",
			"Anyone needing clearer systems and checklists",
		],
		includes: [
			"Tenant screening support and criteria guidance",
			"Move-in / move-out checklists",
			"Rent-ready systems and reminders",
		],
		startingAt: "Support tailored to your current portfolio",
	},
];

const faqs = [
	{
		question: "Do you work fully remote / virtually?",
		answer: "Yes. Most design and landlord support services can be delivered virtually through video calls, photos, and floor plans. For local projects, in-person support may be available depending on scope.",
	},
	{
		question: "Can I start small with a single room or unit?",
		answer: "Absolutely. Many clients start with a single room, unit, or property. Once we establish a look and system you love, we can scale that approach across more spaces.",
	},
	{
		question: "Do you handle full property management?",
		answer: "Phoenix Street Realty focuses on design-forward strategy, rental prep, and landlord support. We can advise you on systems and help you evaluate local property management partners as needed.",
	},
	{
		question: "What if I am not sure which service I need?",
		answer: "That is completely normal. Start by telling us about your property and goals—renting, selling, refreshing, or investing—and we will recommend the right starting point.",
	},
];

export default function ServicesPage() {
	return (
		<main className="bg-psr-ink text-slate-50">
			<section className="border-b border-slate-900/70">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
					<div className="max-w-3xl space-y-4">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
							Services
						</p>
						<h1 className="text-3xl font-semibold md:text-4xl">
							Design-forward services for real homes and real
							portfolios.
						</h1>
						<p className="text-sm text-slate-300">
							Phoenix Street Realty blends interior design, rental
							prep, and landlord support so you do not have to
							coordinate multiple vendors. Start where you are and
							scale as your needs grow.
						</p>
					</div>

					<div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-400">
						<span className="rounded-full border border-slate-700 bg-psr-ink-soft px-3 py-1">
							Virtual consultations
						</span>
						<span className="rounded-full border border-slate-700 bg-psr-ink-soft px-3 py-1">
							Design and operations in one
						</span>
						<span className="rounded-full border border-slate-700 bg-psr-ink-soft px-3 py-1">
							Built for landlords and homeowners
						</span>
					</div>

					<div className="mt-8 flex flex-wrap gap-4">
						<PrimaryButton href="http://localhost:3000/contact">
							Tell us about your project
						</PrimaryButton>
						<SecondaryButton href="http://localhost:3000/contact">
							Ask which service is right
						</SecondaryButton>
					</div>
				</div>
			</section>

			{/* Service cards */}
			<section className="border-b border-slate-900/70 bg-psr-ink-soft/40">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
					<div className="grid gap-6 md:grid-cols-2">
						{services.map((service) => (
							<article
								key={service.id}
								id={service.id}
								className="flex flex-col rounded-3xl border border-slate-800 bg-psr-ink-soft/80 p-6 shadow-md shadow-black/30"
							>
								<p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
									{service.name}
								</p>
								<h2 className="mt-3 text-lg font-semibold text-slate-50">
									{service.tagline}
								</h2>

								<div className="mt-4 space-y-3 text-xs text-slate-300">
									<div>
										<p className="font-semibold text-slate-100">
											Ideal for
										</p>
										<ul className="mt-1 space-y-1">
											{service.idealFor.map((item) => (
												<li key={item}>• {item}</li>
											))}
										</ul>
									</div>
									<div>
										<p className="font-semibold text-slate-100">
											What is included
										</p>
										<ul className="mt-1 space-y-1">
											{service.includes.map((item) => (
												<li key={item}>• {item}</li>
											))}
										</ul>
									</div>
								</div>

								<div className="mt-6 flex items-center justify-between text-xs text-slate-400">
									<p>{service.startingAt}</p>
									<SecondaryButton
										href="http://localhost:3000/contact"
										className="px-4 py-2"
									>
										Inquire about this
									</SecondaryButton>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="border-b border-slate-900/70">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
					<div className="max-w-3xl space-y-4">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
							FAQ
						</p>
						<h2 className="text-2xl font-semibold md:text-3xl">
							Questions about where to start.
						</h2>
						<p className="text-sm text-slate-300">
							If you are unsure which service fits best, that is
							okay. Use these answers as a starting point and then
							reach out with your specific situation.
						</p>
					</div>

					<div className="mt-8 space-y-4">
						{faqs.map((faq) => (
							<details
								key={faq.question}
								className="group rounded-2xl border border-slate-800 bg-psr-ink-soft/80 p-4"
							>
								<summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm text-slate-100">
									<span>{faq.question}</span>
									<span className="text-xs text-slate-400 group-open:hidden">
										+
									</span>
									<span className="hidden text-xs text-slate-400 group-open:inline">
										−
									</span>
								</summary>
								<p className="mt-2 text-xs text-slate-300">
									{faq.answer}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
