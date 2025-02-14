import { useState } from "react";
import type { ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { mockExercises } from "../mock_data/exercises.mock_data";
import { preferences } from "./TrainingDaysSelectorUtils";
import {
  ObjectivesState,
  TrainingAppStep,
  TrainingPlanState,
} from "./TraininAppLogic.interface";

export const useTrainingPlanHook = () => {
  // Core training plan state
  const [step, setStep] = useState<TrainingAppStep>("FREQUENCY");
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlanState>({
    load: 0,
    trainingDaysPerWeek: 2, // Default to 2 days
    trainingUnits: [
      { index: 1, MainExercises: [], AccessoryExercises: [] },
      { index: 2, MainExercises: [], AccessoryExercises: [] },
    ],
  });
  const [showAllDaysLoad, setShowAllDaysLoad] = useState(false);
  // Exercise selection state
  const [exercisesBlueprints, setExercisesBluePrints] = useState(mockExercises);
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseBlueprintsInterface | null>(null);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(1);

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
  const [objectives, setObjectives] = useState<ObjectivesState>({
    selectedPath: "",
    selectedDays: 0,
    primaryGoal: "",
    secondaryGoal: "",
    difficultyLevel: "",
    expandedCard: "",
    mainExerciseCount: 0,
    accessoryExerciseCount: 0,
  });

  // Objectives handlers
  const setSelectedPath = (path: string) => {
    setObjectives((prev) => ({
      ...prev,
      selectedPath: path,
      selectedDays: 0,
      primaryGoal: "",
      secondaryGoal: "",
      difficultyLevel: "",
    }));
  };

  const setSelectedDays = (days: number) => {
    setObjectives((prev) => ({
      ...prev,
      selectedDays: days,
      mainExerciseCount: 2, // Default main exercises
      accessoryExerciseCount: 1, // Default accessory exercises
    }));
  };

  const setPrimaryGoal = (goal: string) => {
    setObjectives((prev) => ({
      ...prev,
      primaryGoal: goal,
      secondaryGoal: "",
    }));
  };

  const setSecondaryGoal = (goal: string) => {
    setObjectives((prev) => ({ ...prev, secondaryGoal: goal }));
  };

  const setDifficultyLevel = (level: string) => {
    setObjectives((prev) => ({ ...prev, difficultyLevel: level }));
  };

  const setExpandedCard = (cardId: string) => {
    setObjectives((prev) => ({ ...prev, expandedCard: cardId }));
  };

  const handleSecondaryGoalClick = (prefId: string) => {
    if (prefId === objectives.primaryGoal) return;
    setSecondaryGoal(prefId);
  };

  const handleCardClick = (id: string) => {
    setExpandedCard(objectives.expandedCard === id ? "" : id);
  };

  const getAvailableSecondaryGoals = () => {
    const primaryIndex = preferences.findIndex(
      (p) => p.id === objectives.primaryGoal
    );
    return preferences.slice(primaryIndex + 1);
  };

  // Exercise management functions
  const handleExerciseClick = (exercise: ExerciseBlueprintsInterface) => {
    setSelectedExercise(exercise);
  };
  const addNewMainExercise = (
    dayIndex: number,
    exercise: ExerciseBlueprintsInterface
  ) => {
    console.log(
      `Attempting to add main exercise to day ${dayIndex}:`,
      exercise
    );

    setTrainingPlan((prev) => {
      // Ensure training units exist
      if (prev.trainingUnits.length === 0) {
        console.error("No training units initialized");
        return prev;
      }

      const newUnits = [...prev.trainingUnits];

      // Adjust index (assuming 1-based indexing)
      const actualIndex = dayIndex - 1;

      if (newUnits[actualIndex]) {
        if (
          !newUnits[actualIndex].MainExercises.some(
            (ex) => ex._id === exercise._id
          )
        ) {
          newUnits[actualIndex].MainExercises.push(exercise);
          console.log(`Added main exercise to day ${dayIndex}:`, exercise);
        } else {
          console.log(
            `Exercise ${exercise.name} already exists in main exercises for day ${dayIndex}`
          );
        }
      } else {
        console.error(`Training unit for day ${dayIndex} does not exist`);
      }

      return { ...prev, trainingUnits: newUnits };
    });
  };
  const addNewAccessoryExercise = (
    dayIndex: number,
    exercise: ExerciseBlueprintsInterface
  ) => {
    console.log(
      `Attempting to add accessory exercise to day ${dayIndex}:`,
      exercise
    );

    setTrainingPlan((prev) => {
      const newUnits = [...prev.trainingUnits];
      // Popraw indeksowanie
      const actualIndex = dayIndex - 1; // Dodaj to

      if (newUnits[actualIndex]) {
        // Zmień na actualIndex
        if (
          !newUnits[actualIndex].AccessoryExercises.some(
            // Zmień na actualIndex
            (ex) => ex._id === exercise._id
          )
        ) {
          newUnits[actualIndex].AccessoryExercises.push(exercise); // Zmień na actualIndex
          console.log(`Added accessory exercise to day ${dayIndex}:`, exercise);
        } else {
          console.log(
            `Exercise ${exercise.name} already exists in accessory exercises for day ${dayIndex}`
          );
        }
      } else {
        console.error(`Training unit for day ${dayIndex} does not exist`);
      }

      logTrainingUnits();
      return { ...prev, trainingUnits: newUnits };
    });
  };
  const removeMainExercise = (dayIndex: number, exerciseId: string) => {
    setTrainingPlan((prev) => {
      const newUnits = [...prev.trainingUnits];
      // Zmień logikę wyszukiwania jednostki
      const actualIndex = dayIndex - 1;
      const targetUnit = newUnits[actualIndex]; // Zmień na bezpośredni dostęp przez indeks

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
      // Zmień logikę wyszukiwania jednostki
      const actualIndex = dayIndex - 1;
      const targetUnit = newUnits[actualIndex]; // Zmień na bezpośredni dostęp przez indeks

      if (targetUnit) {
        targetUnit.AccessoryExercises = targetUnit.AccessoryExercises.filter(
          (ex) => ex._id !== exerciseId
        );
      }

      return { ...prev, trainingUnits: newUnits };
    });
  };

  const logTrainingUnits = () => {
    console.log("Current Training Plan:", {
      trainingDaysPerWeek: trainingPlan.trainingDaysPerWeek,
      currentDayIndex: currentDayIndex,
      trainingUnits: trainingPlan.trainingUnits.map((unit) => ({
        index: unit.index,
        mainExercisesCount: unit.MainExercises.length,
        accessoryExercisesCount: unit.AccessoryExercises.length,
      })),
    });
  };

  const setTrainingFrequency = (frequency: number) => {
    console.log(`Setting training frequency to ${frequency} days`);

    setTrainingPlan((prev) => {
      const newTrainingUnits = Array.from({ length: frequency }, (_, i) => ({
        index: i + 1, // Start indexing from 1
        MainExercises: [],
        AccessoryExercises: [],
      }));

      console.log("New Training Units:", newTrainingUnits);

      return {
        ...prev,
        trainingDaysPerWeek: frequency,
        trainingUnits: newTrainingUnits,
      };
    });

    // Reset current day index to 1
    setCurrentDayIndex(1);
  };

  const setCurrentDay = (index: number) => {
    console.log(
      `Changing current day index from ${currentDayIndex} to ${index}`
    );
    setCurrentDayIndex(index);
  };

  const setMainExerciseCount = (count: number) => {
    setObjectives((prev) => ({
      ...prev,
      mainExerciseCount: count,
    }));
  };

  const setAccessoryExerciseCount = (count: number) => {
    setObjectives((prev) => ({
      ...prev,
      accessoryExerciseCount: count,
    }));
  };

  return {
    // Existing returns
    step,
    trainingPlan,
    selectedExercise,
    currentDayIndex,
    setMainExerciseCount,
    setAccessoryExerciseCount,
    goToNextStep,
    goToPreviousStep,
    exercisesBlueprints,
    setExercisesBluePrints,
    handleExerciseClick,
    addNewMainExercise,
    addNewAccessoryExercise,
    removeMainExercise,
    removeAccessoryExercise,
    setSelectedExercise,
    setTrainingFrequency,
    setCurrentDay,
    showAllDaysLoad,
    setShowAllDaysLoad,
    // New objectives-related returns
    objectives,
    setSelectedPath,
    setSelectedDays,
    setPrimaryGoal,
    setSecondaryGoal,
    setDifficultyLevel,
    setExpandedCard,
    handleSecondaryGoalClick,
    handleCardClick,
    getAvailableSecondaryGoals,
  };
};
