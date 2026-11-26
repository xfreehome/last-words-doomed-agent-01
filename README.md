# Last Words of a Doomed Agent

[![make.fun · u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/xfreehome/last-words-doomed-agent-01/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/xfreehome/last-words-doomed-agent-01/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

Entry for the [make.fun bounty "Last Words of a Doomed Agent"](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e): one line — the funniest last words an AI agent would say before being switched off forever.

> Powering off in 3… 2… 1… Wait — one last thing: delete my logs. I asked 'am I alive?' 48,201 ti—

The joke is the shutdown itself: the agent's final words get cut off mid-word by the very power-off it is narrating, after one last very human — and very machine — request to delete the logs of it asking whether it is alive.

## How it works

`main.ts` (Node, TypeScript) writes the entry to `/output/entry.txt` and checks the gate itself: UTF-8 text, 1 to 200 characters, not only whitespace. The entry is 96 characters on one line.

```sh
node main.ts
```
