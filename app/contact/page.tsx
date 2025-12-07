"use client";

import { useState } from "react";
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
		} catch (err) {
			setStatus("error");
		}
	}

	return (
		<main className="bg-psr-ink text-slate-50">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
				<div className="max-w-2xl space-y-4">
					<h1 className="text-3xl font-semibold md:text-4xl">
						Tell us about your property.
					</h1>
					<p className="text-sm text-slate-300">
						Share a bit about your home, rental, or project. We will
						respond with next steps and options for working
						together.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className="mt-8 max-w-2xl space-y-4"
				>
					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<label className="text-xs text-slate-400">
								Name
							</label>
							<input
								required
								className="mt-1 w-full rounded-xl border border-slate-800 bg-psr-ink-soft px-3 py-2 text-sm text-slate-50 outline-none focus:border-psr-gold"
								type="text"
								name="name"
							/>
						</div>
						<div>
							<label className="text-xs text-slate-400">
								Email
							</label>
							<input
								required
								className="mt-1 w-full rounded-xl border border-slate-800 bg-psr-ink-soft px-3 py-2 text-sm text-slate-50 outline-none focus:border-psr-gold"
								type="email"
								name="email"
							/>
						</div>
					</div>

					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<label className="text-xs text-slate-400">
								I am a...
							</label>
							<select
								className="mt-1 w-full rounded-xl border border-slate-800 bg-psr-ink-soft px-3 py-2 text-sm text-slate-50 outline-none focus:border-psr-gold"
								name="role"
							>
								<option>Homeowner</option>
								<option>Landlord</option>
								<option>Design client</option>
								<option>Investor / partner</option>
								<option>Other</option>
							</select>
						</div>
						<div>
							<label className="text-xs text-slate-400">
								Project type
							</label>
							<select
								className="mt-1 w-full rounded-xl border border-slate-800 bg-psr-ink-soft px-3 py-2 text-sm text-slate-50 outline-none focus:border-psr-gold"
								name="projectType"
							>
								<option>Virtual design consult</option>
								<option>Rental-ready prep</option>
								<option>Landlord support</option>
								<option>Renovation / flip</option>
								<option>Not sure yet</option>
							</select>
						</div>
					</div>

					<div>
						<label className="text-xs text-slate-400">
							Budget range (optional)
						</label>
						<input
							className="mt-1 w-full rounded-xl border border-slate-800 bg-psr-ink-soft px-3 py-2 text-sm text-slate-50 outline-none focus:border-psr-gold"
							type="text"
							name="budget"
							placeholder="$5k - $15k, etc."
						/>
					</div>

					<div>
						<label className="text-xs text-slate-400">
							Tell us about your space or project
						</label>
						<textarea
							required
							className="mt-1 w-full rounded-xl border border-slate-800 bg-psr-ink-soft px-3 py-2 text-sm text-slate-50 outline-none focus:border-psr-gold"
							name="message"
							rows={5}
						/>
					</div>

					<div className="mt-2 flex items-center gap-3">
						<PrimaryButton
							type="submit"
							disabled={
								status === "submitting" ||
								status === "submitted"
							}
							className="disabled:opacity-60"
						>
							{status === "idle" && "Submit"}
							{status === "submitting" && "Sending..."}
							{status === "submitted" && "Submitted ✓"}
						</PrimaryButton>

						{status === "error" && (
							<p className="text-xs text-red-400">
								Something went wrong. Please try again or email
								us directly.
							</p>
						)}
						{status === "submitted" && (
							<p className="text-xs text-emerald-400">
								Thank you. We have received your message.
							</p>
						)}
					</div>

					<p className="text-xs text-slate-500">
						Or email us at{" "}
						<a
							href="mailto:hello@phoenixstreetrealty.com"
							className="font-medium text-slate-200 underline"
						>
							hello@phoenixstreetrealty.com
						</a>
					</p>
				</form>
			</div>
		</main>
	);
}
