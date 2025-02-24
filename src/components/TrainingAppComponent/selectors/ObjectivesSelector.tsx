// ObjectivesSelector.tsx
import React, { useState } from "react";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import {
  // DifficultyLevel,
  ExerciseCount,
  GoalsSelection,
  PathSelection,
  Summary,
  TrainingDays,
} from "./Objective_selector_ui_components/objectives-cards";
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
      xl:p-6 xl:w-[5vw] md:p-0 md:w-[6vw] p-0 w-[5vw]
      absolute top-1/2 -translate-y-1/2
      ${direction === "left" ? "xl:left-4 left-0" : "xl:right-4 right-9"}
      xl:h-[5vw] 
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
    xl:gap-[8vw]
    gap-[12vw]
  
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
    useTrainingPlanHook.objectives.selectedPath === "templates" ||
    (useTrainingPlanHook.objectives.selectedPath === "custom" &&
      useTrainingPlanHook.objectives.selectedDays > 0 &&
      useTrainingPlanHook.objectives.primaryGoal &&
      useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
      useTrainingPlanHook.objectives.accessoryExerciseCount > 0);

  const canShowStep2 =
    (useTrainingPlanHook.objectives.selectedPath === "templates" &&
      showSummary) ||
    (useTrainingPlanHook.objectives.selectedPath === "custom" &&
      useTrainingPlanHook.objectives.selectedDays > 0 &&
      useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
      useTrainingPlanHook.objectives.accessoryExerciseCount > 0);

  const canShowStep3 = showSummary;

  const steps = [
    // Step 1: Initial Setup
    <div key="step1" className=" xl:mt-0  xl:pt-12  h-[100vh] ">
      <StepWrapper>
        <PathSelection />

        {useTrainingPlanHook.objectives.selectedPath === "custom" ? (
          <>
            <TrainingDays />

            {useTrainingPlanHook.objectives.selectedDays > 0 && (
              <ExerciseCount />
            )}
          </>
        ) : (
          useTrainingPlanHook.objectives.selectedPath === "templates" && (
            <ExerciseCount />
          )
        )}
      </StepWrapper>
    </div>,

    // Step 2: Goals dla custom, Summary dla templates
    <div key="step2" className="">
      <StepWrapper>
        {useTrainingPlanHook.objectives.selectedPath === "templates" ? (
          <Summary />
        ) : (
          <GoalsSelection />
        )}
      </StepWrapper>
    </div>,

    // Step 3: Summary (tylko dla custom)
    useTrainingPlanHook.objectives.selectedPath === "custom" && (
      <div key="step3" className="flex-shrink-0 xl:w-auto">
        <Summary />
      </div>
    ),
  ];
  const canGoNext =
    (currentStep === 0 &&
      (useTrainingPlanHook.objectives.selectedPath === "templates"
        ? showSummary
        : canShowStep2)) ||
    (currentStep === 1 &&
      useTrainingPlanHook.objectives.selectedPath === "custom" &&
      canShowStep3);

  const canGoPrev = currentStep > 0;

  return (
    <div className="">
      <ScrollBarComponent className=" xl:w-[95vw] w-[100vw] px-0 xl:px-[0vw] overflow-x-hidden  xl:h-[120vh] h-[160vh] ">
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
            <div
              key={index}
              className="w-full flex-shrink-0 place-items-center grid "
            >
              {step}
            </div>
          ))}
        </div>

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
      </ScrollBarComponent>
    </div>
  );
};
