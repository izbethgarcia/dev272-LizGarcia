import { z } from "zod";

export const recipeSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Recipe name must be at least 2 characters long"),

  mealType: z.enum(["Breakfast", "Lunch", "Dinner"], {
    error: "Please select a meal type",
  }),

  category: z.enum(["Mexican", "Asian", "Italian", "Vegetarian", "Other"], {
    error: "Please select a cuisine or type",
  }),

  time: z
    .number({ error: "Cooking time must be a number" })
    .int("Cooking time must be a whole number")
    .min(1, "Cooking time must be at least 1 minute")
    .max(600, "Cooking time cannot exceed 600 minutes"),

  ingredients: z
    .string()
    .trim()
    .min(1, "Please enter the ingredients"),

  instructions: z
    .string()
    .trim()
    .min(1, "Please enter the instructions"),

  vegetarian: z.boolean(),

  notes: z.string(),
});

export type RecipeFormData = z.infer<typeof recipeSchema>;