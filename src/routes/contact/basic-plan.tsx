import { createFileRoute } from "@tanstack/react-router";
import { BasicPlanFormComponent } from "../../components/FormsComponent/BasicPlanFormComponent";

export const Route = createFileRoute("/contact/basic-plan")({
  component: BasicPlanFormComponent,
});
