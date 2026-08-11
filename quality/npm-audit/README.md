# npm-audit — JavaScript / Node.js 22 (React frontend)

Scans the real `package.json`/`package-lock.json`.

Run from `frontend/`:
```
npm audit --json
```

Verified in this session — real output: `@babel/core` low-severity
finding (transitive, GHSA-4x5r-pxfx-6jf8) plus `lodash@4.17.15`, a real
direct dependency intentionally pinned old.
