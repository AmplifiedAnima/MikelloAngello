import { createFileRoute } from "@tanstack/react-router";
import { ProjectPortfolio } from "../components/PortfolioComponent/PortfolioComponent";

export const Route = createFileRoute("/portfolio")({
  component: ProjectPortfolio,
});
