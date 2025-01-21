// import { z, ZodType } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";


// const OrdinaryFormSchema: ZodType = z.object({
//   name: z.string(),
//   bodyWeight: z.string(),
//   goal: z.string().array().optional(),
//   message: z.string(),
//   exercisesYouEnjoy: z.string().array().optional(),
//   email: z.string().email(),
// });

// type OrdinaryFormValues = z.infer<typeof OrdinaryFormSchema>;

// export const OrdinaryForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<OrdinaryFormValues>({
//     resolver: zodResolver(OrdinaryFormSchema),
//   });

//   const onSubmit = (data: OrdinaryFormValues) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input {...register("email")} />
//       {errors.email && <p>{errors.email.message}</p>}

//       <input type="password" {...register("password")} />
//       {errors.password && <p>{errors.password.message}</p>}

//       <input type="number" {...register("age", { valueAsNumber: true })} />
//       {errors.age && <p>{errors.age.message}</p>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
