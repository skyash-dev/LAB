import { expenseInsertSchema } from "./db/schema";

export const createExpenseSchema = expenseInsertSchema.omit({
  userId: true,
  created_at: true,
});
