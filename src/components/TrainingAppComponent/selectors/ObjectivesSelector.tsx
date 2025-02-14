import { Button } from "../../ui/button";
import {
  difficultyLevels,
  preferences,
  trainingPaths,
} from "../utils/TrainingDaysSelectorUtils";
import { ExpandableCard } from "./Objective_selector_ui_components/expendable-card";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
import React from "react";
import arrowLeft from "../../../assets/feather-icons/arrow-left.svg";
import arrowRight from "../../../assets/feather-icons/arrow-right.svg";
import { useTrainingLogic } from "../utils/TrainingAppContext";

export const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="relative py-4">
    <h2 className="text-2xl font-medium tracking-wide">{children}</h2>
  </div>
);
export const ObjectivesSelector = () => {
  const useTrainingPlanHook = useTrainingLogic();

  const trainingDays = [2, 3];

  const PathSelection = (
    <section className="max-w-3xl mx-auto space-y-2">
      <SectionHeader>Choose your training path</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {trainingPaths.map((path) => (
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

  const TrainingDays = (
    <section className="max-w-3xl mx-auto space-y-3">
      <SectionHeader>Training days per week</SectionHeader>
      <div className="flex gap-3 flex-wrap">
        {trainingDays.map((days) => (
          <Button
            key={days}
            onClick={() => {
              // First, set the selected days in objectives
              useTrainingPlanHook.setSelectedDays(days);

              // Then, initialize training units
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

  const GoalsSelection = (
    <section className="max-w-5xl mx-auto space-y-6">
      {/* Primary Goals */}
      <div className="space-y-3">
        <SectionHeader>Select your goals</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
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

      {/* Secondary Goals */}
      {useTrainingPlanHook.objectives.primaryGoal && (
        <div className="space-y-3 pl-4 border-l border-zinc-800">
          <SectionHeader>Optional secondary focus</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
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

  const DifficultyLevel = (
    <section className="max-w-5xl mx-auto space-y-3">
      <SectionHeader>Difficulty level</SectionHeader>
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
            }}
          />
        ))}
      </div>
    </section>
  );
  const ExerciseCount = (
    <section className="max-w-5xl mx-auto space-y-3">
      <SectionHeader>
        {useTrainingPlanHook.objectives.selectedPath === "longevity"
          ? "Choose your experience level"
          : "How many exercises per training day?"}
      </SectionHeader>

      {useTrainingPlanHook.objectives.selectedPath === "longevity" ? (
        // Opcje dla ścieżki zdrowotnej
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
                // Automatycznie ustaw liczbę ćwiczeń na podstawie poziomu
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
        // Prosty wybór liczby ćwiczeń dla ścieżki custom
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Main exercises</h3>
                <p className="text-sm text-zinc-400">
                  Key exercises for your goals
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => {
                    if (useTrainingPlanHook.objectives.mainExerciseCount > 1) {
                      useTrainingPlanHook.setMainExerciseCount(
                        useTrainingPlanHook.objectives.mainExerciseCount - 1
                      );
                    }
                  }}
                  className={`${buttonStylesForTrainingModule}  xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8`}
                  disabled={
                    useTrainingPlanHook.objectives.mainExerciseCount <= 1
                  }
                >
                  <img src={arrowLeft} />
                </Button>
                <span className="w-8 text-center">
                  {useTrainingPlanHook.objectives.mainExerciseCount || 1}
                </span>
                <Button
                  onClick={() => {
                    if (useTrainingPlanHook.objectives.mainExerciseCount < 3) {
                      useTrainingPlanHook.setMainExerciseCount(
                        useTrainingPlanHook.objectives.mainExerciseCount + 1
                      );
                    }
                  }}
                  className={`${buttonStylesForTrainingModule}  xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8`}
                  disabled={
                    useTrainingPlanHook.objectives.mainExerciseCount >= 5
                  }
                >
                  <img src={arrowRight} />
                </Button>
              </div>
            </div>
            <div className="text-xs text-zinc-500">
              Recommended: 2-4 main exercises per training day
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Accessory exercises</h3>
                <p className="text-sm text-zinc-400">Supporting exercises</p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => {
                    if (
                      useTrainingPlanHook.objectives.accessoryExerciseCount > 0
                    ) {
                      useTrainingPlanHook.setAccessoryExerciseCount(
                        useTrainingPlanHook.objectives.accessoryExerciseCount -
                          1
                      );
                    }
                  }}
                  className={`${buttonStylesForTrainingModule}  xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8`}
                  disabled={
                    useTrainingPlanHook.objectives.accessoryExerciseCount <= 0
                  }
                >
                  <img src={arrowLeft} />
                </Button>
                <span className="w-8 text-center">
                  {useTrainingPlanHook.objectives.accessoryExerciseCount || 0}
                </span>
                <Button
                  onClick={() => {
                    if (
                      useTrainingPlanHook.objectives.accessoryExerciseCount < 6
                    ) {
                      useTrainingPlanHook.setAccessoryExerciseCount(
                        useTrainingPlanHook.objectives.accessoryExerciseCount +
                          1
                      );
                    }
                  }}
                  className={`${buttonStylesForTrainingModule}  xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8`}
                  disabled={
                    useTrainingPlanHook.objectives.accessoryExerciseCount >= 6
                  }
                >
                  <img src={arrowRight} />
                </Button>
              </div>
            </div>
            <div className="text-xs text-zinc-500">
              Recommended: 1-3 accessory exercises per training day
            </div>
          </div>
        </div>
      )}
    </section>
  );
  const Summary = (
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

  const showSummary =
    (useTrainingPlanHook.objectives.selectedPath === "longevity" &&
      useTrainingPlanHook.objectives.selectedDays > 0 &&
      useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
      useTrainingPlanHook.objectives.accessoryExerciseCount > 0) ||
    (useTrainingPlanHook.objectives.selectedPath === "custom" &&
      useTrainingPlanHook.objectives.selectedDays > 0 &&
      useTrainingPlanHook.objectives.primaryGoal &&
      useTrainingPlanHook.objectives.difficultyLevel &&
      useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
      useTrainingPlanHook.objectives.accessoryExerciseCount > 0);

  // Zmodyfikuj return:
  return (
    <ScrollBarComponent className="xl:h-[60vh] px-8 space-y-24">
      {PathSelection}
      {useTrainingPlanHook.objectives.selectedPath && (
        <>
          {TrainingDays}
          {useTrainingPlanHook.objectives.selectedDays > 0 && ExerciseCount}
        </>
      )}
      {useTrainingPlanHook.objectives.selectedPath === "custom" &&
        useTrainingPlanHook.objectives.selectedDays > 0 &&
        useTrainingPlanHook.objectives.mainExerciseCount > 0 &&
        useTrainingPlanHook.objectives.accessoryExerciseCount > 0 && (
          <>
            {GoalsSelection}
            {useTrainingPlanHook.objectives.primaryGoal && DifficultyLevel}
          </>
        )}
      {showSummary && Summary}
    </ScrollBarComponent>
  );
};
export default ObjectivesSelector;
