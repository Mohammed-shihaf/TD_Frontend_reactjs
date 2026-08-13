import { build } from "esbuild";

await build({
  entryPoints: ["src/cli.js"],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  outfile: "dist/cli.bundle.js",
  banner: { js: "#!/usr/bin/env node" },
});

console.log("built dist/cli.bundle.js");
