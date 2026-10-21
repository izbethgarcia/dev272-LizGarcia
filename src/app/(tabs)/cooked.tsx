
import { useCookedRecipes } from "@/context/CookedRecipesContext";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function CookedScreen() {
  const { recipes, cookedRecipeIds } = useCookedRecipes();

  const cookedRecipes = recipes.filter((recipe) =>
    cookedRecipeIds.includes(recipe.id)
  );

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.container}
      data={cookedRecipes}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text style={styles.title}>Cooked Recipes</Text>
      }
      ListEmptyComponent={
        <Text style={styles.emptyText}>
          You haven't marked any recipes as cooked yet.
        </Text>
      }
      renderItem={({ item }) => (
        <Pressable
          style={styles.row}
          onPress={() =>
            router.push({
              pathname: "/recipes/[id]",
              params: { id: item.id },
            })
          }
        >
          <Text style={styles.rowTitle}>{item.name}</Text>

          <View style={styles.categoryRow}>
            <Text style={styles.categoryTag}>{item.mealType}</Text>
            <Text style={styles.categoryTag}>{item.category}</Text>
          </View>

          <Text style={styles.time}>{item.time} minutes</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF7F5",
  },
  container: {
    padding: 16,
    paddingBottom: 32,
    flexGrow: 1,
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#704653",
    marginBottom: 12,
  },
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
    fontSize: 18,
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
  emptyText: {
    color: "#704653",
    fontSize: 15,
    lineHeight: 22,
  },
});
