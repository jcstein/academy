import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Dummy incremental cache: this app does not use ISR, and an R2 bucket is not
// provisioned. Add an R2 incremental cache later if a route needs it.
export default defineCloudflareConfig();
