import { getWidgets, classifyWidgetCount } from "./widgets.js";

const widgets = getWidgets();
document.getElementById("widget-count").textContent =
  `${widgets.length} widget(s) — ${classifyWidgetCount(widgets.length)}`;
