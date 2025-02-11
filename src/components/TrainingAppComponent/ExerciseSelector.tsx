import { ExerciseCard } from "../exercise-card";
import { ExerciseList } from "../exercise-list";
import { Button } from "../ui/button";
import { buttonStylesForTrainingModule } from "../ui/styles/button-styles-training-module";
import { exercises } from "./exercises";
import { ExerciseBlueprintsInterface } from "./interfaces/exercise.interface";

interface ExerciseSelectorProps {
  isMobile: boolean;
  selectedExercise: ExerciseBlueprintsInterface | null;
  handleExerciseClick: (exercise: ExerciseBlueprintsInterface) => void;
  showList: boolean;
  toggleView: () => void;
}

export const ExerciseSelector = ({
  isMobile,
  selectedExercise,
  handleExerciseClick,
  showList,
  toggleView,
}: ExerciseSelectorProps) => {
  return (
    <>
      {/* Desktop Layout */}
      <div
        className={`${isMobile ? "hidden" : "grid"} xl:h-[70vh] grid-cols-[1.8fr_3fr] gap-6`}
      >
        <ExerciseList
          exercises={exercises}
          handleExerciseClick={handleExerciseClick}
          selectedExercise={selectedExercise}
        />
        {selectedExercise ? (
          <ExerciseCard exercise={selectedExercise} />
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
            <ExerciseList
              exercises={exercises}
              handleExerciseClick={handleExerciseClick}
              selectedExercise={selectedExercise}
            />
          </div>

          <div
            className={`transition-opacity duration-300 ${!showList ? "opacity-100" : "hidden opacity-0"}`}
          >
            {selectedExercise ? (
              <ExerciseCard exercise={selectedExercise} />
            ) : (
              <p className="p-12 text-xl text-PinkyPurple">
                Click on exercise to view its specificity
              </p>
            )}
          </div>

          <Button
            onClick={toggleView}
            className={`${buttonStylesForTrainingModule} fixed bottom-14 left-1/2 w-1/2 -translate-x-1/2 transform rounded-full`}
          >
            {showList ? "View Exercise Details" : "Back to List"}
          </Button>
        </div>
      )}
    </>
  );
};
