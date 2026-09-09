import { PageShell, PlaceholderSection } from "./PageShell";

export function SearchPage() {
  return (
    <PageShell
      eyebrow="Search Foodies"
      title="Search"
      intro="This page is ready for product search, filtered results, and no-result states."
    >
      <PlaceholderSection title="Search Input" description="The main search form and URL query handling will go here." />
      <PlaceholderSection title="Result Summary" description="A compact summary for matching products, categories, or suggestions." />
      <PlaceholderSection title="Results Grid" description="Search results will reuse the final menu product card component." />
      <PlaceholderSection title="Empty State" description="Helpful suggestions will show when no matching products are found." />
    </PageShell>
  );
}
