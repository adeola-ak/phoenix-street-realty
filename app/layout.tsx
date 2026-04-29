import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

import { NavLink } from "@/components/NavLink";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SiteHeaderClient } from "@/components/SiteHeaderClient";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://phoenixstreetrealty.com"),
	title: {
		default: "Phoenix Street Realty",
		template: "%s | Phoenix Street Realty",
	},
	description:
		"Luxury real estate services, interior design consulting, rental prep, tenant screening, and landlord support.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${playfair.variable} antialiased bg-psr-charcoal text-psr-soft-white`}
			>
				{/* 🔥 Freshpaint bootstrap */}
				<Script
					id="freshpaint-bootstrap"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `(function(){function p(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}function v(r){if(Array.isArray(r))return p(r)}function h(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function A(){throw new TypeError("Invalid attempt to spread non-iterable instance.")}function I(r,e){if(r){if(typeof r=="string")return p(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(r,e)}}function y(r){return v(r)||h(r)||I(r)||A()}var E=function(r,e){if(!e.__SV){try{var t,a,m=window.location,c=m.hash,x=function(n,o){return t=n.match(new RegExp(o+"=([^&]*)")),t?t[1]:null};c&&x(c,"fpState")&&(a=JSON.parse(decodeURIComponent(x(c,"fpState"))),a.action==="fpeditor"&&(window.sessionStorage.setItem("_fpcehash",c),history.replaceState(a.desiredHash||"",r.title,m.pathname+m.search)))}catch(S){}e.__loaded=!1,e.config=!1,e.__SV=2,window.freshpaint=new Proxy(e,{get:function(n,o){return n[o]!==void 0?n[o]:o==="init"?function(l,u,i){var _;(_=n)._i||(_._i=[]),n._i.push([l,u||{},i||"freshpaint"])}:function(){for(var l=arguments.length,u=new Array(l),i=0;i<l;i++)u[i]=arguments[i];var _=[o].concat(y(u));return n.push(_),new Proxy(_,{get:function(f,w){return f[w]?f[w]:function(){for(var b=arguments.length,g=new Array(b),s=0;s<b;s++)g[s]=arguments[s];f.length=0,f.push([o].concat(y(u))),f.push([w].concat(y(g)))}}})}}})}};E(document,window.freshpaint||[]);})();`,
					}}
				/>

				{/* 🔥 Freshpaint SDK */}
				<Script
					id="freshpaint-script"
					src="https://freshpaint-cdn.com/js/db36417a-fd96-4072-8fd2-c53c38b894be/freshpaint.js"
					strategy="afterInteractive"
				/>

				{/* 🔥 Freshpaint init */}
				<Script id="freshpaint-init" strategy="afterInteractive">
					{`
						freshpaint.init("db36417a-fd96-4072-8fd2-c53c38b894be");
						freshpaint.page();
					`}
				</Script>
				<div className="flex min-h-screen flex-col">
					<SiteHeaderClient />
					<main className="flex-1">{children}</main>
					<SiteFooter />
				</div>
			</body>
		</html>
	);
}

function SiteFooter() {
	return (
		<footer className="border-t border-neutral-800 bg-psr-charcoal">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-[0.8rem] text-psr-soft-white/70 md:flex-row md:items-start md:justify-between">
				{/* Brand column */}
				<div className="space-y-2">
					<p className="text-[0.7rem] tracking-[0.3em] uppercase text-psr-soft-white/60">
						Phoenix Street Realty
					</p>
					<p className="text-psr-soft-white/80">
						A design-led real estate and home-design house for
						sellers, landlords, and investors who treat home as a
						lifestyle asset.
					</p>
					<p className="text-psr-soft-white/45">
						© {new Date().getFullYear()} Phoenix Street Realty. All
						rights reserved.
					</p>
				</div>

				{/* Links column */}
				<div className="grid gap-6 text-[0.8rem] md:grid-cols-2">
					<div className="space-y-2">
						<p className="text-[0.7rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
							Navigation
						</p>
						<ul className="space-y-1.5">
							<li>
								<a
									href="https://phoenixstreetrealty.com/"
									className="hover:text-psr-gold"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/services"
									className="hover:text-psr-gold"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/tenant-screening"
									className="hover:text-psr-gold"
								>
									Tenant Screening
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/portfolio"
									className="hover:text-psr-gold"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/blog"
									className="hover:text-psr-gold"
								>
									Journal
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/about"
									className="hover:text-psr-gold"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="https://phoenixstreetrealty.com/contact"
									className="hover:text-psr-gold"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Business / contact info */}
					<div className="space-y-2">
						<p className="text-[0.7rem] uppercase tracking-[0.25em] text-psr-soft-white/60">
							Contact &amp; details
						</p>
						<p className="text-psr-soft-white/75">
							Based in{" "}
							<span className="text-psr-soft-white">
								West Orange, NJ
							</span>{" "}
							with a focus on design-forward rentals, listings,
							and portfolios in the United States.
						</p>
						<p>
							Email:{" "}
							<a
								href="mailto:phoenixstreetrealty@gmail.com"
								className="border-b border-psr-soft-white/30 pb-[1px] hover:text-psr-gold"
							>
								phoenixstreetrealty@gmail.com
							</a>
							.
						</p>
						<p className="text-psr-soft-white/60">
							Services include interior design consultations,
							rental-ready prep, landlord support systems, and
							premium tenant screening with background, credit,
							income, and rental history verification.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
