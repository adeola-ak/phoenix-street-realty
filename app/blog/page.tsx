import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
	title: "Journal | Phoenix Street Realty – Design, Real Estate & Landlord Insights",
	description:
		"Articles and guides on interior design, tenant screening, rental prep, landlord systems, and modern real-estate strategy.",
	keywords: [
		"interior design blog",
		"real estate guides",
		"tenant screening advice",
		"landlord tips",
		"rental property preparation",
		"home styling guides",
	],
	openGraph: {
		title: "Journal | Phoenix Street Realty",
		description:
			"Insights at the intersection of design, real estate, and modern property ownership.",
		url: "https://phoenixstreetrealty.com/blog",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function BlogPage() {
	return <BlogPageClient />;
}
