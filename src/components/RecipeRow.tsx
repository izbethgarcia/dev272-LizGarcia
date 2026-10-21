import type { Recipe } from "@/data/recipes";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

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

      <View style={styles.categoryRow}>
        <Text style={styles.categoryTag}>{recipe.mealType}</Text>
        <Text style={styles.categoryTag}>{recipe.category}</Text>
      </View>

      <Text style={styles.time}>{recipe.time} minutes</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8CBD2",
    marginBottom: 8,
    gap: 8,
  },
  rowTitle: {
    fontWeight: "700",
    fontSize: 18,
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 14,
    overflow: "hidden",
    fontSize: 13,
  },
  time: {
    color: "#806A70",
    fontSize: 14,
  },
});