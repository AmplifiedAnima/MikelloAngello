import { createFileRoute } from "@tanstack/react-router";
import TrainingAppComponent from "../../components/TrainingAppComponent/TrainingAppComponent";

export const Route = createFileRoute("/training-app/")({
  component: TrainingAppComponent,
});
