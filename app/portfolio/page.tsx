import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
	title: "Portfolio | Design-Led Real Estate, Rental Transformations & Editorial Interiors",
	description:
		"Explore Phoenix Street Realty’s design-led portfolio of styled rentals, interior transformations, staging concepts, and elevated property preparations.",
	keywords: [
		"interior design portfolio",
		"before and after rental prep",
		"styled rental property",
		"luxury interior design",
		"real estate design examples",
	],
	alternates: {
		canonical: "https://phoenixstreetrealty.com/portfolio",
	},
	openGraph: {
		title: "Portfolio | Phoenix Street Realty",
		description:
			"A curated collection of design-led rental transformations, styling work, and editorial interior concepts.",
		url: "https://phoenixstreetrealty.com/portfolio",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function PortfolioPage() {
	return <PortfolioPageClient />;
}
