import { i as __exportAll, n as createAstro, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent, v as addAttribute } from "./server_BCYU2qhi.mjs";
import { t as posts } from "./posts_CxDoSEZe.mjs";
// src/pages/topics/[tag].astro
var _tag__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tag,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://notesbyamila.com");
function getStaticPaths() {
	const published = posts.filter((post) => post.status === "published");
	return [...new Set(published.flatMap((post) => post.tags || []))].map((topic) => ({
		params: { tag: topic.toLowerCase().trim().replace(/\s+/g, "-") },
		props: { topic }
	}));
}
var $$Tag = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tag;
	const { topic } = Astro.props;
	const filtered = posts.filter((post) => post.status === "published" && (post.tags || []).includes(topic)).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${topic} — Notes by Amila` }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container"><section class="archive-intro"><div class="eyebrow">Explore by topic</div><h1>${topic}</h1><p>${filtered.length}${filtered.length === 1 ? " story" : " stories"}${" "}about ${topic.toLowerCase()}.</p><a href="/journal">← Back to Journal</a></section><div class="cards" style="padding-bottom:100px">${filtered.map((post) => renderTemplate`<a class="card"${addAttribute(`/posts/${post.slug}`, "href")}><img${addAttribute(post.image, "src")}${addAttribute(post.imageAlt || post.title, "alt")} loading="lazy"><div class="meta">${post.section} · ${post.date}</div><h3>${post.title}</h3><p>${post.excerpt}</p></a>`)}</div></div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/topics/[tag].astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/topics/[tag].astro";
var $$url = "/topics/[tag]";
// \0virtual:astro:page:src/pages/topics/[tag]@_@astro
var page = () => _tag__exports;
export { page };
