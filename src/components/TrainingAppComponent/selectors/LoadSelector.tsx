import { UseTrainingPlanInterface } from "../utils/TrainingAppLogicHook";

export interface LoadSelectorProps {
  useTrainingPlanHook: UseTrainingPlanInterface;
}
export const LoadSelector: React.FC<LoadSelectorProps> = ({
  useTrainingPlanHook,
}) => {
  return (
    <div className="xl:my-24 xl:mx-32 m-4">
      <span className="text-2xl">Load your load </span>
      <ul>
        {useTrainingPlanHook.exercisesBlueprints.map((exercise) => {
          return <li>{exercise.name}</li>;
        })}
      </ul>
    </div>
  );
};
