import { PageShell, PlaceholderSection } from "./PageShell";

export function MenuPage() {
  return (
    <PageShell
      eyebrow="Foodies menu"
      title="Menu"
      intro="A dedicated menu page structure is ready for categories, meals, product details, and ordering prompts."
    >
      <PlaceholderSection title="Menu Hero" description="Reference-led page hero and featured food artwork will go here." />
      <PlaceholderSection title="Category Navigation" description="Tabs or category cards for pizzas, burgers, chicken boxes, sides, and desserts." />
      <PlaceholderSection title="Product Grid" description="Reusable product cards with images, names, descriptions, and prices." />
      <PlaceholderSection title="Menu Callout" description="A promotional strip or ordering section can be added here." />
    </PageShell>
  );
}
