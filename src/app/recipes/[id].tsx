import { useCookedRecipes } from "@/context/CookedRecipesContext";
import { recipes } from "@/data/recipes";
import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { cookedRecipeIds, toggleCooked } = useCookedRecipes();
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: recipe.name }} />

      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.detail}>Category: {recipe.category}</Text>
      <Text style={styles.detail}>Cooking time: {recipe.time}</Text>
      <Pressable
  style={styles.button}
  onPress={() => toggleCooked(recipe.id)}
>
  <Text style={styles.buttonText}>
    {cookedRecipeIds.includes(recipe.id)
      ? "Mark as not cooked"
      : "Mark as cooked"}
  </Text>
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  detail: {
    fontSize: 18,
  },
  button: {
  backgroundColor: "#ff7a1a",
  padding: 12,
  borderRadius: 8,
  alignItems: "center",
  marginTop: 12,
},
buttonText: {
  color: "#fff",
  fontWeight: "600",
},
});