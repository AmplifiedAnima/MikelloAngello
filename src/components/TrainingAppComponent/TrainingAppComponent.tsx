import { useState, useEffect } from "react";
import { SearchExerciseInput } from "../ui/search-bar";
import { useTrainingPlanHook } from "./utils/TrainingAppLogicHook";
import { StepButtons } from "./ui/ButtonsForSteps";
import { ExerciseSelector } from "./selectors/ExerciseSelector";
import { LoadSelector } from "./selectors/LoadSelector";
import { ObjectivesSelector } from "./selectors/ObjectivesSelector";
import { Spacer } from "../ui/Spacer";

const TrainingAppComponent = () => {
  const { step, goToNextStep, goToPreviousStep } = useTrainingPlanHook();
  const trainingPlanHook = useTrainingPlanHook();

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
  const toggleView = () => {
    setShowList(!showList);
  };

  return (
    <div className="xl:pt-24  xl:mx-24">
      {/* Desktop Layout */}
      <div className="flex flex-row">
        <div className="xl:py-4 w-[20vw] mx-16 ">
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
        <StepButtons
          step={step}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      </div>
      <Spacer size="xs" />
      {step === "EXERCISES" && (
        <>
          <ExerciseSelector
            isMobile={isMobile}
            useTrainingPlanHook={trainingPlanHook}
            showList={showList}
            toggleView={toggleView}
          />
        </>
      )}
      {step === "FREQUENCY" && <ObjectivesSelector />}
      {step === "LOAD" && (
        <LoadSelector useTrainingPlanHook={trainingPlanHook} />
      )}
    </div>
  );
};

export default TrainingAppComponent;
