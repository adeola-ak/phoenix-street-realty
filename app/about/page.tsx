import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
	title: "About | Phoenix Street Realty – A Design-Led Real Estate House",
	description:
		"Learn more about Phoenix Street Realty: a modern, design-forward real estate and home-design studio offering tenant screening, rental prep, styling, and landlord support.",
	openGraph: {
		title: "About | Phoenix Street Realty",
		description:
			"A quiet, luxury approach to real estate, interiors, and tenant screening.",
		url: "https://phoenixstreetrealty.com/about",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function AboutPage() {
	return <AboutPageClient />;
}
