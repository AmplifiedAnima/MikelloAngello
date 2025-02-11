import { useState, useEffect } from "react";

import type { ExerciseBlueprintsInterface } from "./interfaces/exercise.interface";

import { SearchExerciseInput } from "../ui/search-bar";
import { useTrainingPlan } from "./utils/TrainingAppLogic";
import { StepButtons } from "./ui/ButtonsForSteps";
import { ExerciseSelector } from "./selectors/ExerciseSelector";
import { LoadSelector } from "./selectors/LoadSelector";
import { TrainingDaysSelector } from "./selectors/TrainingDaysSelector";

const TrainingAppComponent = () => {
  const { step, goToNextStep, goToPreviousStep } = useTrainingPlan();
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
    <div className="xl:pt-20   xl:mx-24">
      {/* Desktop Layout */}
      <div className="flex flex-row">
        <div className="xl:py-4 w-[20vw] mx-16">
          {step === "EXERCISES" || step === "LOAD" ? (
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
          ) : (
            ""
          )}
        </div>{" "}
        <div className="xl:mx-12 flex gap-4">
          <StepButtons
            step={step}
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        </div>
      </div>
      {step === "EXERCISES" && (
        <ExerciseSelector
          isMobile={isMobile}
          selectedExercise={selectedExercise}
          handleExerciseClick={handleExerciseClick}
          showList={showList}
          toggleView={toggleView}
        />
      )}
      {step === "FREQUENCY" && <TrainingDaysSelector />}
      {step === "LOAD" && <LoadSelector />}
    </div>
  );
};

export default TrainingAppComponent;
