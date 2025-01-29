import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  InputField,
  TextAreaField,
  SelectField,
  CheckboxGroup,
} from "./FormComponents";

const SpecificAthleteFormSchema = z.object({
  mainSport: z.string().min(1, "Wybierz główną dyscyplinę"),
  experienceYears: z.coerce.number().min(0, "Podaj prawidłową liczbę lat"),
  weeklyTrainingSessions: z.coerce.number().min(1).max(14),
  sleepHoursPerNight: z.coerce.number().min(4).max(12),
  injuries: z.string().optional(),
  weight: z.coerce.number().min(40).max(200),
  height: z.coerce.number().min(140).max(220),
  fitnessGoals: z.array(z.string()).min(1, "Wybierz przynajmniej jeden cel"),
  fitnessGoalPriority: z.enum(["strength", "endurance", "power", "speed"]),
});

type SpecificAthleteFormValues = z.infer<typeof SpecificAthleteFormSchema>;

export const SpecificAthleteFormComponent = () => {
  const { register, handleSubmit, formState } =
    useForm<SpecificAthleteFormValues>({
      resolver: zodResolver(SpecificAthleteFormSchema),
      defaultValues: { sleepHoursPerNight: 8 },
    });

  const onSubmit: SubmitHandler<SpecificAthleteFormValues> = async (data) => {
    console.log("Form data:", data);
  };

  const fitnessGoals = [
    { value: "strength", label: "Strength" },
    { value: "endurance", label: "Endurance" },
    { value: "power", label: "Power" },
    { value: "speed", label: "Speed" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 max-w-2xl mx-auto mt-24 p-8 rounded-lg shadow-lg"
    >
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          Informacje sportowe
        </h3>
        <InputField<SpecificAthleteFormValues>
          name="mainSport"
          register={register}
          error={formState.errors.mainSport}
          placeholder="Twoja główna dyscyplina"
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField<SpecificAthleteFormValues>
            name="experienceYears"
            register={register}
            error={formState.errors.experienceYears}
            type="number"
            placeholder="Lata doświadczenia"
          />
          <InputField<SpecificAthleteFormValues>
            name="weeklyTrainingSessions"
            register={register}
            error={formState.errors.weeklyTrainingSessions}
            type="number"
            placeholder="Treningi tygodniowo"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          Cele treningowe i kondycja
        </h3>
        <CheckboxGroup<SpecificAthleteFormValues>
          name="fitnessGoals"
          register={register}
          error={formState.errors.fitnessGoals as undefined}
          options={fitnessGoals}
        />
        <SelectField<SpecificAthleteFormValues>
          name="fitnessGoalPriority"
          register={register}
          error={formState.errors.fitnessGoalPriority}
          options={fitnessGoals}
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField<SpecificAthleteFormValues>
            name="weight"
            register={register}
            error={formState.errors.weight}
            type="number"
            placeholder="Waga (kg)"
          />
          <InputField<SpecificAthleteFormValues>
            name="height"
            register={register}
            error={formState.errors.height}
            type="number"
            placeholder="Wzrost (cm)"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">Sen i kontuzje</h3>
        <InputField<SpecificAthleteFormValues>
          name="sleepHoursPerNight"
          register={register}
          error={formState.errors.sleepHoursPerNight}
          type="number"
          placeholder="Godziny snu na dobę"
        />
        <TextAreaField<SpecificAthleteFormValues>
          name="injuries"
          register={register}
          error={formState.errors.injuries}
          placeholder="Opisz przebyte kontuzje..."
          rows={4}
        />
      </div>

      <div className="grid justify-center">
        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-64 p-8 text-xl xl:w-[250px]"
        >
          {formState.isSubmitting ? "Wysyłanie..." : "Wyślij"}
        </Button>
      </div>
    </form>
  );
};
