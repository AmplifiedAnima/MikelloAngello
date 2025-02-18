import React from "react";
import { Button } from "../../../ui/button";
import { buttonStylesForTrainingModule } from "../../../ui/styles/button-styles-training-module";
import { ExpandableCard } from "./expendable-card";
import {
  objectivesPreferencesForTraining,
  objectivesTemplates,
  objectivesTrainingPaths,
} from "../../utils/TrainingDaysSelectorUtils";
import { useTrainingLogic } from "../../utils/TrainingAppContext";
import arrowLeft from "../../../../assets/feather-icons/arrow-left.svg";
import arrowRight from "../../../../assets/feather-icons/arrow-right.svg";
import { TrainingPath } from "../../utils/TrainingDaysSelectorUtils";
import { ScrollBarComponent } from "../../../ui/scrollbar-component";

export const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="relative py-4">
    <h2 className="text-2xl font-medium tracking-wide">{children}</h2>
  </div>
);

export const PathSelection = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <section className="">
      <SectionHeader>Choose your training path</SectionHeader>
      <div className="grid xl:grid-cols-1 sm:grid-cols-2 gap-8 xl:pt-0 ">
        {objectivesTrainingPaths.map((path: TrainingPath) => (
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
  const trainingDays = [2, 3, 4];

  return (
    <section className="   ">
      <SectionHeader>Times per week </SectionHeader>
      <div className="grid xl:grid-cols-1 md:grid-cols-3 grid-cols-3 gap-2   ">
        {trainingDays.map((days) => (
          <Button
            key={days}
            onClick={() => {
              useTrainingPlanHook.setSelectedDays(days);
              useTrainingPlanHook.setTrainingFrequency(days);
            }}
            className={`${buttonStylesForTrainingModule}  md:py-6 md:px-0 md:w-[12vw] px-2 w-[20vw] place-items-center`}
          >
            {days}
          </Button>
        ))}
      </div>
    </section>
  );
};
export const GoalsSelection = () => {
  const useTrainingPlanHook = useTrainingLogic();

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-0 w-full">
      {/* Primary Goals */}
      <div className="w-full">
        <SectionHeader>Select your goals</SectionHeader>

        <ScrollBarComponent
          className="
            overflow-y-auto 
            space-y-4
            h-[50vh] 
            pr-4
            xl:pr-8
          "
        >
          <div className="grid grid-cols-1 gap-4">
            {objectivesPreferencesForTraining.map((pref) => (
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
        </ScrollBarComponent>
      </div>

      {/* Secondary Goals */}
      {useTrainingPlanHook.objectives.primaryGoal && (
        <div
          className="
          w-full
          xl:border-l 
          xl:border-zinc-800
          xl:pl-8
              h-[50vh] 
        "
        >
          <SectionHeader>Optional secondary focus</SectionHeader>

          <div
            className="
            grid 
            grid-cols-1 
            gap-4
            pr-4
          "
          >
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
    <div className="xl:space-y-8 ">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium whitespace-nowrap">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="flex items-center gap-1">
          <Button
            onClick={() => count > minCount && setCount(count - 1)}
            className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8  md:py-6 md:px-0 md:w-[12vw]`}
            disabled={count <= minCount}
          >
            <img src={arrowLeft} alt="Decrease" />
          </Button>
          <span className="w-8 text-center">{count}</span>
          <Button
            onClick={() => count < maxCount && setCount(count + 1)}
            className={`${buttonStylesForTrainingModule} xl:p-1 xl:w-8 xl:h-8 p-1 w-8 h-8  md:py-6 md:px-0 md:w-[12vw]`}
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
  console.log(useTrainingPlanHook.objectives);
  return (
    <div className="xl:max-w-5xl">
      <section className=" mx-auto space-y-3">
        <SectionHeader>
          {useTrainingPlanHook.objectives.selectedPath === "templates"
            ? "Choose a Template"
            : "Ammount of exercises"}
        </SectionHeader>

        {useTrainingPlanHook.objectives.selectedPath === "templates" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {objectivesTemplates.map((template) => (
              <ExpandableCard
                key={template.id}
                id={template.id}
                title={template.label}
                description={template.description}
                isSelected={
                  useTrainingPlanHook.objectives.templateName === template.label
                }
                expandedCard={useTrainingPlanHook.objectives.expandedCard}
                customPrefix="template"
                onClick={() => {
                  useTrainingPlanHook.handleCardClick(
                    `template-${template.id}`
                  );
                  useTrainingPlanHook.setMainExerciseCount(
                    template.exercises.main
                  );
                  useTrainingPlanHook.setAccessoryExerciseCount(
                    template.exercises.accessory
                  );
                  useTrainingPlanHook.setSelectedDays(template.daysPerWeek);
                  useTrainingPlanHook.setTrainingFrequency(
                    template.daysPerWeek
                  );
                  useTrainingPlanHook.setTemplateName(template.label);

                  // Use the defined goals from the template
                  useTrainingPlanHook.setPrimaryGoal(template.primaryGoal);
                  if (template.secondaryGoal) {
                    useTrainingPlanHook.setSecondaryGoal(
                      template.secondaryGoal
                    );
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <div className="xl:space-y-4">
            <ExerciseCountSelector
              title="Main exercises"
              description="Key exercises for your goals"
              count={useTrainingPlanHook.objectives.mainExerciseCount}
              minCount={1}
              maxCount={5}
              setCount={useTrainingPlanHook.setMainExerciseCount}
              recommendation="Recommended: 2 - 4 main exercises per training day"
            />
            <ExerciseCountSelector
              title="Accessory exercises"
              description="Supporting exercises"
              count={useTrainingPlanHook.objectives.accessoryExerciseCount}
              minCount={0}
              maxCount={6}
              setCount={useTrainingPlanHook.setAccessoryExerciseCount}
              recommendation="Recommended: 1 - 3 accessory exercises per training day"
            />
          </div>
        )}
      </section>
    </div>
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
            {useTrainingPlanHook.objectives.selectedDays} days per week
            {useTrainingPlanHook.objectives.selectedPath === "custom" ? (
              <span className="space-x-2">
                {" - "}
                <span>
                  {
                    objectivesPreferencesForTraining.find(
                      (p) => p.id === useTrainingPlanHook.objectives.primaryGoal
                    )?.label
                  }
                </span>
                {useTrainingPlanHook.objectives.secondaryGoal && (
                  <span className="text-zinc-400">
                    {" & "}
                    {
                      objectivesPreferencesForTraining.find(
                        (p) =>
                          p.id === useTrainingPlanHook.objectives.secondaryGoal
                      )?.label
                    }
                  </span>
                )}
              </span>
            ) : (
              <span className="space-x-2">
                <span className="font-medium">
                  {" - "}
                  {useTrainingPlanHook.objectives.templateName}
                </span>
                <span className="text-zinc-400">
                  {" with "}
                  {
                    objectivesPreferencesForTraining.find(
                      (p) => p.id === useTrainingPlanHook.objectives.primaryGoal
                    )?.label
                  }
                  {useTrainingPlanHook.objectives.secondaryGoal && (
                    <>
                      {" & "}
                      {
                        objectivesPreferencesForTraining.find(
                          (p) =>
                            p.id ===
                            useTrainingPlanHook.objectives.secondaryGoal
                        )?.label
                      }
                    </>
                  )}
                </span>
              </span>
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
