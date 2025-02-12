import { useState } from "react";
import { type ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import warningFeatherIcon from "../../../assets/feather-icons/alert-triangle.svg";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
// import { SearchExerciseInput } from "./ui/search-bar";
import heartIcon from "../../../assets/feather-icons/heart.svg";
import { UseTrainingPlanInterface } from "../utils/TrainingAppLogicHook";

export const ExerciseList = ({
  useTrainingPlanHook,
}: {
  useTrainingPlanHook: UseTrainingPlanInterface;
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const shouldShowToolWarning = (exercise: ExerciseBlueprintsInterface) => {
    return (
      exercise.toolsUsedInExercise &&
      exercise.toolsUsedInExercise.toLowerCase() !== "bodyweight" &&
      exercise.toolsUsedInExercise !== ""
    );
  };

  return (
    <div className="xl:h-[60vh] w-full ">
      <ScrollBarComponent className="xl:h-full md:h-[80vh] xl:px-12 px-4">
        <div className="rounded-lg bg-black">
          <ul className="divide-y divide-zinc-900">
            {useTrainingPlanHook.exercisesBlueprints.map((exercise) => (
              <li
                key={exercise._id}
                className="group relative flex cursor-pointer items-center justify-between px-8 py-6 transition-all"
                onClick={() =>
                  useTrainingPlanHook.handleExerciseClick(exercise)
                }
                onMouseEnter={() => setHoveredId(exercise._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative">
                  <p className="text-base font-medium text-white/90 transition-colors group-hover:text-white whitespace-nowrap">
                    {exercise.name}
                  </p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </div>

                {hoveredId === exercise._id &&
                  shouldShowToolWarning(exercise) && (
                    <div
                      className="flex items-center space-x-3 rounded-full bg-zinc-900/80 px-6  text-white/80"
                      style={{
                        animation: "fadeIn 0.2s ease-in",
                      }}
                    >
                      <img
                        src={warningFeatherIcon}
                        width="20"
                        height="20"
                        className="opacity-80"
                      />
                      <span className="text-sm font-medium">
                        {exercise.toolsUsedInExercise}
                      </span>
                    </div>
                  )}
                {useTrainingPlanHook.selectedExercise?._id === exercise._id && (
                  <img src={heartIcon} width={20} />
                )}
              </li>
            ))}
          </ul>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(5px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </ScrollBarComponent>
    </div>
  );
};
