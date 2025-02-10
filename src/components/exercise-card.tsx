import { type ExerciseBlueprintsInterface } from "./TrainingAppComponent/interfaces/exercise.interface";
import { ScrollBarComponent } from "./ScrollbarComponent";
import { Button } from "./ui/button";
import { VideoTemplate } from "./video-template-modal";
import { useState } from "react";
import closeIcon from "../assets/feather-icons/x-square.svg";
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

const buttonStyles =
  "bg-black xl:my-[1rem] xl:w-[15vw] xl:p-6 xl:text-lg xl:rounded-2xl border-zinc-800 m-0 sm:m-0  w-[40vw] mx-auto lg:my-2 lg:w-[20vw] lg:text-lg lg:p-6";

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
    <ScrollBarComponent>
      <div
        className=" "
        style={{
          boxShadow: "inset 0 0 30px rgba(80, 0, 0, 0.3)",
        }}
      >
        {hasTemplateBecameOpened && (
          <div className="grid grid-cols-2">
            <div className="xl:w-[45vw] w-[50vw]  m-[3.2vw]">
              <VideoTemplate videoUrl={exercise.videoUrl} />
            </div>
            <Button
              className={`${buttonStyles}  xl:mt-0 xl:p-0 xl:w-[4vw]  xl:mx-[22vw] xl:rounded-lg w-[11vw] mx-[18vw]`}
              onClick={handleTemplateBecameOpened}
            >
              <img src={closeIcon} width={20} />
            </Button>
          </div>
        )}
        {!hasTemplateBecameOpened && (
          <>
            {" "}
         
            <div className="grid grid-cols-1 gap-x-4 gap-y-0 sm:grid-cols-2 xl:grid-cols-2">
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
              <div className="flex flex-col gap-4 mx-8 mt-12">
                <Button className={buttonStyles}>Pick as main exercise</Button>
                <Button className={buttonStyles}>Pick as accessory</Button>
                <Button
                  onClick={handleTemplateBecameOpened}
                  className={buttonStyles}
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
