import { createFileRoute } from "@tanstack/react-router";

export const Index = () => {
  return <></>;
};

export const Route = createFileRoute("/")({
  component: Index,
});
