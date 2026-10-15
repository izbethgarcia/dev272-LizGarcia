import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
return (
<Tabs>
<Tabs.Screen
name="index"
options={{
title: "My Recipes",
tabBarIcon: ({ color, size }) => (
<Ionicons name="book-outline" size={size} color={color} />
),
}}
/>

  <Tabs.Screen
    name="cooked"
    options={{
      title: "Cooked Recipes",
      tabBarIcon: ({ color, size }) => (
        <Ionicons
          name="checkmark-circle-outline"
          size={size}
          color={color}
        />
      ),
    }}
  />
</Tabs>

);
}