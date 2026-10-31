import { i as __exportAll, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent, v as addAttribute } from "./server_BCYU2qhi.mjs";
import { t as posts } from "./posts_CxDoSEZe.mjs";
import { t as $$TopicFilter } from "./TopicFilter_kSfSnBgd.mjs";
// src/pages/travel.astro
var travel_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Travel,
	file: () => $$file,
	url: () => $$url
});
var $$Travel = createComponent(($$result, $$props, $$slots) => {
	const PAGE_SIZE = 9;
	const filtered = posts.filter((p) => p.section.toLowerCase() === "travel" && p.status === "published").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
	const pagePosts = filtered.slice(0, PAGE_SIZE);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Travel — Notes by Amila" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container"><section class="archive-intro"><div class="eyebrow">Journeys</div><h1>Travel</h1><p>Places, journeys, architecture, and photographic stories.</p></section>${renderComponent($$result, "TopicFilter", $$TopicFilter, {
		"topics": [
			"Uzbekistan",
			"Japan",
			"Architecture",
			"Culture"
		],
		"allHref": "/travel"
	})}<div class="cards">${pagePosts.map((post) => renderTemplate`<a class="card"${addAttribute("/posts/" + post.slug, "href")}><img${addAttribute(post.image, "src")}${addAttribute(post.imageAlt, "alt")}><div class="meta">${post.date}</div><h3>${post.title}</h3><p>${post.excerpt}</p></a>`)}</div>${totalPages > 1 && renderTemplate`<nav class="pagination" aria-label="Travel pagination"><span class="page-current">1</span>${Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((n) => renderTemplate`<a${addAttribute("/travel/" + n, "href")}>${n}</a>`)}<a href="/travel/2" aria-label="Next page">Next →</a></nav>`}</div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/travel.astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/travel.astro";
var $$url = "/travel";
// \0virtual:astro:page:src/pages/travel@_@astro
var page = () => travel_exports;
export { page };
