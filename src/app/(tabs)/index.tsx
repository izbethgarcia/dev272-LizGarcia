import RecipeRow from "@/components/RecipeRow";
import { useCookedRecipes } from "@/context/CookedRecipesContext";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const { recipes } = useCookedRecipes();
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      recipe.mealType.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <FlatList
      data={filteredRecipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RecipeRow recipe={item} />}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No recipes match</Text>
      }
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>My Recipes</Text>

          <Pressable
            style={styles.addButton}
            onPress={() => router.push("/add")}
          >
            <Text style={styles.buttonText}>+ Add Recipe</Text>
          </Pressable>

          <View style={styles.searchRow}>
            <TextInput
              style={styles.input}
              placeholder="Search recipes"
              placeholderTextColor="#9C7B83"
              value={query}
              onChangeText={setQuery}
              autoCapitalize="none"
              returnKeyType="search"
              onSubmitEditing={() => setSearchQuery(query)}
            />

            <Pressable
              style={styles.searchButton}
              onPress={() => setSearchQuery(query)}
            >
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>

            <Pressable
              style={styles.clearButton}
              onPress={() => {
                setQuery("");
                setSearchQuery("");
              }}
            >
              <Text style={styles.buttonText}>Clear</Text>
            </Pressable>
          </View>
        </View>
      }
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingBottom: 32,
    gap: 12,
    backgroundColor: "#FFF7F5",
    flexGrow: 1,
  },

  header: {
    marginBottom: 12,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#704653",
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: "#EC4899",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },

  input: {
    flex: 1,
    minWidth: 0,
    borderWidth: 1,
    borderColor: "#D8B7BF",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#FFFFFF",
    color: "#35262B",
  },

  searchButton: {
    backgroundColor: "#DB2777",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  clearButton: {
    backgroundColor: "#BE185D",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  emptyText: {
    color: "#704653",
    paddingVertical: 16,
  },
});