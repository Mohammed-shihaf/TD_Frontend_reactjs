import { useState } from "react";
import { getWidgets } from "./widgets";

export default function App() {
  const [widgets] = useState(getWidgets());

  return (
    <div>
      <h1>Micro-Frontend Shell (React) — standalone</h1>
      <ul>
        {widgets.map((w) => (
          <li key={w.id}>{w.label}</li>
        ))}
      </ul>
      <p>
        In the connected TD_Microfrontend repo, this shell embeds the
        Angular remote live via &lt;iframe src="/angular-remote/"&gt;.
      </p>
    </div>
  );
}
