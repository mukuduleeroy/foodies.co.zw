# Chicken Licken Structure Analysis

> Purpose: reverse-engineer publicly observable information architecture and reusable UX patterns from the Chicken Licken website as design inspiration. Do not copy Chicken Licken logos, imagery, copy, trademarks, proprietary source code, or brand assets.

## 1. Executive summary
The observable site architecture is built around a strong brand-led navigation system and a highly reusable menu taxonomy. The most important transferable patterns are:

- Global navigation connecting menu, store discovery, delivery, franchising and contact.
- A menu landing page built from many image-led category cards.
- Category pages with a clear “back to menu” relationship, category title, short supporting copy and product grids.
- Reusable product cards containing image, product name, variant/subtitle and price.
- Functional flows such as store discovery and multi-step contact selection.
- A consistent content shell that makes the menu taxonomy feel like one system.

The official public pages expose a large menu category index and repeat the same category navigation across individual category pages. Category pages then resolve into product collections. This is the key structural pattern to reproduce with original branding and assets.

## 2. Information architecture
Recommended inspired architecture:

/
├── Home
├── Menu
│   ├── Menu landing
│   └── Category detail
│       └── Product collection
├── Find a store
├── Delivery
├── Franchising
├── Talk to us
│   └── Contact topic selector
└── Legal / privacy

## 3. Menu architecture
The public menu pages demonstrate a two-level content model:

Level A — category discovery
- Large collection of categories.
- Every category is represented by a visual item.
- Category names are visually broken into stacked word groups.
- Category discovery is repeated on category pages, preserving navigation context.

Level B — category products
- Back navigation to the menu.
- Large category heading.
- Optional descriptive sentence or product rules.
- Region/menu switch where applicable.
- Repeating product card grid.

### Recommended data model
```ts
type MenuCategory = {
  id: string
  slug: string
  labelTop?: string
  labelBottom: string
  title: string
  description?: string
  image: string
  products: Product[]
}

type Product = {
  id: string
  slug: string
  name: string
  variant?: string
  description?: string
  price?: string
  image: string
  badge?: string
}
```

## 4. Category card structure
The reusable structural pattern should be:

```text
┌───────────────────────────────┐
│                               │
│          IMAGE AREA           │
│                               │
├───────────────────────────────┤
│ SMALL / TOP WORD              │
│ LARGE / MAIN CATEGORY WORD    │
└───────────────────────────────┘
```

Implementation principles:
- Treat the entire card as one link.
- Image must be contained by an overflow-hidden media frame.
- Typography must have a deliberate hierarchy.
- Avoid generic “card UI”; the card should feel editorial and graphic.
- Use CSS grid for predictable responsive repetition.

## 5. Product card structure
Recommended inspired anatomy:

```text
┌───────────────────────────────┐
│                               │
│       PRODUCT VISUAL          │
│                               │
├───────────────────────────────┤
│ PRODUCT NAME                  │
│ PRODUCT VARIANT               │
│ PRICE                         │
└───────────────────────────────┘
```

Rules:
- Product imagery receives the highest visual priority.
- Product metadata remains compact.
- Name and variant are independent fields.
- Price should have display emphasis without dominating the product image.
- Cards must support missing optional fields without layout collapse.

## 6. Page composition
### Menu landing
1. Global header.
2. Intro heading and supporting line.
3. Optional region selector.
4. Category card grid.
5. Footer/legal information.

### Category page
1. Global header.
2. Category navigation context.
3. Back link.
4. Category heading.
5. Description.
6. Optional region selector.
7. Product grid.
8. Disclaimer/footer.

### Contact flow
The public contact page demonstrates a useful progressive disclosure pattern:
1. Intro state.
2. User selects contact topic.
3. Topic-specific form state.
4. Optional attachment.
5. Submission state.
6. Alternate contact method.

Recreate this as a generic multi-step form, not a copy of the brand's exact wording.

## 7. Interaction principles
- Navigation should be immediate and obvious.
- Cards should have one dominant action.
- Hover should communicate affordance, not become decorative noise.
- Mobile interactions cannot depend on hover.
- Route changes should preserve user orientation.
- Scroll animation should reveal hierarchy gradually.
- Motion should use a consistent easing family.

## 8. Responsive behaviour
Mobile:
- One-column category/product flow by default.
- Compact header.
- Large touch targets.
- Horizontal overflow only where intentional.

Tablet:
- Two-column grids.
- Increased section spacing.

Desktop:
- Three or four columns depending on card width.
- Generous outer gutters.
- More prominent editorial typography.

## 9. What to replicate vs not replicate
### Replicate as abstract patterns
- Menu taxonomy.
- Category-to-product hierarchy.
- Image-led card system.
- Back-navigation pattern.
- Progressive contact flow.
- Strong typographic hierarchy.
- Consistent card motion.

### Do not copy
- Logos.
- Trademarks.
- Product photography.
- Written marketing copy.
- Proprietary illustrations.
- Source code.
- Exact brand colors as if they were your own design system.

## 10. Implementation target
Build an original restaurant framework whose visual grammar is inspired by:
- image-first category discovery;
- category pages that preserve menu context;
- structured product grids;
- clear transactional calls to action;
- playful but disciplined motion.

The result must be recognisably original in branding while achieving a comparable level of structure and usability.
