---
title: "Den"
description: "A lightweight Makefile-based tool to set up and manage a dev environment across machines — package installs, dotfiles, and Obsidian vault sync in one command."
image: ""
bannerImage: ""
github: "https://github.com/kiranmurali93/den"
demo: ""
year: 2026
featured: true
tech: ["Make", "Bash", "Shell"]
overview: "Built to stop re-doing the same setup steps every time I get a new machine — one `make install` handles system packages, dev tools, dotfiles, and syncing an Obsidian vault via Syncthing."
features:
  - "OS + distro detection with dnf/apt package installs"
  - "Dev tooling setup (NVM) with automatic shell configuration"
  - "Dotfile symlinking with automatic backup/restore and missing zsh-plugin installs"
  - "Syncthing install and Obsidian vault sync setup"
architecture: "A Makefile entry point that includes modular `core/*.mk` files (os, libs, dev, dotfiles, obsidian), each scoped to one concern and composable via `make install`/`make update`."
---
