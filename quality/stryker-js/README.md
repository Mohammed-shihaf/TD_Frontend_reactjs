# stryker-js — JavaScript / Node.js 22 (React frontend)

Mutation testing against `src/pricing.js`, using `test/pricing.test.js`
as the kill oracle.

Run from `frontend/`:
```
npx stryker run
```

Verified in this session — real output: 75.00% mutation score (39
killed, 10 survived, 3 no-coverage) — a genuine boundary survivor at
`classifyOrderSize`'s bulk/wholesale threshold.
