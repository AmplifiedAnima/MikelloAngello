import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { ExerciseContainer, TrainingDay } from "../ui/selected-exercise-list";
import { useTrainingLogic } from "../utils/TrainingAppContext";
export const LoadSelector = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <ScrollBarComponent className="h-full py-6">
      <ExerciseContainer>
        <div className="container mx-auto px-4">
          {useTrainingPlanHook.showAllDaysLoad ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
              {useTrainingPlanHook.trainingPlan.trainingUnits.map(
                (unit, index) => (
                  <TrainingDay
                    key={index}
                    dayIndex={index}
                    unit={unit}
                    mainCount={useTrainingPlanHook.objectives.mainExerciseCount}
                    accessoryCount={
                      useTrainingPlanHook.objectives.accessoryExerciseCount
                    }
                  />
                )
              )}
            </div>
          ) : (
            <div className="flex justify-center">
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
              />
            </div>
          )}
        </div>
      </ExerciseContainer>
    </ScrollBarComponent>
  );
};
