import { i as __exportAll, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent } from "./server_BCYU2qhi.mjs";
// src/pages/books.astro
var books_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Books,
	file: () => $$file,
	url: () => $$url
});
var $$Books = createComponent(($$result, $$props, $$slots) => {
	const books = [{
		title: "A Book That Stayed With Me",
		author: "Author Name",
		year: "2026",
		category: "Philosophy",
		reflection: "A short reflection on the ideas, questions, or passages that made this book memorable."
	}, {
		title: "Another Book Worth Remembering",
		author: "Author Name",
		year: "2026",
		category: "Literature",
		reflection: "What did this book teach me? Did it change how I see something, or did it simply arrive at the right moment?"
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Books & Reading — Notes by Amila",
		"data-astro-cid-yxyljrfl": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container" data-astro-cid-yxyljrfl><section class="archive-intro" data-astro-cid-yxyljrfl><div class="eyebrow" data-astro-cid-yxyljrfl>Ideas / Books & Reading</div><h1 data-astro-cid-yxyljrfl>Between the pages.</h1><p data-astro-cid-yxyljrfl>Books have a way of finding us at particular moments in life. Some offer answers, others leave us with better questions.</p><p data-astro-cid-yxyljrfl>This is a personal collection of books I have read, ideas I have encountered, and passages that have stayed with me.</p></section><section class="books-section" data-astro-cid-yxyljrfl><h2 data-astro-cid-yxyljrfl>From my reading shelf</h2><div class="books-grid" data-astro-cid-yxyljrfl>${books.map((book) => renderTemplate`<article class="book-card" data-astro-cid-yxyljrfl><div class="book-category" data-astro-cid-yxyljrfl>${book.category}</div><h3 data-astro-cid-yxyljrfl>${book.title}</h3><p class="book-author" data-astro-cid-yxyljrfl>${book.author} · ${book.year}</p><p data-astro-cid-yxyljrfl>${book.reflection}</p></article>`)}</div></section><section class="reading-note" data-astro-cid-yxyljrfl><h2 data-astro-cid-yxyljrfl>A note on reading</h2><p data-astro-cid-yxyljrfl>I do not necessarily read to find answers. Often, I read because I enjoy discovering questions I had never thought to ask.</p></section></div>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/books.astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/books.astro";
var $$url = "/books";
// \0virtual:astro:page:src/pages/books@_@astro
var page = () => books_exports;
export { page };
