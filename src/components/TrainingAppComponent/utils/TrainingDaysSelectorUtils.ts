export interface TrainingPreference {
  id: string;
  label: string;
  description: string;
  recommendedRepRange?: string;
  intensityRange?: string;
  restPeriods?: string;
}

export const objectivesPreferencesForTraining: TrainingPreference[] = [
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

export const objectivesDifficultyLevels = [
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

export const objectivesTrainingPaths: TrainingPath[] = [
  {
    id: "templates",
    label: "Templates",
    description: "Ready to go templates, ready programs to be followed",
    icon: "🌟",
  },
  {
    id: "custom",
    label: "Custom Training",
    description: "Select specific training goals and build your own program",
    icon: "🎯",
  },
];
export interface Template {
  id: string;
  label: string;
  description: string;
  exercises: {
    main: number;
    accessory: number;
  };
  daysPerWeek: number;
  primaryGoal: string; // Added this
  secondaryGoal?: string; // Added this as optional
}

export const objectivesTemplates: Template[] = [
  {
    id: "basic",
    label: "Basic Template",
    description:
      "Fundamental movements focusing on overall fitness and health. Three training days per week for optimal recovery.",
    exercises: {
      main: 2,
      accessory: 2,
    },
    daysPerWeek: 3,
    primaryGoal: "strength_hypertrophy", // Added goal
    secondaryGoal: "pure_hypertrophy", // Added optional secondary goal
  },
  {
    id: "mobility",
    label: "Mobility Template",
    description:
      "Focus on flexibility, joint health and movement quality. Trained 2 times per week to maintain fresh movement patterns.",
    exercises: {
      main: 2,
      accessory: 3,
    },
    daysPerWeek: 2,
    primaryGoal: "pure_hypertrophy",
    secondaryGoal: "volume_hypertrophy",
  },
  {
    id: "health",
    label: "Health Template",
    description:
      "Balanced approach to strength and cardiovascular health. Four sessions per week for consistent progress.",
    exercises: {
      main: 3,
      accessory: 2,
    },
    daysPerWeek: 3,
    primaryGoal: "strength_power",
    secondaryGoal: "strength_hypertrophy",
  },
];
