import { useState } from "react";
import { Event } from "../header/Header";

export function TriggerRender() {
  const [manualRenderCount, setManualRenderCount] = useState(0);

  function renderPage(e: Event) {
    setManualRenderCount(manualRenderCount + 1);
    console.log("Manual render");
  }
  return <button onClick={renderPage}>Render</button>;
}
