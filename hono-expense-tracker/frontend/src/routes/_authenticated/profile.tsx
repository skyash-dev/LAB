import { userQueryOptions } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: Expenses,
});

function Expenses() {
  const { error, isPending, data } = useQuery(userQueryOptions);

  if (isPending) return "loading";
  if (error) return "not logged in";
  return (
    <div className="flex flex-col justify-center items-center">
      <div> Hello {data.user.given_name} </div>
      <a className="btn btn-error my-2" href="/api/logout">
        Logout
      </a>
    </div>
  );
}
