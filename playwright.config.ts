import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npx -y sirv-cli . --port 3000 --single",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: "pipe",
    stderr: "pipe",
    gracefulShutdown: { signal: "SIGTERM", timeout: 500 }, // ignored on Windows
  },
  use: {
    baseURL: "http://127.0.0.1:3000", // navigate with page.goto('/path')
  },
  // CI hardening (optional)
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
});
