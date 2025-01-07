import { createFileRoute } from "@tanstack/react-router";
import { LandingPageComponent } from "../components/LandingPageComponent";

export const Route = createFileRoute("/")({
  component: LandingPageComponent,
});
