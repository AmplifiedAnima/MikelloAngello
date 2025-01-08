import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offer")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="text-black mt-32 mx-12"> Hello "/oferta"!</div>;
}
