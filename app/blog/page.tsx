import { posts } from "@/data/posts";

export default function BlogPage() {
	return (
		<main className="bg-psr-ink text-slate-50">
			<div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
				<h1 className="text-3xl font-semibold md:text-4xl">
					Blog & Resources
				</h1>
				<p className="mt-3 max-w-xl text-sm text-slate-300">
					Articles, guides, and resources for interior design, home
					improvement, landlord operations, and real estate investing.
					Start with a topic that fits where you are right now.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{posts.map((post) => (
						<article
							key={post.slug}
							className="flex flex-col rounded-2xl border border-slate-800 bg-psr-ink-soft/80 p-5"
						>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-psr-gold/80">
								{post.category}
							</p>
							<h2 className="mt-2 text-sm font-semibold text-slate-50">
								{post.title}
							</h2>
							<p className="mt-2 text-xs text-slate-400">
								{post.excerpt}
							</p>
							<a
								href={`http://localhost:3000/blog/${post.slug}`}
								className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-psr-gold/80"
							>
								Read article →
							</a>
						</article>
					))}
				</div>
			</div>
		</main>
	);
}
