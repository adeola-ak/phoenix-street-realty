import type { Metadata } from "next";
import InvitePageClient from "./InvitePageClient";

export const metadata: Metadata = {
	title: "Private Invitation | Phoenix Street Realty",
	description:
		"You were invited to start a private conversation with Phoenix Street Realty. A select, intentional approach to luxury real estate and design.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function InvitePage() {
	return <InvitePageClient />;
}
