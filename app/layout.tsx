import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Phoenix Street Realty",
	description:
		"Design-driven real estate, interior design, and landlord services by Phoenix Street Realty.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-psr-ink text-slate-50 antialiased">
				<div className="flex min-h-screen flex-col">
					<SiteHeader />
					<main className="flex-1">{children}</main>
					<SiteFooter />
				</div>
			</body>
		</html>
	);
}

function SiteHeader() {
	return (
		<header className="sticky top-0 z-20 border-b border-slate-800/80 bg-psr-ink/80 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<div className="flex items-center gap-2">
					<div className="h-8 w-8 rounded-full bg-gradient-to-br from-psr-gold to-amber-500/70" />
					<span className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-200">
						Phoenix Street Realty
					</span>
				</div>
				<nav className="hidden gap-8 text-sm text-slate-300 md:flex">
					<a
						href="http://localhost:3000"
						className="transition duration-200 hover:text-psr-gold
               focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
               focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
					>
						Home
					</a>
					<a
						href="http://localhost:3000/services"
						className="transition duration-200 hover:text-psr-gold
               focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
               focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
					>
						Services
					</a>
					<a
						href="http://localhost:3000/portfolio"
						className="transition duration-200 hover:text-psr-gold
               focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
               focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
					>
						Portfolio
					</a>
					<a
						href="http://localhost:3000/blog"
						className="transition duration-200 hover:text-psr-gold
               focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
               focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
					>
						Blog
					</a>
					<a
						href="http://localhost:3000/contact"
						className="transition duration-200 hover:text-psr-gold
               focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
               focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
					>
						Contact
					</a>
				</nav>
				<a
					href="http://localhost:3000/contact"
					className="hidden rounded-full bg-psr-gold px-4 py-2 text-xs font-medium text-slate-900
             md:inline-flex
             transition duration-200
             hover:bg-amber-300
             focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
             focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink"
				>
					Book a consult
				</a>
			</div>
		</header>
	);
}

function SiteFooter() {
	return (
		<footer className="border-t border-slate-800/80 bg-psr-ink-soft">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
				<p className="text-xs text-slate-400">
					© {new Date().getFullYear()} Phoenix Street Realty. All
					rights reserved.
				</p>
				<p className="text-xs text-slate-500">
					Design-driven real estate, interior design, and landlord
					support.
				</p>
			</div>
		</footer>
	);
}
