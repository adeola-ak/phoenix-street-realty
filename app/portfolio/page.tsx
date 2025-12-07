import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
	title: "Portfolio | Phoenix Street Realty – Design-Led Projects & Transformations",
	description:
		"A curated selection of rental transformations, design refreshes, styling projects, and future real-estate renovations by Phoenix Street Realty.",
	keywords: [
		"interior design portfolio",
		"real estate renovations",
		"before and after home design",
		"rental property styling",
		"luxury home staging",
		"design transformations",
	],
	openGraph: {
		title: "Portfolio | Phoenix Street Realty",
		description:
			"Explore design-led projects and transformations by Phoenix Street Realty.",
		url: "https://phoenixstreetrealty.com/portfolio",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function PortfolioPage() {
	return <PortfolioPageClient />;
}
