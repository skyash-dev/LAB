import app from "./app";

// That's how we run a server in bun.
Bun.serve({
  // delegating to hono, otherwise fetch(req)
  fetch: app.fetch,
});

console.log("server is running!");
