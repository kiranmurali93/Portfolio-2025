---
title: "FocusFlow"
description: "FocusFlow is a browser extension that helps users stay productive by blocking distracting websites."
image: "project-imgs/focus-flow.png"
bannerImage: ""
github: "https://github.com/pksh-labs/focus-flow"
demo: "https://chromewebstore.google.com/detail/focusflow/mgmpbdbngmeahcjpgmadbjjffceiblmi"
year: 2025
featured: true
---

# About

FocusFlow is a lightweight browser extension designed to enhance productivity by restricting access to distracting websites. It offers flexible blocking modes, customizable goals, and a guilt-tripping unblock flow to encourage mindful browsing habits.

## Overview

I built FocusFlow to solve a personal problem: staying focused during work hours.  
Instead of relying on rigid site blockers, I wanted a tool that supports custom goals and intentionality. FocusFlow helps users stay disciplined while allowing for a more mindful, guilt-resistant way to manage distractions.

## Technical Details

- **Technologies Used**: React, TypeScript, Vite, Tailwind CSS, Web Extension APIs.
- **Key Features**:
  - Blacklist and whitelist modes.
  - Goal setting with website restrictions.
  - Custom "blocked" page with reflective prompts.
- **Challenges Solved**:
  - Managing dynamic rules through extension background scripts.
  - Handling Chrome extension permissions gracefully.

## Architecture

FocusFlow is built as a modular Chrome extension with a React-powered options page, background service workers, and content scripts. It uses Chrome's declarativeNetRequest API for lightweight URL blocking and local storage to persist user settings and goals.
