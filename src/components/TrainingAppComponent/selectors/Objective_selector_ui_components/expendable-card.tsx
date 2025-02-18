import arrowRight from "../../../../assets/feather-icons/arrow-right.svg";

interface ExpandableCardProps {
  id: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  isDisabled?: boolean;
  customPrefix?: string;
  expandedCard: string;
  priority?: number;
}
interface ExpandableCardProps {
  id: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  isDisabled?: boolean;
  customPrefix?: string;
  expandedCard: string;
  priority?: number;
}

export const ExpandableCard = ({
  id,
  title,
  description,
  isSelected,
  onClick,
  isDisabled = false,
  customPrefix = "",
  expandedCard,
  priority = 0,
}: ExpandableCardProps) => {
  const isExpanded =
    expandedCard === (customPrefix ? `${customPrefix}-${id}` : id);

  return (
    <div className="relative group">
      {/* Main Card Button */}
      <div
        onClick={onClick}
        className={`
          relative
          min-w-[260px]
          max-w-full
          h-[6vh]
          px-12
          mx-4
          rounded-lg 
          transition-all 
          duration-200
          border
          flex 
          items-center
          justify-between
          ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${
            isSelected
              ? "bg-red-900/20 border-red-700 shadow-[0_0_15px_-3px_rgba(185,28,28,0.3)]"
              : "bg-zinc-800/40 border-zinc-700 hover:bg-zinc-800/60"
          }
          ${!isDisabled && "hover:border-red-600 hover:shadow-[0_0_15px_-5px_rgba(185,28,28,0.2)]"}
          ${priority > 0 ? "ml-4" : ""}
        `}
      >
        {/* Connector Line for Secondary Goals */}
        {priority > 0 && (
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-px bg-zinc-600" />
          </div>
        )}

        {/* Card Content */}
        <div className="flex items-center justify-between w-full gap-3">
          <h3 className="text-sm font-medium truncate flex-1">{title}</h3>
          <div className="flex items-center gap-2 shrink-0">
            {priority > 0 && (
              <span className="text-xs text-zinc-400 font-medium">
                Secondary
              </span>
            )}
            <div
              className={`
              w-6 h-6 
              rounded-full 
              flex 
              items-center 
              justify-center 
              transition-colors
              ${isSelected ? "bg-red-900/30" : "bg-zinc-700/30"}
              ${!isDisabled && "group-hover:bg-red-900/20"}
            `}
            >
              <img
                src={arrowRight}
                className={`
                  w-4 h-4 
                  transition-transform duration-200
                  ${isExpanded ? "rotate-90" : ""}
                `}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Description */}
      {isExpanded && (
        <div
          className="
          absolute 
          left-0 
          right-0 
          mt-2 
          p-4 
          bg-zinc-900/95
          backdrop-blur-sm
          rounded-lg 
          border 
          border-zinc-800
          shadow-lg
          z-10
          min-w-[280px]
          max-w-[320px]
        "
        >
          <p className="text-sm text-zinc-300 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};
