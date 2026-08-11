import { useEffect, useState } from "react";
import { getWidgets as fallbackWidgets } from "./widgets";

// Migration Bridge: this is the NEW app, served at /app in the
// connected repo's route-split backend (TD_Backend_nodejs's
// migrationbridge branches). /legacy/* serves the Angular app instead.
export default function App() {
  const [widgets, setWidgets] = useState(fallbackWidgets());

  useEffect(() => {
    fetch("/api/widgets")
      .then((r) => r.json())
      .then((data) => setWidgets(data.widgets))
      .catch(() => {});
  }, []);

  return (
    <div>
      <h1>New App (React) — served at /app</h1>
      <ul>
        {widgets.map((w) => (
          <li key={w.id}>{w.label}</li>
        ))}
      </ul>
    </div>
  );
}
