import { Hono } from "hono";
import { logger } from "hono/logger";
import expensesRoute from "./routes/expenses";
import { serveStatic } from "hono/bun";
import authRoute from "./routes/auth";
const app = new Hono();

// Using log middleware
app.use(logger());

// root route
const apiRoutes = app
  .basePath("/api")
  .route("/expenses", expensesRoute)
  .route("/", authRoute);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
export type AppType = typeof apiRoutes;
