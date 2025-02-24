import React from "react";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import arrowRight from "../../../assets/feather-icons/arrow-right.svg";

export const ExerciseList = () => {
  const { selectedExercise, exercisesBlueprints, handleExerciseClick } =
    useTrainingLogic();

  const isSelected = selectedExercise?.name;

  return (
    <div className="relative z-10">
      <ScrollBarComponent className="h-[65vh] xl:w-[25vw] mx-4 ">
        <ul className="space-y-[3px] relative z-0">
          {exercisesBlueprints.map((exercise) => (
            <li
              key={exercise._id}
              className="group relative overflow-hidden"
              onClick={() => handleExerciseClick(exercise)}
            >
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 transition-all duration-300
                ${isSelected === exercise.name ? "bg-red-600/5" : "bg-red-600/0 group-hover:bg-red-600/5"}`}
              />

              {/* Main content container */}
              <div
                className={`relative flex items-center px-4 py-2 cursor-pointer transition-all duration-300
                ${isSelected === exercise.name ? "bg-zinc-800/50" : "bg-zinc-900/50 hover:bg-zinc-800/50"}`}
              >
                {/* Red accent line */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 transition-all duration-300
                  ${isSelected === exercise.name ? "bg-red-600" : "bg-red-600/0 group-hover:bg-red-600"}`}
                />

                {/* Exercise name */}
                <div>
                  <p
                    className={`text-lg font-medium transition-all duration-300 tracking-wider
                    ${
                      isSelected === exercise.name
                        ? "text-red-100"
                        : "text-zinc-400 group-hover:text-red-500"
                    }`}
                  >
                    {exercise.name}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div
                  className={`absolute right-4 transition-all duration-300 transform
                  ${
                    isSelected === exercise.name
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2 group-hover:opacity-0 group-hover:translate-x-0"
                  }`}
                >
                  <img src={arrowRight} width={18} alt="arrow" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ScrollBarComponent>
    </div>
  );
};

export default ExerciseList;
