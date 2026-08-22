---
title: "Daily Todos"
description: "An Obsidian plugin for quickly opening or creating dated todo notes, with a calendar view and archiving for old notes."
image: ""
bannerImage: ""
github: "https://github.com/kiranmurali93/daily-todos-obsidian-plugin"
demo: ""
year: 2026
order: 3
featured: true
tech: ["JavaScript", "Obsidian API"]
overview: "Built to replace a manual daily-note routine in Obsidian — one click opens or creates today's todo note, with quick navigation to any date and a calendar view to see which days have notes."
features:
  - "Open today's todo from a ribbon icon or command"
  - "Date picker with Yesterday / Today / Tomorrow / +2 days / +7 days shortcuts"
  - "Calendar view showing which days have notes, click to open or create"
  - "Archive old todos — keep the N most recent notes and move the rest into dated archive folders"
architecture: "Plain JavaScript Obsidian plugin (no build step) using the Obsidian Plugin API — a custom ItemView for the calendar, Modal-based UI for date picking and archiving, and a settings tab for configuring folders and templates."
---
