<h1 align=center>GongIdeas</h1>

<p align=center>This is the source code for my personal blog, <a href="https://gongideas.com">gongideas.com</a>. I write about software engineering and game development.</p>

## 🙏 Credits

This website is built on top of the [Astroplate](https://github.com/zeon-studio/astroplate) theme by Zeon Studio.

## 🚀 Getting Started

### 📦 Dependencies

- astro
- node
- yarn
- tailwind

### 👉 Install Dependencies

```bash
yarn install
```

### 👉 Development Command

```bash
yarn run dev
```

### 👉 Build Command

```bash
yarn run build
```

## 🧩 Adding Content

### ✍️ Create a New Blog Post

1. Add a new Markdown file under `src/content/blog/` (for example `src/content/blog/my-new-post.md`). Use a kebab-case name so the slug stays clean.
2. Copy the frontmatter template below and update the fields. `draft: true` keeps the post hidden until you are ready to publish.

```md
---
title: "Post title"
meta_title: "SEO title (optional)"
description: "One sentence summary"
date: 2024-01-12T00:00:00Z
image: "/images/image-placeholder.png"
categories: ["engineering", "culture"]
author: "GongIdeas"
tags: ["astro", "productivity"]
draft: false
---
```

3. Write the article body in Markdown (MDX works too) underneath the frontmatter.
4. Run `yarn dev` to preview or `yarn build` for a production check; Astro will automatically pick up anything inside `src/content/blog`.

### 🌟 Create a New Project Entry

1. Create a Markdown file in `src/content/projects/` (for example `src/content/projects/release-dashboard.md`).
2. Fill in the project schema:

```md
---
title: "Project name"
meta_title: "SEO title (optional)"
description: "Short blurb that appears on cards"
date: 2024-01-12
image: "/images/service-1.png"
author: "GongIdeas"
categories: ["internal tools"]
tags: ["astro", "supabase"]
draft: false
---
```

3. Document the highlights using Markdown headings, lists, and images just like the examples already in `src/content/projects`.
4. Preview with `yarn dev` to confirm the project renders correctly on the `/projects` page and homepage sections.

<!-- reporting issue -->

## 🐞 Reporting Issues

We use GitHub Issues as the official bug tracker for this Template. Please Search [existing issues](https://github.com/90n9/gongideas-astro/issues). It’s possible someone has already reported the same problem.
If your problem or idea has not been addressed yet, feel free to [open a new issue](https://github.com/90n9/gongideas-astro/issues).

<!-- licence -->

## 📝 License

Copyright (c) 2023 - Present, GongIdeas

**Code License:** Released under the [MIT](https://github.com/zeon-studio/astroplate/blob/main/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their license, we don't have permission to share those images.
