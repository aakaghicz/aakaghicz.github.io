import { i as __exportAll, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent } from "./server_BCYU2qhi.mjs";
import { n as render, t as getCollection } from "./_astro_content_u0utukwd.mjs";
// src/pages/commonplace.astro
var commonplace_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Commonplace,
	file: () => $$file,
	url: () => $$url
});
var $$Commonplace = createComponent(async ($$result, $$props, $$slots) => {
	const quotes = await getCollection("quotes");
	const entries = await Promise.all(quotes.map(async (quote) => {
		const { Content } = await render(quote);
		return {
			quote,
			Content
		};
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Commonplace — Notes by Amila",
		"data-astro-cid-enhvcxwm": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container" data-astro-cid-enhvcxwm><section class="archive-intro" data-astro-cid-enhvcxwm><div class="eyebrow" data-astro-cid-enhvcxwm>Commonplace</div><h1 data-astro-cid-enhvcxwm>Words worth keeping.</h1><p data-astro-cid-enhvcxwm>A collection of quotations, passages, and thoughts that have stayed with me.</p></section><section class="quotes-list" data-astro-cid-enhvcxwm>${entries.map(({ quote, Content }) => renderTemplate`<article class="quote-entry" data-astro-cid-enhvcxwm><div class="quote-category" data-astro-cid-enhvcxwm>${quote.data.category ?? "Reflections"}</div><div class="quote-content" data-astro-cid-enhvcxwm>${renderComponent($$result, "Content", Content, { "data-astro-cid-enhvcxwm": true })}</div><p class="quote-author" data-astro-cid-enhvcxwm>— ${quote.data.author}</p>${quote.data.source && renderTemplate`<p class="quote-source" data-astro-cid-enhvcxwm>${quote.data.source}</p>`}</article>`)}</section></div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/commonplace.astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/commonplace.astro";
var $$url = "/commonplace";
// \0virtual:astro:page:src/pages/commonplace@_@astro
var page = () => commonplace_exports;
export { page };
