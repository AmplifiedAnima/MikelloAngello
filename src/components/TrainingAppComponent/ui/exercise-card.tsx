import { type ExerciseBlueprintsInterface } from "../interfaces/exercise.interface";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
import { Button } from "../../ui/button";
import { VideoTemplate } from "./video-template-modal";
import { useState } from "react";
import closeIcon from "../../../assets/feather-icons/x-square.svg";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";

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
  exercise,
}: {
  exercise: ExerciseBlueprintsInterface;
}) => {
  const [hasTemplateBecameOpened, setHasTemplateBecameOpened] = useState(false);

  const handleTemplateBecameOpened = () => {
    setHasTemplateBecameOpened(
      (hasTemplateBecameOpened) => !hasTemplateBecameOpened
    );
  };
  return (
    <ScrollBarComponent className="xl:mx-4 ">
      <div
        className=" "
        style={{
          boxShadow: "inset 0 0 30px rgba(80, 0, 0, 0.3)",
        }}
      >
        {hasTemplateBecameOpened && (
          <div className="xl:mt-4 grid grid-cols-2">
            {" "}
            <span className="xl:text-2xl text-lg xl:mx-4 mx-2">{exercise.name}</span>
            <Button
              className={`${buttonStylesForTrainingModule}  xl:mt-0 xl:p-0 xl:w-[3vw]  xl:mx-[20vw] xl:rounded-lg w-[15vw] mx-[25vw] mt-32`}
              onClick={handleTemplateBecameOpened}
              aria-label="Close video"
            >
              <img src={closeIcon} width={25} />
            </Button>
            <div className="xl:w-[40vw] w-[60vw]   xl:mx-[1vw] xl:mt-2 mt-[20vh] md:w-[50vw] ">
              <VideoTemplate videoUrl={exercise.videoUrl} />
            </div>
          </div>
        )}
        {!hasTemplateBecameOpened && (
          <>
            {" "}
            <div className="grid grid-cols-1 xl:gap-x-48 gap-x-12 mx-6 gap-y-0 sm:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 ">
              <div className="xl:w-[28vw]">
                <CardTextComponent
                  exerciseFeature={exercise.name}
                  text="Exercise"
                />
                <CardTextComponent
                  exerciseFeature={exercise.movementPattern}
                  text="Pattern"
                />
                <CardTextComponent
                  exerciseFeature={exercise.plane}
                  text="Plane"
                />

                <CardTextComponent
                  exerciseFeature={exercise.toolsUsedInExercise}
                  text="Tools"
                />
                <CardTextComponent
                  exerciseFeature={exercise.primaryMusclesWorked}
                  text="Target"
                />
                <CardTextComponent
                  exerciseFeature={exercise.primeMovers}
                  text="Prime Movers"
                />
              </div>
              <div className="flex flex-col xl:mt-[15vh] lg:mt-[25vh] sm:mt-24 md:mt-0 mt-6 gap-[22.5px] sm:gap-8 xl:gap-0 lg:gap-8 ">
                <Button className={buttonStylesForTrainingModule}>
                  Pick as main exercise
                </Button>
                <Button className={buttonStylesForTrainingModule}>
                  Pick as accessory
                </Button>
                <Button
                  onClick={handleTemplateBecameOpened}
                  className={buttonStylesForTrainingModule}
                >
                  show video
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </ScrollBarComponent>
  );
};
