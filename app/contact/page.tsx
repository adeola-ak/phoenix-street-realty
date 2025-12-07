"use client";

import { useState } from "react";

export default function ContactPage() {
	const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
		"idle"
	);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("submitting");
		// For now, just simulate a submission:
		setTimeout(() => {
			setStatus("submitted");
		}, 800);
	}

	return (
		<main className="bg-psr-ink text-slate-50">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
				<div className="max-w-2xl space-y-4">
					<h1 className="text-3xl font-semibold md:text-4xl">
						Tell us about your property.
					</h1>
					<p className="text-sm text-slate-300">
						Share a bit about your home, rental, or project. We’ll
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

					<button
						type="submit"
						disabled={
							status === "submitting" || status === "submitted"
						}
						className="mt-2 rounded-full bg-psr-gold px-6 py-3
             text-xs font-semibold uppercase tracking-[0.2em] text-slate-900
             transition duration-200
             hover:bg-amber-300
             focus:outline-none focus-visible:ring-2 focus-visible:ring-psr-gold
             focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink
             disabled:opacity-60"
					>
						{status === "idle" && "Submit"}
						{status === "submitting" && "Sending..."}
						{status === "submitted" && "Submitted ✓"}
					</button>

					<p className="text-xs text-slate-500">
						For now, this form is a demo. In production, you might
						connect it to a form service or API endpoint.
					</p>
				</form>
			</div>
		</main>
	);
}
