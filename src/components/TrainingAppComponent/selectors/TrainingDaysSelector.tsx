import { useState } from "react";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import {
  difficultyLevels,
  preferences,
} from "../utils/TrainingDaysSelectorUtils";

export const TrainingDaysSelector = () => {
  const [selectedDays, setSelectedDays] = useState<number>(0);
  const [primaryGoal, setPrimaryGoal] = useState<string>("");
  const [secondaryGoal, setSecondaryGoal] = useState<string>("");
  const [difficultyLevel, setDifficultyLevel] = useState<string>("");

  const trainingDays = [2, 3];

  const handleSecondaryGoalClick = (prefId: string) => {
    if (prefId === primaryGoal) return; // Prevent selecting same goal as primary
    setSecondaryGoal(prefId);
  };

  return (
    <div className="space-y-12">
      {/* Training Days Selection */}
      <div className="space-y-4">
        <h2 className="text-2xl font-medium">How many days can you train?</h2>
        <div className="flex gap-4">
          {trainingDays.map((days) => (
            <Button
              key={days}
              onClick={() => setSelectedDays(days)}
              className={`
                  ${buttonStylesForTrainingModule}
                  px-8 py-4 text-lg
                  ${selectedDays === days ? "bg-red-700" : "bg-zinc-800 opacity-60"}
                `}
            >
              {days} days
            </Button>
          ))}
        </div>
      </div>

      {/* Primary Goal Selection */}
      {selectedDays > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">What's your primary goal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {preferences.map((pref) => (
              <div
                key={pref.id}
                onClick={() => {
                  setPrimaryGoal(pref.id);
                  if (pref.id === secondaryGoal) setSecondaryGoal("");
                }}
                className={`
                    p-4 rounded-lg cursor-pointer transition-all
                    ${primaryGoal === pref.id ? "bg-red-700/20 border-red-700" : "bg-zinc-800/50 border-zinc-700"}
                    border-2 hover:border-red-600
                  `}
              >
                <h3 className="text-lg font-medium mb-2">{pref.label}</h3>
                <p className="text-sm text-zinc-400">{pref.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Secondary Goal Selection */}
      {selectedDays > 0 && primaryGoal && (
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">
            Select a secondary focus (optional)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {preferences.map((pref) => (
              <div
                key={pref.id}
                onClick={() => handleSecondaryGoalClick(pref.id)}
                className={`
                    p-4 rounded-lg transition-all
                    ${primaryGoal === pref.id ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                    ${secondaryGoal === pref.id ? "bg-red-700/20 border-red-700" : "bg-zinc-800/50 border-zinc-700"}
                    border-2 
                    ${primaryGoal !== pref.id && "hover:border-red-600"}
                  `}
              >
                <h3 className="text-lg font-medium mb-2">{pref.label}</h3>
                <p className="text-sm text-zinc-400">{pref.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Difficulty Level Selection */}
      {selectedDays > 0 && primaryGoal && (
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">How hard can you try?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {difficultyLevels.map((level) => (
              <div
                key={level.id}
                onClick={() => setDifficultyLevel(level.id)}
                className={`
                    p-6 rounded-lg cursor-pointer transition-all
                    ${difficultyLevel === level.id ? "bg-red-700/20 border-red-700" : "bg-zinc-800/50 border-zinc-700"}
                    border-2 hover:border-red-600
                  `}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{level.icon}</span>
                  <h3 className="text-lg font-medium">{level.label}</h3>
                </div>
                <p className="text-sm text-zinc-400">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary & Next Step */}
      {selectedDays > 0 && primaryGoal && difficultyLevel && (
        <div className="pt-6 border-t border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-zinc-400">Your Plan</p>
              <p className="text-lg">
                {selectedDays} days per week -{" "}
                {preferences.find((p) => p.id === primaryGoal)?.label}
                {secondaryGoal && (
                  <span className="text-zinc-400">
                    {" "}
                    & {preferences.find((p) => p.id === secondaryGoal)?.label}
                  </span>
                )}
                <span className="ml-2 text-red-500">
                  {difficultyLevels.find((l) => l.id === difficultyLevel)?.icon}
                </span>
              </p>
            </div>
            <Button
              className={`${buttonStylesForTrainingModule} px-8`}
              onClick={() => {
                console.log({
                  selectedDays,
                  primaryGoal,
                  secondaryGoal,
                  difficultyLevel,
                });
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
