import { createFileRoute } from "@tanstack/react-router";

import { AboutMeComponent } from "../components/AboutMeComponent/AboutMeComponent";

export const Route = createFileRoute("/about_me")({
  component: AboutMeComponent,
});
