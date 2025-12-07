import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { NavLink } from "@/components/NavLink";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://phoenixstreetrealty.com"),
	title: {
		default: "Phoenix Street Realty",
		template: "%s | Phoenix Street Realty",
	},
	description:
		"Luxury real estate services, interior design consulting, rental prep, tenant screening, and landlord support.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${playfair.variable} antialiased bg-psr-charcoal text-psr-soft-white`}
			>
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
		<header className="sticky top-0 z-20 border-b border-neutral-800 bg-psr-charcoal/90 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<div className="flex h-8 w-8 items-center justify-center rounded-xl border border-psr-soft-white/20 bg-psr-charcoal">
						<span className="text-xs font-semibold tracking-[0.2em] text-psr-soft-white/80">
							PS
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-[0.7rem] tracking-[0.3em] uppercase text-psr-soft-white/70">
							Phoenix Street
						</span>
						<span className="text-[0.65rem] text-psr-soft-white/40">
							realty &amp; home design
						</span>
					</div>
				</div>

				{/* Nav */}
				<nav className="hidden items-center gap-8 md:flex">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/services">Services</NavLink>
					<NavLink href="/portfolio">Portfolio</NavLink>
					<NavLink href="/blog">Journal</NavLink>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</nav>

				{/* CTA */}
				<div className="hidden md:block">
					<PrimaryButton
						href="/contact"
						className="px-5 py-2 text-[0.6rem]"
					>
						Private consult
					</PrimaryButton>
				</div>
			</div>
		</header>
	);
}

function SiteFooter() {
	return (
		<footer className="border-t border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-[0.7rem] text-psr-soft-white/60 md:flex-row md:items-center md:justify-between">
				<p>© {new Date().getFullYear()} Phoenix Street Realty</p>
				<p className="text-psr-soft-white/40">
					A design-led real estate and home-design house for sellers,
					landlords, and investors.
				</p>
			</div>
		</footer>
	);
}
