import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import arrowRight from "../../../assets/feather-icons/arrow-right.svg";
import arrowLeft from "../../../assets/feather-icons/arrow-left.svg";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import layersIcon from "../../../assets/feather-icons/box.svg";
import clipboardIcon from "../../../assets/feather-icons/clipboard.svg";

export const TrainingDaysToolbar = () => {
  const useTrainingPlanHook = useTrainingLogic();
  // const currentUnit =
  //   useTrainingPlanHook.trainingPlan.trainingUnits[
  //     useTrainingPlanHook.currentDayIndex - 1
  //   ];
  const totalDays = useTrainingPlanHook.trainingPlan.trainingDaysPerWeek;
  const currentDayIndex = useTrainingPlanHook.currentDayIndex;

  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center h-12 bg-zinc-900/90 rounded-lg px-4">
        {/* Left: Day Navigation */}
        <div className="flex items-center gap-2">
          {((useTrainingPlanHook.step === "LOAD" &&
            !useTrainingPlanHook.showAllDaysLoad) ||
            useTrainingPlanHook.step === "EXERCISES") && (
            <>
              <Button
                onClick={() =>
                  useTrainingPlanHook.setCurrentDay(
                    currentDayIndex > 1 ? currentDayIndex - 1 : totalDays
                  )
                }
                className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8 flex items-center justify-center`}
              >
                <img src={arrowLeft} className="w-4 h-4" />
              </Button>

              <span className="text-white text-sm">
                Training unit {currentDayIndex}/{totalDays}
              </span>

              <Button
                onClick={() =>
                  useTrainingPlanHook.setCurrentDay(
                    currentDayIndex < totalDays ? currentDayIndex + 1 : 1
                  )
                }
                className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8 flex items-center justify-center`}
              >
                <img src={arrowRight} className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

        <div className="mx-8">
          {useTrainingPlanHook.step === "LOAD" && (
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
          )}
        </div>

        {/* Right: Exercise Progress */}
        {/* {useTrainingPlanHook.step !== "LOAD" &&
          useTrainingPlanHook.step !== "EXERCISES" && (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-sm text-zinc-400">
                  {currentUnit?.MainExercises.length || 0}/
                  {useTrainingPlanHook.objectives.mainExerciseCount} Main
                  exercises
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm text-zinc-400">
                  {currentUnit?.AccessoryExercises.length || 0}/
                  {useTrainingPlanHook.objectives.accessoryExerciseCount}{" "}
                  Accessory exercises
                </span>
              </div>
            </div>
          )} */}
      </div>
    </div>
  );
};

export default TrainingDaysToolbar;
