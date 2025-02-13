import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { UseTrainingPlanInterface } from "../utils/TraininAppLogic.interface";
import ChevronRight from "../../../assets/feather-icons/arrow-right.svg";
import ChevronLeft from "../../../assets/feather-icons/arrow-left.svg";

export const TrainingDaysToolbar = ({
  useTrainingPlanHook,
}: {
  useTrainingPlanHook: UseTrainingPlanInterface;
}) => {
  const currentUnit =
    useTrainingPlanHook.trainingPlan.trainingUnits[
      useTrainingPlanHook.currentDayIndex - 1
    ];

  const totalDays = useTrainingPlanHook.trainingPlan.trainingDaysPerWeek;
  const currentDayIndex = useTrainingPlanHook.currentDayIndex;

  return (
    <div className="flex justify-center w-full ">
      <div className="flex items-center justify-between w-1/2 py-0 px-4 bg-zinc-900 rounded-lg">
        {/* Day Navigation */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() =>
              useTrainingPlanHook.setCurrentDay(
                currentDayIndex > 1 ? currentDayIndex - 1 : totalDays
              )
            }
            className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8 flex items-center justify-center`}
          >
            <img src={ChevronLeft} className="w-4 h-4" />
          </Button>

          <div className="bg-zinc-800 rounded-full px-3 py-1 text-white text-sm font-medium">
            Training unit {currentDayIndex}/{totalDays}
          </div>

          <Button
            onClick={() =>
              useTrainingPlanHook.setCurrentDay(
                currentDayIndex < totalDays ? currentDayIndex + 1 : 1
              )
            }
            className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8 flex items-center justify-center`}
          >
            <img src={ChevronRight} className="w-4 h-4" />
          </Button>
        </div>

        {/* Exercise Progress */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="text-sm text-zinc-400">
              {currentUnit?.MainExercises.length || 0}/
              {useTrainingPlanHook.objectives.mainExerciseCount} Main exercises
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <div className="text-sm text-zinc-400">
              {currentUnit?.AccessoryExercises.length || 0}/
              {useTrainingPlanHook.objectives.accessoryExerciseCount} Accessory
              exercises
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDaysToolbar;
