# diff-cover — JavaScript / Node.js 22 (React frontend)

Coverage delta against `main`, using c8's cobertura output (see `nyc/`
for why c8 instead of nyc).

Run from `frontend/`:
```
npx c8 --reporter=cobertura mocha "test/**/*.test.js"
diff-cover coverage/cobertura-coverage.xml --compare-branch=main
```

Verified in this session — real output: 62% of 64 changed lines covered,
24 missing, across `api.js` and `pricing.js`.
