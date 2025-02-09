import { useState, useEffect } from "react";
import { ExerciseCard } from "../exercise-card";
import { ExerciseList } from "../exercise-list";
import type { ExerciseBlueprintsInterface } from "./interfaces/exercise.interface";
import { exercises } from "./exercises";
import { ScrollBarComponent } from "../ScrollbarComponent";
import { Button } from "../ui/button";

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <div className="mt-24 p-6">
      {/* Desktop Layout */}
      <div className={`${isMobile ? 'hidden' : 'grid'} h-[80vh] grid-cols-[1.5fr_3fr] gap-6`}>
        <ScrollBarComponent>
          <ExerciseList
            exercises={exercises}
            handleExerciseClick={handleExerciseClick}
          />
        </ScrollBarComponent>

        <ScrollBarComponent>
          {selectedExercise ? (
            <ExerciseCard exercise={selectedExercise} />
          ) : (
            <p className="p-12 text-xl text-PinkyPurple">
              Click on exercise to view its specificity
            </p>
          )}
        </ScrollBarComponent>
      </div>

      {/* Mobile Layout */}
      {isMobile && (
        <div className="relative min-h-[80vh]">
          <div className={`transition-opacity duration-300 ${showList ? 'opacity-100' : 'hidden opacity-0'}`}>
            <ScrollBarComponent>
              <ExerciseList
                exercises={exercises}
                handleExerciseClick={handleExerciseClick}
              />
            </ScrollBarComponent>
          </div>

          <div className={`transition-opacity duration-300 ${!showList ? 'opacity-100' : 'hidden opacity-0'}`}>
            <ScrollBarComponent>
              {selectedExercise ? (
                <ExerciseCard exercise={selectedExercise}  />
              ) : (
                <p className="p-12 text-xl text-PinkyPurple">
                  Click on exercise to view its specificity
                </p>
              )}
            </ScrollBarComponent>
          </div>

          <Button
            onClick={toggleView}
            className="fixed bottom-6 left-1/2 w-48 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-red-900 to-red-800 p-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg"
          >
            {showList ? 'View Exercise Details' : 'Back to List'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TrainingAppComponent;