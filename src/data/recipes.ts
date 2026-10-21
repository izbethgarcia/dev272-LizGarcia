export type Recipe = {
  id: string;
  name: string;
  mealType: string;
  category: string;
  time: number;
  ingredients: string;
  instructions: string;
  vegetarian: boolean;
  notes: string;
};

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Chicken fajitas",
    mealType: "Dinner",
    category: "Mexican",
    time: 30,
    ingredients: "Chicken, bell peppers, onion, tortillas, oil, and fajita seasoning.",
    instructions: "Slice the chicken and vegetables. Cook the chicken in a pan, add the vegetables and seasoning, and serve with warm tortillas.",
    vegetarian: false,
    notes: "",
  },
  {
    id: "2",
    name: "Spaghetti Carbonara",
    mealType: "Dinner",
    category: "Italian",
    time: 30,
    ingredients: "Spaghetti, eggs, Parmesan cheese, bacon, and black pepper.",
    instructions: "Cook the spaghetti. Cook the bacon separately. Mix the hot pasta with beaten eggs and Parmesan, then stir in the bacon and pepper.",
    vegetarian: false,
    notes: "",
  },
  {
    id: "3",
    name: "Chicken Fried Rice",
    mealType: "Dinner",
    category: "Asian",
    time: 25,
    ingredients: "Cooked rice, chicken, eggs, peas, carrots, soy sauce, and oil.",
    instructions: "Cook the chicken in a pan. Add the vegetables and eggs, then stir in the rice and soy sauce until everything is heated through.",
    vegetarian: false,
    notes: "",
  },
  {
    id: "4",
    name: "Avocado Toast",
    mealType: "Breakfast",
    category: "Other",
    time: 10,
    ingredients: "Bread, avocado, salt, pepper, and lemon juice.",
    instructions: "Toast the bread. Mash the avocado with lemon juice, salt, and pepper, then spread it over the toast.",
    vegetarian: true,
    notes: "",
  },
  {
    id: "5",
    name: "Beef Burritos",
    mealType: "Dinner",
    category: "Mexican",
    time: 35,
    ingredients: "Ground beef, tortillas, cooked rice, beans, cheese, and taco seasoning.",
    instructions: "Cook the beef with taco seasoning. Fill each tortilla with beef, rice, beans, and cheese, then fold into a burrito.",
    vegetarian: false,
    notes: "",
  },
  {
    id: "6",
    name: "Vegetable Stir Fry",
    mealType: "Dinner",
    category: "Vegetarian",
    time: 20,
    ingredients: "Broccoli, bell peppers, carrots, soy sauce, garlic, and oil.",
    instructions: "Chop the vegetables. Heat oil in a pan, cook the garlic and vegetables until tender, and add soy sauce.",
    vegetarian: true,
    notes: "",
  },
  {
    id: "7",
    name: "Blueberry Pancakes",
    mealType: "Breakfast",
    category: "Other",
    time: 20,
    ingredients: "Flour, milk, egg, baking powder, blueberries, and sugar.",
    instructions: "Mix the flour, milk, egg, baking powder, and sugar. Fold in the blueberries and cook pancakes on a lightly greased pan.",
    vegetarian: true,
    notes: "",
  },
  {
    id: "8",
    name: "Chicken Alfredo",
    mealType: "Dinner",
    category: "Italian",
    time: 35,
    ingredients: "Pasta, chicken, cream, Parmesan cheese, garlic, and butter.",
    instructions: "Cook the pasta and chicken. Melt butter with garlic, add cream and Parmesan to make the sauce, then combine with the chicken and pasta.",
    vegetarian: false,
    notes: "",
  },
];