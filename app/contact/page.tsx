import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
	title: "Contact | Book a Private Consult | Phoenix Street Realty",
	description:
		"Book a private consult for tenant screening, rental prep, interior design, or landlord support. Fast turnaround, manual verification, fraud detection, and premium design expertise.",
	keywords: [
		"contact tenant screening",
		"book design consultation",
		"hire landlord support",
		"real estate design consult",
		"tenant background check service",
	],
	alternates: {
		canonical: "https://phoenixstreetrealty.com/contact",
	},
	openGraph: {
		title: "Contact Phoenix Street Realty",
		description:
			"Get in touch for design consults, tenant screening, rental prep, or private landlord support.",
		url: "https://phoenixstreetrealty.com/contact",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function ContactPage() {
	return <ContactPageClient />;
}
