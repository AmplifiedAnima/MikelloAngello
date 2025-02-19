import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import layersIcon from "../../../assets/feather-icons/box.svg";
import clipboardIcon from "../../../assets/feather-icons/clipboard.svg";
import autoAssign from "../../../assets/feather-icons/file-plus.svg";
import arrowDown from "../../../assets/feather-icons/arrow-down-circle.svg";
import { useState, useRef } from "react";
import AutoAssignModal from "./auto-assign-modal";
import TrainingUnitDropdown from "./training-unit-dropdown";

interface TrainingDaysToolbarProps {
  isMobile: boolean;
}

export const TrainingDaysToolbar = ({ isMobile }: TrainingDaysToolbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const useTrainingPlanHook = useTrainingLogic();

  const currentUnit =
    useTrainingPlanHook.trainingPlan.trainingUnits[
      useTrainingPlanHook.currentDayIndex - 1
    ];
  const totalDays = useTrainingPlanHook.trainingPlan.trainingDaysPerWeek;
  const currentDayIndex = useTrainingPlanHook.currentDayIndex;

  const toggleView = () => {
    useTrainingPlanHook.setShowAllDaysLoad(
      !useTrainingPlanHook.showAllDaysLoad
    );
    setIsOpen(false);
  };

  const openAutoAssign = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };

  const content = isMobile ? (
    <div className=" flex justify-center">
      <div className="relative top-6 w-[50vw]  " ref={dropdownRef}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`${buttonStylesForTrainingModule} w-full bg-transparent hover:bg-zinc-800/50 flex items-center justify-between px-4 py-2`}
        >
          <span className="text-sm">
            Training unit {currentDayIndex}/{totalDays}
          </span>
          <img
            src={arrowDown}
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            alt="Toggle menu"
          />
        </Button>

        {isOpen && (
          <div className="absolute top-full mt-1  bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg z-50  ">
            <div className="p-2 border-b border-zinc-800">
              <div className="w-[40vw]  grid-cols-3 gap-1">
                {Array.from({ length: totalDays }, (_, i) => i + 1).map(
                  (day) => (
                    <button
                      key={day}
                      onClick={() => useTrainingPlanHook.setCurrentDay(day)}
                      className={`${buttonStylesForTrainingModule} mx-2 w-[15vw] px-2 py-1 text-sm rounded-md transition-colors
                    ${currentDayIndex === day ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50"}`}
                    >
                      Day {day}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="p-2 space-y-1">
              <Button
                onClick={toggleView}
                className={`w-full px-3 py-2 text-sm text-left text-zinc-300 rounded-md hover:bg-zinc-800/50 transition-colors flex items-center gap-2 ${buttonStylesForTrainingModule}`}
              >
                <img
                  src={
                    useTrainingPlanHook.showAllDaysLoad
                      ? layersIcon
                      : clipboardIcon
                  }
                  className="w-4 h-4"
                  alt="Toggle view"
                />
                {useTrainingPlanHook.showAllDaysLoad
                  ? "Single day"
                  : "All days"}
              </Button>

              <Button
                onClick={openAutoAssign}
                className={` px-2  py-2 text-sm text-left text-zinc-300 rounded-md hover:bg-zinc-800/50 transition-colors flex items-center gap-2 ${buttonStylesForTrainingModule}`}
              >
                <img src={autoAssign} className="w-4 h-4" alt="Auto assign" />
                Auto-assign{" "}
                {useTrainingPlanHook.step === "EXERCISES"
                  ? "Exercises"
                  : "Load"}
              </Button>
            </div>

            <div className="p-2 border-t border-zinc-800">
              <div className="space-y-2 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-sm text-zinc-400">
                    {currentUnit?.MainExercises.length || 0}/
                    {useTrainingPlanHook.objectives.mainExerciseCount} Main
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm text-zinc-400">
                    {currentUnit?.AccessoryExercises.length || 0}/
                    {useTrainingPlanHook.objectives.accessoryExerciseCount} Acc.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between h-11 bg-zinc-900/90 rounded-2xl w-[70vw] px-8 py-1">
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
        <div className="mx-2 flex gap-2">
          <Button
            className={`${buttonStylesForTrainingModule} xl:h-8 xl:px-1 xl:py-2 xl:w-[12vw]`}
            onClick={toggleView}
          >
            <img
              src={
                useTrainingPlanHook.showAllDaysLoad ? layersIcon : clipboardIcon
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
          <Button
            className={`${buttonStylesForTrainingModule} xl:h-8 xl:px-1 xl:py-2 xl:w-[12vw]`}
            onClick={() => setIsModalOpen(true)}
          >
            <img src={autoAssign} className="xl:w-4 xl:h-4" alt="Auto assign" />
            <span className="ml-2 text-sm">
              Auto-assign{" "}
              {useTrainingPlanHook.step === "EXERCISES" ? "" : "Load"}
            </span>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="text-sm text-zinc-400">
            {currentUnit?.MainExercises.length || 0}/
            {useTrainingPlanHook.objectives.mainExerciseCount} Main exercises
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-sm text-zinc-400">
            {currentUnit?.AccessoryExercises.length || 0}/
            {useTrainingPlanHook.objectives.accessoryExerciseCount} Accessory
            exercises
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full ${isMobile ? "px-2" : "xl:px-24"}`}>
      <AutoAssignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={useTrainingPlanHook.step === "EXERCISES" ? "exercises" : "load"}
        onConfirm={() => console.log("Auto-assign confirmed")}
      />
      {content}
    </div>
  );
};

export default TrainingDaysToolbar;
