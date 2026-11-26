# AICCELERATING

Marketing site for [AICCELERATING LLC](https://aiccelerating.com), an incubator for AI tools used in pest control and home services. Owned by Colin Speer.

The site is a static export. It can be hosted on Cloudflare Pages or GitHub Pages. This repository does not deploy it and does not change DNS.

## Preview

```bash
npm install
npm run dev
```

The dev server runs at [http://127.0.0.1:4327](http://127.0.0.1:4327).

Production build:

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `out/`.

## Edit the tools

Product names, domains, and tool-page copy live in [`src/data/tools.ts`](src/data/tools.ts).

- A public product has `nameTbd: false`, a real `name`, and a bare `domain` such as `pestwize.com`.
- A product without a final name has `nameTbd: true` and `name: "Name TBD"`. The site stamps those cards. Set `workingTitle` to the plain description.
- `editorNotes` is never rendered. Use it for naming ideas or reference links you do not want on the page.
- Do not name competing products in that file. Describe our tool.

Company facts, services, partner groups, and FAQs live in [`src/data/site.ts`](src/data/site.ts).

## Contact form

The form does not post anywhere. Submit opens an email to `colin@colinmspeer.com`.

There is a `TODO(HighLevel)` in [`src/components/contact-form.tsx`](src/components/contact-form.tsx) for replacing it with a HighLevel embed later.

## Deploy

Pushing `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml). That workflow builds the static export and deploys `out/` to GitHub Pages. `public/CNAME` publishes `aiccelerating.com`. There is no `basePath`, because the custom domain is served from the site root.

Canonical URLs, `sitemap.xml`, and `robots.txt` use `https://aiccelerating.com`. DNS for that domain is configured at the registrar, not in this repo.

`npm run build` writes the same static site to `out/` for a local check.
