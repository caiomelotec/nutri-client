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

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email adress"),
  password: z.string().min(6, { message: "Password is required" }),
});

export const AddFoodFormSchema = z
  .object({
    name: z.string().min(1, { message: "Food name is required" }),
    calories: z.coerce.number().min(1, { message: "Calories is required" }),
    carbohydrates: z.coerce
      .number()
      .min(1, { message: "Carbohydrates is required" }),
    fat: z.coerce.number().min(1, { message: "Fat is required" }),
    protein: z.coerce.number().min(1, { message: "Protein is required" }),
    fiber: z.coerce.number().min(1, { message: "Fiber is required" }),
  })
  .required();
