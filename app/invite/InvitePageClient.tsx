"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function InvitePageClient() {
	return (
		<main className="bg-psr-charcoal text-psr-soft-white min-h-screen">
			<HeroSection />
			<PhilosophySection />
			<CtaSection />
		</main>
	);
}

/* ------------------------- HERO ------------------------- */

function HeroSection() {
	return (
		<section className="relative border-b border-neutral-800 bg-psr-charcoal">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,164,93,0.03)_0%,transparent_70%)] pointer-events-none" />
			<div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="space-y-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* Phoenix Logo */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.05 }}
					>
						<div className="relative h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
							<Image
								src="/phoenix-logo.svg"
								alt="Phoenix Street Realty"
								width={112}
								height={112}
								className="h-full w-full"
							/>
						</div>
					</motion.div>

					<motion.div
						className="max-w-3xl space-y-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							Private Invitation
						</p>
						<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-psr-ivory">
							You were invited to start a conversation.
						</h1>
						<p className="text-sm text-psr-soft-white/75">
							Phoenix Street Realty works with a select number of
							clients at a time. This invitation is an opening—a
							chance to explore whether our approach aligns with
							your goals, your timeline, and your vision for the
							property or portfolio you are building.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- PHILOSOPHY --------------------- */

function PhilosophySection() {
	return (
		<section className="relative border-b border-neutral-800 bg-psr-charcoal">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(200,164,93,0.02)_0%,transparent_60%)] pointer-events-none" />
			<div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-3xl space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Our Approach
					</p>
					<h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-psr-ivory">
						We believe real estate decisions should never feel
						rushed.
					</h2>
					<div className="space-y-4 text-sm text-psr-soft-white/80">
						<p>
							Phoenix Street Realty was built for individuals who
							value elevation, strategy, and clarity. No pressure,
							no hard-sell—just a direct, human exchange about
							what you need and how we might help.
						</p>
						<p className="text-psr-soft-white/65 text-[0.85rem] pt-2">
							Our work spans interior design, tenant screening and
							verification, rental-ready property preparation, and
							strategic portfolio guidance. All designed with both
							design and systems in mind.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* --------------------- CTA --------------------- */

function CtaSection() {
	return (
		<section className="bg-psr-ivory text-psr-charcoal">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<motion.div
					className="max-w-3xl space-y-4"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7 }}
				>
					<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-ember/80">
						Next Steps
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl">
						Start the conversation.
					</h2>
					<p className="text-sm text-neutral-800/85">
						If this invitation resonates, share a few details about
						your property, your timeline, or what you are looking
						for. We will respond personally and directly.
					</p>
					<div className="space-y-2 text-[0.8rem] text-neutral-800/70 pt-2">
						<p>What to expect:</p>
						<ul className="space-y-1">
							<li>
								• A direct, personal response within 1–2
								business days
							</li>
							<li>
								• A brief conversation to understand your needs
							</li>
							<li>• Clear next steps if we are the right fit</li>
						</ul>
					</div>
					<motion.div
						className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<PrimaryButton href="/contact">
							Begin private inquiry →
						</PrimaryButton>
						<p className="text-[0.75rem] text-neutral-700">
							Prefer email?{" "}
							<a
								href="mailto:phoenixstreetrealty@gmail.com"
								className="border-b border-neutral-500 pb-[1px] hover:text-psr-ember"
							>
								Email us at phoenixstreetrealty@gmail.com
							</a>
							.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
