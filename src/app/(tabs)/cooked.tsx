import { useCookedRecipes } from "@/context/CookedRecipesContext";
import { recipes } from "@/data/recipes";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function CookedScreen() {
const { cookedRecipeIds } = useCookedRecipes();

const cookedRecipes = recipes.filter((recipe) =>
cookedRecipeIds.includes(recipe.id)
);

return (
<View style={styles.container}>
<Text style={styles.title}>Cooked Recipes</Text>

  {cookedRecipes.length === 0 ? (
    <Text>You haven't marked any recipes as cooked yet.</Text>
  ) : (
    <FlatList
      data={cookedRecipes}
      keyExtractor={(item) => item.id}
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
          <Text>
            {item.category} • {item.time}
          </Text>
        </Pressable>
      )}
    />
  )}
</View>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
},
title: {
fontSize: 28,
fontWeight: "600",
marginBottom: 16,
},
row: {
padding: 16,
marginBottom: 12,
backgroundColor: "#f2f2f2",
borderRadius: 8,
},
rowTitle: {
fontSize: 18,
fontWeight: "600",
marginBottom: 4,
},
});