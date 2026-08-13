import { useState } from "react";
import { getWidgets } from "./widgets";

export default function App() {
  const [widgets] = useState(getWidgets());

  return (
    <div>
      <h1>Frontend Web Application / SPA — bundled with Webpack</h1>
      <ul>
        {widgets.map((w) => (
          <li key={w.id}>{w.label}</li>
        ))}
      </ul>
    </div>
  );
}
