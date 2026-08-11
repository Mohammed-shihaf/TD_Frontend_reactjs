import { useEffect, useState } from "react";
import { pickPrimaryTextColor } from "./widgets";

// Design-System Test Harness: fetches the same /api/design-tokens
// the Angular frontend consumes (TD_Frontend_angularjs, same branch
// name); the two renders are parity-tested against each other.
export default function App() {
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    fetch("/api/design-tokens")
      .then((r) => r.json())
      .then(setTokens)
      .catch(() => setTokens(null));
  }, []);

  if (!tokens) return <p>Loading tokens…</p>;

  return (
    <div style={{ background: tokens.color.primary, padding: tokens.spacing.lg }}>
      <h1 style={{ color: pickPrimaryTextColor(tokens), fontFamily: tokens.typography.fontFamily }}>
        Design-System Harness (React)
      </h1>
    </div>
  );
}
