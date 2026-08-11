export function getWidgets() {
  return [{ id: 1, label: "Standalone React widget" }];
}

export function classifyWidgetCount(count) {
  if (count <= 0) return "empty";
  if (count < 5) return "small";
  if (count < 20) return "medium";
  return "large";
}
