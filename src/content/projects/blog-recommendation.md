---
title: "Blog Recommendation Engine"
description: "Search over engineering blogs that understands what an article is about, not just which words it contains — a fully local LLM retrieval stack."
image: ""
bannerImage: ""
github: "https://github.com/kiranmurali93/blog-recommendation"
demo: ""
year: 2026
order: 1
featured: true
tech: ["Go", "PostgreSQL", "pgvector", "Ollama", "Docker", "Embeddings", "RRF"]
overview: "I read a lot of engineering blogs and kept losing track of good posts, so I built search that understands what an article is about. It was also an excuse to get hands-on with the whole local-LLM retrieval stack — embeddings, a vector database, hybrid ranking — without reaching for a hosted API for any piece. A personal blog recommender had a real corpus I care about and enough moving parts (ingestion, an LLM pipeline, search) to make the architecture decisions matter."
features:
  - "Ingests RSS feeds and Hacker News on a schedule, deduped by URL"
  - "A local LLM (llama3.1:8b) summarizes each article; nomic-embed-text turns the summary into a 768-dim vector"
  - "Hybrid search: semantic similarity (pgvector / HNSW) and Postgres full-text, merged with Reciprocal Rank Fusion"
  - "\"More like this\" from any article, using its stored embedding"
  - "Fully local — GPU-accelerated Ollama, no external calls"
architecture: "A Go monorepo with three long-running services — a scheduled ingester, a polling enrich/embed worker, and an HTTP search API — over shared internal/ packages. Postgres with pgvector is the only datastore; migrations are embedded in the binaries and version-checked at startup. Ollama sits behind Go interfaces so the models are swappable. Docker Compose wires up Postgres, GPU Ollama, model-pull, migrations, and the services with proper dependency ordering."
---
