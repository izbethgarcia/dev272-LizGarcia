import { CookedRecipesProvider } from "@/context/CookedRecipesContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <CookedRecipesProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="add"
          options={{ title: "Add Recipe" }}
        />
        <Stack.Screen
          name="recipes/[id]"
          options={{ title: "Recipe Details" }}
        />
      </Stack>
    </CookedRecipesProvider>
  );
}
