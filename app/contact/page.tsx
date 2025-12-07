import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
	title: "Contact | Phoenix Street Realty – Work With Us",
	description:
		"Reach out to Phoenix Street Realty for interior design consultations, rental prep, landlord support, and premium tenant screening services.",
	keywords: [
		"contact phoenix street realty",
		"book tenant screening",
		"interior design inquiry",
		"rental prep inquiry",
		"landlord support services",
	],
	openGraph: {
		title: "Contact | Phoenix Street Realty",
		description:
			"Get in touch for design-led real estate services and premium tenant screening.",
		url: "https://phoenixstreetrealty.com/contact",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function ContactPage() {
	return <ContactPageClient />;
}
