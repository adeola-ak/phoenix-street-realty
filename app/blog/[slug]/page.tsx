import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

type BlogPostPageProps = {
	params: {
		slug: string;
	};
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<main className="bg-psr-ink text-slate-50">
			<div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
				<p className="text-xs font-semibold uppercase tracking-[0.3em] text-psr-gold/80">
					{post?.category}
				</p>
				<h1 className="mt-2 text-3xl font-semibold md:text-4xl">
					{post?.title}
				</h1>
				<p className="mt-2 text-xs text-slate-400">{post?.date}</p>

				<article className="prose prose-invert prose-sm mt-8 max-w-none">
					{/* Very basic markdown-ish rendering */}
					{post?.content.split("\n").map((line, index) => {
						if (line.startsWith("### ")) {
							return (
								<h3
									key={index}
									className="mt-6 text-base font-semibold text-slate-50"
								>
									{line.replace("### ", "")}
								</h3>
							);
						}
						if (!line.trim()) {
							return <p key={index} className="h-2" />;
						}
						return (
							<p key={index} className="text-sm text-slate-200">
								{line.trim()}
							</p>
						);
					})}
				</article>
			</div>
		</main>
	);
}
