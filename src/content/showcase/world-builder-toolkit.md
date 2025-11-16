---
title: "World Builder Toolkit"
meta_title: "World Builder Toolkit"
description: "Procedural content tools that sit inside Godot to bootstrap terrain and quest data structures."
date: 2023-05-09
image: "/images/service-2.png"
author: "GongIdeas"
categories:
  - "Game Dev"
  - "Tools"
tags:
  - "Godot"
  - "Procedural"
  - "CLI"
draft: false
---

We prototyped a toolkit that plugs into the Godot editor and mirrors level data back to Astro for documentation. Designers can mark up terrain stamps, annotate encounters, and publish questlines without touching JSON.

### Toolkit stack

1. Godot editor plugin emits structured YAML.
2. GitHub Actions converts YAML into Markdown and shoves it into the Astro content collection.
3. Astro renders reference docs complete with screenshots and diff visualizations for weekly reviews.

### Why it matters

Synchronizing design intent with implementation has always been painful. This toolkit shows how a light amount of automation (plus rock-solid content collections) keeps everybody working from the same data source.
