import { z } from "zod";
// Creating an object schema
export const RegisterFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    age: z.number().min(1, { message: "Age is required" }),
    password: z.string().min(6, { message: "Password is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
  })
  .required();
