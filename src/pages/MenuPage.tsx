import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";

type MenuFilter = "all" | "burgers" | "rotisserie" | "classic-pizza" | "deluxe-pizza" | "bakery";
type PizzaSize = "reg" | "med" | "large";

type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

type PizzaItem = {
  name: string;
  prices: Record<PizzaSize, string>;
};

type MenuCategory = {
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

const filterTabs: { id: MenuFilter; label: string }[] = [
  { id: "all", label: "All Items" },
  { id: "burgers", label: "Burgers & Wraps" },
  { id: "rotisserie", label: "Rotisserie Chicken" },
  { id: "classic-pizza", label: "Classic Pizza" },
  { id: "deluxe-pizza", label: "Deluxe Pizza" },
  { id: "bakery", label: "Bakery" }
];

const pizzaSizes: { id: PizzaSize; label: string }[] = [
  { id: "reg", label: "Reg" },
  { id: "med", label: "Med" },
  { id: "large", label: "Large" }
];

const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    title: "Burgers & Wraps",
    image: image("menu-card-burgers-wraps.png"),
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
    image: image("menu-card-classic-pizza.png"),
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

function MenuListItem({ item }: { item: MenuItem }) {
  return (
    <li className="menu-item-row">
      <span>{item.name}</span>
      <i aria-hidden="true"></i>
      <strong>{item.price}</strong>
      <button type="button" aria-label={`Add ${item.name}`}>
        <Plus size={15} />
        Add
      </button>
    </li>
  );
}

function PizzaMenu({ items }: { items: PizzaItem[] }) {
  const [size, setSize] = React.useState<PizzaSize>("reg");

  return (
    <>
      <div className="pizza-size-tabs" aria-label="Pizza size">
        {pizzaSizes.map((pizzaSize) => (
          <button
            className={size === pizzaSize.id ? "active" : ""}
            key={pizzaSize.id}
            type="button"
            onClick={() => setSize(pizzaSize.id)}
          >
            {pizzaSize.label}
          </button>
        ))}
      </div>
      <ul className="menu-item-list">
        {items.map((item) => (
          <MenuListItem key={item.name} item={{ name: item.name, price: item.prices[size] }} />
        ))}
      </ul>
    </>
  );
}

function MenuCategoryCard({ category }: { category: MenuCategory }) {
  return (
    <article className="menu-category-card">
      <div className="menu-card-copy">
        <h2>{category.title}</h2>
        {category.type === "list" && (
          <ul className="menu-item-list">
            {category.items?.map((item) => (
              <MenuListItem key={item.name} item={item} />
            ))}
          </ul>
        )}
        {category.type === "pizza" && <PizzaMenu items={category.pizzaItems ?? []} />}
        {category.type === "tags" && (
          <div className="bakery-tags">
            {category.tags?.map((tag) => (
              <button key={tag} type="button">
                <Plus size={14} />
                {tag}
              </button>
            ))}
            <span>Inquire for Daily Price</span>
          </div>
        )}
        <Link className="menu-card-link" to={`/menu/${category.id}`}>
          View menu
          <ChevronRight size={18} />
        </Link>
      </div>
      <img src={category.image} alt={category.alt} />
    </article>
  );
}

export function MenuPage() {
  const [activeFilter, setActiveFilter] = React.useState<MenuFilter>("all");
  const filteredCategories =
    activeFilter === "all" ? menuCategories : menuCategories.filter((category) => category.id === activeFilter);

  return (
    <main className="menu-page">
      <section className="menu-page-hero" aria-labelledby="menu-page-title">
        <span className="menu-page-rule" aria-hidden="true"></span>
        <h1 id="menu-page-title">Get Your Foodies On</h1>
        <p>Time for some soul food.</p>
      </section>

      <nav className="menu-filter-tabs" aria-label="Menu categories">
        {filterTabs.map((tab) => (
          <button
            className={activeFilter === tab.id ? "active" : ""}
            key={tab.id}
            type="button"
            onClick={() => setActiveFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="menu-grid" aria-label="Foodies menu cards">
        {filteredCategories.map((category) => (
          <MenuCategoryCard category={category} key={category.id} />
        ))}
      </section>
    </main>
  );
}
