import { useCookedRecipes } from "@/context/CookedRecipesContext";
import {
    recipeSchema,
    type RecipeFormData,
} from "@/utils/recipeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";

const mealTypes = ["Breakfast", "Lunch", "Dinner"];
const categories = ["Mexican", "Asian", "Italian", "Vegetarian", "Other"];

export default function AddRecipe() {
  const { addRecipe } = useCookedRecipes();
  const [submitError, setSubmitError] = useState("");

  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RecipeFormData>({
    resolver: zodResolver(recipeSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      mealType: undefined,
      category: undefined,
      time: 30,
      ingredients: "",
      instructions: "",
      vegetarian: false,
      notes: "",
    },
  });

  function onSubmit(values: RecipeFormData) {
    try {
      addRecipe({
        id: Date.now().toString(),
        ...values,
      });
      router.back();
    } catch {
      setSubmitError("Could not save the recipe. Please try again.");
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Add Recipe</Text>

        <Text style={styles.label}>Recipe Name *</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter recipe name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => setFocus("time")}
            />
          )}
        />
        {errors.name && (
          <Text style={styles.error}>{errors.name.message}</Text>
        )}

        <Text style={styles.label}>Meal Type *</Text>
        <Controller
          control={control}
          name="mealType"
          render={({ field: { onChange, value } }) => (
            <View style={styles.chipRow}>
              {mealTypes.map((mealType) => (
                <Pressable
                  key={mealType}
                  style={[
                    styles.chip,
                    value === mealType && styles.selectedChip,
                  ]}
                  onPress={() => onChange(mealType)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      value === mealType && styles.selectedChipText,
                    ]}
                  >
                    {mealType}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        />
        {errors.mealType && (
          <Text style={styles.error}>{errors.mealType.message}</Text>
        )}

        <Text style={styles.label}>Cuisine or Type *</Text>
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value } }) => (
            <View style={styles.chipRow}>
              {categories.map((category) => (
                <Pressable
                  key={category}
                  style={[
                    styles.chip,
                    value === category && styles.selectedChip,
                  ]}
                  onPress={() => onChange(category)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      value === category && styles.selectedChipText,
                    ]}
                  >
                    {category}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        />
        {errors.category && (
          <Text style={styles.error}>{errors.category.message}</Text>
        )}

        <Text style={styles.label}>Cooking Time (minutes) *</Text>
        <Controller
          control={control}
          name="time"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="For example, 30"
              value={String(value ?? "")}
              onChangeText={(text) => {
              if (text === "") {
                onChange(undefined);
             } else if (/^\d+$/.test(text)) {
                onChange(Number(text));
             }
            }}
              onBlur={onBlur}
              keyboardType="number-pad"
              returnKeyType="done"
              selectTextOnFocus
            />
          )}
        />
        {errors.time && (
          <Text style={styles.error}>{errors.time.message}</Text>
        )}

        <Text style={styles.label}>Ingredients *</Text>
        <Controller
          control={control}
          name="ingredients"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="List your ingredients"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              multiline
              textAlignVertical="top"
              returnKeyType="next"
              blurOnSubmit
              onSubmitEditing={() => setFocus("instructions")}
            />
          )}
        />
        {errors.ingredients && (
          <Text style={styles.error}>{errors.ingredients.message}</Text>
        )}

        <Text style={styles.label}>Instructions *</Text>
        <Controller
          control={control}
          name="instructions"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Explain how to prepare the recipe"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              multiline
              textAlignVertical="top"
              returnKeyType="next"
              blurOnSubmit
              onSubmitEditing={() => setFocus("notes")}
            />
          )}
        />
        {errors.instructions && (
          <Text style={styles.error}>{errors.instructions.message}</Text>
        )}

        <View style={styles.switchRow}>
          <Text style={styles.label}>Vegetarian?</Text>
          <Controller
            control={control}
            name="vegetarian"
            render={({ field: { onChange, value } }) => (
              <Switch value={value} onValueChange={onChange} />
            )}
          />
        </View>

        <Text style={styles.label}>Personal Notes (optional)</Text>
        <Controller
          control={control}
          name="notes"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Example: Cook for 15 more minutes"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              multiline
              textAlignVertical="top"
              returnKeyType="done"
              blurOnSubmit
            />
          )}
        />

        {submitError !== "" && (
          <Text style={styles.error}>{submitError}</Text>
        )}

        <Pressable
          style={styles.saveButton}
          disabled={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.saveButtonText}>
            {isSubmitting ? "Saving..." : "Save Recipe"}
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F5",
  },
  content: {
    padding: 16,
    paddingBottom: 40,
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#704653",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#704653",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D8B7BF",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#FFFFFF",
    color: "#35262B",
  },
  multiline: {
    minHeight: 90,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    borderWidth: 1,
    borderColor: "#D8B7BF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#F9E9EC",
  },
  selectedChip: {
     backgroundColor: "#DB2777",
  borderColor: "#DB2777",
  },
  chipText: {
    color: "#704653",
  },
  selectedChipText: {
    color: "#FFFFFF",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  error: {
    color: "#B42345",
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: "#EC4899",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});