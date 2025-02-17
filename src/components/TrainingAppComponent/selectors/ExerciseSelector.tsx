import { ExerciseCard } from "../ui/exercise-card";
import { ExerciseList } from "../ui/exercise-list";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import { ExerciseContainer, TrainingDay } from "../ui/selected-exercise-list";
import { useState } from "react";

interface ExerciseSelectorProps {
  isMobile: boolean;
}

type View = "list" | "details" | "selected";

export const ExerciseSelector = ({ isMobile }: ExerciseSelectorProps) => {
  const useTrainingPlanHook = useTrainingLogic();
  const [currentView, setCurrentView] = useState<View>("list");

  // Desktop Layout
  if (!isMobile) {
    return (
      <div className="grid xl:h-[calc(100vh-200px)] grid-cols-[1fr_1fr_1fr] gap-6 px-4">
        <div className="bg-zinc-900/40 rounded-lg p-4 overflow-hidden">
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900/50">
            <ExerciseList />
          </div>
        </div>

        <div className="bg-zinc-900/40 rounded-lg p-4 overflow-hidden">
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900/50">
            {useTrainingPlanHook.selectedExercise ? (
              <ExerciseCard />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-xl text-PinkyPurple">
                  Click on exercise to view its specificity
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-zinc-900/40 rounded-lg p-4 overflow-hidden">
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900/50">
            <ExerciseContainer>
              {useTrainingPlanHook.showAllDaysLoad ? (
                <div className="grid grid-cols-1 gap-4">
                  {useTrainingPlanHook.trainingPlan.trainingUnits.map(
                    (unit, index) => (
                      <TrainingDay
                        key={index}
                        dayIndex={index}
                        unit={unit}
                        mainCount={
                          useTrainingPlanHook.objectives.mainExerciseCount
                        }
                        accessoryCount={
                          useTrainingPlanHook.objectives.accessoryExerciseCount
                        }
                        view="minimal"
                      />
                    )
                  )}
                </div>
              ) : (
                <TrainingDay
                  dayIndex={useTrainingPlanHook.currentDayIndex - 1}
                  unit={
                    useTrainingPlanHook.trainingPlan.trainingUnits[
                      useTrainingPlanHook.currentDayIndex - 1
                    ]
                  }
                  mainCount={useTrainingPlanHook.objectives.mainExerciseCount}
                  accessoryCount={
                    useTrainingPlanHook.objectives.accessoryExerciseCount
                  }
                  view="minimal"
                />
              )}
            </ExerciseContainer>
          </div>
        </div>
      </div>
    );
  }

  // Mobile Layout
  const renderMobileContent = () => {
    switch (currentView) {
      case "list":
        return (
          <div className="bg-zinc-900/40 rounded-lg p-4">
            <ExerciseList />
          </div>
        );
      case "details":
        return (
          <div className="bg-zinc-900/40 rounded-lg p-4">
            {useTrainingPlanHook.selectedExercise ? (
              <ExerciseCard />
            ) : (
              <div className="flex items-center justify-center h-full min-h-[50vh]">
                <p className="text-lg text-PinkyPurple text-center">
                  Select an exercise to view details
                </p>
              </div>
            )}
          </div>
        );
      case "selected":
        return (
          <div className="bg-zinc-900/40 rounded-lg p-4">
            <ExerciseContainer>
              {useTrainingPlanHook.showAllDaysLoad ? (
                <div className="grid grid-cols-1 gap-4">
                  {useTrainingPlanHook.trainingPlan.trainingUnits.map(
                    (unit, index) => (
                      <TrainingDay
                        key={index}
                        dayIndex={index}
                        unit={unit}
                        mainCount={
                          useTrainingPlanHook.objectives.mainExerciseCount
                        }
                        accessoryCount={
                          useTrainingPlanHook.objectives.accessoryExerciseCount
                        }
                        view="minimal"
                      />
                    )
                  )}
                </div>
              ) : (
                <TrainingDay
                  dayIndex={useTrainingPlanHook.currentDayIndex - 1}
                  unit={
                    useTrainingPlanHook.trainingPlan.trainingUnits[
                      useTrainingPlanHook.currentDayIndex - 1
                    ]
                  }
                  mainCount={useTrainingPlanHook.objectives.mainExerciseCount}
                  accessoryCount={
                    useTrainingPlanHook.objectives.accessoryExerciseCount
                  }
                  view="minimal"
                />
              )}
            </ExerciseContainer>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-200px)]">
      <div className="pb-24">{renderMobileContent()}</div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-zinc-900/90 px-4 py-2 rounded-full shadow-lg">
        <Button
          onClick={() => setCurrentView("list")}
          className={`${buttonStylesForTrainingModule} py-2 px-4 rounded-full whitespace-nowrap w-1/4
            ${currentView === "list" ? "bg-red-500/20" : ""}`}
        >
          <span>Exercises</span>
        </Button>
        <Button
          onClick={() => setCurrentView("details")}
          className={`${buttonStylesForTrainingModule} py-2 px-4 rounded-full whitespace-nowrap p w-1/4
            ${currentView === "details" ? "bg-red-500/20" : ""}`}
          disabled={!useTrainingPlanHook.selectedExercise}
        >
          <span>Details</span>
        </Button>
        <Button
          onClick={() => setCurrentView("selected")}
          className={`${buttonStylesForTrainingModule} py-2 px-4 rounded-full whitespace-nowrap p w-1/4
            ${currentView === "selected" ? "bg-red-500/20" : ""}`}
        >
          <span>Selected</span>
        </Button>
      </div>
    </div>
  );
};
