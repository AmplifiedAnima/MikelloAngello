import { type ExerciseBlueprintsInterface } from "./TrainingAppComponent/interfaces/exercise.interface";
import { ScrollBarComponent } from "./ScrollbarComponent";
import { Button } from "./ui/button";
import { VideoTemplate } from "./video-template-modal";

const CardTextComponent = ({
  exerciseFeature,
  text,
}: {
  exerciseFeature: string;
  text: string;
}) => (
  <div className="border-b border-red-700 py-2">
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
  return (
    <ScrollBarComponent>
      <div
        className="xl:h-[80vh] relative overflow-hidden rounded-lg bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-4"
        
        
        style={{
          boxShadow: "inset 0 0 30px rgba(80, 0, 0, 0.3)",
        }}
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-700 to-red-900" />

        <div className="grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2 xl:grid-cols-2">
          <CardTextComponent exerciseFeature={exercise.name} text="Exercise" />
          <CardTextComponent
            exerciseFeature={exercise.movementPattern}
            text="Pattern"
          />
          <CardTextComponent exerciseFeature={exercise.plane} text="Plane" />

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
        <div className=" grid xl:grid-cols-[1fr_1fr] grid-cols-1 xl:gap-20 gap-8 mt-12 xl:mt-8">
            <div className="xl:w-[30vw]">
          <VideoTemplate videoUrl={exercise.videoUrl} />
          </div>
          <Button className="xl:w-[20vw]">Add to your pack</Button>
        </div>
      </div>
    </ScrollBarComponent>
  );
};
