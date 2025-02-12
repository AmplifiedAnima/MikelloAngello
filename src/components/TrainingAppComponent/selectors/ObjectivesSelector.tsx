import { useState } from "react";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import {
  difficultyLevels,
  preferences,
  trainingPaths,
} from "../utils/TrainingDaysSelectorUtils";

const ExpandableCard = ({
  id,
  title,
  description,
  isSelected,
  onClick,
  isDisabled = false,
  customPrefix = "",
  expandedCard,
  priority = 0, // Add priority to show hierarchy
}: {
  id: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  isDisabled?: boolean;
  customPrefix?: string;
  expandedCard: string;
  priority?: number;
}) => (
  <div
    onClick={onClick}
    className={`
      p-3 rounded-lg transition-all relative
      ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      ${isSelected ? "bg-red-700/20 border-red-700" : "bg-zinc-800/50 border-zinc-700"}
      border
      ${!isDisabled && "hover:border-red-600"}
      ${priority > 0 ? "ml-4" : ""} 
    `}
  >
    {priority > 0 && (
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-px bg-zinc-600" />
    )}
    <h3 className="text-base font-medium flex items-center justify-between">
      {title}
      {priority > 0 && (
        <span className="text-xs text-zinc-400">Secondary Option</span>
      )}
    </h3>
    <div
      className={`
        overflow-hidden transition-all duration-300
        ${expandedCard === (customPrefix ? `${customPrefix}-${id}` : id) ? "max-h-40" : "max-h-0"}
      `}
    >
      <p className="text-sm text-zinc-400 mt-2">{description}</p>
    </div>
  </div>
);

export const ObjectivesSelector = () => {
  const [selectedPath, setSelectedPath] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<number>(0);
  const [primaryGoal, setPrimaryGoal] = useState<string>("");
  const [secondaryGoal, setSecondaryGoal] = useState<string>("");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("");
  const [expandedCard, setExpandedCard] = useState<string>("");

  const trainingDays = [2, 3];

  const handleSecondaryGoalClick = (prefId: string) => {
    if (prefId === primaryGoal) return;
    setSecondaryGoal(prefId);
  };

  const handleCardClick = (id: string) => {
    setExpandedCard(expandedCard === id ? "" : id);
  };

  // Get available secondary goals based on primary goal
  const getAvailableSecondaryGoals = () => {
    const primaryIndex = preferences.findIndex((p) => p.id === primaryGoal);
    return preferences.slice(primaryIndex + 1);
  };

  const PathSelection = (
    <div className="space-y-3">
      <h2 className="text-xl font-medium">Choose your training path</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {trainingPaths.map((path) => (
          <ExpandableCard
            key={path.id}
            id={path.id}
            title={path.label}
            description={path.description}
            isSelected={selectedPath === path.id}
            expandedCard={expandedCard}
            onClick={() => {
              setSelectedPath(path.id);
              setSelectedDays(0);
              setPrimaryGoal("");
              setSecondaryGoal("");
              setDifficultyLevel("");
              handleCardClick(path.id);
            }}
          />
        ))}
      </div>
    </div>
  );

  const TrainingDays = (
    <div className="space-y-3">
      <h2 className="text-xl font-medium">Training days per week</h2>
      <div className="flex flex-wrap gap-3">
        {trainingDays.map((days) => (
          <Button
            key={days}
            onClick={() => setSelectedDays(days)}
            className={`
              ${buttonStylesForTrainingModule}
              px-6 py-2 text-base
              ${selectedDays === days ? "bg-red-700" : "bg-zinc-800 opacity-60"}
            `}
          >
            {days} days
          </Button>
        ))}
      </div>
    </div>
  );

  const GoalsSelection = (
    <div className="space-y-6">
      {/* Primary Goals */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Select your goals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {preferences.map((pref) => (
            <ExpandableCard
              key={pref.id}
              id={pref.id}
              title={pref.label}
              description={pref.description}
              isSelected={primaryGoal === pref.id}
              expandedCard={expandedCard}
              onClick={() => {
                setPrimaryGoal(pref.id);
                setSecondaryGoal("");
                handleCardClick(pref.id);
              }}
            />
          ))}
        </div>
      </div>

      {/* Secondary Goals */}
      {primaryGoal && (
        <div className="space-y-3 pl-4 border-l-2 border-zinc-800">
          <h3 className="text-lg font-medium text-zinc-300">
            Optional secondary focus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {getAvailableSecondaryGoals().map((pref) => (
              <ExpandableCard
                key={pref.id}
                id={pref.id}
                title={pref.label}
                description={pref.description}
                isSelected={secondaryGoal === pref.id}
                expandedCard={expandedCard}
                customPrefix="secondary"
                priority={1}
                onClick={() => {
                  handleSecondaryGoalClick(pref.id);
                  handleCardClick(`secondary-${pref.id}`);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const DifficultyLevel = (
    <div className="space-y-3">
      <h2 className="text-xl font-medium">Difficulty level</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {difficultyLevels.map((level) => (
          <ExpandableCard
            key={level.id}
            id={level.id}
            title={level.label}
            description={level.description}
            isSelected={difficultyLevel === level.id}
            expandedCard={expandedCard}
            customPrefix="difficulty"
            onClick={() => {
              setDifficultyLevel(level.id);
              handleCardClick(`difficulty-${level.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
  const Summary = (
    <div className="pt-4 border-t border-zinc-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm text-zinc-400">Your Plan</p>
          <div className="space-y-1">
            <p className="text-base">
              {selectedDays} days per week -{" "}
              {selectedPath === "custom" ? (
                <>
                  {preferences.find((p) => p.id === primaryGoal)?.label}
                  {secondaryGoal && (
                    <span className="text-zinc-400">
                      {" "}
                      & {preferences.find((p) => p.id === secondaryGoal)?.label}
                    </span>
                  )}
                  {difficultyLevel && (
                    <a className="mx-4">
                      Level:{" "}
                      <span
                        className={`font-medium ${
                          difficultyLevel === "beginner"
                            ? "text-green-400"
                            : difficultyLevel === "shinobi"
                              ? "text-yellow-400"
                              : "text-red-400"
                        }`}
                      >
                        {
                          difficultyLevels.find(
                            (level) => level.id === difficultyLevel
                          )?.label
                        }
                      </span>
                    </a>
                  )}
                </>
              ) : (
                "Longevity Foundation Training"
              )}
            </p>
          </div>
        </div>
        <Button
          className={`${buttonStylesForTrainingModule} px-6 w-full sm:w-auto`}
          onClick={() => {
            console.log({
              selectedPath,
              selectedDays,
              ...(selectedPath === "custom" && {
                primaryGoal,
                secondaryGoal,
                difficultyLevel,
              }),
            });
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
  const showSummary =
    (selectedPath === "longevity" && selectedDays > 0) ||
    (selectedPath === "custom" &&
      selectedDays > 0 &&
      primaryGoal &&
      difficultyLevel);

  return (
    <div className="space-y-8 p-4 md:p-8">
      {PathSelection}
      {selectedPath && TrainingDays}
      {selectedPath === "custom" && selectedDays > 0 && (
        <>
          {GoalsSelection}
          {primaryGoal && DifficultyLevel}
        </>
      )}
      {showSummary && Summary}
    </div>
  );
};

export default ObjectivesSelector;
