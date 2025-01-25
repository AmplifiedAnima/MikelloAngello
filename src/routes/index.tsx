import { createFileRoute } from "@tanstack/react-router";
import { OfferComponent } from "../components/OfferComponent/OfferComponent";

export const Route = createFileRoute("/")({
  component: OfferComponent,
});
