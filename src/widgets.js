export function classifyOrderSize(count) {
  if (count <= 0) return "empty";
  if (count < 5) return "small";
  if (count < 20) return "medium";
  return "large";
}
