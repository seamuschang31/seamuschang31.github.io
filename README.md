# seamuschang31.github.io

My personal portfolio — profile, projects, and resume — live at **https://seamuschang31.github.io**.

Built with [Astro](https://astro.build). Bilingual: English at `/`, 繁體中文 at `/zh/`.
Every push to `main` auto-deploys via GitHub Actions.

## How to update the site

### 新增一個專案 (Add a project)

1. Copy an existing file in `src/content/projects/en/` to `src/content/projects/en/<new-slug>.md`, write the content, and adjust the frontmatter (`title`, `summary`, `date`, `tags`, optional `github`/`demo`, `featured`, `order`).
2. Do the same for the Chinese version in `src/content/projects/zh/<new-slug>.md` (same filename!).
3. Commit and push — done.

### 更新履歷 (Update resume)

1. Edit `src/data/resume.en.json` and `src/data/resume.zh.json` (education / skills / experience / leadership).
2. Replace `public/resume.pdf` with the new PDF.
3. Commit and push.

### 更新個人簡介 (Update profile / bio / links)

Edit `src/data/profile.en.json` and `src/data/profile.zh.json`, then push.

> Tip: you can also just tell Claude Code e.g. "幫我新增一個專案 X" — conventions are documented in `CLAUDE.md`.

## Local development

```sh
nvm use 24        # system Node is too old
npm install
npm run dev       # http://localhost:4321
npm run build     # production build (run before pushing)
```

## Structure

```
src/
├── content/projects/{en,zh}/   # one Markdown file per project
├── data/                       # profile + resume content (JSON)
├── i18n.ts                     # UI strings & locale helpers
├── components/                 # Navbar, Footer, ProjectCard, shared page components
├── layouts/BaseLayout.astro
└── pages/                      # routes (en at /, zh at /zh/)
public/resume.pdf               # downloadable resume
.github/workflows/deploy.yml    # auto-deploy to GitHub Pages
```
