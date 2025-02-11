interface TrainingPreference {
  id: string;
  label: string;
  description: string;
}

export const preferences: TrainingPreference[] = [
  {
    id: "hypertrophy",
    label: "Muscle Growth",
    description:
      "Focus on muscle size and volume with moderate weights and higher reps",
  },
  {
    id: "strength",
    label: "Strength",
    description: "Build raw strength with heavy weights and lower reps",
  },
  {
    id: "endurance",
    label: "Endurance",
    description:
      "Improve muscular endurance with lighter weights and high reps",
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
