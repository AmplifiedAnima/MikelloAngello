import { ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { objectivesPreferencesForTraining } from "./TrainingDaysSelectorUtils";

export type TrainingAppStep = "FREQUENCY" | "EXERCISES" | "LOAD" | "SAVE";

export interface TrainingUnit {
  index: number;
  MainExercises: ExerciseBlueprintsInterface[];
  AccessoryExercises: ExerciseBlueprintsInterface[];
}

export interface TrainingPlanState {
  load: number;
  trainingDaysPerWeek: number;
  trainingUnits: TrainingUnit[];
}

export interface ObjectivesState {
  selectedPath: string;
  selectedDays: number;
  primaryGoal: string;
  secondaryGoal: string;
  difficultyLevel: string;
  expandedCard: string;
  mainExerciseCount: number;
  accessoryExerciseCount: number;
}

export interface UseTrainingPlanInterface {
  // Core state
  step: TrainingAppStep;
  trainingPlan: TrainingPlanState;
  selectedExercise: ExerciseBlueprintsInterface | null;
  currentDayIndex: number;
  showAllDaysLoad: boolean;
  setShowAllDaysLoad: (boolean: boolean) => void;
  // Navigation
  goToNextStep: () => void;
  goToPreviousStep: () => void;

  // Exercise blueprints management
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

  // Objectives state and handlers
  objectives: ObjectivesState;
  setSelectedPath: (path: string) => void;
  setSelectedDays: (days: number) => void;
  setPrimaryGoal: (goal: string) => void;
  setSecondaryGoal: (goal: string) => void;
  setDifficultyLevel: (level: string) => void;
  setExpandedCard: (cardId: string) => void;
  handleSecondaryGoalClick: (prefId: string) => void;
  handleCardClick: (id: string) => void;
  getAvailableSecondaryGoals: () => typeof objectivesPreferencesForTraining;
  setMainExerciseCount: (count: number) => void;
  setAccessoryExerciseCount: (count: number) => void;
}
