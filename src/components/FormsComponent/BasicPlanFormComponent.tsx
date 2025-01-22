import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const BasicPlanFormSchema = z.object({
  // Dane podstawowe
  name: z.string().min(2, "Imię jest wymagane"),
  email: z.string().email("Niepoprawny format email"),
  phone: z.string().min(9, "Niepoprawny numer telefonu").optional(),
  age: z.number().min(16, "Musisz mieć minimum 16 lat").max(100),
  weight: z.number().min(40, "Podaj prawidłową wagę").max(200),
  height: z.number().min(140, "Podaj prawidłowy wzrost").max(220),

  // Cele treningowe (multi-select)
  goals: z.array(z.string()).min(1, "Wybierz przynajmniej jeden cel"),

  // Doświadczenie i aktywność
  experienceLevel: z.enum(["none", "beginner", "intermediate", "advanced"]),
  weeklyActivity: z.enum(["sedentary", "light", "moderate", "very_active"]),

  // Dostępność
  weeklyHours: z.enum(["1-2", "2-3", "3-4", "4+"]),
  preferredTime: z.array(z.string()),
  availableEquipment: z.array(z.string()).optional(),

  // Zdrowie
  healthIssues: z.string().optional(),
  lastTrainingPeriod: z.string(),

  // Dodatkowe informacje
  favoriteExercises: z.array(z.string()).optional(),
  additionalNotes: z.string().optional(),
});

type BasicPlanFormValues = z.infer<typeof BasicPlanFormSchema>;
const inputClass =
  "mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-200 placeholder-gray-400 py-3 px-4";
const inputErrorClass = "text-red-500 text-sm mt-1";
const sectionClass = "space-y-6";
const sectionTitleClass = "text-xl font-semibold text-blue-400";
const formClass = "space-y-12 max-w-2xl mx-auto mt-24 p-8 rounded-lg shadow-lg";
const formBackground = {
  background: "transparent",
};
export const BasicPlanFormComponent = () => {
  console.log("Rendering BasicPlanFormComponent");
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<BasicPlanFormValues>({
    resolver: zodResolver(BasicPlanFormSchema),
    defaultValues: {
      goals: [],
      preferredTime: [],
      favoriteExercises: [],
      healthIssues: "",
      additionalNotes: "",
    },
  });

  const onSubmit = (data: BasicPlanFormValues) => {
    
    console.log("onSubmit called");
    console.log(data);
    // Tutaj później dodamy integrację z Supabase
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={formClass}
      style={formBackground}
    >
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Dane podstawowe</h3>

        <div className="relative">
          <input
            {...register("name")}
            className={`${inputClass} `}
            placeholder="Imię"
          />
        </div>
        {errors.name && (
          <p className={inputErrorClass}>{errors.name.message}</p>
        )}

        <input
          {...register("email")}
          className={inputClass}
          placeholder="Email"
        />
        {errors.email && (
          <p className={inputErrorClass}>{errors.email.message}</p>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              {...register("weight", { valueAsNumber: true })}
              className={`${inputClass} `}
              placeholder="Waga (kg)"
            />

            {errors.weight && (
              <p className={inputErrorClass}>{errors.weight.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="number"
              {...register("height", { valueAsNumber: true })}
              className={`${inputClass}`}
              placeholder="Wzrost (cm)"
            />

            {errors.height && (
              <p className={inputErrorClass}>{errors.height.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Cele treningowe</h3>

        <div className="space-y-2">
          {[
            "Redukcja wagi",
            "Budowa masy",
            "Poprawa kondycji",
            "Poprawa zdrowia",
            "Redukcja stresu",
          ].map((goal) => (
            <label key={goal} className="flex items-center space-x-2">
              <input type="checkbox" value={goal} {...register("goals")} />
              <span>{goal}</span>
            </label>
          ))}
        </div>
        {errors.goals && (
          <p className={inputErrorClass}>{errors.goals.message}</p>
        )}
      </div>

      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Doświadczenie</h3>

        <select {...register("experienceLevel")} className={inputClass}>
          <option value="none">Brak doświadczenia</option>
          <option value="beginner">Początkujący</option>
          <option value="intermediate">Średniozaawansowany</option>
          <option value="advanced">Zaawansowany</option>
        </select>
      </div>

      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Dostępność czasowa</h3>

        <div className="relative">
          <select {...register("weeklyHours")} className={`${inputClass} `}>
            <option value="1-2">1-2 godziny tygodniowo</option>
            <option value="2-3">2-3 godziny tygodniowo</option>
            <option value="3-4">3-4 godziny tygodniowo</option>
            <option value="4+">4+ godziny tygodniowo</option>
          </select>
        </div>
      </div>

      <div className={`${sectionClass} `}>
        <h3 className={sectionTitleClass}>
          <div className="flex items-center space-x-2">
            <span>Problemy zdrowotne/Ograniczenia</span>
          </div>
        </h3>

        <textarea
          {...register("healthIssues")}
          className={inputClass}
          placeholder="Opisz swoje ograniczenia lub problemy zdrowotne..."
          rows={4}
        ></textarea>
        <div className="grid justify-center">
          <Button type="submit" className="xl:w-[300px] ">
            Wyślij
          </Button>
        </div>
      </div>
    </form>
  );
};
