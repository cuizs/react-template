import * as Sentry from "@sentry/react";

function initSentry() {
    return Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [
            Sentry.consoleLoggingIntegration({
                levels: ["log", "warn", "error"],
            }),
        ],
        enableLogs: true,
        sendDefaultPii: true,
    });
}

const sentry = import.meta.env.PROD ? initSentry() : null;
export default sentry;
