import arrowRight from '../../../../assets/feather-icons/arrow-right.svg'

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
    <div className="flex flex-col">
      <div
        onClick={onClick}
        className={`
          p-2 rounded-lg transition-all relative
          h-12 flex items-center
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

        <div className="flex items-center justify-between w-full pr-2">
          <h3 className="text-sm font-medium truncate flex-1">{title}</h3>
          <div className="flex items-center gap-2">
            {priority > 0 && (
              <span className="text-xs text-zinc-400 whitespace-nowrap">
                Secondary
              </span>
            )}
            <img src={arrowRight}
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-2 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      )}
    </div>
  );
};
