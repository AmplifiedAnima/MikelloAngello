import { useState, useEffect } from "react";
import { ExerciseCard } from "../exercise-card";
import { ExerciseList } from "../exercise-list";
import { exercises } from "./exercises";

import { Button } from "../ui/button";
import type { ExerciseBlueprintsInterface } from "./interfaces/exercise.interface";
import { buttonStylesForTrainingModule } from "../ui/styles/button-styles-training-module";
import { SearchExerciseInput } from "../ui/search-bar";

const TrainingAppComponent = () => {
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseBlueprintsInterface | null>(null);
  const [showList, setShowList] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleExerciseClick = (exercise: ExerciseBlueprintsInterface) => {
    setSelectedExercise(exercise);
    if (isMobile) {
      setShowList(false);
    }
  };

  const toggleView = () => {
    setShowList(!showList);
  };

  return (
    <div className="xl:my-32  xl:mx-24">
      {/* Desktop Layout */}
      <div className="flex flex-row">
        <div className="xl:py-4 w-[20vw] mx-16">
          <SearchExerciseInput
            className="
                  rounded-lg
                  bg-black 
                  border-zinc-800 
                  hover:border-zinc-700 
                  focus:border-white 
                  focus:ring-white/20
      
                "
            placeholder="Search exercises..."
          />
        </div>{" "}
        <div className="xl:mx-12">
          <Button className={`${buttonStylesForTrainingModule} xl:mx-2`}>
            {" "}
            Frequency
          </Button>
          <Button className={`${buttonStylesForTrainingModule} xl:mx-2`}>
            Load
          </Button>
          <Button className={`${buttonStylesForTrainingModule} xl:mx-2`}>
            {" "}
            SAVE
          </Button>
        </div>
      </div>
      <div
        className={`${isMobile ? "hidden" : "grid"} xl:h-[70vh]  grid-cols-[1.8fr_3fr] gap-6`}
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
    </div>
  );
};

export default TrainingAppComponent;
