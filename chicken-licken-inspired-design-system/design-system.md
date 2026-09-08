# Restaurant Design System

## 1. Principles
1. Mobile first.
2. Content before decoration.
3. Images lead discovery.
4. Typography creates hierarchy.
5. Every repeated visual pattern becomes a component.
6. Motion communicates state and hierarchy.
7. Brand values are tokens, not scattered literals.

## 2. Layout
### Content shell
- `--container-max: 1440px`
- Responsive gutters via `--page-gutter`.
- Sections use a consistent vertical rhythm.

### Grid
- Mobile: 1 column.
- Small tablet: 2 columns.
- Desktop: 3 columns.
- Wide desktop: 4 columns.

Use CSS `minmax()` when possible so grids adapt naturally.

## 3. Typography
### Display
Used for:
- Hero headings.
- Category headings.
- Major campaigns.

### Heading
Used for:
- Section titles.
- Product names.

### Body
Used for:
- Descriptions.
- Forms.
- Navigation.

Typography hierarchy must be based on semantic roles, not page-specific pixel values.

## 4. Cards
### CategoryCard
- Image frame.
- Overflow hidden.
- Optional eyebrow.
- Main category title.
- Entire card clickable.

### ProductCard
- Product image.
- Name.
- Variant.
- Price.
- Optional badge.

### FeatureCard
- Media.
- Eyebrow.
- Heading.
- Description.
- CTA.

## 5. Buttons
Variants:
- Primary.
- Secondary.
- Ghost.
- Icon.

All buttons:
- Minimum touch height 44px.
- Visible keyboard focus.
- Motion duration <= 300ms for interaction feedback.

## 6. Form controls
- Label above input where possible.
- Strong focus state.
- Error text below field.
- Use progressive disclosure for complex forms.

## 7. Motion
Motion categories:
- Micro: 120–180ms.
- Standard interaction: 200–350ms.
- Section reveal: 500–800ms.
- Hero choreography: 700–1200ms.

Do not animate layout properties when transform/opacity can achieve the same result.

## 8. Accessibility
- Respect `prefers-reduced-motion`.
- Maintain visible focus.
- Do not use color alone for meaning.
- Use semantic heading order.
- Make complete cards keyboard reachable.
