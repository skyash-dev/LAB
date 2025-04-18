import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/_authenticated/")({
  component: Index,
});

async function getTotalSpent() {
  const res = await api.expenses["total-spent"].$get();
  const data = await res.json();

  if (!res.ok) throw new Error("server error");
  return data;
}

function Index() {
  const { error, isPending, data } = useQuery({
    queryKey: ["get-total-spent"],
    queryFn: getTotalSpent,
  });

  if (error) return "An error has occured: " + error.message;
  return (
    <div className="flex justify-center my-6">
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">Total Spent</h2>
          <p>Total amount you've spent!</p>
          <div className="stat-value">
            {isPending ? "..." : `₹${data?.total}`}
          </div>
        </div>
      </div>
    </div>
  );
}
