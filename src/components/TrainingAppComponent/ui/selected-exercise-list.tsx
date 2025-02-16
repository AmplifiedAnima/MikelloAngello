import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import editIcon from "../../../assets/feather-icons/edit.svg";

import { TrainingUnit } from "../utils/TraininAppLogic.interface";

const SelectedExerciseItem = ({
  exercise,
}: {
  exercise: ExerciseBlueprintsInterface;
}) => (
  <li className="group flex items-center gap-3 px-4 py-2 bg-zinc-900/40 rounded-md hover:bg-zinc-800/60 transition-all cursor-grab">
    {/* Grip handle for future drag-drop */}
    <div className="opacity-60 hover:opacity-100 transition-opacity cursor-grab"></div>

    {/* Exercise info */}
    <div className="flex items-center justify-between flex-1">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white/90">
          {exercise.name}
        </span>
        <span className="text-xs text-zinc-500">
          {exercise.toolsUsedInExercise}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
          {exercise.sets}×{exercise.reps}
        </span>
        <Button
          className={`${buttonStylesForTrainingModule} xl:h-6 xl:w-6 !p-1`}
        >
          <img src={editIcon} className="w-3 h-3" alt="Edit" />
        </Button>
      </div>
    </div>
  </li>
);

const ExerciseCategory = ({
  title,
  exercises,
  count,
  type,
}: {
  title: string;
  exercises: ExerciseBlueprintsInterface[];
  count: number;
  type: "main" | "accessory";
}) => (
  <div className="mb-4">
    <div className="flex items-center gap-2 mb-2">
      <div
        className={`w-1.5 h-1.5 rounded-full ${type === "main" ? "bg-red-500" : "bg-blue-500"}`}
      />
      <span className="text-xs font-medium text-zinc-400">
        {title} ({exercises.length}/{count})
      </span>
    </div>
    {exercises.length > 0 ? (
      <ul className="space-y-1">
        {exercises.map((exercise) => (
          <SelectedExerciseItem key={exercise._id} exercise={exercise} />
        ))}
      </ul>
    ) : (
      <div className="text-xs text-zinc-500 py-2 px-4 rounded bg-zinc-900/40">
        No exercises added
      </div>
    )}
  </div>
);

interface TrainingDayViewProps {
  unit: TrainingUnit;
  mainCount: number;
  accessoryCount: number;
}

const TrainingDayView = ({
  unit,
  mainCount,
  accessoryCount,
}: TrainingDayViewProps) => (
  <div className="p-3 bg-zinc-900/20 rounded-lg">
    <ExerciseCategory
      title="Main Exercises"
      exercises={unit.MainExercises}
      count={mainCount}
      type="main"
    />
    <ExerciseCategory
      title="Accessory Exercises"
      exercises={unit.AccessoryExercises}
      count={accessoryCount}
      type="accessory"
    />
  </div>
);
export const SelectedExercisesList = () => {
  const useTrainingPlanHook = useTrainingLogic();
  const currentUnit =
    useTrainingPlanHook.trainingPlan.trainingUnits[
      useTrainingPlanHook.currentDayIndex - 1
    ];

  return (
    <ScrollBarComponent className="h-[65vh]">
      {useTrainingPlanHook.showAllDaysLoad ? (
        // All days view
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          {useTrainingPlanHook.trainingPlan.trainingUnits.map((unit, index) => (
            <TrainingDayView
              key={index}
              unit={unit}
              mainCount={useTrainingPlanHook.objectives.mainExerciseCount}
              accessoryCount={
                useTrainingPlanHook.objectives.accessoryExerciseCount
              }
            />
          ))}
        </div>
      ) : (
        // Single day view
        <div className="p-4">
          <TrainingDayView
            unit={currentUnit}
            mainCount={useTrainingPlanHook.objectives.mainExerciseCount}
            accessoryCount={
              useTrainingPlanHook.objectives.accessoryExerciseCount
            }
          />
        </div>
      )}
    </ScrollBarComponent>
  );
};

export default SelectedExercisesList;
