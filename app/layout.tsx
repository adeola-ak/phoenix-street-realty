import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { NavLink } from "@/components/NavLink";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SiteHeaderClient } from "@/components/SiteHeaderClient";

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
					<SiteHeaderClient />
					<main className="flex-1">{children}</main>
					<SiteFooter />
				</div>
			</body>
		</html>
	);
}

function SiteFooter() {
	return (
		<footer className="border-t border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-[0.8rem] text-psr-soft-white/70 md:flex-row md:items-start md:justify-between">
				{/* Brand column */}
				<div className="space-y-2">
					<p className="text-[0.7rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Phoenix Street Realty
					</p>
					<p className="text-psr-soft-white/80">
						A design-led real estate and home-design house for
						sellers, landlords, and investors who treat home as a
						lifestyle asset.
					</p>
					<p className="text-psr-soft-white/45">
						© {new Date().getFullYear()} Phoenix Street Realty. All
						rights reserved.
					</p>
				</div>

				{/* Links column */}
				<div className="grid gap-6 text-[0.8rem] md:grid-cols-2">
					<div className="space-y-2">
						<p className="text-[0.7rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
							Navigation
						</p>
						<ul className="space-y-1.5">
							<li>
								<a
									href="https://phoenixstreetrealty.com/"
									className="hover:text-psr-gold"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/services"
									className="hover:text-psr-gold"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/tenant-screening"
									className="hover:text-psr-gold"
								>
									Tenant Screening
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/portfolio"
									className="hover:text-psr-gold"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/blog"
									className="hover:text-psr-gold"
								>
									Journal
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/about"
									className="hover:text-psr-gold"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/contact"
									className="hover:text-psr-gold"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Business / contact info */}
					<div className="space-y-2">
						<p className="text-[0.7rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
							Contact &amp; details
						</p>
						<p className="text-psr-soft-white/75">
							Based in{" "}
							<span className="text-psr-soft-white">
								West Orange, NJ
							</span>{" "}
							with a focus on design-forward rentals, listings,
							and portfolios in the United States.
						</p>
						<p>
							Email:{" "}
							<a
								href="mailto:hello@phoenixstreetrealty.com"
								className="border-b border-psr-soft-white/30 pb-[1px] hover:text-psr-gold"
							>
								hello@phoenixstreetrealty.com
							</a>
						</p>
						<p className="text-psr-soft-white/60">
							Services include interior design consultations,
							rental-ready prep, landlord support systems, and
							premium tenant screening with background, credit,
							income, and rental history verification.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
