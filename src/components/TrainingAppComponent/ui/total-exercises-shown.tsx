import { useTrainingLogic } from "../utils/TrainingAppContext";

export const TotalExercisesDisplay = () => {
  const useTrainingPlanHook = useTrainingLogic();

  // Calculate total exercises across all training units
  const totalMainExercises =
    useTrainingPlanHook.trainingPlan.trainingUnits.reduce(
      (total, unit) => total + unit.MainExercises.length,
      0
    );

  const totalAccessoryExercises =
    useTrainingPlanHook.trainingPlan.trainingUnits.reduce(
      (total, unit) => total + unit.AccessoryExercises.length,
      0
    );

  const totalTargetMainExercises =
    useTrainingPlanHook.objectives.mainExerciseCount *
    useTrainingPlanHook.trainingPlan.trainingDaysPerWeek;

  const totalTargetAccessoryExercises =
    useTrainingPlanHook.objectives.accessoryExerciseCount *
    useTrainingPlanHook.trainingPlan.trainingDaysPerWeek;

  return (
    <div className="flex items-center gap-6 whitespace-nowrap">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <span className="text-sm text-zinc-400">
          {totalMainExercises}/{totalTargetMainExercises} Total Main Exercises
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full" />
        <span className="text-sm text-zinc-400">
          {totalAccessoryExercises}/{totalTargetAccessoryExercises} Total
          Accessory Exercises
        </span>
      </div>
    </div>
  );
};

export default TotalExercisesDisplay;
