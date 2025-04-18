import {
  date,
  index,
  numeric,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const expensesTable = pgTable(
  "expenses",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id").notNull(),
    title: varchar({ length: 255 }).notNull(),
    amount: numeric({ precision: 12, scale: 2 }).notNull(),
    date: date("date").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [index("userid_idx").on(table.userId)]
);

export const expenseSelectSchema = createSelectSchema(expensesTable);

export const expenseInsertSchema = createInsertSchema(expensesTable, {
  title: z.string().min(3, { message: "Title length should be more than 3 " }),
  amount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Amount should be a number" }),
});
