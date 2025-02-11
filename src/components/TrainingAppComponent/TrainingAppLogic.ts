// UserMainPanelHook.ts
import { useState } from "react";
import type { ExerciseBlueprintsInterface } from "./interfaces/exercise.interface";

export type TrainingAppStep = "FREQUENCY" | "EXERCISES" | "LOAD" | "SAVE";

interface TrainingUnit {
  index: number;
  MainExercises: ExerciseBlueprintsInterface[];
  AccessoryExercises: ExerciseBlueprintsInterface[];
}

interface TrainingPlanState {
  load: number;
  trainingDaysPerWeek: number;
  trainingUnits: TrainingUnit[];
}

export const useTrainingPlan = () => {
  const [step, setStep] = useState<TrainingAppStep>("FREQUENCY");
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlanState>({
    load: 0,
    trainingDaysPerWeek: 0,
    trainingUnits: [],
  });

  const goToNextStep = () => {
    switch (step) {
      case "FREQUENCY":
        setStep("EXERCISES");
        break;
      case "EXERCISES":
        setStep("LOAD");
        break;
      case "LOAD":
        setStep("SAVE");
        break;
      default:
        break;
    }
  };

  const goToPreviousStep = () => {
    switch (step) {
      case "EXERCISES":
        setStep("FREQUENCY");
        break;
      case "LOAD":
        setStep("EXERCISES");
        break;
      case "SAVE":
        setStep("LOAD");
        break;
      default:
        break;
    }
  };

  const addNewMainExercise = (
    dayIndex: number,
    exercise: ExerciseBlueprintsInterface
  ) => {
    setTrainingPlan((prev) => {
      const newUnits = [...prev.trainingUnits];
      const targetUnit = newUnits.find((unit) => unit.index === dayIndex);
      if (targetUnit) {
        targetUnit.MainExercises.push(exercise);
      }
      return { ...prev, trainingUnits: newUnits };
    });
  };

  const addNewAccessoryExercise = (
    dayIndex: number,
    exercise: ExerciseBlueprintsInterface
  ) => {
    setTrainingPlan((prev) => {
      const newUnits = [...prev.trainingUnits];
      const targetUnit = newUnits.find((unit) => unit.index === dayIndex);
      if (targetUnit) {
        targetUnit.AccessoryExercises.push(exercise);
      }
      return { ...prev, trainingUnits: newUnits };
    });
  };

  return {
    step,
    goToNextStep,
    goToPreviousStep,
    trainingPlan,
    addNewMainExercise,
    addNewAccessoryExercise,
  };
};
