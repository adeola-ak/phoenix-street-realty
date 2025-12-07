"use client";

import React from "react";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === new URL(href).pathname; // strips domain if you use full URLs

	const baseClasses =
		"text-sm transition duration-200 focus:outline-none " +
		"focus-visible:ring-2 focus-visible:ring-psr-gold " +
		"focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink";

	const inactiveClasses = "text-slate-300 hover:text-psr-gold";
	const activeClasses = "text-psr-gold";

	const className = [
		baseClasses,
		isActive ? activeClasses : inactiveClasses,
	].join(" ");

	return (
		<a href={href} className={className}>
			{children}
		</a>
	);
}
