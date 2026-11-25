---
title: "Local Video Pipeline"
description: "An experiment in what local models can do on a laptop. It turns a topic into a captioned vertical video with a local LLM, my cloned voice, and real terminal and browser footage."
image: ""
bannerImage: ""
github: "https://github.com/kiranmurali93/local-video-pipeline"
demo: ""
year: 2026
order: 1
featured: true
tech: ["Python", "Ollama", "Chatterbox TTS", "SearXNG", "Docker", "FFmpeg"]
overview: "I wanted to find out what local models are actually good for on an 8 GB GPU, and making a short video needs several of them to work together. The useful part was seeing where they fail: they write well, but invent commands and facts, so much of the work went into grounding and checking what they produce. I still review every script before it becomes a video."
features:
  - "Script from a topic with qwen3:8b, optionally grounded in web search (a fixed query, or an agent that picks its own), with sources saved alongside the script"
  - "Narration in my own voice, cloned with Chatterbox-Turbo from a short phone recording"
  - "Real visuals instead of AI images: live terminal output, browser screenshots, and text cards"
  - "Model-written commands only run if they match a strict read-only allow-list; anything else is typed on screen but never executed"
  - "Audio-first timing: each clip is as long as its narration, and only edited scenes are redone"
architecture: "Four Python CLI stages (script, voice, visuals, assemble) that pass JSON and media files through one folder per video, so any step can be reviewed, edited, and rerun. Docker Compose runs Ollama, SearXNG, and a GPU Chatterbox image; search results are split into passages and ranked with nomic-embed-text before they reach the prompt. FFmpeg with NVENC assembles the final 1080×1920 video with burned-in captions. Models run locally; only search, fetched pages, and browser screenshots use the internet."
---
