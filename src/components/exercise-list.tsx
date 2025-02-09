import { useState } from "react";
import { type ExerciseBlueprintsInterface } from "./TrainingAppComponent/interfaces/exercise.";
import warningFeatherIcon from "../assets/feather-icons/alert-triangle.svg";

export const ExerciseList = ({
  exercises,
  handleExerciseClick,
}: {
  exercises: ExerciseBlueprintsInterface[];
  handleExerciseClick: (exercise: ExerciseBlueprintsInterface) => void;
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const shouldShowToolWarning = (exercise: ExerciseBlueprintsInterface) => {
    return exercise.toolsUsedInExercise && 
           exercise.toolsUsedInExercise.toLowerCase() !== 'bodyweight' &&
           exercise.toolsUsedInExercise !== '';
  };

  return (
    <div className="rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800">
      <ul className="divide-y divide-zinc-700/20">
        {exercises.map((exercise) => (
          <li
            key={exercise._id}
            className="relative flex cursor-pointer items-center justify-between px-6 py-3 transition-all hover:bg-zinc-800/30"
            onClick={() => handleExerciseClick(exercise)}
            onMouseEnter={() => setHoveredId(exercise._id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div>
              <p className="text-base font-medium text-zinc-200 transition-colors hover:text-red-500">
                {exercise.name}
              </p>
            </div>
            
            {hoveredId === exercise._id && shouldShowToolWarning(exercise) && (
              <div 
                className="flex items-center space-x-3 rounded-full bg-zinc-800/80 px-3  text-zinc-200"
                style={{
                  animation: 'fadeIn 0.2s ease-in'
                }}
              >
                <img
                  src={warningFeatherIcon}
                  width="18"
                  height="18"
                  className="opacity-80"
                />
                <span className="text-sm font-medium">
                  {exercise.toolsUsedInExercise}
                </span>
              </div>
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
  );
};