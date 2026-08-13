import { createRoot } from "react-dom/client";
import { getWidgets, classifyWidgetCount } from "./widgets.js";

function Popup() {
  const widgets = getWidgets();
  return (
    <div>
      <h3>TD Widgets</h3>
      <p>
        {widgets.length} widget(s) — {classifyWidgetCount(widgets.length)}
      </p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Popup />);
