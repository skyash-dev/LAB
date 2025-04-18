import { type QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
});

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link className="btn btn-ghost text-xl [&.active]:font-bold" to="/">
        Home
      </Link>
      <Link
        className="btn btn-ghost text-xl [&.active]:font-bold"
        to="/expenses"
      >
        Expenses
      </Link>
      <Link
        className="btn btn-ghost text-xl [&.active]:font-bold"
        to="/create-expenses"
      >
        Create Expenses
      </Link>
      <Link
        className="btn btn-ghost text-xl [&.active]:font-bold"
        to="/profile"
      >
        Profile
      </Link>
    </div>
  );
}

function Root() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
}
