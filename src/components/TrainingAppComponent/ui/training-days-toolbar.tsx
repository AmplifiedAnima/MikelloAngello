import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";

import { useTrainingLogic } from "../utils/TrainingAppContext";
import layersIcon from "../../../assets/feather-icons/box.svg";
import clipboardIcon from "../../../assets/feather-icons/clipboard.svg";
import autoAssign from "../../../assets/feather-icons/file-plus.svg";

import TrainingUnitDropdown from "./training-unit-dropdown";
import { useState } from "react";
import AutoAssignModal from "./auto-assign-modal";

export const TrainingDaysToolbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const useTrainingPlanHook = useTrainingLogic();
  const currentUnit =
    useTrainingPlanHook.trainingPlan.trainingUnits[
      useTrainingPlanHook.currentDayIndex - 1
    ];
  const totalDays = useTrainingPlanHook.trainingPlan.trainingDaysPerWeek;
  const currentDayIndex = useTrainingPlanHook.currentDayIndex;

  return (
    <div className="flex justify-left xl:px-24 w-full">
      <AutoAssignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={useTrainingPlanHook.step === "EXERCISES" ? "exercises" : "load"}
        onConfirm={() => {
          // Add your auto-assign logic here
          console.log("Auto-assign confirmed");
        }}
      />
      <div className="flex items-center justify-between h-12 bg-zinc-900/90 rounded-lg px-4">
        {/* Left: Day Navigation */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {((useTrainingPlanHook.step === "LOAD" &&
              !useTrainingPlanHook.showAllDaysLoad) ||
              useTrainingPlanHook.step === "EXERCISES") && (
              <TrainingUnitDropdown
                currentDayIndex={currentDayIndex}
                totalDays={totalDays}
                onSelect={useTrainingPlanHook.setCurrentDay}
              />
            )}
          </div>
          <div className="mx-2 flex">
            <Button
              className={`${buttonStylesForTrainingModule} xl:h-8 xl:px-1 xl:py-2 xl:w-[12vw]`}
              onClick={() =>
                useTrainingPlanHook.setShowAllDaysLoad(
                  !useTrainingPlanHook.showAllDaysLoad
                )
              }
            >
              <img
                src={
                  useTrainingPlanHook.showAllDaysLoad
                    ? layersIcon
                    : clipboardIcon
                }
                className="xl:w-4 xl:h-4"
                alt="Toggle view"
              />
              <span className="ml-2 text-sm">
                {useTrainingPlanHook.showAllDaysLoad
                  ? "Show single day"
                  : "Show all days"}
              </span>
            </Button>
            <div className="px-[4.5px]" />
            <Button
              className={`${buttonStylesForTrainingModule} xl:h-8 xl:px-1 xl:py-2 xl:w-[12vw]`}
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={autoAssign}
                className="xl:w-4 xl:h-4"
                alt="Toggle view"
              />
              <span className="ml-2 text-sm">
                {useTrainingPlanHook.step === "EXERCISES"
                  ? "Auto-assign Exercises"
                  : "Auto-assign Load"}
              </span>
            </Button>
          </div>
        </div>

        {/* Right: Exercise Progress */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-sm text-zinc-400">
              {`${currentUnit?.MainExercises.length + " "}` || "0 "}
              {"/ "}
              {useTrainingPlanHook.objectives.mainExerciseCount} Main exercises
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-sm text-zinc-400">
              {`${currentUnit?.AccessoryExercises.length + " "}` || "0 "}
              {"/ "}
              {useTrainingPlanHook.objectives.accessoryExerciseCount} Accessory
              exercises
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDaysToolbar;
