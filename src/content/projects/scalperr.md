---
title: "Scalperr"
description: "Backend for a real-time options trading platform — multi-broker integration, live market data, and sub-second order execution built for traders who need speed."
image: ""
bannerImage: ""
github: ""
demo: "https://scalperr.in/"
year: 2024
featured: true
tech: ["Golang", "Postgres", "Redis", "WebSocket"]
overview: "A backend service connecting with broker APIs (Zerodha, Mastertrust, Fyers) to stream live market data, place quick trades, and manage positions — built for traders entering and exiting positions within seconds."
features:
  - "Real-time option chain and price tracking via WebSocket streams"
  - "Single-tap market and limit order placement across multiple brokers"
  - "Custom trigger-based trade execution"
  - "API latency optimized with Redis caching and targeted query improvements"
architecture: "Golang backend with broker OAuth integration, concurrent WebSocket handlers for live price feeds, Redis for hot data caching, and Postgres for trade history and position tracking."
---
