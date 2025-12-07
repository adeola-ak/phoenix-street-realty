"use client";

import { motion } from "framer-motion";

export default function NotFoundClient() {
	return (
		<main className="min-h-screen bg-psr-charcoal text-psr-soft-white flex items-center justify-center">
			<motion.div
				className="text-center space-y-4 px-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<p className="text-[0.6rem] uppercase tracking-[0.3em] text-psr-soft-white/60">
					404
				</p>
				<h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] text-psr-ivory">
					This page doesn’t exist.
				</h1>
				<p className="text-sm text-psr-soft-white/70 max-w-md mx-auto">
					The link may be outdated, or the page may have moved.
					Explore our services, portfolio, or journal to see how we
					work with homes and rentals.
				</p>
				<div className="flex flex-wrap gap-4 justify-center text-[0.8rem] mt-4">
					<a
						href="https://phoenixstreetrealty.com"
						className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
					>
						Go to homepage →
					</a>
					<a
						href="https://phoenixstreetrealty.com/services"
						className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
					>
						View services →
					</a>
					<a
						href="https://phoenixstreetrealty.com/blog"
						className="border-b border-transparent pb-[2px] text-psr-gold hover:border-psr-gold"
					>
						Read the journal →
					</a>
				</div>
			</motion.div>
		</main>
	);
}
