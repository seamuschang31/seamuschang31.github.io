# seamuschang31.github.io — Personal Portfolio

Bilingual (English `/`, Traditional Chinese `/zh/`) portfolio site built with Astro.
Deployed to GitHub Pages automatically via `.github/workflows/deploy.yml` on every push to `main`.

## Content conventions — where to edit

- **Add a project**: create `src/content/projects/en/<slug>.md` AND `src/content/projects/zh/<slug>.md` (same slug in both languages — the language switcher relies on it). Frontmatter: `title`, `summary`, `date`, `tags`, optional `github`/`demo` URLs, `featured` (shown on home page), `order` (sort key, lower = first).
- **Update resume content**: edit `src/data/resume.en.json` and `src/data/resume.zh.json`.
- **Update resume PDF**: replace `public/resume.pdf`.
- **Update bio / links / headline**: edit `src/data/profile.en.json` and `src/data/profile.zh.json`.
- **UI strings** (nav labels, section titles): `src/i18n.ts`.

Always update both `en` and `zh` versions of any content.

## Development

Use Node 24 via nvm (`source ~/.nvm/nvm.sh && nvm use 24`) — the system Node is too old.

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Run `npm run build` before pushing to catch errors locally.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
