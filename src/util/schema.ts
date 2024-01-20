import { z } from "zod";
// Creating an object schema
export const RegisterFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    age: z.coerce.number().min(1, { message: "Age is required" }),
    password: z
      .string()
      .min(6, { message: "Password min length of 6 characters" })
      .max(12, { message: "Password max length of 12 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password min length of 6 characters" })
      .max(12, { message: "Confirm Password max length of 12 characters" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
