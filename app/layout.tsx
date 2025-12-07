import type { Metadata } from "next";
import "./globals.css";

import { NavLink } from "@/components/NavLink";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

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
				<nav className="hidden gap-8 md:flex">
					<NavLink href="http://localhost:3000">Home</NavLink>
					<NavLink href="http://localhost:3000/services">
						Services
					</NavLink>
					<NavLink href="http://localhost:3000/portfolio">
						Portfolio
					</NavLink>
					<NavLink href="http://localhost:3000/blog">Blog</NavLink>
					<NavLink href="http://localhost:3000/contact">
						Contact
					</NavLink>
				</nav>
				<PrimaryButton
					href="http://localhost:3000/contact"
					className="hidden px-4 py-2 text-xs font-medium md:inline-flex"
				>
					Book a consult
				</PrimaryButton>
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
