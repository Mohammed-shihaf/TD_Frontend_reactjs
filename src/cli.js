import { getWidgets, classifyWidgetCount } from "./widgets.js";

export function run(argv = process.argv.slice(2)) {
  const widgets = getWidgets();
  const bucket = classifyWidgetCount(widgets.length);
  const out = `widgets: ${widgets.length} (${bucket})`;
  if (argv.includes("--json")) {
    console.log(JSON.stringify({ count: widgets.length, bucket }));
  } else {
    console.log(out);
  }
  return out;
}

run();
