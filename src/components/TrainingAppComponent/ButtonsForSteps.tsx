// StepButtons.tsx
import { Button } from "../ui/button";
import { buttonStylesForTrainingModule } from "../ui/styles/button-styles-training-module";
import type { TrainingAppStep } from "./TrainingAppLogic";

interface StepButtonsProps {
  step: TrainingAppStep;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}
export const StepButtons = ({
  step,
  goToNextStep,
  goToPreviousStep,
}: StepButtonsProps) => {
  const steps: { id: TrainingAppStep; label: string }[] = [
    { id: "FREQUENCY", label: "Training Days" },
    { id: "EXERCISES", label: "Exercises" },
    { id: "LOAD", label: "Load" },
    { id: "SAVE", label: "Save Plan" },
  ];

  const handleStepClick = (
    clickedStep: TrainingAppStep,
    currentIndex: number
  ) => {
    const currentStepIndex = steps.findIndex((s) => s.id === step);
    if (currentIndex > currentStepIndex) {
      goToNextStep();
    } else if (currentIndex < currentStepIndex) {
      goToPreviousStep();
    }
  };

  return (
    <div className="flex items-center scale-75 -ml-8 ">
      {steps.map((stepItem, index) => (
        <div key={stepItem.id} className="flex items-center">
          <Button
            className={`
              ${buttonStylesForTrainingModule}
              px-2 py-1 text-xs
              ${step === stepItem.id ? "bg-red-700" : "bg-zinc-800 opacity-60"}
              relative
            `}
            onClick={() => handleStepClick(stepItem.id, index)}
            disabled={false}
          >
            <span className="relative z-10">{stepItem.label}</span>
            <span
              className={`
                absolute -left-1.5 -top-1.5 h-4 w-4 rounded-full
                flex items-center justify-center text-[10px]
                ${step === stepItem.id ? "bg-red-600" : "bg-zinc-700"}
              `}
            >
              {index + 1}
            </span>
          </Button>
          {index < steps.length - 1 && (
            <div
              className={`
                h-[1px] w-3
                ${step === stepItem.id || step === steps[index + 1].id ? "bg-red-700" : "bg-zinc-800"}
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
};
