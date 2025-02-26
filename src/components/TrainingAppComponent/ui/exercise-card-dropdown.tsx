import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../ui/button";
import arrowDown from "../../../assets/feather-icons/arrow-down-circle.svg";
import { useTrainingLogic } from "../utils/TrainingAppContext";

interface ExerciseAddDropdownProps {
  buttonStylesForTrainingModule: string;
}

const ExerciseAddDropdown: React.FC<ExerciseAddDropdownProps> = ({
  buttonStylesForTrainingModule,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const trainingPlanHook = useTrainingLogic();

  const currentUnit =
    trainingPlanHook.trainingPlan?.trainingUnits[
      trainingPlanHook.currentDayIndex - 1
    ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMainExerciseDisabled =
    (currentUnit?.MainExercises?.length ?? 0) >=
    (trainingPlanHook.objectives?.mainExerciseCount ?? 0);

  const isAccessoryExerciseDisabled =
    (currentUnit?.AccessoryExercises?.length ?? 0) >=
    (trainingPlanHook.objectives?.accessoryExerciseCount ?? 0);

  const handleAddMainExercise = () => {
    if (!trainingPlanHook.selectedExercise) return;
    trainingPlanHook.addNewMainExercise(
      trainingPlanHook.currentDayIndex,
      trainingPlanHook.selectedExercise
    );
    setIsOpen(false);
  };

  const handleAddAccessoryExercise = () => {
    if (!trainingPlanHook.selectedExercise) return;
    trainingPlanHook.addNewAccessoryExercise(
      trainingPlanHook.currentDayIndex,
      trainingPlanHook.selectedExercise
    );
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${buttonStylesForTrainingModule} 
     
          rounded-lg
          w-48 md:w-48 xl:w-[15vw] md:p-6
          xl:px-10 py-3
          flex items-center justify-end
          transition-all duration-200 ease-in-out
          ${isOpen ? "ring-1 ring-red-500/20" : ""}
        `}
      >
        <span className="text-zinc-200 text-lg font-medium">Add Exercise </span>
        <img
          src={arrowDown}
          className={`w-5 h-5 ml-2 transition-transform duration-200 opacity-70
            ${isOpen ? "rotate-180" : ""}
          `}
          alt="Toggle dropdown"
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full z-50">
          <div
            className="
            bg-zinc-900/95 
            backdrop-blur-sm
            border border-zinc-800/50
            rounded-lg 
            shadow-lg 
            shadow-black/20
            overflow-hidden
            transform origin-top
            animate-in fade-in slide-in-from-top-2 duration-200
          "
          >
            <ul className="divide-y divide-zinc-800/50">
              <li>
                <button
                  onClick={handleAddMainExercise}
                  disabled={isMainExerciseDisabled}
                  className={`
                    w-full px-4 py-3
                    text-sm text-left
                    transition-colors duration-150
                    flex items-center justify-between
                    bg-zinc-900 text-zinc-300
                    ${
                      isMainExerciseDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-zinc-800/40 hover:text-blue-200"
                    }
                  `}
                >
                  <span>Add as Main Exercise</span>
                  <span className="text-xs text-zinc-500">
                    {currentUnit?.MainExercises.length ?? 0}/
                    {trainingPlanHook.objectives.mainExerciseCount}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleAddAccessoryExercise}
                  disabled={isAccessoryExerciseDisabled}
                  className={`
                    w-full px-4 py-3
                    text-sm text-left
                    transition-colors duration-150
                    flex items-center justify-between
                    bg-zinc-900 text-zinc-300
                    ${
                      isAccessoryExerciseDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-zinc-800/40 hover:text-blue-200"
                    }
                  `}
                >
                  <span>Add as Accessory</span>
                  <span className="text-xs text-zinc-500">
                    {currentUnit?.AccessoryExercises.length ?? 0}/
                    {trainingPlanHook.objectives.accessoryExerciseCount}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseAddDropdown;
