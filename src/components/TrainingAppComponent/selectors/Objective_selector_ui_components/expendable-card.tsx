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
    <div className="relative group ">
      {/* Main Card Button */}
      <div
        onClick={onClick}
        className={`
          relative
              
          xl:min-w-[20vw]
          min-w-[10vw]
          xl:max-w-full
          xl:h-[8vh]
          h-[5vh]
          xl:px-12
          px-4
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
        <div className="flex items-center justify-between w-full gap-3">
          <h3 className="text-sm font-medium truncate flex-1">{title}</h3>
          <div className="flex items-center gap-2 shrink-0">
            {priority > 0 && (
              <span className=" text-zinc-400 font-medium">Secondary</span>
            )}
            <div
              className={`
              w-10 h-10 
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
          mx-8
          mt-2
          p-4
          bg-zinc-800
   
          backdrop-blur-sm
          rounded-lg 
          border 
          border-zinc-900
          shadow-lg
          z-[999]
     
        "
        >
          <p className="text-sm text-zinc-300 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};
