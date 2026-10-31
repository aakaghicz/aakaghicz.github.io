import { n as createAstro, r as createComponent } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, v as addAttribute } from "./server_BCYU2qhi.mjs";
// src/components/TopicFilter.astro
createAstro("https://notesbyamila.com");
var $$TopicFilter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TopicFilter;
	const { topics = [], active = "", allHref = "/" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="topic-filter" aria-label="Explore by topic" data-astro-cid-xr43kth3><span class="topic-label" data-astro-cid-xr43kth3>EXPLORE BY TOPIC</span><div class="topic-list" data-astro-cid-xr43kth3><a${addAttribute(allHref, "href")}${addAttribute(["topic-pill", { active: !active }], "class:list")} data-astro-cid-xr43kth3>All stories</a>${topics.map((topic) => renderTemplate`<a${addAttribute(`/topics/${encodeURIComponent(topic.toLowerCase().replace(/\s+/g, "-"))}`, "href")}${addAttribute(["topic-pill", { active: active === topic }], "class:list")} data-astro-cid-xr43kth3>${topic}</a>`)}</div></nav>`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/components/TopicFilter.astro", void 0);
export { $$TopicFilter as t };
