import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about_me")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about_me"!</div>;
}
