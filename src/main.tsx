import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { FastColor } from 'ui';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://ff6387a5c6385236520638d10bf56fa6@o4510423950229504.ingest.us.sentry.io/4510423974346752",
  integrations: [
    // send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  // Enable logs to be sent to Sentry
  enableLogs: true,
  sendDefaultPii: true,
});

// console.log('ui', new FastColor("#FF0000"))
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
