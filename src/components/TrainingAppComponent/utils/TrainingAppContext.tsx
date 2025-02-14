import { createContext, useContext } from "react";
import { UseTrainingPlanInterface } from "./TraininAppLogic.interface";
import { useTrainingPlanHook } from "./TrainingAppLogicHook";

// Create the context
const TrainingLogicContext = createContext<UseTrainingPlanInterface | null>(
  null
);

// Create a provider component
export const TrainingLogicProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const trainingPlanHook = useTrainingPlanHook();

  return (
    <TrainingLogicContext.Provider value={trainingPlanHook}>
      {children}
    </TrainingLogicContext.Provider>
  );
};

// Create a custom hook to use the training context
export const useTrainingLogic = () => {
  const context = useContext(TrainingLogicContext);
  if (!context) {
    throw new Error("useTraining must be used within a TrainingProvider");
  }
  return context;
};
