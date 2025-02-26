import React, { useState } from "react";
import ModalTemplate from "../../ui/modal-template";
import { mockExercises } from "../mock_data/exercises.mock_data";
import closeIcon from "../../../assets/feather-icons/x-square.svg";
import { Button } from "../../ui/button";
// import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import { ScrollBarComponent } from "../../ui/scrollbar-component";

interface ExerciseFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: {
    movementPatterns: string[];
    primeMovers: string[];
    tools: string[];
  }) => void;
  onReset: () => void;
}

export const ExerciseFilterModal: React.FC<ExerciseFilterModalProps> = ({
  isOpen,
  onClose,
  onApply,
  onReset,
}) => {
  const [filters, setFilters] = useState({
    movementPatterns: [] as string[],
    primeMovers: [] as string[],
    tools: [] as string[],
    plane: [] as string[],
    type: [] as string[],
  });
  const [activeFilter, setActiveFilter] = useState<
    "movementPatterns" | "primeMovers" | "tools" | "plane" | "type"
  >("movementPatterns");

  const FILTER_OPTIONS = {
    movementPatterns: [
      ...new Set(mockExercises.map((ex) => ex.movementPattern)),
    ],
    primeMovers: [...new Set(mockExercises.map((ex) => ex.primeMovers))],
    tools: [...new Set(mockExercises.map((ex) => ex.toolsUsedInExercise))],
    plane: [...new Set(mockExercises.map((ex) => ex.plane!))],
    type: [...new Set(mockExercises.map((ex) => ex.type!))],
  };

  // Get count of exercises matching current filters
  const getFilteredExercisesCount = () => {
    return mockExercises.filter((ex) => {
      // Check each filter group
      for (const [filterType, selectedValues] of Object.entries(filters)) {
        if (selectedValues.length === 0) continue; // Skip if no filters in this category

        switch (filterType) {
          case "movementPatterns":
            if (!selectedValues.includes(ex.movementPattern)) return false;
            break;
          case "primeMovers":
            if (!selectedValues.includes(ex.primeMovers)) return false;
            break;
          case "tools":
            if (!selectedValues.includes(ex.toolsUsedInExercise)) return false;
            break;
          case "plane":
            if (!ex.plane || !selectedValues.includes(ex.plane)) return false;
            break;
          case "type":
            if (!ex.type || !selectedValues.includes(ex.type)) return false;
            break;
        }
      }
      return true;
    }).length;
  };

  const totalExercises = mockExercises.length;
  const filteredCount = getFilteredExercisesCount();

  const toggleFilter = (filterType: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const currentFilters = prev[filterType];
      const isSelected = currentFilters.includes(value);
      return {
        ...prev,
        [filterType]: isSelected
          ? currentFilters.filter((f) => f !== value)
          : [...currentFilters, value],
      };
    });
  };

  const handleReset = () => {
    setFilters({
      movementPatterns: [],
      primeMovers: [],
      tools: [],
      plane: [],
      type: [],
    });
    onReset();
  };

  return (
    <ModalTemplate
      isOpen={isOpen}
      className="h-[50vh] w-[70vw] p-4 grid grid-cols-3 gap-4"
    >
      <div className="col-span-3 flex justify-between items-center border-b border-zinc-800 pb-2 my-2">
        <div className="text-sm text-zinc-300">
          <span className="font-medium text-white">{filteredCount}</span>
          <span className="mx-1">of</span>
          <span className="font-medium">{totalExercises}</span>
          <span className="ml-1">exercises match filters</span>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={() => onApply(filters)}
            className="ml-2 hover:bg-zinc-800 rounded xl:w-[5vw] xl:p-0"
          >
            Apply
          </Button>
          <Button
            onClick={handleReset}
            className="ml-2 hover:bg-zinc-800 rounded xl:w-[5vw] xl:p-0"
          >
            Clear
          </Button>

          <Button
            onClick={onClose}
            className="ml-2 hover:bg-zinc-800 rounded xl:w-[80px] xl:p-0 border-none"
          >
            <img src={closeIcon} alt="Close" className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <ScrollBarComponent className="col-span-2 overflow-y-auto pr-2">
        <div className="grid grid-cols-2 gap-x-24 gap-y-2 h-[30vh]">
          {FILTER_OPTIONS[activeFilter].map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 cursor-pointer mb-1"
            >
              <input
                type="checkbox"
                checked={filters[activeFilter].includes(option)}
                onChange={() => toggleFilter(activeFilter, option)}
                className="form-checkbox h-5 w-5"
              />
              <span className="text-sm text-zinc-300">{option}</span>
              <span className="text-xs text-zinc-500">
                (
                {
                  mockExercises.filter((ex) => {
                    switch (activeFilter) {
                      case "movementPatterns":
                        return ex.movementPattern === option;
                      case "primeMovers":
                        return ex.primeMovers === option;
                      case "tools":
                        return ex.toolsUsedInExercise === option;
                      case "plane":
                        return ex.plane === option;
                      case "type":
                        return ex.type === option;
                      default:
                        return false;
                    }
                  }).length
                }
                )
              </span>
            </label>
          ))}
        </div>
      </ScrollBarComponent>
      <ScrollBarComponent className="w-full border-r border-zinc-800 flex flex-col overflow-y-auto p-2">
        {Object.keys(FILTER_OPTIONS).map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter as keyof typeof filters)}
            className={`
              xl:w-[15vw]
              xl:text-xs 
              xl:px-3 
              xl:py-1.5 
              xl:mb-1.5 
              rounded-sm 
              font-medium 
              transition-colors 
              text-left 
              flex justify-between items-center
              ${
                activeFilter === filter
                  ? "bg-zinc-700 text-white border-l-2 border-red-500"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }
            `}
          >
            <span>
              {filter
                .replace(/([A-Z])/g, " $1")
                .trim()
                .toLocaleUpperCase()}
            </span>
            {filters[filter as keyof typeof filters].length > 0 && (
              <span className="bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 ml-1">
                {filters[filter as keyof typeof filters].length}
              </span>
            )}
          </Button>
        ))}
      </ScrollBarComponent>
    </ModalTemplate>
  );
};

export default ExerciseFilterModal;
