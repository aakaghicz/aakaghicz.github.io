import { i as __exportAll, n as createAstro, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent, v as addAttribute } from "./server_BCYU2qhi.mjs";
import { t as posts } from "./posts_CxDoSEZe.mjs";
// src/pages/travel/[page].astro
var _page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Page,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://notesbyamila.com");
function getStaticPaths() {
	const filtered = posts.filter((p) => p.section.toLowerCase() === "travel" && p.status === "published").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
	return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => {
		const page = i + 2;
		return {
			params: { page: String(page) },
			props: {
				pagePosts: filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
				page,
				totalPages
			}
		};
	});
}
var $$Page = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Page;
	const { pagePosts, page, totalPages } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Travel — Page ${page} — Amila Akagić` }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container"><section class="archive-intro"><div class="eyebrow">Archive</div><h1>Travel</h1><p>Places, journeys, architecture, and photographic stories.</p></section><div class="cards">${pagePosts.map((post) => renderTemplate`<a class="card"${addAttribute("/posts/" + post.slug, "href")}><img${addAttribute(post.image, "src")}${addAttribute(post.imageAlt, "alt")}><div class="meta">${post.date}</div><h3>${post.title}</h3><p>${post.excerpt}</p></a>`)}</div><nav class="pagination" aria-label="Travel pagination"><a${addAttribute(page === 2 ? "/travel" : `/travel/${page - 1}`, "href")}>← Previous</a><a href="/travel">1</a>${Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((n) => n === page ? renderTemplate`<span class="page-current" aria-current="page">${n}</span>` : renderTemplate`<a${addAttribute(`/travel/${n}`, "href")}>${n}</a>`)}${page < totalPages && renderTemplate`<a${addAttribute(`/travel/${page + 1}`, "href")}>Next →</a>`}</nav></div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/travel/[page].astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/travel/[page].astro";
var $$url = "/travel/[page]";
// \0virtual:astro:page:src/pages/travel/[page]@_@astro
var page = () => _page__exports;
export { page };
