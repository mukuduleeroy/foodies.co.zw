export type MenuFilter = "all" | "burgers" | "rotisserie" | "classic-pizza" | "deluxe-pizza" | "bakery";
export type PizzaSize = "reg" | "med" | "large";

export type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

export type PizzaItem = {
  name: string;
  prices: Record<PizzaSize, string>;
};

export type MenuCategory = {
  id: MenuFilter;
  title: string;
  image: string;
  alt: string;
  type: "list" | "pizza" | "tags";
  items?: MenuItem[];
  pizzaItems?: PizzaItem[];
  tags?: string[];
};

const image = (name: string) => `/foodies-images/${name}`;

export const filterTabs: { id: MenuFilter; label: string }[] = [
  { id: "all", label: "All Items" },
  { id: "burgers", label: "Burgers & Wraps" },
  { id: "rotisserie", label: "Rotisserie Chicken" },
  { id: "classic-pizza", label: "Classic Pizza" },
  { id: "deluxe-pizza", label: "Deluxe Pizza" },
  { id: "bakery", label: "Bakery" }
];

export const pizzaSizes: { id: PizzaSize; label: string }[] = [
  { id: "reg", label: "Reg" },
  { id: "med", label: "Med" },
  { id: "large", label: "Large" }
];

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    title: "Burgers & Wraps",
    image: image("menu-card-burgers.png"),
    alt: "Foodies burger and fries",
    type: "list",
    items: [
      { name: "Beef Burger", price: "$3.00" },
      { name: "Chicken Burger", price: "$2.50" },
      { name: "Beef Burger & Chips", price: "$4.00" },
      { name: "Chicken Burger & Chips", price: "$4.00" },
      { name: "Plain Wrap", price: "$3.00" },
      { name: "Spicy Wrap", price: "$3.00" },
      { name: "Hawaiian Wrap", price: "$3.50" },
      { name: "Double Beef Cheese Burger", price: "$4.00" },
      { name: "Double Chicken Cheese Burger", price: "$3.50" },
      { name: "Extra Cheese", price: "+ $0.50" },
      { name: "Extra Egg", price: "+ $0.25" }
    ]
  },
  {
    id: "rotisserie",
    title: "Rotisserie Chicken & Sides",
    image: image("menu-card-rotisserie.png"),
    alt: "Foodies chicken box with fries",
    type: "list",
    items: [
      { name: "Full Chicken", price: "$12.00" },
      { name: "Full Chicken Meal", price: "$14.00" },
      { name: "1/4 Chicken & Chips", price: "$4.00" },
      { name: "Coleslaw Salad", price: "$1.00" },
      { name: "Italian Salad", price: "$2.00" },
      { name: "Sweet Chilli Sauce", price: "$0.50" },
      { name: "Mayo Sauce", price: "$0.50" },
      { name: "BBQ Sauce", price: "$0.50" },
      { name: "Chilli Sauce", price: "$0.50" }
    ]
  },
  {
    id: "classic-pizza",
    title: "Classic Pizza",
    image: image("menu-card-classic.png"),
    alt: "Foodies classic pizza",
    type: "pizza",
    pizzaItems: [
      { name: "BBQ Steak", prices: { reg: "$4.00", med: "$6.00", large: "$9.00" } },
      { name: "Hawaiian", prices: { reg: "$4.00", med: "$6.00", large: "$9.00" } },
      { name: "Chicken & Mushroom", prices: { reg: "$4.00", med: "$6.00", large: "$9.00" } },
      { name: "Tropical Chicken", prices: { reg: "$4.00", med: "$6.00", large: "$9.00" } },
      { name: "Sweet Chilli", prices: { reg: "$4.00", med: "$6.00", large: "$9.00" } }
    ]
  },
  {
    id: "deluxe-pizza",
    title: "Deluxe Pizza",
    image: image("menu-card-deluxe-pizza.png"),
    alt: "Foodies deluxe pizza",
    type: "pizza",
    pizzaItems: [
      { name: "Meat Deluxe", prices: { reg: "$6.00", med: "$9.00", large: "$12.00" } },
      { name: "Foodies Supreme", prices: { reg: "$5.00", med: "$8.00", large: "$10.00" } },
      { name: "Cheese Burger Pizza", prices: { reg: "$5.00", med: "$8.00", large: "$10.00" } },
      { name: "Chicken Hawaiian", prices: { reg: "$5.00", med: "$8.00", large: "$10.00" } }
    ]
  },
  {
    id: "bakery",
    title: "Bakery & Desserts",
    image: image("menu-card-bakery-desserts.png"),
    alt: "Foodies dessert cup",
    type: "tags",
    tags: ["Scones", "Doughnuts", "Rolls", "Bread", "Queen Cakes", "Muffins", "Cakes", "Ice Cream"]
  }
];
