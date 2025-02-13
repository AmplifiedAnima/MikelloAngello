import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { UseTrainingPlanInterface } from "../utils/TraininAppLogic.interface";

export interface LoadSelectorProps {
  useTrainingPlanHook: UseTrainingPlanInterface;
}

export const LoadSelector: React.FC<LoadSelectorProps> = ({
  useTrainingPlanHook,
}) => {
  const currentUnit =
    useTrainingPlanHook.trainingPlan.trainingUnits[
      useTrainingPlanHook.currentDayIndex
    ];

  const renderExerciseList = (
    exercises: ExerciseBlueprintsInterface[],
    type: "main" | "accessory",
    plannedCount: number
  ) => (
    <div className="bg-zinc-900/40 rounded-lg p-2 mb-2 w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-zinc-300">
          {type === "main" ? "Main" : "Accessory"} Exercises
          <span className="ml-2 text-zinc-500">
            ({exercises.length}/{plannedCount})
          </span>
        </span>
      </div>
      {exercises.length > 0 ? (
        <ul className="space-y-1">
          {exercises.map((exercise) => (
            <li
              key={exercise._id}
              className="px-2 py-1 rounded-md hover:bg-zinc-800/40 transition-colors cursor-move"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/90 truncate">
                  {exercise.name}
                </span>
                <span className="text-xs text-zinc-400">
                  {exercise.sets}x{exercise.reps}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-zinc-400 text-center py-1">
          No exercises added
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full p-2">
      <div className="flex justify-between items-center mb-4 w-full max-w-xl">
        <h2 className="text-lg font-semibold">
          Training Day {useTrainingPlanHook.currentDayIndex }
        </h2>
        <div className="text-sm text-zinc-400">
          {useTrainingPlanHook.objectives.mainExerciseCount} main +{" "}
          {useTrainingPlanHook.objectives.accessoryExerciseCount} accessory
          exercises planned
        </div>
      </div>

      <ScrollBarComponent className="h-[60vh] w-full">
        <div className="space-y-4 flex flex-col items-center">
          {renderExerciseList(
            currentUnit?.MainExercises || [],
            "main",
            useTrainingPlanHook.objectives.mainExerciseCount
          )}
          {renderExerciseList(
            currentUnit?.AccessoryExercises || [],
            "accessory",
            useTrainingPlanHook.objectives.accessoryExerciseCount
          )}
        </div>
      </ScrollBarComponent>
    </div>
  );
};

export default LoadSelector;
