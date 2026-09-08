# AI Agent Implementation Instructions

## Mission
Build an original premium restaurant website framework inspired by the structural patterns documented in `chicken-licken-structure-analysis.md`.

Do not copy:
- source code from the reference website;
- logos;
- images;
- trademarked product names;
- marketing copy;
- proprietary graphics.

## Required files
Read and obey:
1. `chicken-licken-structure-analysis.md`
2. `design-system.md`
3. `tokens.css`
4. `globals.css`
5. `animations.css`
6. `tailwind-v4-theme.css`
7. `component-specification.md`

## Implementation order

### Phase 1 — Foundation
1. Configure Tailwind v4.
2. Load `tokens.css`.
3. Load `globals.css`.
4. Establish semantic color and typography usage.
5. Do not introduce arbitrary hex values unless approved.

### Phase 2 — Layout
Create:
- Container
- Section
- Header
- Footer
- Mobile navigation

Acceptance:
- Responsive from 320px upward.
- No horizontal overflow.
- Keyboard navigation works.

### Phase 3 — Menu data
Create data-driven structures:
- categories
- products
- category slugs

Do not hardcode repeated product card markup.

### Phase 4 — Category discovery
Implement:
- responsive category grid;
- image-led cards;
- consistent typography;
- hover and focus states;
- viewport reveal.

Acceptance:
- Entire card is clickable.
- Images never stretch.
- Cards remain stable when text length varies.

### Phase 5 — Category detail
Implement:
- back link;
- category heading;
- description;
- product grid;
- optional region/menu switch.

Acceptance:
- Category pages are generated from data.
- Product cards support optional variants and prices.

### Phase 6 — Motion
Use only the shared motion tokens.

Priority:
1. opacity
2. transform

Avoid:
- expensive continuous layout animation;
- independent random easing curves;
- excessive parallax.

Respect `prefers-reduced-motion`.

### Phase 7 — Contact flow
Build a progressive multi-step contact component.

Requirements:
- topic selection.
- validation.
- optional attachment.
- loading state.
- success state.
- error recovery.

### Phase 8 — Quality audit
Before completion check:
- mobile at 320px, 375px, 768px, 1024px, 1440px;
- keyboard navigation;
- focus visibility;
- reduced motion;
- image loading;
- no layout shift caused by animations;
- no duplicated token values;
- no arbitrary brand copying.

## Agent coding rules
- Prefer composition over giant components.
- Use semantic HTML.
- Keep business content in data files.
- Keep visual values in tokens.
- Keep animation values in tokens.
- Reuse components rather than duplicating markup.
- Preserve existing working infrastructure unless change is necessary.

## Definition of done
The implementation is complete only when:
- every page is responsive;
- menu/category/product data is reusable;
- cards share one component system;
- all motion follows the motion tokens;
- mobile interaction is as deliberate as desktop interaction;
- branding is original;
- no proprietary reference assets or code are copied.
