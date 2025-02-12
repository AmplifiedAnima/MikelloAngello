import { useState } from "react";
import type { ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { mockExercises } from "../mock_data/exercises.mock_data";

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

export interface UseTrainingPlanInterface {
  // State
  step: TrainingAppStep;
  trainingPlan: TrainingPlanState;
  selectedExercise: ExerciseBlueprintsInterface | null;
  currentDayIndex: number;

  // Navigation
  goToNextStep: () => void;
  goToPreviousStep: () => void;

  //
  exercisesBlueprints: ExerciseBlueprintsInterface[];
  setExercisesBluePrints: React.Dispatch<
    React.SetStateAction<ExerciseBlueprintsInterface[]>
  >;
  // Exercise management
  handleExerciseClick: (exercise: ExerciseBlueprintsInterface) => void;
  addNewMainExercise: (
    dayIndex: number,
    exercise: ExerciseBlueprintsInterface
  ) => void;
  addNewAccessoryExercise: (
    dayIndex: number,
    exercise: ExerciseBlueprintsInterface
  ) => void;
  removeMainExercise: (dayIndex: number, exerciseId: string) => void;
  removeAccessoryExercise: (dayIndex: number, exerciseId: string) => void;
  setSelectedExercise: (exercise: ExerciseBlueprintsInterface | null) => void;

  // Training plan management
  setTrainingFrequency: (frequency: number) => void;
  setCurrentDay: (index: number) => void;
}
export const useTrainingPlanHook = () => {
  // Core training plan state
  const [step, setStep] = useState<TrainingAppStep>("FREQUENCY");
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlanState>({
    load: 0,
    trainingDaysPerWeek: 0,
    trainingUnits: [],
  });

  // Exercise selection state
  const [exercisesBlueprints, setExercisesBluePrints] = useState(mockExercises);
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseBlueprintsInterface | null>(null);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);

  // Navigation functions
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

  // Exercise management functions
  const handleExerciseClick = (exercise: ExerciseBlueprintsInterface) => {
    setSelectedExercise(exercise);
  };

  const addNewMainExercise = (
    dayIndex: number,
    exercise: ExerciseBlueprintsInterface
  ) => {
    setTrainingPlan((prev) => {
      const newUnits = [...prev.trainingUnits];
      const targetUnit = newUnits.find((unit) => unit.index === dayIndex);

      if (targetUnit) {
        // Check if exercise already exists in main exercises
        if (!targetUnit.MainExercises.some((ex) => ex._id === exercise._id)) {
          targetUnit.MainExercises.push(exercise);
        }
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
        // Check if exercise already exists in accessory exercises
        if (
          !targetUnit.AccessoryExercises.some((ex) => ex._id === exercise._id)
        ) {
          targetUnit.AccessoryExercises.push(exercise);
        }
      }

      return { ...prev, trainingUnits: newUnits };
    });
  };

  const removeMainExercise = (dayIndex: number, exerciseId: string) => {
    setTrainingPlan((prev) => {
      const newUnits = [...prev.trainingUnits];
      const targetUnit = newUnits.find((unit) => unit.index === dayIndex);

      if (targetUnit) {
        targetUnit.MainExercises = targetUnit.MainExercises.filter(
          (ex) => ex._id !== exerciseId
        );
      }

      return { ...prev, trainingUnits: newUnits };
    });
  };

  const removeAccessoryExercise = (dayIndex: number, exerciseId: string) => {
    setTrainingPlan((prev) => {
      const newUnits = [...prev.trainingUnits];
      const targetUnit = newUnits.find((unit) => unit.index === dayIndex);

      if (targetUnit) {
        targetUnit.AccessoryExercises = targetUnit.AccessoryExercises.filter(
          (ex) => ex._id !== exerciseId
        );
      }

      return { ...prev, trainingUnits: newUnits };
    });
  };

  const setTrainingFrequency = (frequency: number) => {
    setTrainingPlan((prev) => ({
      ...prev,
      trainingDaysPerWeek: frequency,
      trainingUnits: Array.from({ length: frequency }, (_, i) => ({
        index: i,
        MainExercises: [],
        AccessoryExercises: [],
      })),
    }));
  };

  const setCurrentDay = (index: number) => {
    setCurrentDayIndex(index);
  };

  return {
    // State
    step,
    trainingPlan,
    selectedExercise,
    currentDayIndex,

    // Navigation
    goToNextStep,
    goToPreviousStep,

    // managing the blueprints
    exercisesBlueprints,
    setExercisesBluePrints,

    // Exercise management
    handleExerciseClick,
    addNewMainExercise,
    addNewAccessoryExercise,
    removeMainExercise,
    removeAccessoryExercise,
    setSelectedExercise,
    // Training plan management
    setTrainingFrequency,
    setCurrentDay,
  };
};

