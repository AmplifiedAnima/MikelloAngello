import { createFileRoute } from "@tanstack/react-router";
import { SpecificAthleteFormComponent } from "../../components/FormsComponent/SpecificAthleteFormComponent";

export const Route = createFileRoute("/contact/athlete-plan")({
  component: SpecificAthleteFormComponent,
});
