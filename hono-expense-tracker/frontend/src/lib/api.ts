import type { AppType } from "@backend/app";
import { queryOptions } from "@tanstack/react-query";
import { hc } from "hono/client";

const client = hc<AppType>("/");

export const api = client.api;

async function getUser() {
  // await new Promise((r) => setTimeout(r, 3000));
  const res = await api.me.$get();
  const data = await res.json();

  if (!res.ok) throw new Error("server error");
  return data;
}

export const userQueryOptions = queryOptions({
  queryKey: ["get-user"],
  queryFn: getUser,
  staleTime: Infinity,
});
