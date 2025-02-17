import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import arrowDown from "../../../assets/feather-icons/arrow-down-circle.svg";
import { useState, useRef, useEffect } from "react";

const TrainingUnitDropdown = ({
  currentDayIndex,
  totalDays,
  onSelect,
}: {
  currentDayIndex: number;
  totalDays: number;
  onSelect: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`${buttonStylesForTrainingModule} xl:h-8 xl:px-1 xl:py-2 xl:w-[12vw]`}
      >
        <span className="text-white text-sm whitespace-nowrap">
          Training unit {currentDayIndex}/{totalDays}
        </span>
        <img
          src={arrowDown}
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          alt="Toggle dropdown"
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full min-w-[160px] bg-zinc-900 border border-zinc-800 rounded-md shadow-lg z-50">
          <ul className="py-1">
            {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
              <li key={day}>
                <button
                  onClick={() => {
                    onSelect(day);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-zinc-800 transition-colors
                    ${currentDayIndex === day ? "bg-zinc-800 text-white" : "text-zinc-300"}`}
                >
                  Training unit {day}/{totalDays}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrainingUnitDropdown;
