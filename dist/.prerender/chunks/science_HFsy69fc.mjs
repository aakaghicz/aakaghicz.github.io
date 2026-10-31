import { i as __exportAll, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent, v as addAttribute } from "./server_BCYU2qhi.mjs";
import { t as posts } from "./posts_CxDoSEZe.mjs";
// src/pages/science.astro
var science_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Science,
	file: () => $$file,
	url: () => $$url
});
var $$Science = createComponent(($$result, $$props, $$slots) => {
	const filtered = posts.filter((p) => p.section.toLowerCase() === "science");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Science — Amila Akagić" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container"><section class="archive-intro"><div class="eyebrow">Archive</div><h1>Science</h1><p>Research, teaching, and science explained for curious readers.</p></section><div class="cards" style="padding-bottom:100px">${filtered.map((post) => renderTemplate`<a class="card"${addAttribute("/posts/" + post.slug, "href")}><img${addAttribute(post.image, "src")}${addAttribute(post.imageAlt, "alt")}><div class="meta">${post.date}</div><h3>${post.title}</h3><p>${post.excerpt}</p></a>`)}</div></div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/science.astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/science.astro";
var $$url = "/science";
// \0virtual:astro:page:src/pages/science@_@astro
var page = () => science_exports;
export { page };
