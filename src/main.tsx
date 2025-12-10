import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./sentry.ts";
import "./index.css";
import App from "./App.tsx";

// console.log('ui', new FastColor("#FF0000"))
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
