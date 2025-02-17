// ObjectivesSelector.tsx
import React, { useState } from "react";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import {
  DifficultyLevel,
  ExerciseCount,
  GoalsSelection,
  PathSelection,
  Summary,
  TrainingDays,
} from "./Objective_selector_ui_components/ObjectivesCards";
import arrowLeft from "../../../assets/feather-icons/arrow-left.svg";
import arrowRight from "../../../assets/feather-icons/arrow-right.svg";
import { Button } from "../../ui/button";

export const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="relative py-4">
    <h2 className="text-2xl font-medium tracking-wide">{children}</h2>
  </div>
);

const NavigationArrow = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    className={`
xl:p-0 xl:w-[5vw]
      absolute top-1/2 -translate-y-1/2
      ${direction === "left" ? "left-4" : "right-4"}
      h-12 w-12
      flex items-center justify-center
      rounded-full
      bg-zinc-800/50
      border border-zinc-700
      transition-all
      duration-200
      ${
        disabled
          ? "opacity-30 cursor-not-allowed"
          : "hover:bg-red-900/20 hover:border-red-600 cursor-pointer"
      }
    `}
  >
    <img
      src={direction === "left" ? arrowLeft : arrowRight}
      className="w-6 h-6"
      alt={direction === "left" ? "Previous" : "Next"}
    />
  </Button>
);

const StepWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
    flex 
    flex-col 
    xl:flex-row 
    xl:items-start 
    gap-[4vw]
    transition-all 
    duration-300
  "
  >
    {children}
  </div>
);

export const ObjectivesSelector = () => {
  const useTrainingPlanHook = useTrainingLogic();
  const [currentStep, setCurrentStep] = useState(0);

  const showSummary =
    (useTrainingPlanHook.objectives.selectedPath === "longevity" &&
      useTrainingPlanHook.objectives.selectedDays > 0 &&
      useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
      useTrainingPlanHook.objectives.accessoryExerciseCount > 0) ||
    (useTrainingPlanHook.objectives.selectedPath === "custom" &&
      useTrainingPlanHook.objectives.selectedDays > 0 &&
      useTrainingPlanHook.objectives.primaryGoal &&
      useTrainingPlanHook.objectives.difficultyLevel &&
      useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
      useTrainingPlanHook.objectives.accessoryExerciseCount > 0);

  const canShowStep2 =
    useTrainingPlanHook.objectives.selectedPath === "custom" &&
    useTrainingPlanHook.objectives.selectedDays > 0 &&
    useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
    useTrainingPlanHook.objectives.accessoryExerciseCount > 0;

  const canShowStep3 = showSummary;

  const steps = [
    // Step 1: Initial Setup
    <div key="step1" className="flex-shrink-0 w-[80vw]">
      <StepWrapper>
        <div className="w-full xl:w-auto min-w-[240px]">
          <PathSelection />
        </div>
        {useTrainingPlanHook.objectives.selectedPath && (
          <>
            <div className="w-full xl:w-auto min-w-[240px]">
              <TrainingDays />
            </div>
            {useTrainingPlanHook.objectives.selectedDays > 0 && (
              <div className="w-full xl:w-auto min-w-[240px]">
                <ExerciseCount />
              </div>
            )}
          </>
        )}
      </StepWrapper>
    </div>,

    // Step 2: Goals and Difficulty
    <div key="step2" className="flex-shrink-0 xl:w-auto place-items-center mx-12">
      <StepWrapper>
        <div className="w-full xl:w-auto min-w-[420px]">
          <GoalsSelection />
        </div>
        {useTrainingPlanHook.objectives.primaryGoal && (
          <div className="w-full xl:w-auto min-w-[420px]">
            <DifficultyLevel />
          </div>
        )}
      </StepWrapper>
    </div>,

    // Step 3: Summary
    <div key="step3" className="flex-shrink-0 xl:w-auto">
      <Summary />
    </div>,
  ];

  const canGoNext =
    (currentStep === 0 && canShowStep2) || (currentStep === 1 && canShowStep3);

  const canGoPrev = currentStep > 0;

  return (
    <div className="relative">
      <ScrollBarComponent className="h-full min-h-[600px] px-16 xl:px-[1vw] py-6 overflow-x-hidden">
        <div className="min-w-[800px] xl:min-w-0">
          <div
            className="
            flex 
            transition-transform 
            duration-500 
            ease-in-out
            transform
          "
            style={{
              transform: `translateX(-${currentStep * 100}%)`,
            }}
          >
            {steps.map((step, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                {step}
              </div>
            ))}
          </div>
        </div>
      </ScrollBarComponent>

      <NavigationArrow
        direction="left"
        onClick={() => setCurrentStep((prev) => prev - 1)}
        disabled={!canGoPrev}
      />

      <NavigationArrow
        direction="right"
        onClick={() => setCurrentStep((prev) => prev + 1)}
        disabled={!canGoNext}
      />
    </div>
  );
};

export default ObjectivesSelector;
