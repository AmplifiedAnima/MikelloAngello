import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { Button } from "../../ui/button";
import { VideoTemplate } from "./video-template-modal";
import { useState } from "react";
import closeIcon from "../../../assets/feather-icons/x-square.svg";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { UseTrainingPlanInterface } from "../utils/TraininAppLogic.interface";

const CardTextComponent = ({
  exerciseFeature,
  text,
}: {
  exerciseFeature: string;
  text: string;
}) => (
  <div className="border-b border-red-700 py-[0.8rem]">
    <span className="text-sm font-bold uppercase tracking-wide text-red-500">
      {text}
    </span>
    <p className="text-base text-zinc-200">{exerciseFeature}</p>
  </div>
);
export const ExerciseCard = ({
  useTrainingPlanHook,
}: {
  useTrainingPlanHook: UseTrainingPlanInterface;
}) => {
  const [hasTemplateBecameOpened, setHasTemplateBecameOpened] = useState(false);
  const currentUnit =
    useTrainingPlanHook.trainingPlan.trainingUnits[
      useTrainingPlanHook.currentDayIndex
    ];

  const handleTemplateBecameOpened = () => {
    setHasTemplateBecameOpened((prev) => !prev);
  };

  if (!useTrainingPlanHook.selectedExercise) return null;

  return (
    <ScrollBarComponent className="xl:mx-4">
      <div
        className=""
        style={{
          boxShadow: "inset 0 0 30px rgba(80, 0, 0, 0.3)",
        }}
      >
        {hasTemplateBecameOpened ? (
          <div className="xl:mt-4 grid grid-cols-2">
            <span className="xl:text-2xl text-lg xl:mx-4 mx-2">
              {useTrainingPlanHook.selectedExercise.name}
            </span>
            <Button
              className={`${buttonStylesForTrainingModule} xl:mt-0 xl:p-0 xl:w-[3vw] xl:mx-[20vw] xl:rounded-lg w-[15vw] mx-[25vw] mt-32`}
              onClick={handleTemplateBecameOpened}
            >
              <img src={closeIcon} width={25} alt="Close" />
            </Button>
            <div className="xl:w-[40vw] w-[60vw] xl:mx-[1vw] xl:mt-2 mt-[20vh] md:w-[50vw]">
              <VideoTemplate
                videoUrl={useTrainingPlanHook.selectedExercise.videoUrl}
              />
            </div>
          </div>
        ) : (
          <>
            {/* Training Day Selector */}
            <div className="p-4 border-b border-zinc-800">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">
                  Current Training Day:{" "}
                  {useTrainingPlanHook.currentDayIndex + 1}
                </span>
               
              </div>
            </div>

            <div className="grid grid-cols-1 xl:gap-x-48 gap-x-12 mx-6 gap-y-0 sm:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
              <div className="xl:w-[28vw]">
                <CardTextComponent
                  exerciseFeature={useTrainingPlanHook.selectedExercise.name}
                  text="Exercise"
                />
                <CardTextComponent
                  exerciseFeature={
                    useTrainingPlanHook.selectedExercise.movementPattern
                  }
                  text="Pattern"
                />
                <CardTextComponent
                  exerciseFeature={useTrainingPlanHook.selectedExercise.plane}
                  text="Plane"
                />
                <CardTextComponent
                  exerciseFeature={
                    useTrainingPlanHook.selectedExercise.toolsUsedInExercise
                  }
                  text="Tools"
                />
                <CardTextComponent
                  exerciseFeature={
                    useTrainingPlanHook.selectedExercise.primaryMusclesWorked
                  }
                  text="Target"
                />
                <CardTextComponent
                  exerciseFeature={
                    useTrainingPlanHook.selectedExercise.primeMovers
                  }
                  text="Prime Movers"
                />
              </div>

              <div className="flex flex-col xl:mt-[15vh] lg:mt-[25vh] sm:mt-24 md:mt-0 mt-6 gap-[22.5px] sm:gap-8 xl:gap-0 lg:gap-8">
                {/* Exercise Management Buttons */}
                <div className="space-y-4">
                  <Button
                    className={buttonStylesForTrainingModule}
                    onClick={() =>
                      useTrainingPlanHook.addNewMainExercise(
                        useTrainingPlanHook.currentDayIndex,
                        useTrainingPlanHook.selectedExercise!
                      )
                    }
                    disabled={
                      currentUnit?.MainExercises.length >=
                      useTrainingPlanHook.objectives.mainExerciseCount
                    }
                  >
                    Add as Main Exercise (
                    {currentUnit?.MainExercises.length || 0}/
                    {useTrainingPlanHook.objectives.mainExerciseCount})
                  </Button>

                  <Button
                    className={buttonStylesForTrainingModule}
                    onClick={() =>
                      useTrainingPlanHook.addNewAccessoryExercise(
                        useTrainingPlanHook.currentDayIndex,
                        useTrainingPlanHook.selectedExercise!
                      )
                    }
                    disabled={
                      currentUnit?.AccessoryExercises.length >=
                      useTrainingPlanHook.objectives.accessoryExerciseCount
                    }
                  >
                    Add as Accessory (
                    {currentUnit?.AccessoryExercises.length || 0}/
                    {useTrainingPlanHook.objectives.accessoryExerciseCount})
                  </Button>

                  <Button
                    onClick={handleTemplateBecameOpened}
                    className={buttonStylesForTrainingModule}
                  >
                    Show video
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ScrollBarComponent>
  );
};
