import { recipes as starterRecipes, type Recipe } from "@/data/recipes";
import { createContext, useContext, useState, type ReactNode } from "react";

type CookedRecipesContextType = {
  recipes: Recipe[];
  cookedRecipeIds: string[];
  toggleCooked: (id: string) => void;
  addRecipe: (recipe: Recipe) => void;
};

const CookedRecipesContext = createContext<
  CookedRecipesContextType | undefined
>(undefined);

export function CookedRecipesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [recipes, setRecipes] = useState<Recipe[]>(starterRecipes);
  const [cookedRecipeIds, setCookedRecipeIds] = useState<string[]>([]);

  function toggleCooked(id: string) {
    setCookedRecipeIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((recipeId) => recipeId !== id)
        : [...currentIds, id]
    );
  }

  function addRecipe(recipe: Recipe) {
    setRecipes((currentRecipes) => [...currentRecipes, recipe]);
  }

  return (
    <CookedRecipesContext.Provider
      value={{ recipes, cookedRecipeIds, toggleCooked, addRecipe }}
    >
      {children}
    </CookedRecipesContext.Provider>
  );
}

export function useCookedRecipes() {
  const context = useContext(CookedRecipesContext);

  if (!context) {
    throw new Error(
      "useCookedRecipes must be used inside CookedRecipesProvider"
    );
  }

  return context;
}