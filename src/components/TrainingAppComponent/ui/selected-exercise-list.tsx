import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import editIcon from "../../../assets/feather-icons/edit.svg";
import trashIcon from "../../../assets/feather-icons/trash-2.svg";
import { ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { useTrainingLogic } from "../utils/TrainingAppContext";

interface ExerciseItemProps {
  exercise: ExerciseBlueprintsInterface;
  view?: "minimal" | "full";
  type?: "main" | "accessory";
  dayIndex?: number;
  onClick?: () => void;
}

interface ExerciseSectionProps {
  title: string;
  exercises: ExerciseBlueprintsInterface[];
  count: number;
  type: "main" | "accessory";
  dayIndex: number;
  view?: "minimal" | "full";
}

interface TrainingDayProps {
  dayIndex: number;
  unit: {
    MainExercises: ExerciseBlueprintsInterface[];
    AccessoryExercises: ExerciseBlueprintsInterface[];
  };
  mainCount: number;
  accessoryCount: number;
  view?: "minimal" | "full";
}

// Components
const ExerciseItem = ({
  exercise,
  view = "full",
  type,
  dayIndex,
  onClick,
}: ExerciseItemProps) => {
  const { removeMainExercise, removeAccessoryExercise } = useTrainingLogic();

  const handleRemove = () => {
    if (type === "main" && dayIndex) {
      removeMainExercise(dayIndex, exercise._id);
    } else if (type === "accessory" && dayIndex) {
      removeAccessoryExercise(dayIndex, exercise._id);
    }
  };

  if (view === "minimal") {
    return (
      <li
        onClick={onClick}
        className=" px-4 py-0 rounded bg-zinc-800/40 hover:bg-zinc-700/40 cursor-pointer grid grid-cols-2
         items-center"
      >
        <span className="text-sm font-medium text-white/90 whitespace-nowrap">
          {exercise.name}
        </span>
        <div className=" flex justify-end">
          <Button
            className={`${buttonStylesForTrainingModule} xl:h-6 xl:w-6 md:w-5 md:h-5 lg:w-5 lg:h-5 !p-0.5 w-5 h-5 `}
            onClick={handleRemove}
          >
            <img src={trashIcon} className="w-6 h-6" alt="Remove" />
          </Button>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-center px-3 py-0.5 rounded bg-zinc-800/40 hover:bg-zinc-700/40">
      <div className="mx-2 flex-1">
        <span className="text-sm font-medium text-white/90 min-w-[180px]">
          {exercise.name}
        </span>
        <span className="ml-6 text-xs text-zinc-400 min-w-[50px]">
          {exercise.sets}×{exercise.reps}
        </span>
        {exercise.toolsUsedInExercise && (
          <span className="ml-6 text-xs text-zinc-500">
            {exercise.toolsUsedInExercise}
          </span>
        )}
        {exercise.intensity && (
          <span className="ml-6 text-xs text-zinc-500">
            {exercise.intensity}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <Button
          className={`${buttonStylesForTrainingModule} xl:h-5 xl:w-5 md:w-5 md:h-5 lg:w-5 lg:h-5 !p-0.5 w-5 h-5`}
          onClick={() => console.log("Edit exercise:", exercise)}
        >
          <img src={editIcon} className="w-3 h-3" alt="Edit" />
        </Button>
        <Button
          className={`${buttonStylesForTrainingModule} xl:h-5 xl:w-5 md:w-5 md:h-5 lg:w-5 lg:h-5 !p-0.5 w-5 h-5`}
          onClick={handleRemove}
        >
          <img src={trashIcon} className="w-3 h-3" alt="Remove" />
        </Button>
      </div>
    </li>
  );
};

const ExerciseSection = ({
  title,
  exercises,
  count,
  type,
  dayIndex,
  view = "full",
}: ExerciseSectionProps) => {
  if (view === "minimal") {
    return (
      <div className="space-y-0">
        <div className="flex items-center gap-2 border-b border-zinc-800/50 py-1">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              type === "main" ? "bg-red-500" : "bg-blue-500"
            }`}
          />
          <h4 className="text-sm font-medium text-zinc-300">{title}</h4>
          <span className="text-xs text-zinc-500">
            ({exercises.length}/{count})
          </span>
        </div>
        <div>
          {exercises.length > 0 ? (
            <ul className="space-y-2 ">
              {exercises.map((exercise) => (
                <ExerciseItem
                  key={exercise._id}
                  exercise={exercise}
                  view="minimal"
                  type={type}
                  dayIndex={dayIndex}
                />
              ))}
            </ul>
          ) : (
            <div className="py-1 text-sm text-center text-zinc-500">
              No exercises added
            </div>
          )}
        </div>
      </div>
    );
  }

  // Full view remains the same
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            type === "main" ? "bg-red-500" : "bg-blue-500"
          }`}
        />
        <h4 className="text-sm font-medium text-zinc-300">{title}</h4>
        <span className="text-xs text-zinc-500">
          ({exercises.length}/{count})
        </span>
      </div>
      <div className="overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900/50 pr-2">
        {exercises.length > 0 ? (
          <div className="space-y-1">
            {exercises.map((exercise) => (
              <ExerciseItem
                key={exercise._id}
                exercise={exercise}
                type={type}
                dayIndex={dayIndex}
                view="full"
              />
            ))}
          </div>
        ) : (
          <div className="py-4 text-sm text-center text-zinc-500">
            No exercises added
          </div>
        )}
      </div>
    </div>
  );
};

const TrainingDay = ({
  dayIndex,
  unit,
  mainCount,
  accessoryCount,
  view = "full",
}: TrainingDayProps) => {
  if (view === "minimal") {
    return (
      <div className="space-y-8  ">
        <h2 className="text-sm font-medium text-zinc-300 py-1">
          Training day {dayIndex + 1}
        </h2>
        <div className="space-y-8">
          <ExerciseSection
            title="Main Exercises"
            exercises={unit.MainExercises}
            count={mainCount}
            type="main"
            dayIndex={dayIndex + 1}
            view="minimal"
          />
          <ExerciseSection
            title="Accessory Exercises"
            exercises={unit.AccessoryExercises}
            count={accessoryCount}
            type="accessory"
            dayIndex={dayIndex + 1}
            view="minimal"
          />
        </div>
      </div>
    );
  }

  // Full view remains the same
  return (
    <div className="bg-zinc-900/40 rounded-lg p-4 min-w-[400px] max-w-[600px]">
      <div className="mb-4 pb-2 border-b border-zinc-800/50">
        <h3 className="text-lg font-medium text-zinc-200">
          Day {["I", "II", "III"][dayIndex]}
        </h3>
      </div>
      <div className="space-y-6">
        <ExerciseSection
          title="Main Exercises"
          exercises={unit.MainExercises}
          count={mainCount}
          type="main"
          dayIndex={dayIndex + 1}
          view="full"
        />
        <ExerciseSection
          title="Accessory Exercises"
          exercises={unit.AccessoryExercises}
          count={accessoryCount}
          type="accessory"
          dayIndex={dayIndex + 1}
          view="full"
        />
      </div>
    </div>
  );
};
interface ExerciseContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ExerciseContainer = ({
  children,
  className = "",
}: ExerciseContainerProps) => (
  <ScrollBarComponent className={`xl:h-[60vh]  ${className}`}>
    <div className="container mx-auto px-4">{children}</div>
  </ScrollBarComponent>
);

export {
  ExerciseItem,
  ExerciseSection,
  TrainingDay,
  ExerciseContainer,
  type ExerciseItemProps,
  type ExerciseSectionProps,
  type TrainingDayProps,
  type ExerciseContainerProps,
};
