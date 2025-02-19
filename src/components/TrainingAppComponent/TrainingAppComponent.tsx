import { useState, useEffect } from "react";
// import { SearchExerciseInput } from "../ui/search-bar";
// import { useTrainingPlanHook } from "./utils/TrainingAppLogicHook";
// import { StepButtons } from "./ui/ButtonsForSteps";
import { ExerciseSelector } from "./selectors/ExerciseSelector";
import { LoadSelector } from "./selectors/LoadSelector";
import { ObjectivesSelector } from "./selectors/ObjectivesSelector";
import { Spacer } from "../ui/Spacer";
import { TrainingDaysToolbar } from "./ui/training-days-toolbar";
import { useTrainingLogic } from "./utils/TrainingAppContext";

const TrainingAppComponent = () => {
  // Create a single instance of the hook
  const trainingPlanHook = useTrainingLogic();

  const { step } = trainingPlanHook;
  console.log(`units`, trainingPlanHook.trainingPlan);
  // const [showList, setShowList] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const toggleView = () => {
  //   setShowList(!showList);
  // };

  // Function to determine if search bar should be visible
  // const shouldShowSearch = step === "EXERCISES" || step === "LOAD";

  return (
    <div className="xl:pt-24 xl:mx-4 pt-12 h-[calc(100vh-64px)] overflow-hidden">
      {/* <div className="flex flex-row items-start justify-between">
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
        <StepButtons />
      </div> */}
      <Spacer size="4xs" />
      {step === "EXERCISES" || step === "LOAD" ? (
        <TrainingDaysToolbar isMobile={isMobile} />
      ) : (
        ""
      )}

      <Spacer size="3xs" />

      {/* Main Content Area */}
      <div className="">
        {step === "FREQUENCY" && <ObjectivesSelector />}
        {step === "EXERCISES" && (
          <>
            {" "}
            <ExerciseSelector isMobile={isMobile} />
          </>
        )}
        {step === "LOAD" && <LoadSelector />}
      </div>
    </div>
  );
};

export default TrainingAppComponent;
