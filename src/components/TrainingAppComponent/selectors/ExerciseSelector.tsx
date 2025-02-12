import { ExerciseCard } from "../ui/exercise-card";
import { ExerciseList } from "../ui/exercise-list";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import arrowIconBack from "../../../assets/feather-icons/arrow-left-circle.svg";
import { UseTrainingPlanInterface } from "../utils/TrainingAppLogicHook";

interface ExerciseSelectorProps {
  isMobile: boolean;
  useTrainingPlanHook: UseTrainingPlanInterface;
  showList: boolean;
  toggleView: () => void;
}

export const ExerciseSelector = ({
  isMobile,
  useTrainingPlanHook,
  showList,
  toggleView,
}: ExerciseSelectorProps) => {
  return (
    <>
      {/* Desktop Layout */}
      <div
        className={`${isMobile ? "hidden" : "grid"} xl:h-[65vh] grid-cols-[1.8fr_3fr] gap-6`}
      >
        <ExerciseList useTrainingPlanHook={useTrainingPlanHook} />
        {useTrainingPlanHook.selectedExercise ? (
          <ExerciseCard exercise={useTrainingPlanHook.selectedExercise} />
        ) : (
          <p className="p-12 text-xl text-PinkyPurple">
            Click on exercise to view its specificity
          </p>
        )}
      </div>

      {/* Mobile Layout */}
      {isMobile && (
        <div className="relative min-h-[80vh]">
          <div
            className={`transition-opacity duration-300 ${showList ? "opacity-100" : "hidden opacity-0"}`}
          >
            <ExerciseList useTrainingPlanHook={useTrainingPlanHook} />
          </div>

          <div
            className={`transition-opacity duration-300 ${!showList ? "opacity-100" : "hidden opacity-0"}`}
          >
            {useTrainingPlanHook.selectedExercise ? (
              <ExerciseCard exercise={useTrainingPlanHook.selectedExercise} />
            ) : (
              <p className="p-12 text-xl text-PinkyPurple">
                Click on exercise to view its specificity
              </p>
            )}
          </div>

          <Button
            onClick={toggleView}
            className={`${buttonStylesForTrainingModule} fixed top-[10vh] left-1/4 w-[30vw] -translate-x-1/2 transform rounded-full p-2`}
          >
            {showList ? (
              <span> exercise details</span>
            ) : (
              <img src={arrowIconBack} width={20} />
            )}
          </Button>
        </div>
      )}
    </>
  );
};
