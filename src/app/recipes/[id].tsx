import { useCookedRecipes } from "@/context/CookedRecipesContext";
import { Stack, useLocalSearchParams } from "expo-router";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { recipes, cookedRecipeIds, toggleCooked } = useCookedRecipes();
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.detail}>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Stack.Screen
        options={{
          title: recipe.name,
          headerStyle: { backgroundColor: "#FFF7F5" },
          headerTintColor: "#704653",
        }}
      />

      <Text style={styles.title}>{recipe.name}</Text>

      <View style={styles.categoryRow}>
        <Text style={styles.categoryTag}>{recipe.mealType}</Text>
        <Text style={styles.categoryTag}>{recipe.category}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Cooking Time</Text>
        <Text style={styles.detail}>{recipe.time} minutes</Text>

        <Text style={styles.sectionTitle}>Vegetarian</Text>
        <Text style={styles.detail}>
          {recipe.vegetarian ? "Yes" : "No"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <Text style={styles.detail}>{recipe.ingredients}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.detail}>{recipe.instructions}</Text>
      </View>

      {recipe.notes.trim() !== "" && (
        <View style={styles.notesCard}>
          <Text style={styles.sectionTitle}>Personal Notes</Text>
          <Text style={styles.detail}>{recipe.notes}</Text>
        </View>
      )}

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF7F5",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#704653",
  },
  categoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryTag: {
    backgroundColor: "#F8E5EA",
    color: "#704653",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 16,
    overflow: "hidden",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8CBD2",
    borderRadius: 14,
    padding: 16,
    gap: 8,
  },
  notesCard: {
    backgroundColor: "#F9E9EC",
    borderWidth: 1,
    borderColor: "#E8CBD2",
    borderRadius: 14,
    padding: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#704653",
    marginTop: 4,
  },
  detail: {
    fontSize: 16,
    lineHeight: 24,
    color: "#49363D",
  },
  button: {
    backgroundColor: "#DB2777",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});