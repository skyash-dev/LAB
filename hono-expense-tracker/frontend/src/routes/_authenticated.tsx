import { userQueryOptions } from "./../lib/api";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div> You are not logged in!</div>
      <a className="link link-hover" href="/api/login">
        Login
      </a>
    </div>
  );
};

function Component() {
  const { user } = Route.useRouteContext();
  if (!user) return <Login />;

  return <Outlet />;
}

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    try {
      const queryClient = context.queryClient;
      const data = await queryClient.fetchQuery(userQueryOptions);

      return data;
    } catch (e) {
      return { user: null };
    }
  },
  component: Component,
});
