import { createFileRoute } from "@tanstack/react-router";

import AboutMeComponent from "../components/AboutMeComponent";

export const Route = createFileRoute("/about_me")({
  component: AboutMeComponent,
});
