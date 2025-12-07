import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
	title: "Journal | Real Estate, Tenant Screening & Interior Design Insights",
	description:
		"Read articles on luxury interior design, tenant screening best practices, identity verification, fraud detection, rental prep, real estate strategy, and landlord support.",
	keywords: [
		"tenant screening tips",
		"real estate insights",
		"interior design ideas",
		"landlord advice",
		"rental property preparation",
		"fraud detection tenants",
	],
	alternates: {
		canonical: "https://phoenixstreetrealty.com/blog",
	},
	openGraph: {
		title: "Journal | Phoenix Street Realty",
		description:
			"Luxury real estate, tenant screening insights, and interior design perspectives.",
		url: "https://phoenixstreetrealty.com/blog",
		siteName: "Phoenix Street Realty",
		type: "website",
	},
};

export default function BlogPage() {
	return <BlogPageClient />;
}
