import { createFileRoute } from "@tanstack/react-router";
import { ContactMeFormComponent } from "../../components/FormsComponent/ContactMeFormComponent";

export const Route = createFileRoute("/contact/")({
  component: ContactMeFormComponent,
});
