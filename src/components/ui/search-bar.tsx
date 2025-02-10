import { Search } from "lucide-react";

interface SearchExerciseInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchExerciseInput = ({
  placeholder = "Search exercises...",
  className = "",
  value,
  onChange,
}: SearchExerciseInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          block w-full rounded-2xl
          border-2 border-red-700/30
          bg-zinc-900/50
          pl-11 pr-4 py-3
          text-base text-gray-200
          placeholder-gray-400
          shadow-sm
          transition-colors
          focus:border-red-600
          focus:outline-none
          focus:ring-1
          focus:ring-red-600
          ${className}
        `}
      />
    </div>
  );
};

// Example usage in ExerciseList component:
const ExerciseListLayout = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="sticky top-0 z-10 bg-zinc-900/95 py-4">
        <SearchExerciseInput placeholder="Search by name, pattern, or equipment..." />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Exercise cards will be rendered here */}
      </div>
    </div>
  );
};

export default ExerciseListLayout;
