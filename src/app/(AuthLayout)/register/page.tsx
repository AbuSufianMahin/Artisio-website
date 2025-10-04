"use client"

import { Button } from '@/Components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from '@/Components/ui/field'
import { Input } from '@/Components/ui/input'
import Link from 'next/link'
import { useForm } from 'react-hook-form';

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormValues>();

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Form submitted:", data);
  };

  const password = watch("password");

  
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="gap-3">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 text-center mb-4">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your details below to register a new account
          </p>
        </div>

        {/* Name Field */}
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm ml-1">{errors.name.message}</span>
          )}
        </Field>

        {/* Email Field */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            placeholder="m@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm ml-1">{errors.email.message}</span>
          )}
        </Field>

        {/* Password Field */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm ml-1">{errors.password.message}</span>
          )}
        </Field>

        {/* Confirm Password Field */}
        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm ml-1">{errors.confirmPassword.message}</span>
          )}
        </Field>

        {/* Submit Button */}
        <Field>
          <Button type="submit">Register</Button>
        </Field>

        {/* Separator */}
        <FieldSeparator className="my-2">Or</FieldSeparator>

        {/* Social Login */}
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Continue with GitHub
          </Button>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>

  )
}

export default RegisterPage