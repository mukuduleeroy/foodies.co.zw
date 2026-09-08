# Component Specification

## Global rules
- Components accept data rather than embedding menu content.
- Every interactive component supports keyboard navigation.
- Images require meaningful alt text unless decorative.
- Repeated styling belongs to tokens or component classes.

## Header
### Props
- logo
- navigation items
- primary CTA
- mobile menu state

### Behaviour
Desktop:
- horizontal navigation.
Mobile:
- compact trigger.
- overlay or drawer.
- lock body scroll when appropriate.

## CategoryCard
### Props
```ts
{
  href: string
  image: string
  eyebrow?: string
  title: string
  alt: string
}
```

### Structure
```text
Link
└── Article
    ├── Media
    │   └── Image
    └── Content
        ├── Eyebrow
        └── Title
```

### Motion
- Card lift: max 6px.
- Image scale: max 1.05.
- No layout shift.

## ProductCard
### Props
```ts
{
  product: {
    name: string
    variant?: string
    price?: string
    image: string
    href?: string
  }
}
```

### Behaviour
- Image first.
- Metadata below.
- Entire card link if product has detail route.

## MenuGrid
Receives category or product collection.
Responsibilities:
- Responsive columns.
- Consistent gaps.
- Optional animation stagger.
Must not contain business data.

## Hero
### Slots
- eyebrow
- heading
- description
- actions
- media

### Motion sequence
1. eyebrow
2. heading
3. description
4. actions
5. media

## StoreFinder
### States
- idle
- searching
- results
- empty
- error

### Inputs
- text search
- location permission where applicable

Do not block users from manually searching if geolocation is denied.

## MultiStepContact
### Steps
1. topic
2. details
3. optional attachment
4. confirmation

Requirements:
- preserve entered values.
- accessible validation.
- back navigation between steps.
- clear success state.

## Footer
Contains:
- secondary navigation.
- legal links.
- social links.
- optional store/delivery CTAs.

## Reusable primitives
- Button
- IconButton
- Section
- Container
- Reveal
- CardMedia
- FormField
- Dialog
