import { ExerciseCard } from "../ui/exercise-card";
import { ExerciseList } from "../ui/exercise-list";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import arrowIconBack from "../../../assets/feather-icons/arrow-left-circle.svg";
import { useTrainingLogic } from "../utils/TrainingAppContext";

interface ExerciseSelectorProps {
  isMobile: boolean;
  showList: boolean;
  toggleView: () => void;
}

export const ExerciseSelector = ({
  isMobile,
  showList,
  toggleView,
}: ExerciseSelectorProps) => {
  
  const useTrainingPlanHook = useTrainingLogic();
  return (
    <>
      {/* Desktop Layout */}

      <div
        className={`${isMobile ? "hidden" : "grid"} xl:h-[50vh] grid-cols-[1.5fr_3fr] `}
      >
        <ExerciseList />
        {useTrainingPlanHook.selectedExercise ? (
          <ExerciseCard />
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
            <ExerciseList />
          </div>

          <div
            className={`transition-opacity duration-300 ${!showList ? "opacity-100" : "hidden opacity-0"}`}
          >
            {useTrainingPlanHook.selectedExercise ? (
              <ExerciseCard />
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
