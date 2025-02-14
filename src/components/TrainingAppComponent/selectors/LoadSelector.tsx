import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import editIcon from "../../../assets/feather-icons/edit.svg";
import trashIcon from "../../../assets/feather-icons/trash-2.svg";

import type { TrainingUnit as TrainingDay } from "../utils/TraininAppLogic.interface";

const ExerciseItem = ({
  exercise,
  onRemove,
  onEdit,
}: {
  exercise: ExerciseBlueprintsInterface;
  onRemove: () => void;
  onEdit: () => void;
}) => (
  <li className="flex items-center px-3 py-0.5 rounded bg-zinc-800/40 hover:bg-zinc-700/40">
    <div className="mx-2">
      <span className="text-sm font-medium text-white/90 min-w-[180px]">
        {exercise.name}
      </span>
      <span className="ml-6 text-xs text-zinc-400 min-w-[50px]">
        {exercise.sets}×{exercise.reps}
      </span>
      <span className="ml-6 text-xs text-zinc-500">
        {exercise.toolsUsedInExercise}
      </span>{" "}
      <span className="ml-6 text-xs text-zinc-500">{exercise.intensity}</span>
    </div>
    <div className="flex gap-2 ml-auto">
      <Button
        className={`${buttonStylesForTrainingModule} xl:h-5 xl:w-5  md:w-5 md:h-5 lg:w-5 lg:h-5 !p-0.5 w-5 h-5`}
        onClick={onEdit}
      >
        <img src={editIcon} className="w-3 h-3" alt="Edit" />
      </Button>
      <Button
        className={`${buttonStylesForTrainingModule} xl:h-5 xl:w-5  md:w-5 md:h-5 lg:w-5 lg:h-5 !p-0.5 w-5 h-5`}
        onClick={onRemove}
      >
        <img src={trashIcon} className="w-3 h-3" alt="Remove" />
      </Button>
    </div>
  </li>
);

const ExerciseSection = ({
  title,
  exercises,
  count,
  type,
  dayIndex,
  onRemove,
}: {
  title: string;
  exercises: ExerciseBlueprintsInterface[];
  count: number;
  type: "main" | "accessory";
  dayIndex: number;
  onRemove: (id: string, type: "main" | "accessory", dayIndex: number) => void;
}) => (
  <div className="py-0.5">
    <div className="flex items-center gap-1.5 my-1">
      <div
        className={`w-1 h-1 rounded-full ${type === "main" ? "bg-red-500" : "bg-blue-500"}`}
      />
      <span className="text-xs text-zinc-400">
        {title} ({exercises.length}/{count})
      </span>
    </div>
    {exercises.length > 0 ? (
      <ul className="space-y-0.5">
        {exercises.map((exercise) => (
          <ExerciseItem
            key={exercise._id}
            exercise={exercise}
            onEdit={() => console.log("Edit exercise:", exercise)}
            onRemove={() => onRemove(exercise._id, type, dayIndex)}
          />
        ))}
      </ul>
    ) : (
      <div className="text-xs text-zinc-500 py-12">No exercises added</div>
    )}
  </div>
);

const TrainingDay = ({
  dayIndex,
  unit,
  mainCount,
  accessoryCount,
  onRemove,
}: {
  dayIndex: number;
  unit: TrainingDay;
  mainCount: number;
  accessoryCount: number;
  onRemove: (id: string, type: "main" | "accessory", dayIndex: number) => void;
}) => (
  <div className="bg-zinc-900/20 rounded p-8 min-w-[300px]">
    <h3 className="text-sm text-zinc-300 mb-1">
      {["I", "II", "III"][dayIndex]}
    </h3>
    <div className="space-y-4">
      <ExerciseSection
        title="Main Exercises"
        exercises={unit.MainExercises}
        count={mainCount}
        type="main"
        dayIndex={dayIndex + 1}
        onRemove={onRemove}
      />
      <ExerciseSection
        title="Accessory Exercises"
        exercises={unit.AccessoryExercises}
        count={accessoryCount}
        type="accessory"
        dayIndex={dayIndex + 1}
        onRemove={onRemove}
      />
    </div>
  </div>
);

export const LoadSelector = () => {
  const useTrainingPlanHook = useTrainingLogic();

  const handleRemoveExercise = (
    exerciseId: string,
    type: "main" | "accessory",
    dayIndex: number
  ) => {
    if (type === "main") {
      useTrainingPlanHook.removeMainExercise(dayIndex, exerciseId);
    } else {
      useTrainingPlanHook.removeAccessoryExercise(dayIndex, exerciseId);
    }
  };

  return (
    <div className="flex flex-col place-items-center xl:h-[55vh]">
      <ScrollBarComponent className="h-[xl:10vh]">
        {useTrainingPlanHook.showAllDaysLoad ? (
          <div className="flex gap-2">
            {useTrainingPlanHook.trainingPlan.trainingUnits.map(
              (unit, index) => (
                <TrainingDay
                  key={index}
                  dayIndex={index}
                  unit={unit}
                  mainCount={useTrainingPlanHook.objectives.mainExerciseCount}
                  accessoryCount={
                    useTrainingPlanHook.objectives.accessoryExerciseCount
                  }
                  onRemove={handleRemoveExercise}
                />
              )
            )}
          </div>
        ) : (
          <div className="flex justify-center">
            <TrainingDay
              dayIndex={useTrainingPlanHook.currentDayIndex - 1}
              unit={
                useTrainingPlanHook.trainingPlan.trainingUnits[
                  useTrainingPlanHook.currentDayIndex - 1
                ]
              }
              mainCount={useTrainingPlanHook.objectives.mainExerciseCount}
              accessoryCount={
                useTrainingPlanHook.objectives.accessoryExerciseCount
              }
              onRemove={handleRemoveExercise}
            />
          </div>
        )}
      </ScrollBarComponent>
    </div>
  );
};
