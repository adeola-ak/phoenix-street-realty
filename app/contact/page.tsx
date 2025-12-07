"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const FORM_ENDPOINT = "https://formspree.io/f/xdkqdqyg";

export default function ContactPage() {
	const [status, setStatus] = useState<
		"idle" | "submitting" | "submitted" | "error"
	>("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("submitting");

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			if (res.ok) {
				setStatus("submitted");
				form.reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	}

	return (
		<main className="bg-psr-charcoal text-psr-soft-white">
			<section className="border-b border-neutral-800">
				<div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr,1.2fr] md:py-20">
					{/* Left: copy */}
					<motion.div
						className="space-y-5"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.7 }}
					>
						<p className="text-[0.6rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
							Private inquiry
						</p>
						<h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl">
							tell us about your property.
						</h1>
						<p className="text-sm text-psr-soft-white/70">
							For design-led rentals, seller preparations, or
							portfolio-level conversations, share a few details
							below. Your inquiry is reviewed privately, and we
							respond with clear, straightforward next steps.
						</p>

						<div className="space-y-2 text-[0.8rem] text-psr-soft-white/60">
							<p>We are a good fit if you are:</p>
							<ul className="space-y-1">
								<li>
									• Preparing a home to sell or quietly list
								</li>
								<li>• Elevating a rental or short-term stay</li>
								<li>
									• Building or refining a design-led
									portfolio
								</li>
								<li>
									• A landlord ready for calmer, more
									intentional systems
								</li>
							</ul>
						</div>

						<div className="pt-4 text-[0.8rem] text-psr-soft-white/50">
							<p>
								Prefer to email directly? Reach us at{" "}
								<a
									href="mailto:hello@phoenixstreetrealty.com"
									className="border-b border-neutral-500 pb-[1px]"
								>
									hello@phoenixstreetrealty.com
								</a>
								.
							</p>
						</div>
					</motion.div>

					{/* Right: form */}
					<motion.div
						className="rounded-2xl border border-neutral-800 bg-black/40 p-6 shadow-card-soft/40"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						<form
							onSubmit={handleSubmit}
							className="space-y-4 text-sm"
						>
							<div className="grid gap-4 md:grid-cols-2">
								<div>
									<label className="text-[0.7rem] uppercase tracking-[0.18em] text-psr-soft-white/60">
										Name
									</label>
									<input
										required
										name="name"
										type="text"
										className="mt-1 w-full rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-sm text-psr-soft-white outline-none focus:border-psr-gold"
									/>
								</div>
								<div>
									<label className="text-[0.7rem] uppercase tracking-[0.18em] text-psr-soft-white/60">
										Email
									</label>
									<input
										required
										name="email"
										type="email"
										className="mt-1 w-full rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-sm text-psr-soft-white outline-none focus:border-psr-gold"
									/>
								</div>
							</div>

							<div className="grid gap-4 md:grid-cols-2">
								<div>
									<label className="text-[0.7rem] uppercase tracking-[0.18em] text-psr-soft-white/60">
										I am a...
									</label>
									<select
										name="role"
										className="mt-1 w-full rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-sm text-psr-soft-white outline-none focus:border-psr-gold"
									>
										<option>Homeowner / seller</option>
										<option>Landlord</option>
										<option>Design client</option>
										<option>Investor / partner</option>
										<option>Other</option>
									</select>
								</div>
								<div>
									<label className="text-[0.7rem] uppercase tracking-[0.18em] text-psr-soft-white/60">
										Project type
									</label>
									<select
										name="projectType"
										className="mt-1 w-full rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-sm text-psr-soft-white outline-none focus:border-psr-gold"
									>
										<option>Virtual design consult</option>
										<option>Rental-ready prep</option>
										<option>
											Styling & staging direction
										</option>
										<option>
											Landlord systems & support
										</option>
										<option>Portfolio / investment</option>
										<option>Not sure yet</option>
									</select>
								</div>
							</div>

							<div>
								<label className="text-[0.7rem] uppercase tracking-[0.18em] text-psr-soft-white/60">
									Property location
								</label>
								<input
									name="location"
									type="text"
									placeholder="City, neighborhood, or area"
									className="mt-1 w-full rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-sm text-psr-soft-white outline-none focus:border-psr-gold"
								/>
							</div>

							<div>
								<label className="text-[0.7rem] uppercase tracking-[0.18em] text-psr-soft-white/60">
									Investment / project range
								</label>
								<input
									name="budget"
									type="text"
									placeholder="$5k–$15k design, $50k+ renovation, etc."
									className="mt-1 w-full rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-sm text-psr-soft-white outline-none focus:border-psr-gold"
								/>
							</div>

							<div>
								<label className="text-[0.7rem] uppercase tracking-[0.18em] text-psr-soft-white/60">
									Tell us about your space
								</label>
								<textarea
									required
									name="message"
									rows={5}
									placeholder="Current condition, timing, and how you want the home to feel."
									className="mt-1 w-full rounded-xl border border-neutral-700 bg-black/40 px-3 py-2 text-sm text-psr-soft-white outline-none focus:border-psr-gold"
								/>
							</div>

							<div className="mt-4 flex flex-wrap items-center gap-4">
								<PrimaryButton
									type="submit"
									disabled={
										status === "submitting" ||
										status === "submitted"
									}
									className="disabled:opacity-60"
								>
									{status === "idle" && "Submit inquiry"}
									{status === "submitting" && "Sending..."}
									{status === "submitted" && "Inquiry sent ✓"}
								</PrimaryButton>

								{status === "error" && (
									<p className="text-[0.75rem] text-red-400">
										Something went wrong. Please try again
										or email us directly.
									</p>
								)}
								{status === "submitted" && (
									<p className="text-[0.75rem] text-psr-soft-white/60">
										Thank you. We have received your
										inquiry.
									</p>
								)}
							</div>
						</form>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
