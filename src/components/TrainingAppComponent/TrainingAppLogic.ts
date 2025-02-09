import { ExerciseBlueprintsInterface } from "./interfaces/exercise.interface";

const trainingPlanArray = {
  exercises: <ExerciseBlueprintsInterface[]>[],
  load: 0,
};

export const addNewExercise = (exercise: ExerciseBlueprintsInterface) => {
  trainingPlanArray.exercises.push(exercise);

};
