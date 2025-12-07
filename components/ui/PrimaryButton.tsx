import React from "react";

type AnchorOrButtonProps =
	| (React.ButtonHTMLAttributes<HTMLButtonElement> & {
			href?: undefined;
	  })
	| (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
			href: string;
	  });

const baseClasses =
	"inline-flex items-center justify-center rounded-xl px-7 py-3 " +
	"text-[0.7rem] font-semibold tracking-[0.25em] uppercase " +
	"transition duration-300 focus:outline-none " +
	"focus-visible:ring-2 focus-visible:ring-psr-gold " +
	"focus-visible:ring-offset-2 focus-visible:ring-offset-psr-charcoal";

export function PrimaryButton(props: AnchorOrButtonProps) {
	const variantClasses =
		"bg-psr-charcoal text-psr-soft-white border border-psr-gold/70 " +
		"hover:bg-psr-gold hover:text-psr-charcoal";

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

export function SecondaryButton(props: AnchorOrButtonProps) {
	const variantClasses =
		"bg-transparent text-psr-soft-white border border-psr-soft-white/40 " +
		"hover:border-psr-gold hover:text-psr-gold";

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
