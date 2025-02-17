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
    <div className="flex flex-col md:flex-row xl:items-start md:items-center  md:gap-0 xl:mt-0 mt-24">
      {steps.map((stepItem, index) => (
        <div
          key={stepItem.id}
          className="flex items-center w-full md:w-auto mx-2 mt-2"
        >
          <Button
            className={`
              ${buttonStylesForTrainingModule}
              xl:m-4 xl:py-1 text-xs
              ${getButtonStyles(index)}
              relative
              flex-1 md:flex-none
              xl:min-w-[80px] xl:w-full md:min-w-0
              
              transition-opacity duration-200
            `}
            onClick={() => handleStepClick(index)}
          >
            <span className="relative z-10">{stepItem.label}</span>
            <span
              className={`
                absolute -left-1.5 -top-1.5 h-4 w-4 rounded-full
                flex items-center justify-center text-[10px]
                ${useTrainingPlanHook.step === stepItem.id ? "bg-red-600" : "bg-zinc-700"}
                transition-colors duration-200
              `}
            >
              {index + 1}
            </span>
          </Button>
          {index < steps.length - 1 && (
            <div
              className={`
                hidden md:block h-[1px] w-3
                ${
                  useTrainingPlanHook.step === stepItem.id ||
                  useTrainingPlanHook.step === steps[index + 1].id
                    ? "bg-red-700"
                    : "bg-zinc-800"
                }
                ${Math.abs(index - currentStepIndex) > 1 ? "opacity-30" : "opacity-60"}
                transition-opacity duration-200
              `}
            />
          )}
          {index < steps.length - 1 && (
            <div
              className={`
                md:hidden w-[1px] h-3 mx-auto
                ${
                  useTrainingPlanHook.step === stepItem.id ||
                  useTrainingPlanHook.step === steps[index + 1].id
                    ? "bg-red-700"
                    : "bg-zinc-800"
                }
                ${Math.abs(index - currentStepIndex) > 1 ? "opacity-30" : "opacity-60"}
                transition-opacity duration-200
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
};
