# nyc — JavaScript / Node.js 22 (React frontend)

Runs against the real `test/pricing.test.js`. This project is native ESM
(`"type": "module"`, required by Vite), and nyc's instrumentation hooks
`require()`, not `import` — a bare `nyc mocha ...` run genuinely returned
0% for every file despite 8/8 tests passing, which is nyc's documented
ESM gap, not a config mistake.

Run from `frontend/`:
```
npx c8 --reporter=text mocha "test/**/*.test.js"
```

Verified in this session — real output: `pricing.js` 93.02% (2 real gaps),
`api.js` 0% (fetch-based, needs a live backend — correctly out of unit
scope). Uses `c8`, nyc's V8-native, ESM-compatible sibling tool, since
plain nyc cannot see coverage here at all.
