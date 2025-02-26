import React, { useState } from "react";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import arrowRight from "../../../assets/feather-icons/arrow-right.svg";
import filterIcon from "../../../assets/feather-icons/sliders.svg";
import ExerciseFilterModal from "./exercise-filter-modal";

export const ExerciseList = () => {
  const { selectedExercise, exercisesBlueprints, handleExerciseClick } =
    useTrainingLogic();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    movementPatterns: [] as string[],
    primeMovers: [] as string[],
    tools: [] as string[],
  });

  // Filter exercises based on selected filters
  const filteredExercises = exercisesBlueprints.filter((exercise) => {
    return (
      (filters.movementPatterns.length === 0 ||
        filters.movementPatterns.includes(exercise.movementPattern)) &&
      (filters.primeMovers.length === 0 ||
        filters.primeMovers.includes(exercise.primeMovers)) &&
      (filters.tools.length === 0 ||
        filters.tools.includes(exercise.toolsUsedInExercise))
    );
  });

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      movementPatterns: [],
      primeMovers: [],
      tools: [],
    });
  };

  const isSelected = selectedExercise?.name;

  return (
    <div className="z-10 grid xl:grid-cols-2 ">
      {/* Filter Button */}

      {/* Filter Modal */}
      <ExerciseFilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={(newFilters) => {
          setFilters(newFilters);
          setIsFilterModalOpen(false);
        }}
        onReset={resetFilters}
      />

      {/* Exercise List */}
      <ScrollBarComponent className="h-[60vh] xl:w-[25vw] my-4 px-2 ">
        <ul className="space-y-[3px] relative z-[10]">
          {filteredExercises.map((exercise) => (
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
                      : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  <img src={arrowRight} width={18} alt="arrow" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ScrollBarComponent>
      <div className=" fixed xl:left-[27.7vw] xl:top-[26.5vh] ">
        <Button
          onClick={() => setIsFilterModalOpen(true)}
          className={`${buttonStylesForTrainingModule} xl:px-1 xl:py-6 flex xl:mx-1 items-center xl:w-[4vw]`}
        >
          <img src={filterIcon} alt="Filter" className="w-5 h-5 " />
        </Button>
      </div>
    </div>
  );
};

export default ExerciseList;
