import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { TrainingAppStep } from "../utils/TraininAppLogic.interface";
import { useTrainingLogic } from "../utils/TrainingAppContext";

export const StepButtons = () => {
  const useTrainingPlanHook = useTrainingLogic();

  const steps: { id: TrainingAppStep; label: string }[] = [
    { id: "FREQUENCY", label: "Objectives" },
    { id: "EXERCISES", label: "Exercises" },
    { id: "LOAD", label: "Load" },
    { id: "SAVE", label: "Save Plan" },
  ];

  const handleStepClick = (currentIndex: number) => {
    const currentStepIndex = steps.findIndex(
      (s) => s.id === useTrainingPlanHook.step
    );
    if (currentIndex > currentStepIndex) {
      useTrainingPlanHook.goToNextStep();
    } else if (currentIndex < currentStepIndex) {
      useTrainingPlanHook.goToPreviousStep();
    }
  };

  const currentStepIndex = steps.findIndex(
    (s) => s.id === useTrainingPlanHook.step
  );

  const getButtonStyles = (index: number) => {
    const distance = Math.abs(index - currentStepIndex);

    if (useTrainingPlanHook.step === steps[index].id) {
      return "bg-red-700 opacity-100"; // Current step - fully visible
    }
    if (distance > 1) {
      return "bg-zinc-800 opacity-30 hover:opacity-70"; // Far steps - very dim, more visible on hover
    }
    return "bg-zinc-800 opacity-60 hover:opacity-90"; // Adjacent steps - partially visible, nearly full on hover
  };

  return (
    <div className="flex  flex-row md:flex-row xl:items-start md:items-center md:gap-0 xl:mt-0 mt-0 ">
      {steps.map((stepItem, index) => (
        <div
          key={stepItem.id}
          className="grid items-center w-full md:w-auto  mt-2 mx-3"
        >
          <Button
            className={`
              ${buttonStylesForTrainingModule}
              xl:m-2 xl:py-1 text-xs  xl:p-2 md:p-8 md:mt-4
              w-1/4
              ${getButtonStyles(index)}
              relative

              xl:min-w-[110px] xl:w-full md:min-w-0
           
            `}
            onClick={() => handleStepClick(index)}
          >
            {/* Mobile: Only Number */}
            <span className="md:hidden relative z-10">{index + 1}</span>

            {/* Desktop: Label with Number */}
            <span className="hidden md:block relative z-10">
              {stepItem.label}
            </span>
            <span
              className={`
                absolute -left-1.5 -top-1.5 h-4 w-4 rounded-full
                flex items-center justify-center text-[10px]
                ${useTrainingPlanHook.step === stepItem.id ? "bg-red-600" : "bg-zinc-700"}
                transition-colors duration-200
                hidden md:flex
              `}
            >
              {index + 1}
            </span>
          </Button>

          {/* Desktop connector */}
          {index < steps.length - 1 && (
            <div
            // className={`
            //   hidden md:block h-[1px] w-24
            //   ${
            //     useTrainingPlanHook.step === stepItem.id ||
            //     useTrainingPlanHook.step === steps[index + 1].id
            //       ? "bg-red-700"
            //       : "bg-zinc-800"
            //   }
            //   ${Math.abs(index - currentStepIndex) > 1 ? "opacity-30" : "opacity-60"}
            //   transition-opacity duration-200
            // `}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepButtons;
