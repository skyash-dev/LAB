import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { api } from "../../lib/api";
import { useNavigate } from "@tanstack/react-router";
import { createExpenseSchema } from "./../../../../backend/sharedTypes";
import { useEffect, useRef } from "react";
import Pikaday from "pikaday";

export const Route = createFileRoute("/_authenticated/create-expenses")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      amount: "0",
      date: new Date().toISOString(),
    },
    onSubmit: async ({ value }) => {
      // await new Promise((r) => setTimeout(r, 2000));

      const res = api.expenses.$post({ json: value });
      console.log(res);

      navigate({ to: "/expenses" });
    },
  });
  return (
    <>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Create</legend>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div>
            {/* A type-safe field component*/}
            <form.Field
              name="title"
              validators={{
                onChange: createExpenseSchema.shape.title,
              }}
              children={(field) => {
                // Avoid hasty abstractions. Render props are great!
                return (
                  <>
                    <label className="fieldset-label" htmlFor={field.name}>
                      Title
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="title"
                      className="input my-2 py-2"
                      placeholder="Groceries"
                    />
                    {field.state.meta.isTouched &&
                    field.state.meta.errors.length ? (
                      <em>{field.state.meta.errors[0]?.message}</em>
                    ) : null}
                    {field.state.meta.isValidating ? "Validating..." : null}
                  </>
                );
              }}
            />
          </div>
          <div>
            <form.Field
              name="amount"
              validators={{
                onChange: createExpenseSchema.shape.amount,
              }}
              children={(field) => (
                <>
                  <label htmlFor={field.name} className="fieldset-label">
                    Amount
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="number"
                    className="input my-2 py-2"
                    placeholder="100"
                  />
                  {field.state.meta.isTouched &&
                  field.state.meta.errors.length ? (
                    <em>{field.state.meta.errors[0]?.message}</em>
                  ) : null}
                  {field.state.meta.isValidating ? "Validating..." : null}
                </>
              )}
            />
          </div>
          <div>
            <form.Field
              name="date"
              validators={{
                onChange: createExpenseSchema.shape.date,
              }}
              children={(field) => (
                <>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="date"
                    className="input pika-single"
                    defaultValue="Pick a date"
                  />
                  {field.state.meta.isTouched &&
                  field.state.meta.errors.length ? (
                    <em>{field.state.meta.errors[0]?.message}</em>
                  ) : null}
                  {field.state.meta.isValidating ? "Validating..." : null}
                </>
              )}
            />
          </div>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn btn-primary mt-4"
                >
                  {isSubmitting ? "..." : "Create Expense"}
                </button>
              </div>
            )}
          />
        </form>
      </fieldset>
    </>
  );
}
