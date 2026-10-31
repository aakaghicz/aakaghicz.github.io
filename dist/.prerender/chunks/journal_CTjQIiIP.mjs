import { i as __exportAll, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent, v as addAttribute } from "./server_BCYU2qhi.mjs";
import { t as posts } from "./posts_CxDoSEZe.mjs";
import { t as $$TopicFilter } from "./TopicFilter_kSfSnBgd.mjs";
// src/pages/journal.astro
var journal_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Journal,
	file: () => $$file,
	url: () => $$url
});
var $$Journal = createComponent(($$result, $$props, $$slots) => {
	const PAGE_SIZE = 9;
	const filtered = posts.filter((p) => p.section.toLowerCase() === "journal" && p.status === "published").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
	const pagePosts = filtered.slice(0, PAGE_SIZE);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Journal — Notes by Amila" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container"><section class="archive-intro"><div class="eyebrow">Reflections</div><h1>Journal</h1><p>Short reflections, ordinary days, and personal notes.</p></section>${renderComponent($$result, "TopicFilter", $$TopicFilter, {
		"topics": [
			"Personal Growth",
			"Life Lessons",
			"Humility"
		],
		"allHref": "/journal"
	})}<div class="cards">${pagePosts.map((post) => renderTemplate`<a class="card"${addAttribute("/posts/" + post.slug, "href")}><img${addAttribute(post.image, "src")}${addAttribute(post.imageAlt, "alt")}><div class="meta">${post.date}</div><h3>${post.title}</h3><p>${post.excerpt}</p></a>`)}</div>${totalPages > 1 && renderTemplate`<nav class="pagination" aria-label="Journal pagination"><span class="page-current">1</span>${Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((n) => renderTemplate`<a${addAttribute("/journal/" + n, "href")}>${n}</a>`)}<a href="/journal/2" aria-label="Next page">Next →</a></nav>`}</div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/journal.astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/journal.astro";
var $$url = "/journal";
// \0virtual:astro:page:src/pages/journal@_@astro
var page = () => journal_exports;
export { page };
