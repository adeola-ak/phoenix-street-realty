import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
	title: "About | Phoenix Street Realty – Luxury Real Estate & Design-Led Services",
	description:
		"Phoenix Street Realty is a luxury real estate and interior design house offering design consults, curated purchasing, vendor recommendations, rental prep, and industry-leading tenant screening with manual verification and fraud detection.",
	keywords: [
		"about Phoenix Street Realty",
		"luxury real estate firm",
		"design-led landlord services",
		"manual tenant verification",
		"premium interior design consults",
		"real estate styling",
	],
	alternates: {
		canonical: "https://phoenixstreetrealty.com/about",
	},
	openGraph: {
		title: "About | Phoenix Street Realty",
		description:
			"A modern, luxury real-estate and interior-design house blending quiet wealth, architecture, and industry-leading tenant screening.",
		url: "https://phoenixstreetrealty.com/about",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function AboutPage() {
	return <AboutPageClient />;
}
