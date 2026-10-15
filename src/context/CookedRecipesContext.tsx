import { createContext, useContext, useState, type ReactNode } from "react";

type CookedRecipesContextType = {
  cookedRecipeIds: string[];
  toggleCooked: (id: string) => void;
};

const CookedRecipesContext = createContext<CookedRecipesContextType | undefined>(
  undefined
);

export function CookedRecipesProvider({ children }: { children: ReactNode }) {
  const [cookedRecipeIds, setCookedRecipeIds] = useState<string[]>([]);

  function toggleCooked(id: string) {
    setCookedRecipeIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((recipeId) => recipeId !== id)
        : [...currentIds, id]
    );
  }

  return (
    <CookedRecipesContext.Provider
      value={{ cookedRecipeIds, toggleCooked }}
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