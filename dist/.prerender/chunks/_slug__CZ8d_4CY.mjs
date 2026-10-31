import { i as __exportAll, n as createAstro, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent, v as addAttribute } from "./server_BCYU2qhi.mjs";
import { n as render, t as getCollection } from "./_astro_content_u0utukwd.mjs";
import { t as posts } from "./posts_CxDoSEZe.mjs";
// src/pages/posts/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://notesbyamila.com");
async function getStaticPaths() {
	const journalEntries = await getCollection("journal");
	const travelEntries = await getCollection("travel");
	return posts.filter((post) => post.status === "published").map((post) => {
		const entry = (post.section.toLowerCase() === "travel" ? travelEntries : journalEntries).find((item) => item.id === post.slug);
		return {
			params: { slug: post.slug },
			props: {
				post,
				entry
			}
		};
	});
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { post, entry } = Astro.props;
	const relatedPosts = posts.filter((p) => p.status === "published" && p.section.toLowerCase() === post.section.toLowerCase()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
	const currentIndex = relatedPosts.findIndex((p) => p.slug === post.slug);
	const previousPost = currentIndex > 0 ? relatedPosts[currentIndex - 1] : null;
	const nextPost = currentIndex >= 0 && currentIndex < relatedPosts.length - 1 ? relatedPosts[currentIndex + 1] : null;
	let Content = null;
	if (entry) Content = (await render(entry)).Content;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `${post.title} — Notes by Amila`,
		"description": post.excerpt,
		"data-astro-cid-ruv7hgo6": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container" data-astro-cid-ruv7hgo6><article class="article" data-astro-cid-ruv7hgo6><!-- Back to Journal / Travel --><div class="article-back-row" data-astro-cid-ruv7hgo6><a class="back"${addAttribute(`/${post.section.toLowerCase()}`, "href")} data-astro-cid-ruv7hgo6>← Back to ${post.section}</a></div><!-- Compact top navigation -->${(previousPost || nextPost) && renderTemplate`<nav class="story-nav-top" aria-label="Previous and next stories" data-astro-cid-ruv7hgo6><div class="story-nav-item" data-astro-cid-ruv7hgo6>${previousPost && renderTemplate`<a${addAttribute(`/posts/${previousPost.slug}`, "href")} data-astro-cid-ruv7hgo6><span class="nav-direction" data-astro-cid-ruv7hgo6>← Previous</span><span class="nav-separator" data-astro-cid-ruv7hgo6>|</span><span class="nav-article-title" data-astro-cid-ruv7hgo6>${previousPost.title}</span></a>`}</div><div class="story-nav-item next" data-astro-cid-ruv7hgo6>${nextPost && renderTemplate`<a${addAttribute(`/posts/${nextPost.slug}`, "href")} data-astro-cid-ruv7hgo6><span class="nav-article-title" data-astro-cid-ruv7hgo6>${nextPost.title}</span><span class="nav-separator" data-astro-cid-ruv7hgo6>|</span><span class="nav-direction" data-astro-cid-ruv7hgo6>Next →</span></a>`}</div></nav>`}<!-- Article header --><div class="meta" data-astro-cid-ruv7hgo6>${post.section} · ${post.date} · ${post.reading} read</div><h1 data-astro-cid-ruv7hgo6>${post.title}</h1><p class="lead" data-astro-cid-ruv7hgo6>${post.excerpt}</p><!-- Cover image -->${post.image && renderTemplate`<figure data-astro-cid-ruv7hgo6><img${addAttribute(post.image, "src")}${addAttribute(post.imageAlt || post.title, "alt")} data-astro-cid-ruv7hgo6></figure>`}<!-- Article body --><div class="article-content" data-astro-cid-ruv7hgo6>${Content ? renderTemplate`${renderComponent($$result, "Content", Content, { "data-astro-cid-ruv7hgo6": true })}` : renderTemplate`<p data-astro-cid-ruv7hgo6>This article is coming soon.</p>`}</div><!-- Bottom navigation -->${(previousPost || nextPost) && renderTemplate`<nav class="story-navigation" aria-label="Continue reading" data-astro-cid-ruv7hgo6><div class="story-nav-label" data-astro-cid-ruv7hgo6>CONTINUE READING</div><div class="story-nav-grid" data-astro-cid-ruv7hgo6>${previousPost ? renderTemplate`<a class="story-nav-card previous"${addAttribute(`/posts/${previousPost.slug}`, "href")} data-astro-cid-ruv7hgo6><span class="story-nav-direction" data-astro-cid-ruv7hgo6>← Previous story</span><span class="story-nav-title" data-astro-cid-ruv7hgo6>${previousPost.title}</span></a>` : renderTemplate`<div class="story-nav-empty" data-astro-cid-ruv7hgo6></div>`}${nextPost ? renderTemplate`<a class="story-nav-card next"${addAttribute(`/posts/${nextPost.slug}`, "href")} data-astro-cid-ruv7hgo6><span class="story-nav-direction" data-astro-cid-ruv7hgo6>Next story →</span><span class="story-nav-title" data-astro-cid-ruv7hgo6>${nextPost.title}</span></a>` : renderTemplate`<div class="story-nav-empty" data-astro-cid-ruv7hgo6></div>`}</div></nav>`}</article></div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/posts/[slug].astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/posts/[slug].astro";
var $$url = "/posts/[slug]";
// \0virtual:astro:page:src/pages/posts/[slug]@_@astro
var page = () => _slug__exports;
export { page };
