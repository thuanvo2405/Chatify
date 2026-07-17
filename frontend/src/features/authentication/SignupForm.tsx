import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { UserRoundPlus } from "lucide-react";

const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(1, "You should enter your name")
      .max(32, "Your name must be at most 32 characters"),
    email: z.string().email("Invalid email").toLowerCase(),
    password: z
      .string()
      .min(8, "Your password must be at least 8 characters")
      .max(40, "Your password must be at most 40 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Password is not the same as confirm password",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupFormSchema>;

function SignupForm() {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignupFormValues) {
    console.log(data);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mx-auto mt-8 w-3/5 space-y-6"
    >
      <FieldGroup>
        {/* Username */}
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Username</FieldLabel>

              <Input placeholder="John Doe" {...field} />

              <FieldError>{fieldState.error?.message}</FieldError>
            </Field>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>

              <Input type="email" placeholder="john@example.com" {...field} />

              <FieldError>{fieldState.error?.message}</FieldError>
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Password</FieldLabel>

              <Input type="password" {...field} />

              <FieldError>{fieldState.error?.message}</FieldError>
            </Field>
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Confirm password</FieldLabel>

              <Input type="password" {...field} />

              <FieldError>{fieldState.error?.message}</FieldError>
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        variant="doodle"
        size="lg"
        type="submit"
        className="w-full text-lg font-bold"
      >
        Sign up <UserRoundPlus className="text-lg font-bold" />
      </Button>
    </form>
  );
}

export default SignupForm;
