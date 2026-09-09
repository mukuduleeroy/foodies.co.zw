import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, Plus, Search } from "lucide-react";
import { menuCategories } from "../data/menuData";

type SearchResult = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  alt: string;
  keywords: string;
};

const suggestions = ["Burger", "Pizza", "Chicken", "Wrap", "Dessert", "Sauce"];

const searchResults: SearchResult[] = menuCategories.flatMap((category) => {
  if (category.type === "pizza") {
    return (category.pizzaItems ?? []).map((item) => ({
      id: `${category.id}-${item.name}`,
      name: item.name,
      category: category.title,
      price: `Reg ${item.prices.reg} / Med ${item.prices.med} / Large ${item.prices.large}`,
      image: category.image,
      alt: category.alt,
      keywords: `${item.name} ${category.title} pizza regular medium large`
    }));
  }

  if (category.type === "tags") {
    return (category.tags ?? []).map((tag) => ({
      id: `${category.id}-${tag}`,
      name: tag,
      category: category.title,
      price: "Inquire for daily price",
      image: category.image,
      alt: category.alt,
      keywords: `${tag} ${category.title} bakery dessert sweet`
    }));
  }

  return (category.items ?? []).map((item) => ({
    id: `${category.id}-${item.name}`,
    name: item.name,
    category: category.title,
    price: item.price ?? "Inquire for price",
    image: category.image,
    alt: category.alt,
    keywords: `${item.name} ${category.title} ${item.price ?? ""}`
  }));
});

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const [input, setInput] = React.useState(urlQuery);

  React.useEffect(() => {
    setInput(urlQuery);
  }, [urlQuery]);

  const query = input.trim().toLowerCase();
  const filteredResults = React.useMemo(() => {
    if (!query) {
      return searchResults;
    }

    return searchResults.filter((result) => result.keywords.toLowerCase().includes(query));
  }, [query]);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = input.trim();

    if (nextQuery) {
      setSearchParams({ q: nextQuery });
      return;
    }

    setSearchParams({});
  }

  function chooseSuggestion(suggestion: string) {
    setInput(suggestion);
    setSearchParams({ q: suggestion });
  }

  return (
    <main className="search-page">
      <section className="search-hero" aria-labelledby="search-page-title">
        <span className="search-rule" aria-hidden="true"></span>
        <p>Find your Foodies favourite</p>
        <h1 id="search-page-title">Search Menu</h1>
      </section>

      <section className="search-panel" aria-label="Search Foodies menu">
        <form className="search-form" onSubmit={submitSearch}>
          <label className="sr-only" htmlFor="menu-search">
            Search by meal, category, or sauce
          </label>
          <Search size={24} aria-hidden="true" />
          <input
            id="menu-search"
            type="search"
            value={input}
            placeholder="Search burgers, pizza, chicken..."
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="search-suggestions" aria-label="Popular searches">
          {suggestions.map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => chooseSuggestion(suggestion)}>
              {suggestion}
            </button>
          ))}
        </div>
      </section>

      <section className="search-results-wrap" aria-live="polite">
        <div className="search-summary">
          <span>{filteredResults.length} result{filteredResults.length === 1 ? "" : "s"}</span>
          <Link to="/menu">
            View full menu
            <ChevronRight size={18} />
          </Link>
        </div>

        {filteredResults.length > 0 ? (
          <div className="search-results-grid">
            {filteredResults.map((result) => (
              <article className="search-result-card" key={result.id}>
                <div className="search-result-image">
                  <img src={result.image} alt={result.alt} />
                </div>
                <div className="search-result-copy">
                  <span>{result.category}</span>
                  <h2>{result.name}</h2>
                  <strong>{result.price}</strong>
                  <button type="button" aria-label={`Add ${result.name}`}>
                    <Plus size={16} />
                    Add
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="search-empty">
            <Search size={34} aria-hidden="true" />
            <h2>No matches found</h2>
            <p>Try pizza, burger, chicken, wrap, dessert, or sauce.</p>
          </div>
        )}
      </section>
    </main>
  );
}
