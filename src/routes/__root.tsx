import { createRootRoute, } from "@tanstack/react-router";

import { RootComponent } from "../components/AboutMeComponent/RootComponent";

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: () => {},
});
