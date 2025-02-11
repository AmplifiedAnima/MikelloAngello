import { exercises } from "../mock_data/exercises.mock_data";

export const LoadSelector = () => {
  return (
    <div className="xl:m-24">
      <span className="text-2xl">Load your load </span>
      <ul>
        {exercises.map((exercise) => {
          return <li>{exercise.name}</li>;
        })}
      </ul>
    </div>
  );
};
