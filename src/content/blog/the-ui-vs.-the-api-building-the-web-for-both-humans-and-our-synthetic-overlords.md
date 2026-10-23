---
title: 'The UI vs. The API: Building the Web for Both Humans and Our Synthetic Overlords'
date: 2026-09-23T17:11:00
description: 'For the last two decades, web development has operated under one massive, unquestioned assumption: there’s a human being on the other side of the screen. We built intricate Vue frontend components, argued endlessly about button padding, and obsessed over Express backend routing to perfectly match the psychology of a distracted person holding a smartphone.'
audio: /uploads/The UI vs. The API Building the Web for Both Humans and Our Synthetic Overlords.mp3
vtt: ''
---

But the internet is going through a bit of cognitive Darwinism. We are moving past the era where search simply meant a human reading ten blue links. Instead, AI agents are becoming a new, active layer between people and the services they use. Agents don't just read; they synthesize, compare, recommend, and, increasingly, execute tasks. Which brings up an existential crisis for every product manager: Are we now supposed to build two separate websites?

### The Past, Present, and the "Agentic" Future

In the recent past, the web was purely human-centric. If you wanted to book a flight or analyze data, you, the human, navigated a labyrinth of UI patterns, forms, and JavaScript pop-ups.

Today, we are witnessing the rise of the "agentic web." This is an ecosystem where AI systems discover services, call tools, and trigger workflows on a user's behalf. Instead of relying purely on a human clicking a UI, your site becomes a capability an agent can use programmatically. Startups and established agencies alike are already building "agentic website services" that expose shared content models and permissioned Model Context Protocol (MCP) tools directly to external agents.

This begs the question: _Will humans even see your site?_

In many transactional cases, no. If an agent can evaluate options, compare pricing, and execute a booking via your backend before a human ever sees a pixel, your UI suddenly matters a lot less than your data structure. People will trust the agent's synthesis over your polished marketing copy. But for experiential products, where the journey is the product, humans will still show up. The UI isn't dead; it's just no longer the _only_ door to your product.

### The "Two Websites" Fallacy

So, do we need to ship two sites, a flashy SPA for humans, and a brutalist, machine-readable API shell for agents?

Thankfully, no. The industry consensus is that building for AI and building for humans are not two distinct problems; they are merging. The things AI systems desperately need, clear semantic HTML, minimal hidden JavaScript, descriptive headings, and logical reading orders, are the exact same fundamentals required for human accessibility and SEO.

If your application relies on spaghetti code where crucial content is buried behind a client-side JS render, neither an AI agent nor a human using a screen reader can use it. The constraint of building for agents is actually a forcing function for better product design. It pushes us toward clearer structures and more direct language, rather than burying a weak value proposition behind fancy transition animations.

### Will Brands Block Agents?

Some will absolutely try. We're already seeing a panic over synthetic traffic, with brands heavily investing in bot-blockers or aggressively locking down `robots.txt` and `llms.txt` files. If a business model relies solely on monetizing human eyeballs via display ads, the idea of an agent extracting the data without loading an ad is terrifying.

But as a product manager, blocking agents is a long-term losing strategy. Search is becoming chat, and recommendation is becoming Perplexity citing you. If your product isn't structured for AI, you become invisible. If you refuse to let agents book the hotel, the agent will just route the user to a competitor that offers a clean, machine-readable booking flow.

### The Expert PM Opinion

We don't need to choose between humans and machines. We just need to stop prioritizing pure aesthetics over structural utility. The web of the future isn't a battle of humans versus AI—it's humans and AI utilizing the same web. Treat your Vue components as the human interface, but ensure your Express API endpoints and clear schema markups are robust enough that an agent can confidently do the heavy lifting. The products that win will be the ones that make their capabilities the easiest to execute, regardless of who, or what, is making the request.

### TL;DR

AI agents are shifting the web from a purely visual medium to a structural one, acting on behalf of users to search, compare, and execute tasks. You don't need to build two separate sites; the semantic HTML, clear data structure, and accessible architecture that agents need are the exact same things that make a site usable for humans. Brands that try to block agents to protect legacy ad revenue will simply make themselves invisible to the next generation of internet discovery engines.

### Sources

- Ah, that's my bad! I left out the actual hyperlinks. Here are the direct, clickable links to the real industry sources used to build that perspective:

- [Building Websites for Humans and AI Agents: You CAN Do Both](https://www.americaneagle.com/insights/blog/post/building-websites-for-humans-ai-agents)
- [The Web Was Built for Humans. Now AI Agents are Becoming the Second Audience](https://medium.com/@briansolis/the-web-was-built-for-humans-now-ai-agents-are-becoming-the-second-audience-757f9f57c34e)
- [The Agentic Web Is Coming: Why Websites Will Soon Talk to AI Agents](https://dev.to/safdarali25/the-agentic-web-is-coming-why-websites-will-soon-talk-to-ai-agents-efp)
- [How to Build an Agent-First Product: Lessons from Stripe, Google, and Anthropic](https://www.mindstudio.ai/blog/how-to-build-agent-first-product-design-principles)
- [How Stripe is designing Checkout for AI agents](https://stripe.dev/blog/how-stripe-is-designing-checkout-for-ai-agents)
