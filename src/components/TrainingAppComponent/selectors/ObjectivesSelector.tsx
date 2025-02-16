// ObjectivesSelector.tsx
import React from "react";
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

export const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="relative py-4">
    <h2 className="text-2xl font-medium tracking-wide">{children}</h2>
  </div>
);

// Wrapper component for sections to control responsive layout
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
    w-full
    flex 
    flex-col 
    xl:flex-row 
    xl:items-start 
    xl:justify-between 
    gap-8 

    transition-all
    duration-300
  "
  >
    {children}
  </div>
);

export const ObjectivesSelector = () => {
  const useTrainingPlanHook = useTrainingLogic();
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

  return (
    <ScrollBarComponent className="xl:h-[80vh] px-4 xl:px-8 py-6">
      <div className="xl:max-w-[80vw] mx-auto space-y-12 xl:space-y-16">
        {/* First Row */}
        <SectionWrapper>
          <div className="w-full xl:w-1/4">
            <PathSelection />
          </div>

          {useTrainingPlanHook.objectives.selectedPath && (
            <>
              <div className="w-full xl:w-1/4">
                <TrainingDays />
              </div>
              {useTrainingPlanHook.objectives.selectedDays > 0 && (
                <div className="w-full xl:w-1/3">
                  <ExerciseCount />
                </div>
              )}
            </>
          )}
        </SectionWrapper>

        {/* Second Row */}
        {useTrainingPlanHook.objectives.selectedPath === "custom" &&
          useTrainingPlanHook.objectives.selectedDays > 0 &&
          useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
          useTrainingPlanHook.objectives.accessoryExerciseCount > 0 && (
            <SectionWrapper>
              <div className="w-full xl:w-full">
                <GoalsSelection />
              </div>
              {useTrainingPlanHook.objectives.primaryGoal && (
                <div className="w-full xl:w-full">
                  <DifficultyLevel />
                </div>
              )}
            </SectionWrapper>
          )}

        {/* Summary */}
        {showSummary && (
          <div className="w-full">
            <Summary />
          </div>
        )}
      </div>
    </ScrollBarComponent>
  );
};

export default ObjectivesSelector;
