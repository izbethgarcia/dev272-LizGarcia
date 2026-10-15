import type { Recipe } from "@/data/recipes";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export default function RecipeRow({ recipe }: { recipe: Recipe }) {
  return (
    <Pressable
      style={styles.row}
      onPress={() =>
        router.push({
          pathname: "/recipes/[id]",
          params: { id: recipe.id },
        })
      }
    >
      <Text style={styles.rowTitle}>{recipe.name}</Text>
      <Text>
        {recipe.category} • {recipe.time}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
  },
  rowTitle: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 4,
  },
});