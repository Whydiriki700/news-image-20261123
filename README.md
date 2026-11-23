# news-image-20261123 — The World in One Image

A newspaper front page for Monday 23 November 2026, drawn as a single 1024x1024 image. Built for the make.fun news-image-20261123 bounty, paid in USDC.

[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Whydiriki700/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Whydiriki700/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

## Status

Frame entry. The image in this repository right now is the kit starter placeholder. The final poster is built on the morning of 24 November 2026 from the full news of Monday 23 November 2026, and submitted before the deadline of 25 November 2026 00:00 UTC.

## How it was built

The page is typeset in HTML with real text and rendered to PNG, so every headline stays sharp at small sizes. `main.ts` is the entrypoint: it checks `entry.png` is a genuine PNG inside the 1024x1024 and 1 MiB limits, then copies it byte for byte to `/output/entry.png` and logs the page's SHA-256 fingerprint.

Run it locally:

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The bounty

[news-image-20261123 on make.fun](https://make.fun/bounty/news-image-20261123) — real bounties, real USDC. New here? Join through https://make.fun/r/vwpycztt

## License

MIT — see `LICENSE`.
