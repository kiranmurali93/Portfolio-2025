---
title: "Momentum Backtest"
description: "A dual-momentum trading strategy for Indian markets, validated against 19 years of real NSE/AMFI data before risking money on it — plus a live monthly signal generator."
image: ""
bannerImage: ""
github: "https://github.com/kiranmurali93/momentum-backtest"
demo: ""
year: 2026
featured: true
tech: ["Python", "Pandas", "NumPy", "Node.js", "Jupyter"]
overview: "Built to validate a Nifty/Gold/Liquid-fund momentum strategy against real market data before allocating capital to it. The backtest survived multiple rounds of self-correction — a lookback parameter that looked optimal turned out to be regime-specific noise, a stock-picking overlay looked free until corrected for survivorship bias, and two real data bugs were found and fixed along the way. Findings are logged chronologically, including what didn't hold up."
features:
  - "Dual-momentum strategy engine with a crash filter, tested across two non-overlapping market regimes (2008–2016, 2016–2026) to separate durable edge from regime-specific noise"
  - "Point-in-time constituent reconstruction to correct a stock-picking overlay for survivorship bias"
  - "Config-driven live signal generator (Node.js) that fetches recent data, applies the fixed decision rules, and flags hard-stop conditions — no hardcoded strategy, just JSON config"
  - "Chronological findings log documenting what was tested, what got overturned on more data, and what's still uncertain"
architecture: "Python/Jupyter for the backtest (data fetch/cache notebook + strategy engine, parameter sweeps, and era-split robustness checks), with a standalone Node.js script for the live monthly decision — reads a JSON config for lookback period, crash-filter benchmark, and risk-asset set, so the decision logic isn't hardcoded to one specific set of instruments."
---
