import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { InputField, TextAreaField } from "./FormComponents";

const ContactMeFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactMeFormValues = z.infer<typeof ContactMeFormSchema>;

export const ContactMeFormComponent = () => {
  const { register, handleSubmit, formState } = useForm<ContactMeFormValues>({
    resolver: zodResolver(ContactMeFormSchema),
  });

  const onSubmit: SubmitHandler<ContactMeFormValues> = async (data) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto pt-48"
      >
        <InputField<ContactMeFormValues>
          name="email"
          register={register}
          error={formState.errors.email}
          type="email"
          placeholder="Email"
        />
        <TextAreaField<ContactMeFormValues>
          name="message"
          register={register}
          error={formState.errors.message}
          placeholder="Message"
          rows={5}
        />
        <div className="flex">
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="px-6 py-3 text-lg place-items-center"
          >
            {formState.isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
