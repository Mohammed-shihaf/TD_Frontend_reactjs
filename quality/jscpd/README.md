# jscpd — JavaScript / Node.js 22 (React frontend)

`AdminProductList.jsx` copy-pastes `ProductList.jsx`'s fetch-and-render
logic instead of extracting a shared hook — a real anti-pattern.

Run from `frontend/`:
```
npx jscpd --min-lines 3 --min-tokens 20 --reporters console src/
```

Verified in this session — real output: 1 clone found, 13 duplicated
lines / 128 duplicated tokens.
