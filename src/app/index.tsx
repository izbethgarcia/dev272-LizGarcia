import { recipes, type Recipe } from "@/data/recipes";
import { useState } from "react";
import {
  FlatList, Pressable, StyleSheet, Text, TextInput, View
} from "react-native";

export default function Index() {
  const [query, setQuery] = useState("");

  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RecipeRow recipe={item} />}
      ListHeaderComponent={
        <View>
          <Text style={styles.title}>My Recipes</Text>

          <View style={styles.searchRow}>
            <TextInput
              style={styles.input}
              placeholder="Search recipes"
              value={query}
              onChangeText={setQuery}
              autoCapitalize="none"
              returnKeyType="search"
            />

            <Pressable
              style={styles.button}
              onPress={() => console.log("Search:", query)}
            >
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          </View>
        </View>
      }
      contentContainerStyle={styles.list}
    />
  );
}

function RecipeRow({ recipe }: { recipe: Recipe }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowTitle}>{recipe.name}</Text>
      <Text>
        {recipe.category} • {recipe.time}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 8,
  },

  searchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#9ca3af",
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },

  button: {
    backgroundColor: "#ff7a1a",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

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