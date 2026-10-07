export type Recipe = {
  id: string;
  name: string;
  category: string;
  time: string;
};

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Chicken fajitas",
    category: "Mexican",
    time: "30 minutes",
  },
  {
    id: "2",
    name: "Spaghetti Carbonara",
    category: "Italian",
    time: "30 minutes",
  },
  {
    id: "3",
    name: "Chicken Fried Rice",
    category: "Asian",
    time: "25 minutes",
  },
  {
    id: "4",
    name: "Avocado Toast",
    category: "Breakfast",
    time: "10 minutes",
  },
  {
    id: "5",
    name: "Beef Burritos",
    category: "Mexican",
    time: "35 minutes",
  },
  {
    id: "6",
    name: "Vegetable Stir Fry",
    category: "Vegetarian",
    time: "20 minutes",
  },
  {
    id: "7",
    name: "Blueberry Pancakes",
    category: "Breakfast",
    time: "20 minutes",
  },
  {
    id: "8",
    name: "Chicken Alfredo",
    category: "Italian",
    time: "35 minutes",
  },
];