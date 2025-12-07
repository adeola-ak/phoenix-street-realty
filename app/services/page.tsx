import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
	title: "Services | Luxury Tenant Screening, Interior Design Consults & Rental Prep",
	description:
		"Explore Phoenix Street Realty’s design-led services: premium tenant screening with manual verification, identity checks, fraud detection, income confirmation, rental-ready property prep, virtual design consults, sourcing & purchasing decor, and trusted vendor recommendations.",
	keywords: [
		"tenant screening",
		"tenant background checks",
		"identity verification",
		"manual employment verification",
		"fraud detection tenant",
		"pay stub manipulation check",
		"eviction search",
		"credit check for tenants",
		"landlord support services",
		"interior design consultation",
		"virtual home design",
		"rental property prep",
		"cleaner recommendations",
		"painter recommendations",
		"maintenance vendor recommendations",
		"luxury real estate services",
	],
	alternates: {
		canonical: "https://phoenixstreetrealty.com/services",
	},
	openGraph: {
		title: "Phoenix Street Realty Services – Tenant Screening, Design Consults, Rental Prep",
		description:
			"Design-forward services including tenant screening, design consultations, home styling, purchasing assistance, and landlord support.",
		url: "https://phoenixstreetrealty.com/services",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function ServicesPage() {
	return <ServicesPageClient />;
}
