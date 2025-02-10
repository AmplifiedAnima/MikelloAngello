import type { ExerciseBlueprintsInterface } from "./interfaces/exercise.interface";

interface TrainingUnit {
  index: number;
  MainExercises: ExerciseBlueprintsInterface[];
  AccessoryExercises: ExerciseBlueprintsInterface[];
}

const trainingPlanArrayState = {
  load: 0,
  trainingDaysPerWeek: 0,
  trainingUnits: [] as TrainingUnit[],
};

// Inicjalizacja jednostek treningowych po wybraniu liczby dni
export const initializeTrainingUnits = (daysCount: number) => {
  trainingPlanArrayState.trainingDaysPerWeek = daysCount;
  trainingPlanArrayState.trainingUnits = Array.from(
    { length: daysCount },
    (_, i) => ({
      index: i,
      MainExercises: [],
      AccessoryExercises: [],
    })
  );
};

// Dodawanie ćwiczeń do konkretnego dnia treningowego
export const addNewMainExercise = (
  dayIndex: number,
  exercise: ExerciseBlueprintsInterface
) => {
  const targetUnit = trainingPlanArrayState.trainingUnits.find(
    unit => unit.index === dayIndex
  );
  if (targetUnit) {
    targetUnit.MainExercises.push(exercise);
  }
};

export const addNewAccessoryExercise = (
  dayIndex: number,
  exercise: ExerciseBlueprintsInterface
) => {
  const targetUnit = trainingPlanArrayState.trainingUnits.find(
    unit => unit.index === dayIndex
  );
  if (targetUnit) {
    targetUnit.AccessoryExercises.push(exercise);
  }
};