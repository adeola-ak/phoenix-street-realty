"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function SiteHeaderClient() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	if (isOpen && typeof window !== "undefined") {
		// noop – re-render closes panel when state changes
	}

	const toggleMenu = () => setIsOpen((prev) => !prev);
	const closeMenu = () => setIsOpen(false);

	return (
		<header className="sticky top-0 z-20 border-b border-neutral-800 bg-psr-charcoal/90 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<div className="flex h-8 w-8 items-center justify-center rounded-xl border border-psr-soft-white/20 bg-psr-charcoal">
						<span className="text-xs font-semibold tracking-[0.2em] text-psr-soft-white/80">
							PS
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-[0.7rem] tracking-[0.3em] uppercase text-psr-soft-white/70">
							Phoenix Street
						</span>
						<span className="text-[0.65rem] text-psr-soft-white/40">
							realty &amp; home design
						</span>
					</div>
				</div>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-8 md:flex">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/services">Services</NavLink>
					<NavLink href="/tenant-screening">Tenant Screening</NavLink>
					<NavLink href="/portfolio">Portfolio</NavLink>
					<NavLink href="/blog">Journal</NavLink>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</nav>

				{/* Desktop CTA */}
				<div className="hidden md:block">
					<PrimaryButton
						href="/tenant-screening"
						className="px-5 py-2 text-[0.6rem] whitespace-nowrap"
					>
						Book screening
					</PrimaryButton>
				</div>

				{/* Mobile menu button */}
				<button
					type="button"
					onClick={toggleMenu}
					className="md:hidden inline-flex items-center justify-center rounded-full border border-psr-soft-white/20 px-3 py-2 text-xs text-psr-soft-white/80 hover:border-psr-soft-white/40 focus:outline-none focus-visible:ring focus-visible:ring-psr-gold/40"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
				>
					<span className="mr-2 text-[0.6rem] tracking-[0.25em] uppercase">
						Menu
					</span>
					<div className="flex flex-col gap-[3px]">
						<span
							className={`h-[1px] w-4 bg-psr-soft-white transition-transform duration-200 ${
								isOpen ? "translate-y-[4px] rotate-45" : ""
							}`}
						/>
						<span
							className={`h-[1px] w-4 bg-psr-soft-white transition-opacity duration-200 ${
								isOpen ? "opacity-0" : "opacity-100"
							}`}
						/>
						<span
							className={`h-[1px] w-4 bg-psr-soft-white transition-transform duration-200 ${
								isOpen ? "-translate-y-[4px] -rotate-45" : ""
							}`}
						/>
					</div>
				</button>
			</div>

			{/* Mobile dropdown panel */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.22 }}
						className="md:hidden border-t border-neutral-800 bg-psr-charcoal/98 backdrop-blur"
					>
						<div className="mx-auto max-w-6xl px-6 py-4 space-y-4 text-[0.8rem] uppercase tracking-[0.25em]">
							<MobileNavLink
								href="https://phoenixstreetrealty.com"
								active={pathname === "/"}
								onClick={closeMenu}
							>
								Home
							</MobileNavLink>
							<MobileNavLink
								href="https://phoenixstreetrealty.com/services"
								active={pathname === "/services"}
								onClick={closeMenu}
							>
								Services
							</MobileNavLink>
							<MobileNavLink
								href="https://phoenixstreetrealty.com/tenant-screening"
								active={pathname === "/tenant-screening"}
								onClick={closeMenu}
							>
								Tenant Screening
							</MobileNavLink>
							<MobileNavLink
								href="https://phoenixstreetrealty.com/portfolio"
								active={pathname === "/portfolio"}
								onClick={closeMenu}
							>
								Portfolio
							</MobileNavLink>
							<MobileNavLink
								href="https://phoenixstreetrealty.com/blog"
								active={pathname?.startsWith("/blog") ?? false}
								onClick={closeMenu}
							>
								Journal
							</MobileNavLink>
							<MobileNavLink
								href="https://phoenixstreetrealty.com/about"
								active={pathname === "/about"}
								onClick={closeMenu}
							>
								About
							</MobileNavLink>
							<MobileNavLink
								href="https://phoenixstreetrealty.com/contact"
								active={pathname === "/contact"}
								onClick={closeMenu}
							>
								Contact
							</MobileNavLink>

							<div className="pt-2">
								<a
									href="https://phoenixstreetrealty.com/tenant-screening"
									onClick={closeMenu}
									className="inline-flex items-center justify-center rounded-full border border-psr-gold/70 px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-psr-gold hover:bg-psr-gold/10 transition-colors duration-200 whitespace-nowrap"
								>
									Book screening
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

type MobileNavLinkProps = {
	href: string;
	active?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
};

function MobileNavLink({
	href,
	active,
	onClick,
	children,
}: MobileNavLinkProps) {
	return (
		<a
			href={href}
			onClick={onClick}
			className={`block border-b border-transparent pb-[4px] ${
				active
					? "text-psr-gold border-psr-gold/60"
					: "text-psr-soft-white/70 hover:text-psr-soft-white"
			} transition-colors duration-200`}
		>
			{children}
		</a>
	);
}
