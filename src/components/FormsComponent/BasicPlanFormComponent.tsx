import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  InputField,
  TextAreaField,
  SelectField,
  CheckboxGroup,
} from "./FormComponents";

const trainingGoals = [
  { value: "Redukcja wagi", label: "Redukcja wagi" },
  { value: "Budowa masy", label: "Budowa masy" },
  { value: "Poprawa kondycji", label: "Poprawa kondycji" },
  { value: "Poprawa zdrowia", label: "Poprawa zdrowia" },
  { value: "Redukcja stresu", label: "Redukcja stresu" },
];

const experienceLevels = [
  { value: "none", label: "Brak doświadczenia" },
  { value: "beginner", label: "Początkujący" },
  { value: "intermediate", label: "Średniozaawansowany" },
  { value: "advanced", label: "Zaawansowany" },
];

const weeklyActivities = [
  { value: "sedentary", label: "Siedzący tryb życia (brak aktywności)" },
  { value: "light", label: "Lekka aktywność (1-2 razy w tygodniu)" },
  { value: "moderate", label: "Umiarkowana aktywność (3-4 razy w tygodniu)" },
  { value: "very_active", label: "Bardzo aktywny (5+ razy w tygodniu)" },
];

const weeklyHours = [
  { value: "1-2", label: "1-2 godziny tygodniowo" },
  { value: "2-3", label: "2-3 godziny tygodniowo" },
  { value: "3-4", label: "3-4 godziny tygodniowo" },
  { value: "4+", label: "4+ godziny tygodniowo" },
];

// Schema remains the same
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

export const BasicPlanFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
          <InputField
            name="name"
            register={register}
            error={errors.name}
            placeholder="Imię"
          />
          <InputField
            name="email"
            register={register}
            error={errors.email}
            type="email"
            placeholder="Email"
          />
          <div className="grid grid-cols-2 gap-4">
            <InputField
              name="weight"
              register={register}
              error={errors.weight}
              type="number"
              placeholder="Waga (kg)"
            />
            <InputField
              name="height"
              register={register}
              error={errors.height}
              type="number"
              placeholder="Wzrost (cm)"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">Cele treningowe</h3>
        <CheckboxGroup
          name="goals"
          register={register}
          error={errors.goals as undefined}
          options={trainingGoals}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">Doświadczenie</h3>
        <SelectField
          name="experienceLevel"
          register={register}
          error={errors.experienceLevel}
          options={experienceLevels}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          Aktywność fizyczna
        </h3>
        <SelectField
          name="weeklyActivity"
          register={register}
          error={errors.weeklyActivity}
          options={weeklyActivities}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          Dostępność czasowa
        </h3>
        <SelectField
          name="weeklyHours"
          register={register}
          error={errors.weeklyHours}
          options={weeklyHours}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-400">
          <div className="flex items-center space-x-2">
            <span>Problemy zdrowotne/Ograniczenia</span>
          </div>
        </h3>

        <TextAreaField
          name="healthIssues"
          register={register}
          error={errors.healthIssues}
          placeholder="Opisz swoje ograniczenia lub problemy zdrowotne..."
          rows={4}
        />

        <div className="grid justify-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-64 p-8 text-xl xl:w-[250px]"
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BasicPlanFormComponent;
