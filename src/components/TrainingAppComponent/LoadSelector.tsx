import { exercises } from "./exercises";

export const LoadSelector = () => {
  return (
    <div>
      <span className="text-2xl">Load your load </span>
      <ul>
        {exercises.map((exercise) => {
          return <li>{exercise.name}</li>;
        })}
      </ul>
    </div>
  );
};
