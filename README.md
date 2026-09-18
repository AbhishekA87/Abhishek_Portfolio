# Abhishek Sharma — Portfolio

Senior AI Solutions Architect / Forward Deployed Engineer, Singapore.

## View it

Open **`index.html`** in any browser (double-click it). No server or install is needed. Fonts load from Google Fonts, so an internet connection makes it look its best.

## What's inside

| Path | What it is |
|---|---|
| `index.html` | Home: impact, how I work, case studies, tech stack, experience, certifications, contact |
| `work/` | One page per case study, with the screen-by-screen walkthrough |
| `img/` | Live product screenshots used by the case studies |
| `style.css` | The site's styles |
| `assistant.js` | The “Ask about Abhishek” assistant and its knowledge base |
| `poc/property-nex/` | Clickable proof of concept for Property Nex (illustrative sample data) |
| `source/` | The content file, stylesheet and generator the pages are built from |

## The assistant

The floating **Ask about Abhishek** button answers questions such as “What is his total experience?” or “Has he built RAG systems?”. It answers only from a curated knowledge base built from this portfolio (`source/kb-faq.mjs` plus the case studies and experience), matched to the question in the browser. There is no AI model, API key, network call or tracking, so it also works when `index.html` is opened from disk. If something isn't in the portfolio, it says so instead of guessing.

## About the screenshots

The screenshots are live captures of production systems. Business figures were masked with "X", and company and staff names were swapped for generic labels, in the page itself before each capture; nothing was cropped or blurred afterwards. The employer's internal tools are shown under a fictional brand, Northwind Logistics. Property Nex is a proof of concept; its screens use illustrative sample data. The capture tooling itself is kept private because it contains internal system addresses.
