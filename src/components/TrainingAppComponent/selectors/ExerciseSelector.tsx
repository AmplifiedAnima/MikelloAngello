import { ExerciseCard } from "../ui/exercise-card";
import { ExerciseList } from "../ui/exercise-list";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import { ExerciseContainer, TrainingDay } from "../ui/selected-exercise-list";
import { useState } from "react";
import { ScrollBarComponent } from "../../ui/scrollbar-component";

interface ExerciseSelectorProps {
  isMobile: boolean;
}

type View = "list" | "details" | "selected";

export const ExerciseSelector = ({ isMobile }: ExerciseSelectorProps) => {
  const useTrainingPlanHook = useTrainingLogic();
  const [currentView, setCurrentView] = useState<View>("list");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Desktop Layout
  if (!isMobile) {
    return (
      <div
        className={`grid xl:h-[calc(100vh-200px)]  w-[100vw] ${isVideoOpen ? "grid-cols-[1fr_2fr]" : "grid-cols-[1fr_1.5fr_1fr]"} gap-2 `}
      >
        <div className=" rounded-lg xl:px-8 overflow-hidden relative z-[1]">
          <ExerciseList />
        </div>

        <div className="">
          {useTrainingPlanHook.selectedExercise ? (
            <ExerciseCard isMobile={isMobile} onVideoOpen={setIsVideoOpen} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-PinkyPurple">
                Click on exercise to view its specificity
              </p>
            </div>
          )}
        </div>

        {!isVideoOpen && (
          <div className="bg-zinc-900/40 rounded-lg p-4 overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900/50 ">
              <ExerciseContainer className="">
                {useTrainingPlanHook.showAllDaysLoad ? (
                  <div className="grid grid-cols-1 gap-8">
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
                            useTrainingPlanHook.objectives
                              .accessoryExerciseCount
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
        )}
      </div>
    );
  }

  // Mobile Layout remains the same
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
              <ExerciseCard isMobile={isMobile} />
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
          <div className="bg-zinc-900/40 rounded-lg p-4 ">
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
    <ScrollBarComponent className="h-[100vh]">
      <div className="relative min-h-[calc(60vh-200px)]">
        <div className="">{renderMobileContent()}</div>

        <div className="fixed bottom-[2vh] left-[15vw] flex gap-2 px-4 py-2 shadow-lg  ">
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
    </ScrollBarComponent>
  );
};
