export default function Home() {
	return (
		<main className="bg-psr-ink text-slate-50">
			<HeroSection />
			<ValuePillarsSection />
			<AudienceSection />
			<PortfolioTeaserSection />
			<VisionSection />
			<BlogTeaserSection />
			<FinalCtaSection />
		</main>
	);
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
	return (
		<section className="border-b border-slate-900/70">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
				{children}
			</div>
		</section>
	);
}

function HeroSection() {
	return (
		<section className="border-b border-slate-900/70 bg-gradient-to-b from-psr-ink to-psr-ink-soft">
			<div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center lg:py-28">
				{/* Left side: text */}
				<div className="flex-1 space-y-6">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
						Modern real estate & interior design
					</p>
					<h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
						Design-driven real estate{" "}
						<span className="block text-psr-gold">
							for modern living.
						</span>
					</h1>
					<p className="max-w-xl text-sm text-slate-300 md:text-base">
						Phoenix Street Realty blends rental property management,
						interior design consulting, and real estate investment
						strategy to make every home feel elevated, functional,
						and market-ready.
					</p>

					<div className="flex flex-wrap gap-4 pt-2">
						<a
							href="http://localhost:3000/contact"
							className="rounded-full bg-psr-gold px-6 py-3
               text-xs font-semibold uppercase tracking-[0.2em] text-slate-900
               shadow-lg shadow-amber-500/40
               transition duration-200
               hover:bg-amber-300
               focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
               focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
						>
							Book a design consult
						</a>
						<a
							href="http://localhost:3000/services"
							className="rounded-full border border-slate-700 px-6 py-3
               text-xs font-semibold uppercase tracking-[0.2em] text-slate-200
               transition duration-200
               hover:border-psr-gold hover:text-psr-gold
               focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
               focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
						>
							Landlord services
						</a>
					</div>

					<div className="flex flex-wrap gap-6 pt-6 text-xs text-slate-400">
						<div>
							<p className="text-sm font-semibold text-psr-gold">
								Multi-service
							</p>
							<p>
								Design, rental prep, and landlord support in one
								brand.
							</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-psr-gold">
								Built to scale
							</p>
							<p>
								Growing a portfolio of elevated, high-performing
								properties.
							</p>
						</div>
					</div>
				</div>

				{/* Right side: "visual" */}
				<div className="flex-1">
					<div className="relative mx-auto max-w-md">
						<div className="aspect-[4/5] w-full rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-black/50" />
						<div className="absolute -bottom-6 left-6 flex gap-4 rounded-2xl border border-slate-800 bg-psr-ink-soft/90 px-4 py-3 text-xs text-slate-200 backdrop-blur">
							<div>
								<p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
									Occupancy
								</p>
								<p className="text-lg font-semibold">92%</p>
							</div>
							<div>
								<p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
									Styled spaces
								</p>
								<p className="text-lg font-semibold">10+</p>
							</div>
							<div>
								<p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
									Virtual consults
								</p>
								<p className="text-lg font-semibold">
									Available
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function ValuePillarsSection() {
	const pillars = [
		{
			title: "Virtual interior design consults",
			description:
				"Work room-by-room or space-by-space with a design partner to refine layouts, palettes, and finishes—no matter where you are.",
			bullets: [
				"Room refreshes",
				"Furniture & decor selection",
				"Color & materials guidance",
			],
		},
		{
			title: "Rental-ready property prep",
			description:
				"Get a tailored checklist and design-forward recommendations to make your rental feel premium, durable, and move-in ready.",
			bullets: [
				"Rent-ready assessments",
				"Layout & lighting tweaks",
				"Photo-ready styling tips",
			],
		},
		{
			title: "Home styling & staging advice",
			description:
				"Elevate how your property photographs and feels, with styling guidance focused on selling faster and standing out.",
			bullets: [
				"Seller staging guidance",
				"Listing photo styling",
				"Short-term rental styling",
			],
		},
		{
			title: "Landlord support services",
			description:
				"Calm, structured support for modern landlords—from screening tenants to structured move-in/move-out processes.",
			bullets: [
				"Tenant screening support",
				"Move-in/out checklists",
				"Ongoing property guidance",
			],
		},
	];

	return (
		<SectionWrapper>
			<div className="space-y-10">
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/90">
							Services
						</p>
						<h2 className="mt-2 text-2xl font-semibold md:text-3xl">
							A design-first approach to real estate services.
						</h2>
					</div>
					<p className="max-w-md text-sm text-slate-300">
						From virtual consults to rent-ready checklists, Phoenix
						Street Realty helps you make confident decisions about
						your space and your portfolio.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{pillars.map((pillar) => (
						<div
							key={pillar.title}
							className="group flex flex-col rounded-3xl border border-slate-800/80 bg-psr-ink-soft/80 p-6 shadow-sm shadow-black/20 transition hover:border-psr-gold/70 hover:shadow-lg"
						>
							<h3 className="text-lg font-semibold text-slate-50">
								{pillar.title}
							</h3>
							<p className="mt-3 text-sm text-slate-300">
								{pillar.description}
							</p>
							<ul className="mt-4 space-y-1 text-xs text-slate-400">
								{pillar.bullets.map((b) => (
									<li key={b}>• {b}</li>
								))}
							</ul>
							<a
								href="http://localhost:3000/services"
								className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-psr-gold/80 group-hover:text-psr-gold"
							>
								Learn more →
							</a>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

function AudienceSection() {
	const audiences = [
		{
			label: "Homeowners",
			text: "Preparing to sell, refresh, or renovate your home with a design-led partner.",
		},
		{
			label: "Landlords",
			text: "Need a trusted, detail-oriented team to help keep rentals efficient and elevated.",
		},
		{
			label: "Design clients",
			text: "Want virtual styling support to refine spaces, finishes, and furniture choices.",
		},
		{
			label: "Investors & partners",
			text: "Looking to co-create value through acquisitions, renovations, and long-term holds.",
		},
	];

	return (
		<SectionWrapper>
			<div className="space-y-8">
				<div className="max-w-xl space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
						Who we serve
					</p>
					<h2 className="text-2xl font-semibold md:text-3xl">
						Built for homeowners, landlords, and design-driven
						investors.
					</h2>
					<p className="text-sm text-slate-300">
						Phoenix Street Realty sits at the intersection of real
						estate operations and interior design. We help you think
						about both the numbers and the feeling of home.
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-4">
					{audiences.map((audience) => (
						<div
							key={audience.label}
							className="flex flex-col rounded-2xl border border-slate-800 bg-psr-ink-soft/80 p-4 text-sm"
						>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-psr-gold/80">
								{audience.label}
							</p>
							<p className="mt-2 text-xs text-slate-300">
								{audience.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

function PortfolioTeaserSection() {
	const projects = [
		{
			title: "Downtown rental refresh",
			subtitle: "2-bed city apartment",
			tag: "Rental-ready prep",
			result: "Listed 3 days after completion",
		},
		{
			title: "Townhome staging concept",
			subtitle: "Seller-focused styling",
			tag: "Staging & styling",
			result: "Photography-first layout planning",
		},
		{
			title: "Virtual living room redesign",
			subtitle: "Remote design consult",
			tag: "Virtual design",
			result: "Guided furniture & palette updates",
		},
	];

	return (
		<SectionWrapper>
			<div className="space-y-8">
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
							Transformations
						</p>
						<h2 className="mt-2 text-2xl font-semibold md:text-3xl">
							Spaces that feel intentional, calm, and
							market-ready.
						</h2>
					</div>
					<a
						href="http://localhost:3000/portfolio"
						className="text-xs font-semibold uppercase tracking-[0.2em] text-psr-gold/80 hover:text-psr-gold"
					>
						View portfolio →
					</a>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{projects.map((project) => (
						<div
							key={project.title}
							className="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-psr-ink-soft/90 shadow-md shadow-black/40"
						>
							<div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
							<div className="space-y-2 p-5">
								<p className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">
									{project.tag}
								</p>
								<h3 className="text-sm font-semibold text-slate-50">
									{project.title}
								</h3>
								<p className="text-xs text-slate-400">
									{project.subtitle}
								</p>
								<p className="mt-2 text-xs text-psr-gold/90">
									{project.result}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

function VisionSection() {
	const steps = [
		{
			title: "Acquire",
			text: "Identify properties with strong fundamentals and design potential.",
		},
		{
			title: "Renovate",
			text: "Thoughtful updates that balance durability, comfort, and aesthetics.",
		},
		{
			title: "Design & stage",
			text: "Layer styling and layout decisions that photograph and live beautifully.",
		},
		{
			title: "Hold or flip",
			text: "Refined homes to rent, hold, or sell—depending on your strategy.",
		},
	];

	return (
		<SectionWrapper>
			<div className="grid gap-10 md:grid-cols-2 md:items-start">
				<div className="space-y-4">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
						Long-term vision
					</p>
					<h2 className="text-2xl font-semibold md:text-3xl">
						A design-first portfolio of elevated rentals and
						renovations.
					</h2>
					<p className="text-sm text-slate-300">
						Phoenix Street Realty is growing from multi-service real
						estate operations into a curated portfolio of
						homes—acquisitions, renovations, and flips that feel
						grounded, modern, and deeply livable.
					</p>
					<p className="text-sm text-slate-300">
						We partner with homeowners, landlords, and future
						investors who care about both returns and the experience
						of home.
					</p>
				</div>

				<div className="space-y-4 rounded-3xl border border-slate-800 bg-psr-ink-soft/80 p-6">
					{steps.map((step, index) => (
						<div key={step.title} className="flex gap-4">
							<div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-psr-gold/60 text-xs font-semibold text-psr-gold">
								{index + 1}
							</div>
							<div>
								<p className="text-sm font-semibold text-slate-50">
									{step.title}
								</p>
								<p className="text-xs text-slate-400">
									{step.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

function BlogTeaserSection() {
	const posts = [
		{
			title: "5 design tweaks that make rentals feel instantly premium",
			category: "Interior design",
			excerpt:
				"Small, intentional updates can dramatically change how a rental photographs and lives.",
		},
		{
			title: "The calm landlord: systems for move-ins, move-outs, and rent-ready units",
			category: "Landlord tips",
			excerpt:
				"Checklists and simple workflows help you protect your time, property, and tenants.",
		},
		{
			title: "Design-minded real estate investing 101",
			category: "Investing",
			excerpt:
				"Why finishes, layouts, and styling matter just as much as cap rates and comps.",
		},
	];

	return (
		<SectionWrapper>
			<div className="space-y-8">
				<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
							Resources
						</p>
						<h2 className="mt-2 text-2xl font-semibold md:text-3xl">
							Design, operations, and investing—decoded.
						</h2>
					</div>
					<a
						href="http://localhost:3000/blog"
						className="text-xs font-semibold uppercase tracking-[0.2em] text-psr-gold/80 hover:text-psr-gold"
					>
						Visit the blog →
					</a>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{posts.map((post) => (
						<article
							key={post.title}
							className="flex flex-col rounded-2xl border border-slate-800 bg-psr-ink-soft/80 p-5"
						>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-psr-gold/80">
								{post.category}
							</p>
							<h3 className="mt-3 text-sm font-semibold text-slate-50">
								{post.title}
							</h3>
							<p className="mt-2 text-xs text-slate-400">
								{post.excerpt}
							</p>
							<a
								href="http://localhost:3000/blog"
								className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-psr-gold/80"
							>
								Read article →
							</a>
						</article>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}

function FinalCtaSection() {
	return (
		<section className="bg-psr-sand text-slate-900">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<div className="max-w-3xl space-y-4">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
						Next step
					</p>
					<h2 className="text-2xl font-semibold md:text-3xl">
						Tell us about your property, your project, or your
						portfolio.
					</h2>
					<p className="text-sm text-slate-700">
						Whether you need a virtual design consult, a rent-ready
						checklist, or a long-term partner for growing a
						portfolio, Phoenix Street Realty is here to help.
					</p>
				</div>
				<div className="mt-6 flex flex-wrap items-center gap-4">
					<a
						href="http://localhost:3000/contact"
						className="rounded-full bg-slate-900 px-6 py-3
             text-xs font-semibold uppercase tracking-[0.2em] text-psr-gold
             transition duration-200
             hover:bg-slate-800
             focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900
             focus-visible:ring-offset-2 focus-visible:ring-offset-psr-sand"
					>
						Get in touch
					</a>
					<p className="text-xs text-slate-600">
						Or email us directly at{" "}
						<a
							href="mailto:hello@phoenixstreetrealty.com"
							className="font-medium text-slate-900 underline"
						>
							hello@phoenixstreetrealty.com
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
