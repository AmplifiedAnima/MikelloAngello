export interface TrainingPreference {
  id: string;
  label: string;
  description: string;
  recommendedRepRange?: string;
  intensityRange?: string;
  restPeriods?: string;
}
export const preferences: TrainingPreference[] = [
  {
    id: "maximal_strength",
    label: "Maximal Strength (90-100%)",
    description:
      "Pure strength development with near-maximal loads, focusing on neural adaptations",
    recommendedRepRange: "1-3 reps",
    intensityRange: "90-100% 1RM",
    restPeriods: "3-5 minutes",
  },
  {
    id: "heavy_strength",
    label: "Heavy Strength (85-90%)",
    description:
      "Heavy loading for strength development with slightly higher volume",
    recommendedRepRange: "3-5 reps",
    intensityRange: "85-90% 1RM",
    restPeriods: "2-4 minutes",
  },
  {
    id: "strength_power",
    label: "Strength-Power (80-85%)",
    description: "Balanced approach between maximal strength and power output",
    recommendedRepRange: "4-6 reps",
    intensityRange: "80-85% 1RM",
    restPeriods: "2-3 minutes",
  },
  {
    id: "strength_hypertrophy",
    label: "Strength-Hypertrophy (75-80%)",
    description:
      "Bridge between strength and muscle growth, emphasizing both neural and muscular adaptations",
    recommendedRepRange: "6-8 reps",
    intensityRange: "75-80% 1RM",
    restPeriods: "1.5-3 minutes",
  },
  {
    id: "pure_hypertrophy",
    label: "Pure Hypertrophy (70-75%)",
    description:
      "Optimal range for muscle growth with moderate weights and higher volume",
    recommendedRepRange: "8-12 reps",
    intensityRange: "70-75% 1RM",
    restPeriods: "1-2 minutes",
  },
  {
    id: "volume_hypertrophy",
    label: "Volume Hypertrophy (65-70%)",
    description:
      "Higher volume approach for muscle growth with moderate weights",
    recommendedRepRange: "12-15 reps",
    intensityRange: "65-70% 1RM",
    restPeriods: "45-90 seconds",
  },
];
export const difficultyLevels = [
  {
    id: "beginner",
    label: "Beginner",
    description: "New to training, focusing on form and building foundations",
    icon: "🌱",
  },
  {
    id: "shinobi",
    label: "Shinobi",
    description: "Ready for advanced techniques and higher intensity",
    icon: "⚔️",
  },
  {
    id: "samurai",
    label: "Samurai",
    description: "Prepared for maximum intensity and complex training patterns",
    icon: "🔥",
  },
];

export interface TrainingPath {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const trainingPaths: TrainingPath[] = [
  {
    id: "longevity",
    label: "Longevity Template",
    description:
      "Foundation training for health, strength, and movement quality across your lifespan",
    icon: "🌟",
  },
  {
    id: "custom",
    label: "Custom Training",
    description: "Select specific training goals and build your own program",
    icon: "🎯",
  },
];
