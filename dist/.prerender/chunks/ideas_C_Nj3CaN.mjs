import { i as __exportAll, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent, v as addAttribute } from "./server_BCYU2qhi.mjs";
import { t as posts } from "./posts_CxDoSEZe.mjs";
// src/pages/ideas.astro
var ideas_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ideas,
	file: () => $$file,
	url: () => $$url
});
var $$Ideas = createComponent(($$result, $$props, $$slots) => {
	const filtered = posts.filter((p) => p.section.toLowerCase() === "ideas");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Ideas — Amila Akagic" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container"><section class="archive-intro"><div class="eyebrow">Archive</div><h1>Ideas</h1><p>Philosophy, history, books, and questions worth exploring.</p></section><div class="cards" style="padding-bottom:100px">${filtered.map((post) => renderTemplate`<a class="card"${addAttribute("/posts/" + post.slug, "href")}><img${addAttribute(post.image, "src")}${addAttribute(post.imageAlt, "alt")}><div class="meta">${post.date}</div><h3>${post.title}</h3><p>${post.excerpt}</p></a>`)}</div></div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/ideas.astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/ideas.astro";
var $$url = "/ideas";
// \0virtual:astro:page:src/pages/ideas@_@astro
var page = () => ideas_exports;
export { page };
