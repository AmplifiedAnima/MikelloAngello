import { ExerciseBlueprintsInterface } from "../interfaces/ExerciseBlueprintInterface";

export const exercises: ExerciseBlueprintsInterface[] = [
    {
      _id: '1',
      name: 'Barbell Back Squat',
      sets: '3',
      reps: '10',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Squat',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings, Calves',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/O05NSodv7tg?feature=share',
    },
    // {
    //   _id: '2',
    //   name: 'Dumbbell Goblet Squat',
    //   sets: '3',
    //   reps: '12',
    //   intensity: '8kg', // Dumbbell default weight
    //   movementPattern: 'Squat',
    //   plane: 'Sagittal',
    //   type: 'bilateral',
    //   toolsUsedInExercise: 'Dumbbell',
    //   tempo: '2-0-2',
    //   videoStatus: 'Available',
    //   primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
    //   primeMovers: 'Legs',
    //   videoUrl: '',
    // },

    {
      _id: '2345345345345345345345',
      name: 'Swing (coiled)',
      sets: '3',
      reps: '12',
      intensity: '16kg', // Dumbbell default weight
      movementPattern: 'Hinge',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Kettlebell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/6DoD0fKnqrg',
    },
    {
      _id: '1345345345345',
      name: 'Swing (one-arm)',
      sets: '3',
      reps: '10',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Hinge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Kettlebell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings, Calves',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/yM2UrDQVxp4?feature=share',
    },
    {
      _id: '3',
      name: 'Squat',
      sets: '3',
      reps: '15',
      intensity: 'Bodyweight',
      movementPattern: 'Squat',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/1not1CdzdfY?feature=share',
    },
    {
      _id: '135135135',
      name: 'Forward Lunge',
      sets: '3',
      reps: '10',
      intensity: 'Bodyweight', // Barbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/1dDwEZx6oEk?feature=share',
    },
    {
      _id: '135135135',
      name: 'Backward Lunge',
      sets: '3',
      reps: '10',
      intensity: 'Bodyweight', // Barbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/fhWeeiPsFjg?feature=share',
    },
  
    {
      _id: '4',
      name: 'Barbell Forward Lunge',
      sets: '3',
      reps: '10',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://example.com/barbell-forward-lunge',
    },

    {
      _id: '5',
      name: 'Dumbbell Forward Lunge',
      sets: '3',
      reps: '12',
      intensity: '8kg', // Dumbbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Dumbbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://example.com/dumbbell-forward-lunge',
    },
    {
      _id: '6',
      name: 'Barbell Bench Press',
      sets: '3',
      reps: '8',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Press',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Pectorals, Triceps, Deltoids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/barbell-bench-press',
    },
    {
      _id: '7',
      name: 'Dumbbell Bench Press',
      sets: '3',
      reps: '10',
      intensity: '8kg', // Dumbbell default weight
      movementPattern: 'Press',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Dumbbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Pectorals, Triceps, Deltoids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/dumbbell-bench-press',
    },
    {
      _id: '8',
      name: 'Pull-Up',
      sets: '3',
      reps: '10',
      intensity: 'Bodyweight',
      movementPattern: 'Pull',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Latissimus Dorsi, Biceps, Rhomboids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/pull-up',
    },
    {
      _id: '9',
      name: 'Dumbbell Row',
      sets: '3',
      reps: '12',
      intensity: '8kg', // Dumbbell default weight
      movementPattern: 'Pull',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Dumbbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Latissimus Dorsi, Biceps, Rhomboids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/dumbbell-row',
    },
    {
      _id: '10',
      name: 'Barbell Deadlift',
      sets: '3',
      reps: '8',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Hinge',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Glutes, Hamstrings, Lower Back',
      primeMovers: 'Lower Body',
      videoUrl: 'https://example.com/barbell-deadlift',
    },
    {
      _id: '135135135135135',
      name: 'Push-Up',
      sets: '3',
      reps: '15',
      intensity: 'Bodyweight',
      movementPattern: 'Push',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '1-1-1',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Pectoralis Major, Deltoids, Triceps',
      primeMovers: 'Upper Body',
      videoUrl: 'https://youtube.com/shorts/45845gtPqEU?feature=share'
    },{
      _id: '1',
      name: 'Barbell Back Squat',
      sets: '3',
      reps: '10',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Squat',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings, Calves',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/O05NSodv7tg?feature=share',
    },
    // {
    //   _id: '2',
    //   name: 'Dumbbell Goblet Squat',
    //   sets: '3',
    //   reps: '12',
    //   intensity: '8kg', // Dumbbell default weight
    //   movementPattern: 'Squat',
    //   plane: 'Sagittal',
    //   type: 'bilateral',
    //   toolsUsedInExercise: 'Dumbbell',
    //   tempo: '2-0-2',
    //   videoStatus: 'Available',
    //   primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
    //   primeMovers: 'Legs',
    //   videoUrl: '',
    // },

    {
      _id: '2345345345345345345345',
      name: 'Swing (coiled)',
      sets: '3',
      reps: '12',
      intensity: '16kg', // Dumbbell default weight
      movementPattern: 'Hinge',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Kettlebell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/6DoD0fKnqrg',
    },
    {
      _id: '1345345345345',
      name: 'Swing (one-arm)',
      sets: '3',
      reps: '10',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Hinge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Kettlebell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings, Calves',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/yM2UrDQVxp4?feature=share',
    },
    {
      _id: '3',
      name: 'Squat',
      sets: '3',
      reps: '15',
      intensity: 'Bodyweight',
      movementPattern: 'Squat',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/1not1CdzdfY?feature=share',
    },
    {
      _id: '135135135',
      name: 'Forward Lunge',
      sets: '3',
      reps: '10',
      intensity: 'Bodyweight', // Barbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/1dDwEZx6oEk?feature=share',
    },
    {
      _id: '135135135',
      name: 'Backward Lunge',
      sets: '3',
      reps: '10',
      intensity: 'Bodyweight', // Barbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://youtube.com/shorts/fhWeeiPsFjg?feature=share',
    },
  
    {
      _id: '4',
      name: 'Barbell Forward Lunge',
      sets: '3',
      reps: '10',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://example.com/barbell-forward-lunge',
    },

    {
      _id: '5',
      name: 'Dumbbell Forward Lunge',
      sets: '3',
      reps: '12',
      intensity: '8kg', // Dumbbell default weight
      movementPattern: 'Lunge',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Dumbbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Quadriceps, Glutes, Hamstrings',
      primeMovers: 'Legs',
      videoUrl: 'https://example.com/dumbbell-forward-lunge',
    },
    {
      _id: '6',
      name: 'Barbell Bench Press',
      sets: '3',
      reps: '8',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Press',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Pectorals, Triceps, Deltoids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/barbell-bench-press',
    },
    {
      _id: '7',
      name: 'Dumbbell Bench Press',
      sets: '3',
      reps: '10',
      intensity: '8kg', // Dumbbell default weight
      movementPattern: 'Press',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Dumbbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Pectorals, Triceps, Deltoids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/dumbbell-bench-press',
    },
    {
      _id: '8',
      name: 'Pull-Up',
      sets: '3',
      reps: '10',
      intensity: 'Bodyweight',
      movementPattern: 'Pull',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Latissimus Dorsi, Biceps, Rhomboids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/pull-up',
    },
    {
      _id: '9',
      name: 'Dumbbell Row',
      sets: '3',
      reps: '12',
      intensity: '8kg', // Dumbbell default weight
      movementPattern: 'Pull',
      plane: 'Sagittal',
      type: 'unilateral',
      toolsUsedInExercise: 'Dumbbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Latissimus Dorsi, Biceps, Rhomboids',
      primeMovers: 'Upper Body',
      videoUrl: 'https://example.com/dumbbell-row',
    },
    {
      _id: '10',
      name: 'Barbell Deadlift',
      sets: '3',
      reps: '8',
      intensity: '20kg', // Barbell default weight
      movementPattern: 'Hinge',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Barbell',
      tempo: '2-0-2',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Glutes, Hamstrings, Lower Back',
      primeMovers: 'Lower Body',
      videoUrl: 'https://example.com/barbell-deadlift',
    },
    {
      _id: '135135135135135',
      name: 'Push-Up',
      sets: '3',
      reps: '15',
      intensity: 'Bodyweight',
      movementPattern: 'Push',
      plane: 'Sagittal',
      type: 'bilateral',
      toolsUsedInExercise: 'Bodyweight',
      tempo: '1-1-1',
      videoStatus: 'Available',
      primaryMusclesWorked: 'Pectoralis Major, Deltoids, Triceps',
      primeMovers: 'Upper Body',
      videoUrl: 'https://youtube.com/shorts/45845gtPqEU?feature=share'
    }
  ];
  