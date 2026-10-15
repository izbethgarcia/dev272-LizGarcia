import RecipeRow from "@/components/RecipeRow";
import { recipes } from "@/data/recipes";
import { useState } from "react";
import {
  FlatList, Pressable, StyleSheet, Text, TextInput, View
} from "react-native";

export default function Index() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("")
  const filteredRecipes = recipes.filter(
    (recipe) => 
      recipe.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
);
    

  return (
    <FlatList
      data={filteredRecipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RecipeRow recipe={item} />}
      ListEmptyComponent={<Text>No recipes match</Text>}
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
          onPress={() => setSearchQuery(query)}
        >
          <Text style={styles.buttonText}>Search</Text>
      </Pressable>

        <Pressable
         style={styles.button}
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


});