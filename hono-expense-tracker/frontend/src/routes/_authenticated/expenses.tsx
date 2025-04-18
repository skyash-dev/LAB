import { api } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/expenses")({
  component: Expenses,
});

async function getExpenses() {
  // await new Promise((r) => setTimeout(r, 3000));
  const res = await api.expenses.$get();
  const data = await res.json();

  if (!res.ok) throw new Error("server error");
  return data;
}

function Expenses() {
  const { error, isPending, data } = useQuery({
    queryKey: ["get-expenses"],
    queryFn: getExpenses,
  });

  if (error) return "An error has occured: " + error.message;
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-1/2">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {isPending
            ? Array(4)
                .fill(0)
                .map(() => {
                  return (
                    <tr>
                      <td>
                        <div className="skeleton w-full h-4"></div>
                      </td>
                      <td>
                        <div className="skeleton w-full h-4"></div>
                      </td>
                      <td>
                        <div className="skeleton w-full h-4"></div>
                      </td>
                    </tr>
                  );
                })
            : data?.expenses.map((expense) => {
                return (
                  <>
                    <tr>
                      <th>{expense.id}</th>

                      <td>{expense.title}</td>

                      <td>₹{expense.amount}</td>
                      <td>{expense.date}</td>
                    </tr>
                  </>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
