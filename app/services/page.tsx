import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
	title: "Services | Phoenix Street Realty – Interior Design, Rental Prep & Tenant Screening",
	description:
		"Explore Phoenix Street Realty’s design-led services: virtual interior design consultations, rental-ready prep, landlord support systems, and comprehensive tenant screening with background, credit, identity, and rental history checks.",
	keywords: [
		"tenant screening services",
		"tenant background checks",
		"identity verification",
		"criminal background check",
		"eviction history search",
		"landlord support",
		"rental prep",
		"interior design consultation",
		"credit check for tenants",
		"employment verification",
	],
	openGraph: {
		title: "Services | Phoenix Street Realty",
		description:
			"Modern, design-forward services for sellers, landlords, and owners.",
		url: "https://phoenixstreetrealty.com/services",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function ServicesPage() {
	return <ServicesPageClient />;
}
