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

import { MoveRight } from "lucide-react";

const loginFormSchema = z.object({
  email: z.string().email("Invalid email").toLowerCase(),
  password: z
    .string()
    .min(8, "Your password must be at least 8 characters")
    .max(40, "Your password must be at most 40 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormValues) {
    console.log(data);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mx-auto mt-8 w-3/5 space-y-6"
    >
      <FieldGroup>
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
      </FieldGroup>

      <Button
        variant="doodle"
        size="lg"
        type="submit"
        className="w-full text-lg font-bold"
      >
        Login <MoveRight />
      </Button>
    </form>
  );
}

export default LoginForm;
