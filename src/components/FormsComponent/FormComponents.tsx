import {
  UseFormRegister,
  FieldError,
  FieldValues,
  Merge,
} from "react-hook-form";

interface InputFieldProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError;
  type?: string;
  placeholder?: string;
  className?: string;
}

export const InputField = ({
  name,
  register,
  error,
  type = "text",
  placeholder,
  className = "",
}: InputFieldProps) => (
  <div>
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className={`mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4 ${className}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

interface TextAreaFieldProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export const TextAreaField = ({
  name,
  register,
  error,
  placeholder,
  rows = 4,
  className = "",
}: TextAreaFieldProps) => (
  <div>
    <textarea
      {...register(name)}
      placeholder={placeholder}
      rows={rows}
      className={`mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4 ${className}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError;
  options: Option[];
  className?: string;
}

export const SelectField = ({
  name,
  register,
  error,
  options,
  className = "",
}: SelectFieldProps) => (
  <div>
    <select
      {...register(name)}
      className={`mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4 ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);
interface CheckboxGroupProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError | Merge<FieldError, (FieldError | undefined)[]>;
  options: Option[];
  className?: string;
}

export const CheckboxGroup = ({
  name,
  register,
  error,
  options,
  className = "",
}: CheckboxGroupProps) => (
  <div className={`space-y-2 ${className}`}>
    {options.map((option) => (
      <label key={option.value} className="flex items-center space-x-2">
        <input
          type="checkbox"
          value={option.value}
          {...register(name)}
          className="rounded border-gray-700 text-blue-500 focus:ring-blue-500 bg-gray-800"
        />
        <span className="text-gray-200">{option.label}</span>
      </label>
    ))}
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);
