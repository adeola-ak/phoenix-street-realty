import type { Metadata } from "next";
import TenantScreeningPageClient from "./TenantScreeningPageClient";

export const metadata: Metadata = {
	title: "Tenant Screening Services | Phoenix Street Realty – Background Checks & Verification",
	description:
		"Premium tenant screening services for serious landlords. Identity and background checks, credit and income verification, landlord references, fraud detection, and clear reporting to support calm, confident rental decisions.",
	keywords: [
		"tenant screening services",
		"tenant background check",
		"tenant credit check",
		"rental applicant screening",
		"landlord tenant screening",
		"eviction history check",
		"criminal background check for tenants",
		"income and employment verification",
		"fraud detection tenant screening",
	],
	alternates: {
		canonical: "https://phoenixstreetrealty.com/tenant-screening",
	},
	openGraph: {
		title: "Tenant Screening Services | Phoenix Street Realty",
		description:
			"High-end tenant screening for landlords who cannot afford to guess. Background, credit, income, landlord references, and fraud checks with calm, clear reporting.",
		url: "https://phoenixstreetrealty.com/tenant-screening",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function TenantScreeningPage() {
	return <TenantScreeningPageClient />;
}
