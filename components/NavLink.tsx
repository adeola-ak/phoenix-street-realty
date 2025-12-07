"use client";

import React from "react";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();

	// href should be something like "/", "/services", "/portfolio", etc.
	// Active if exact match, or if we're on a sub-path of that section
	const isExactMatch = pathname === href;
	const isNestedMatch =
		href !== "/" && pathname.startsWith(href) && pathname !== "/";

	const isActive = isExactMatch || isNestedMatch;

	return (
		<a
			href={href}
			className={`relative text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-300
        ${
			isActive
				? "text-psr-gold"
				: "text-psr-soft-white/70 hover:text-psr-soft-white"
		}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold focus-visible:ring-offset-2 focus-visible:ring-offset-psr-charcoal
      `}
		>
			<span>{children}</span>
			<span
				className={`pointer-events-none absolute -bottom-1 left-0 h-px w-full bg-psr-gold transition-transform duration-300 origin-left ${
					isActive ? "scale-x-100" : "scale-x-0"
				}`}
			/>
		</a>
	);
}
