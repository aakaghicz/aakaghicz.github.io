import { i as __exportAll, r as createComponent, t as $$Base } from "./Base_DE-pOM95.mjs";
import { g as maybeRenderHead, h as renderTemplate, l as renderComponent } from "./server_BCYU2qhi.mjs";
// src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Contact — Notes by Amila",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="container" data-astro-cid-6bfsojfh><section class="contact-page" data-astro-cid-6bfsojfh><div class="eyebrow" data-astro-cid-6bfsojfh>LET'S CONNECT</div><h1 data-astro-cid-6bfsojfh>Get in touch</h1><p class="contact-intro" data-astro-cid-6bfsojfh>Whether you have a thought about something I've written, a question, or simply want to say hello, I'd be happy to hear from you.</p><form action="https://formspree.io/f/xbggazoj" method="POST" class="contact-form" data-astro-cid-6bfsojfh><label for="name" data-astro-cid-6bfsojfh>Your name</label><input id="name" name="name" required data-astro-cid-6bfsojfh><label for="email" data-astro-cid-6bfsojfh>Email address</label><input id="email" name="email" type="email" required data-astro-cid-6bfsojfh><label for="message" data-astro-cid-6bfsojfh>Your message</label><textarea id="message" name="message" rows="6" required data-astro-cid-6bfsojfh></textarea><button type="submit" data-astro-cid-6bfsojfh>Send message</button></form></section></main>` })}`;
}, "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/contact.astro", void 0);
var $$file = "/Users/amak/Documents/GitHub/aakaghicz.github.io/src/pages/contact.astro";
var $$url = "/contact";
// \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
export { page };
