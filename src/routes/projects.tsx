import { createFileRoute } from "@tanstack/react-router";
import { ProjectPortfolio } from "../components/ProjectsPortfolio";

export const Route = createFileRoute("/projects")({
  component: ProjectPortfolio,
});
