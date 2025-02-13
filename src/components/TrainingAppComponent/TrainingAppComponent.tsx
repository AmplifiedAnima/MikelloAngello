import { useState, useEffect } from "react";
import { SearchExerciseInput } from "../ui/search-bar";
import { useTrainingPlanHook } from "./utils/TrainingAppLogicHook";
import { StepButtons } from "./ui/ButtonsForSteps";
import { ExerciseSelector } from "./selectors/ExerciseSelector";
import { LoadSelector } from "./selectors/LoadSelector";
import { ObjectivesSelector } from "./selectors/ObjectivesSelector";
import { Spacer } from "../ui/Spacer";
import TrainingDaysToolbar from "./ui/TrainingDaysToolbar";

const TrainingAppComponent = () => {
  // Create a single instance of the hook
  const trainingPlanHook = useTrainingPlanHook();
  const { step } = trainingPlanHook;
  console.log(`units`, trainingPlanHook.trainingPlan);
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

  // Function to determine if search bar should be visible
  const shouldShowSearch = step === "EXERCISES" || step === "LOAD";

  return (
    <div className="xl:pt-20 xl:mx-24">
      <div className="flex flex-row items-start justify-between">
        <div className="xl:py-4 w-[20vw] mx-16">
          {shouldShowSearch && (
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
          )}
        </div>
        <StepButtons useTrainingPlanHook={trainingPlanHook} />
      </div>
      <Spacer size="4xs" />
      {step === "EXERCISES" || step === "LOAD" ? (
        <TrainingDaysToolbar useTrainingPlanHook={trainingPlanHook} />
      ) : (
        ""
      )}

      <Spacer size="3xs" />

      {/* Main Content Area */}
      <div className="">
        {step === "FREQUENCY" && (
          <ObjectivesSelector useTrainingPlanHook={trainingPlanHook} />
        )}
        {step === "EXERCISES" && (
          <>
            {" "}
            <ExerciseSelector
              isMobile={isMobile}
              useTrainingPlanHook={trainingPlanHook}
              showList={showList}
              toggleView={toggleView}
            />
          </>
        )}
        {step === "LOAD" && (
          <LoadSelector useTrainingPlanHook={trainingPlanHook} />
        )}
      </div>
      <Spacer size="xl" />
    </div>
  );
};

export default TrainingAppComponent;
