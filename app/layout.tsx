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
