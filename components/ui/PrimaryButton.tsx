import React from "react";

type PrimaryButtonProps =
	| (React.ButtonHTMLAttributes<HTMLButtonElement> & {
			href?: undefined;
	  })
	| (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
			href: string;
	  });

export function PrimaryButton(props: PrimaryButtonProps) {
	const baseClasses =
		"inline-flex items-center justify-center rounded-full px-6 py-3 " +
		"text-xs font-semibold uppercase tracking-[0.2em] " +
		"transition duration-200 focus:outline-none " +
		"focus-visible:ring-2 focus-visible:ring-psr-gold " +
		"focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink";

	const variantClasses =
		"bg-psr-gold text-slate-900 shadow-lg shadow-amber-500/40 hover:bg-amber-300";

	const className = [baseClasses, variantClasses, props.className]
		.filter(Boolean)
		.join(" ");

	if ("href" in props && props.href) {
		const { href, children, ...rest } = props;
		return (
			<a href={href} className={className} {...rest}>
				{children}
			</a>
		);
	}

	const { children, ...rest } =
		props as React.ButtonHTMLAttributes<HTMLButtonElement>;
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	);
}

type SecondaryButtonProps = PrimaryButtonProps;

export function SecondaryButton(props: SecondaryButtonProps) {
	const baseClasses =
		"inline-flex items-center justify-center rounded-full px-6 py-3 " +
		"text-xs font-semibold uppercase tracking-[0.2em] " +
		"transition duration-200 focus:outline-none " +
		"focus-visible:ring-2 focus-visible:ring-psr-gold " +
		"focus-visible:ring-offset-2 focus-visible:ring-offset-psr-ink";

	const variantClasses =
		"border border-slate-700 text-slate-200 hover:border-psr-gold hover:text-psr-gold";

	const className = [baseClasses, variantClasses, props.className]
		.filter(Boolean)
		.join(" ");

	if ("href" in props && props.href) {
		const { href, children, ...rest } = props;
		return (
			<a href={href} className={className} {...rest}>
				{children}
			</a>
		);
	}

	const { children, ...rest } =
		props as React.ButtonHTMLAttributes<HTMLButtonElement>;
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	);
}
