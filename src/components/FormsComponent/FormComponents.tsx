import React from "react";
import {
  FieldValues,
  UseFormRegister,
  FieldError,
  Path,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
}

export const InputField = <T extends FieldValues>({
  name,
  register,
  error,
  type = "text",
  placeholder,
  className = "",
}: FormFieldProps<T> & { type?: string; placeholder?: string }) => (
  <div>
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={`mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4 ${className}`}
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);

interface TextAreaFieldProps<T extends FieldValues> extends FormFieldProps<T> {
  placeholder?: string;
  rows?: number;
}

export const TextAreaField = <T extends FieldValues>({
  name,
  register,
  error,
  placeholder,
  rows = 4,
  className = "",
}: TextAreaFieldProps<T>) => (
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

interface SelectFieldProps<T extends FieldValues> extends FormFieldProps<T> {
  options: Option[];
}

export const SelectField = <T extends FieldValues>({
  name,
  register,
  error,
  options,
  className = "",
}: SelectFieldProps<T>) => (
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

interface CheckboxGroupProps<T extends FieldValues> extends FormFieldProps<T> {
  options: Option[];
}

export const CheckboxGroup = <T extends FieldValues>({
  name,
  register,
  error,
  options,
  className = "",
}: CheckboxGroupProps<T>) => (
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
