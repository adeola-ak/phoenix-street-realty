import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
	title: "Luxury Real Estate, Tenant Screening & Interior Design Consults | Phoenix Street Realty",
	description:
		"Phoenix Street Realty is a luxury real-estate and home-design house offering premium tenant screening, virtual interior design consults, rental-ready prep, curated purchasing, and trusted vendor recommendations for cleaners, painters, and maintenance.",
	keywords: [
		"luxury real estate",
		"tenant screening services",
		"tenant background checks",
		"identity verification tenants",
		"fraud detection renters",
		"pay stub verification",
		"rental property prep",
		"interior design consultation",
		"furniture and decor purchasing",
		"vendor recommendations cleaners painters maintenance",
		"landlord support services",
	],
	alternates: {
		canonical: "https://phoenixstreetrealty.com/",
	},
	openGraph: {
		title: "Phoenix Street Realty – Luxury Real Estate, Tenant Screening & Design Services",
		description:
			"A design-led real estate and home-design house offering premium tenant screening, design consults, rental prep, curated purchasing, and calm landlord systems.",
		url: "https://phoenixstreetrealty.com/",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function HomePage() {
	return <HomePageClient />;
}
