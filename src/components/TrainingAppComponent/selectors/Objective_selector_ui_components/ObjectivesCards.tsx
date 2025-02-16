import React from "react";
import { Button } from "../../../ui/button";
import { buttonStylesForTrainingModule } from "../../../ui/styles/button-styles-training-module";
import { ExpandableCard } from "./expendable-card";
import {
  difficultyLevels,
  preferences,
  trainingPaths,
} from "../../utils/TrainingDaysSelectorUtils";
import { useTrainingLogic } from "../../utils/TrainingAppContext";
import arrowLeft from "../../../../assets/feather-icons/arrow-left.svg";
import arrowRight from "../../../../assets/feather-icons/arrow-right.svg";
import { TrainingPath } from "../../utils/TrainingDaysSelectorUtils";

export const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="relative py-4">
    <h2 className="text-2xl font-medium tracking-wide">{children}</h2>
  </div>
);

export const PathSelection = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <section className="max-w-3xl mx-auto space-y-2">
      <SectionHeader>Choose your training path</SectionHeader>
      <div className="grid xl:grid-cols-1 sm:grid-cols-2 gap-2">
        {trainingPaths.map((path: TrainingPath) => (
          <ExpandableCard
            key={path.id}
            id={path.id}
            title={path.label}
            description={path.description}
            isSelected={useTrainingPlanHook.objectives.selectedPath === path.id}
            expandedCard={useTrainingPlanHook.objectives.expandedCard}
            onClick={() => {
              useTrainingPlanHook.setSelectedPath(path.id);
              useTrainingPlanHook.handleCardClick(path.id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export const TrainingDays = () => {
  const useTrainingPlanHook = useTrainingLogic();
  const trainingDays = [2, 3];

  return (
    <section className="max-w-3xl mx-auto space-y-3">
      <SectionHeader>Training days per week</SectionHeader>
      <div className="flex gap-3 flex-wrap">
        {trainingDays.map((days) => (
          <Button
            key={days}
            onClick={() => {
              useTrainingPlanHook.setSelectedDays(days);
              useTrainingPlanHook.setTrainingFrequency(days);
            }}
            className={buttonStylesForTrainingModule}
          >
            {days} days
          </Button>
        ))}
      </div>
    </section>
  );
};

export const GoalsSelection = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="space-y-3">
        <SectionHeader>Select your goals</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3">
          {preferences.map((pref) => (
            <ExpandableCard
              key={pref.id}
              id={pref.id}
              title={pref.label}
              description={pref.description}
              isSelected={
                useTrainingPlanHook.objectives.primaryGoal === pref.id
              }
              expandedCard={useTrainingPlanHook.objectives.expandedCard}
              onClick={() => {
                useTrainingPlanHook.setPrimaryGoal(pref.id);
                useTrainingPlanHook.handleCardClick(pref.id);
              }}
            />
          ))}
        </div>
      </div>

      {useTrainingPlanHook.objectives.primaryGoal && (
        <div className="space-y-3 pl-4 border-l border-zinc-800">
          <SectionHeader>Optional secondary focus</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3">
            {useTrainingPlanHook.getAvailableSecondaryGoals().map((pref) => (
              <ExpandableCard
                key={pref.id}
                id={pref.id}
                title={pref.label}
                description={pref.description}
                isSelected={
                  useTrainingPlanHook.objectives.secondaryGoal === pref.id
                }
                expandedCard={useTrainingPlanHook.objectives.expandedCard}
                customPrefix="secondary"
                priority={1}
                onClick={() => {
                  useTrainingPlanHook.handleSecondaryGoalClick(pref.id);
                  useTrainingPlanHook.handleCardClick(`secondary-${pref.id}`);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export const DifficultyLevel = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <section className="max-w-5xl mx-auto space-y-3">
      <SectionHeader>Difficulty level</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {difficultyLevels.map((level) => (
          <ExpandableCard
            key={level.id}
            id={level.id}
            title={level.label}
            description={level.description}
            isSelected={
              useTrainingPlanHook.objectives.difficultyLevel === level.id
            }
            expandedCard={useTrainingPlanHook.objectives.expandedCard}
            customPrefix="difficulty"
            onClick={() => {
              useTrainingPlanHook.setDifficultyLevel(level.id);
              useTrainingPlanHook.handleCardClick(`difficulty-${level.id}`);
            }}
          />
        ))}
      </div>
    </section>
  );
};

interface ExerciseCountSelectorProps {
  title: string;
  description: string;
  count: number;
  minCount: number;
  maxCount: number;
  setCount: (count: number) => void;
  recommendation: string;
}

export const ExerciseCountSelector = ({
  title,
  description,
  count,
  minCount,
  maxCount,
  setCount,
  recommendation,
}: ExerciseCountSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => count > minCount && setCount(count - 1)}
            className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8`}
            disabled={count <= minCount}
          >
            <img src={arrowLeft} alt="Decrease" />
          </Button>
          <span className="w-8 text-center">{count}</span>
          <Button
            onClick={() => count < maxCount && setCount(count + 1)}
            className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8`}
            disabled={count >= maxCount}
          >
            <img src={arrowRight} alt="Increase" />
          </Button>
        </div>
      </div>
      <div className="text-xs text-zinc-500">{recommendation}</div>
    </div>
  );
};

export const ExerciseCount = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <section className="max-w-5xl mx-auto space-y-3">
      <SectionHeader>
        {useTrainingPlanHook.objectives.selectedPath === "longevity"
          ? "Choose your experience level"
          : "How many exercises per training day?"}
      </SectionHeader>

      {useTrainingPlanHook.objectives.selectedPath === "longevity" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {difficultyLevels.map((level) => (
            <ExpandableCard
              key={level.id}
              id={level.id}
              title={level.label}
              description={level.description}
              isSelected={
                useTrainingPlanHook.objectives.difficultyLevel === level.id
              }
              expandedCard={useTrainingPlanHook.objectives.expandedCard}
              customPrefix="difficulty"
              onClick={() => {
                useTrainingPlanHook.setDifficultyLevel(level.id);
                useTrainingPlanHook.handleCardClick(`difficulty-${level.id}`);
                const exerciseCounts = {
                  beginner: { main: 2, accessory: 1 },
                  shinobi: { main: 3, accessory: 2 },
                  samurai: { main: 4, accessory: 3 },
                }[level.id] || { main: 2, accessory: 1 };

                useTrainingPlanHook.setMainExerciseCount(exerciseCounts.main);
                useTrainingPlanHook.setAccessoryExerciseCount(
                  exerciseCounts.accessory
                );
              }}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <ExerciseCountSelector
            title="Main exercises"
            description="Key exercises for your goals"
            count={useTrainingPlanHook.objectives.mainExerciseCount}
            minCount={1}
            maxCount={5}
            setCount={useTrainingPlanHook.setMainExerciseCount}
            recommendation="Recommended: 2-4 main exercises per training day"
          />
          <ExerciseCountSelector
            title="Accessory exercises"
            description="Supporting exercises"
            count={useTrainingPlanHook.objectives.accessoryExerciseCount}
            minCount={0}
            maxCount={6}
            setCount={useTrainingPlanHook.setAccessoryExerciseCount}
            recommendation="Recommended: 1-3 accessory exercises per training day"
          />
        </div>
      )}
    </section>
  );
};

export const Summary = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <section className="max-w-5xl mx-auto pt-4 border-t border-zinc-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm text-zinc-400">Your Plan</p>
          <p className="text-base">
            {useTrainingPlanHook.objectives.selectedDays} days per week -{" "}
            {useTrainingPlanHook.objectives.selectedPath === "custom" ? (
              <span className="space-x-2">
                <span>
                  {
                    preferences.find(
                      (p) => p.id === useTrainingPlanHook.objectives.primaryGoal
                    )?.label
                  }
                </span>
                {useTrainingPlanHook.objectives.secondaryGoal && (
                  <span className="text-zinc-400">
                    &{" "}
                    {
                      preferences.find(
                        (p) =>
                          p.id === useTrainingPlanHook.objectives.secondaryGoal
                      )?.label
                    }
                  </span>
                )}
                {useTrainingPlanHook.objectives.difficultyLevel && (
                  <span className="ml-4">
                    Level:{" "}
                    <span
                      className={`font-medium ${
                        useTrainingPlanHook.objectives.difficultyLevel ===
                        "beginner"
                          ? "text-green-400"
                          : useTrainingPlanHook.objectives.difficultyLevel ===
                              "shinobi"
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {
                        difficultyLevels.find(
                          (level) =>
                            level.id ===
                            useTrainingPlanHook.objectives.difficultyLevel
                        )?.label
                      }
                    </span>
                  </span>
                )}
              </span>
            ) : (
              "Longevity Foundation Training"
            )}
          </p>
        </div>
        <Button
          className={buttonStylesForTrainingModule}
          onClick={useTrainingPlanHook.goToNextStep}
        >
          Continue
        </Button>
      </div>
    </section>
  );
};
