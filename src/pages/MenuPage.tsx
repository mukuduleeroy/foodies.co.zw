import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";
import { filterTabs, menuCategories, pizzaSizes, type MenuFilter, type MenuItem, type PizzaItem, type PizzaSize } from "../data/menuData";

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

function MenuCategoryCard({ category }: { category: (typeof menuCategories)[number] }) {
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
