import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { Button } from "../../ui/button";
import { VideoTemplate } from "./video-template-modal";
import { useState } from "react";
import closeIcon from "../../../assets/feather-icons/x-square.svg";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { useTrainingLogic } from "../utils/TrainingAppContext";

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
export const ExerciseCard = () => {
  const useTrainingPlanHook = useTrainingLogic();
  const [hasTemplateBecameOpened, setHasTemplateBecameOpened] = useState(false);

  // Fix the indexing to match toolbar
  const currentUnit =
    useTrainingPlanHook.trainingPlan.trainingUnits[
      useTrainingPlanHook.currentDayIndex - 1
    ];

  const handleTemplateBecameOpened = () => {
    setHasTemplateBecameOpened((prev) => !prev);
  };

  if (!useTrainingPlanHook.selectedExercise) return null;

  return (
    <ScrollBarComponent className="mx-4">
      <div
        className=""
        style={{
          boxShadow: "inset 0 0 30px rgba(80, 0, 0, 0.3)",
        }}
      >
        {hasTemplateBecameOpened ? (
          <div className="xl:mt-4 grid grid-cols-2">
            <span className="xl:text-2xl text-lg  mx-8">
              {useTrainingPlanHook.selectedExercise.name}
            </span>
            <Button
              className={`${buttonStylesForTrainingModule} xl:mt-0 xl:p-0 xl:border-none xl:w-[4vw] xl:mx-[10vw] xl:rounded-lg   mt-32`}
              onClick={handleTemplateBecameOpened}
            >
              <img src={closeIcon} width={25} alt="Close" />
            </Button>
            <div className="xl:w-[40vw] w-[60vw] xl:mx-[1vw]  md:w-[50vw]">
              <VideoTemplate
                videoUrl={useTrainingPlanHook.selectedExercise.videoUrl}
              />
            </div>
          </div>
        ) : (
          <>
            {/* Training Day Selector */}

            <div
              className="grid grid-cols-1 xl:gap-x-48 gap-x-12 mx-6 gap-y-0 
            sm:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 place-items-center xl:mt-0 mt-48"
            >
              <div className="xl:w-[20vw] ">
                <CardTextComponent
                  exerciseFeature={useTrainingPlanHook.selectedExercise.name}
                  text="Exercise"
                />
                {/* <CardTextComponent
                  exerciseFeature={
                    useTrainingPlanHook.selectedExercise.movementPattern
                  }
                  text="Pattern"
                /> */}

                <CardTextComponent
                  exerciseFeature={
                    useTrainingPlanHook.selectedExercise.toolsUsedInExercise
                  }
                  text="Tools"
                />
                {/* <CardTextComponent
                  exerciseFeature={
                    useTrainingPlanHook.selectedExercise.primeMovers
                  }
                  text="Prime Movers"
                /> */}

                <div className="grid  place-items-left xl:gap-2 gap-8 mt-8">
                  <Button
                    className={`${buttonStylesForTrainingModule} xl:p-6   xl:w-[15vw]`}
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
                    Add as Main Exercise
                  </Button>
                  {/* Exercise count display outside button */}
                  <Button
                    className={`${buttonStylesForTrainingModule}  xl:p-6   xl:w-[15vw]`}
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
                    Add as Accessory
                  </Button>
                  <Button
                    onClick={handleTemplateBecameOpened}
                    className={`${buttonStylesForTrainingModule}   xl:p-6 xl:w-[15vw]   `}
                  >
                    Show video
                  </Button>{" "}
                </div>
              </div>

              <div className="">
                {/* Exercise Management Buttons */}
                <div className="space-y-2">
                  {/* Exercise count display outside button */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ScrollBarComponent>
  );
};
