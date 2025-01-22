import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const BasicPlanFormSchema = z.object({
  name: z.string().min(2, "Imię jest wymagane"),
  email: z.string().email("Niepoprawny format email"),
  phone: z.string().min(9, "Niepoprawny numer telefonu").optional(),
  weight: z.coerce.number().min(40, "Podaj prawidłową wagę").max(200),
  height: z.coerce.number().min(140, "Podaj prawidłowy wzrost").max(220),
  goals: z.array(z.string()).min(1, "Wybierz przynajmniej jeden cel"),
  experienceLevel: z.enum(["none", "beginner", "intermediate", "advanced"]),
  weeklyActivity: z.enum(["sedentary", "light", "moderate", "very_active"]),
  weeklyHours: z.enum(["1-2", "2-3", "3-4", "4+"]),
  healthIssues: z.string().optional(),
});

type BasicPlanFormValues = z.infer<typeof BasicPlanFormSchema>;

const trainingGoals = [
  "Redukcja wagi",
  "Budowa masy",
  "Poprawa kondycji",
  "Poprawa zdrowia",
  "Redukcja stresu",
];

export const BasicPlanFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // watch,
  } = useForm<BasicPlanFormValues>({
    resolver: zodResolver(BasicPlanFormSchema),
    defaultValues: {
      goals: [],
      healthIssues: "",
      weeklyActivity: "sedentary",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<BasicPlanFormValues> = async (data) => {
    console.log("Form data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 max-w-2xl mx-auto mt-24 p-8 rounded-lg shadow-lg"
    >
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">Dane podstawowe</h3>

        <div className="space-y-4">
          <div>
            <input
              {...register("name")}
              className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
              placeholder="Imię"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                {...register("weight")}
                className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
                placeholder="Waga (kg)"
              />
              {errors.weight && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                {...register("height")}
                className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
                placeholder="Wzrost (cm)"
              />
              {errors.height && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.height.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">Cele treningowe</h3>
        <div className="space-y-2">
          {trainingGoals.map((goal) => (
            <label key={goal} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={goal}
                {...register("goals")}
                className="rounded border-gray-700 text-blue-500 focus:ring-blue-500 bg-gray-800"
              />
              <span className="text-gray-200">{goal}</span>
            </label>
          ))}
        </div>
        {errors.goals && (
          <p className="text-red-500 text-sm">{errors.goals.message}</p>
        )}
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">Doświadczenie</h3>
        <select
          {...register("experienceLevel")}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
        >
          <option value="none">Brak doświadczenia</option>
          <option value="beginner">Początkujący</option>
          <option value="intermediate">Średniozaawansowany</option>
          <option value="advanced">Zaawansowany</option>
        </select>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          Aktywność fizyczna
        </h3>
        <select
          {...register("weeklyActivity")}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
        >
          <option value="sedentary">
            Siedzący tryb życia (brak aktywności)
          </option>
          <option value="light">Lekka aktywność (1-2 razy w tygodniu)</option>
          <option value="moderate">
            Umiarkowana aktywność (3-4 razy w tygodniu)
          </option>
          <option value="very_active">
            Bardzo aktywny (5+ razy w tygodniu)
          </option>
        </select>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          Dostępność czasowa
        </h3>
        <select
          {...register("weeklyHours")}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
        >
          <option value="1-2">1-2 godziny tygodniowo</option>
          <option value="2-3">2-3 godziny tygodniowo</option>
          <option value="3-4">3-4 godziny tygodniowo</option>
          <option value="4+">4+ godziny tygodniowo</option>
        </select>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          <div className="flex items-center space-x-2">
            <span>Problemy zdrowotne/Ograniczenia</span>
          </div>
        </h3>

        <textarea
          {...register("healthIssues")}
          className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4"
          placeholder="Opisz swoje ograniczenia lub problemy zdrowotne..."
          rows={4}
        />

        <div className="grid justify-center">
          <Button type="submit" disabled={isSubmitting} className="w-64 p-8 text-xl xl:w-[250px]">
            {isSubmitting ? "Wysyłanie..." : "Wyślij"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BasicPlanFormComponent;
