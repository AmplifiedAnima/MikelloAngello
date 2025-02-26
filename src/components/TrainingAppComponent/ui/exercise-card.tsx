import { Button } from "../../ui/button";
import { VideoTemplate } from "./video-template-modal";
import { useState } from "react";
import closeIcon from "../../../assets/feather-icons/x-square.svg";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { useTrainingLogic } from "../utils/TrainingAppContext";
import ExerciseAddDropdown from "./exercise-card-dropdown";

interface ExerciseCardProps {
  isMobile: boolean;
  onVideoOpen?: (isOpen: boolean) => void;
}
const CardTextComponent = ({
  exerciseFeature,
  text,
}: {
  exerciseFeature: string;
  text: string;
}) => (
  <div className="py-[1rem] grid grid-cols-1 text-left px-4 font-medium">
    <span className="text-base font-bold uppercase tracking-wider text-indigo-300 mb-1 w-[100vw]">
      {text}
    </span>
    <p className="text-2xl tracking-wide font-normal text-zinc-50 mt-1">
      {exerciseFeature}
    </p>
  </div>
);

export const ExerciseCard = ({ isMobile, onVideoOpen }: ExerciseCardProps) => {
  const useTrainingPlanHook = useTrainingLogic();
  const [hasTemplateBecameOpened, setHasTemplateBecameOpened] = useState(false);

  const handleTemplateBecameOpened = () => {
    const newState = !hasTemplateBecameOpened;
    setHasTemplateBecameOpened(newState);
    onVideoOpen?.(newState);
  };

  if (!useTrainingPlanHook.selectedExercise) return null;

  return (
    <div className="bg-zinc-900/20 rounded-lg mx-6">
      {hasTemplateBecameOpened ? (
        <div className={`${isMobile ? "" : "w-full"}`}>
          <div className="flex items-center justify-between p-4">
            <span className="text-2xl font-medium text-zinc-50 whitespace-nowrap px-8">
              {useTrainingPlanHook.selectedExercise.name}
            </span>
            <Button
              className={`${buttonStylesForTrainingModule} xl:mt-0 xl:p-0 xl:border-none xl:w-[4vw] xl:mr-[8vw] xl:rounded-xl`}
              onClick={handleTemplateBecameOpened}
            >
              <img
                src={closeIcon}
                width={30}
                alt="Close"
                className="opacity-80 hover:opacity-100"
              />
            </Button>
          </div>
          <div
            className={`${isMobile ? "w-[100vw]" : "w-[40vw] h-full mx-12"}`}
          >
            <VideoTemplate
              videoUrl={useTrainingPlanHook.selectedExercise.videoUrl}
            />
          </div>
        </div>
      ) : (
        <div className="grid xl:grid-cols-2 xl:px-8   gap-8 whitespace-nowrap ">
          <div className="space-y-8  place-items-center ">
            <ExerciseAddDropdown
              buttonStylesForTrainingModule={buttonStylesForTrainingModule}
            />
            <Button
              onClick={handleTemplateBecameOpened}
              className={`${buttonStylesForTrainingModule} xl:p-6 xl:w-[15vw] md:p-6 md:w-full w-48 rounded-lg font-medium text-base`}
            >
              Show video
            </Button>
          </div>
          <div className="flex-1 space-y-2 place-items-center ">
            <CardTextComponent
              exerciseFeature={useTrainingPlanHook.selectedExercise.name}
              text="Exercise"
            />

            <CardTextComponent
              exerciseFeature={
                useTrainingPlanHook.selectedExercise.toolsUsedInExercise
              }
              text="Tools"
            />
            <CardTextComponent
              exerciseFeature={
                useTrainingPlanHook.selectedExercise.movementPattern
              }
              text="Pattern"
            />

            <CardTextComponent
              exerciseFeature={useTrainingPlanHook.selectedExercise.primeMovers}
              text="Prime Movers"
            />
          </div>
        </div>
      )}
    </div>
  );
};
