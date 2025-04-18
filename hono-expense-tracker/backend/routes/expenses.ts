import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { getUser } from "../kinde";
import { db } from "../db";
import { expenseInsertSchema, expensesTable } from "../db/schema";
import { and, desc, eq, sum } from "drizzle-orm";
import { createExpenseSchema } from "../sharedTypes";

const expensesRoute = new Hono()
  .get("/", getUser, async (c) => {
    const user = c.var.user;

    const expenses = await db
      .select()
      .from(expensesTable)
      .where(eq(expensesTable.userId, user.id))
      .orderBy(desc(expensesTable.created_at))
      .limit(100);
    return c.json({ expenses });
  })
  .post("/", getUser, zValidator("json", createExpenseSchema), async (c) => {
    const expense = await c.req.valid("json");
    const user = c.var.user;
    const validatedExpense = expenseInsertSchema.parse({
      ...expense,
      userId: user.id,
    });
    const result = await db
      .insert(expensesTable)
      .values(validatedExpense)
      .returning();
    c.status(201);
    return c.json(result);
  })
  .get("/total-spent", getUser, async (c) => {
    // await new Promise((r) => {
    //   setTimeout(r, 2000);
    // });
    const user = c.var.user;
    const result = await db
      .select({ value: sum(expensesTable.amount) })
      .from(expensesTable)
      .where(eq(expensesTable.userId, user.id))
      .then((res) => res[0]);

    const total = result?.value;
    return c.json({ total });
  })
  .get("/:id{[0-9]+}", getUser, async (c) => {
    const user = c.var.user;
    const id = Number.parseInt(c.req.param("id"));
    const expense = await db
      .select()
      .from(expensesTable)
      .where(and(eq(expensesTable.userId, user.id), eq(expensesTable.id, id)))
      .then((res) => res[0]);

    if (!expense) {
      return c.notFound();
    }

    return c.json({ expense });
  })
  .delete("/:id{[0-9]+}", getUser, async (c) => {
    const user = c.var.user;
    const id = Number.parseInt(c.req.param("id"));

    const result = await db
      .delete(expensesTable)
      .where(and(eq(expensesTable.userId, user.id), eq(expensesTable.id, id)))
      .returning()
      .then((res) => res[0]);
    const deletedExpense = result;
    if (!deletedExpense) {
      return c.notFound();
    }

    return c.json({ deletedExpense });
  });

export default expensesRoute;
