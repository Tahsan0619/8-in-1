# Business / Corporate — Component Specifications

---

## Layout Components

### `Header`
- **Desktop:** Logo left | Nav center (5-6 links) | CTA button + theme toggle right
- **Over hero:** Transparent background, white text
- **Scrolled:** Solid background, shadow-sm, compact height (64px → 56px)
- **Active link:** accent color + subtle underline or dot
- **Transition:** 300ms ease background + shadow

### `HeroSection`
- Full viewport height (100vh minus nav if solid)
- Background: CSS gradient or image with dark overlay (60% opacity)
- Content: centered or left-aligned, max-width 640px
- Overline text (small caps, accent color)
- Headline (H1, white on dark bg)
- Subtext paragraph (text-body, lighter)
- 2 buttons: Primary CTA + Secondary (outline)
- Scroll indicator: animated bouncing chevron at bottom center

### `Footer`
- Dark background (near-black or deep navy) regardless of theme
- 4-column grid: Info, Links, Services, Contact
- Newsletter row: label + email input + subscribe button
- Social icons: 5 circles with icons
- Bottom bar: copyright + policy links

### `MobileMenu`
- Slide-in from right, 80% width (or full-screen overlay)
- Nav links: large text, stacked, 56px height each
- Close X button top-right
- CTA button at bottom
- Social links at very bottom

---

## Content Components

### `SectionHeader`
- Overline: small caps, accent color, letter-spacing 0.08em
- Heading: H2, primary text
- Subtext: body-large, secondary text, max-width 600px
- Alignment: center (default) or left
- Margin bottom: 48-64px

### `ServiceCard`
- Padding: 32px
- Icon: 48px, inside 72px circle with accent-light bg
- Title: H3
- Description: 2-3 lines, text-secondary
- Link: "Learn more →" accent color
- Hover: translateY(-4px), shadow-md
- Border: 1px solid border, radius-lg

### `StatBlock`
- Number: large display (48px), primary or white text
- Suffix: "+" or "%" appended
- Label: caption text below number
- Count-up animation triggered by Intersection Observer
- Arranged 4 in a row, centered

### `TestimonialCard`
- Quote: large body text, italic, max-width 680px
- Quote marks: decorative " " in accent color (CSS pseudo)
- Author: avatar (48px circle) + name (bold) + role + company
- Navigation: dots below + arrows on sides
- Container: subtle border or shadow

### `ClientLogo`
- Image: grayscale filter (desaturate)
- Hover: transition to full color
- Size: constrained height (40px), auto width
- Row: 6-8 logos, flexbox with gap

### `CTABanner`
- Full-width section, accent gradient background
- Content: centered headline + subtext + button (white bg, accent text)
- Padding: 80px vertical
- Optional: subtle pattern overlay (dots or grid, 5% opacity)

---

## Blog Components

### `BlogCard`
- Thumbnail image (16:9 ratio, radius-lg top)
- Category badge (small pill, accent-light bg)
- Title: H3, 2 lines max (line-clamp)
- Excerpt: 2 lines, text-secondary (line-clamp)
- Meta: author avatar (24px) + name + date + read time
- Hover: image scale 1.05, title accent color

### `BlogPost`
- Max-width: 720px for content area
- Typography: optimized for reading — 18px body, 1.8 line-height
- Headings: proper hierarchy with margin rhythm
- Images: full-width with caption
- Blockquotes: left accent border, italic
- share buttons: fixed on left side (desktop) or bottom bar (mobile)

### `AuthorCard`
- Avatar (64px) + name + role
- Short bio (2 lines)
- Social links

---

## Interactive Components

### `Accordion` (FAQ)
- Item: question text + toggle icon (+ / −)
- Only one item open at a time
- Smooth max-height animation (300ms)
- Open state: icon rotates, content slides down
- Border-bottom between items

### `PricingTable`
- 3 columns, middle highlighted (border accent, scale 1.02, shadow)
- Toggle: monthly/yearly pill switch (smooth price transition)
- Each column: name, price, period, divider, feature list (✓/✗), CTA button
- Popular badge on middle tier
- Responsive: horizontal scroll or stack on mobile

### `Timeline`
- Vertical central line (2px, border color)
- Alternating left/right content blocks (desktop)
- Single column on mobile
- Each node: dot on line, year badge, card with title + description + optional image
- Scroll-triggered reveal animation per entry

### `ProjectGrid`
- Filter bar: pill buttons for categories (smooth filter with scale/fade animation)
- Cards: image (16:9) + overlay with title + category
- Hover: image darken, content slide up
- Clicking opens detail page

### `TeamCard`
- Photo: square, rounded-lg
- Name: bold, below photo
- Role: text-secondary
- Social icons: appear on hover (slide up from bottom of photo)

---

## Form Components

### `ContactForm`
- Layout: vertical stack, labels above inputs
- Input types: text, email, tel, select (dropdown), textarea
- Budget dropdown: "$1K-$5K", "$5K-$15K", "$15K-$50K", "$50K+"
- Validation: real-time on blur, red border + error message
- Submit: primary button, full width, loading spinner on submit
- Success: form replaced by success message with checkmark animation

### `NewsletterForm`
- Inline: email input + subscribe button (same row)
- Compact styling, fits in footer
- Success: input replaced by "Thank you!" message

---

## UI Utility Components

### `ThemeToggle`
- Sun/Moon icon toggle, 36px button
- Smooth icon transition (rotate + fade)
- Placed in header, right side

### `ScrollReveal`
- Wrapper component, adds fade-up animation class
- Configurable: direction (up, left, right), delay, duration
- Uses IntersectionObserver with 15% threshold
- `once: true` — animate only first time

### `Breadcrumb`
- Separator: "/"
- Current page: not linked, bold
- Links: text-secondary, hover accent

### `PageLoader`
- Thin bar (3px) at top of viewport
- Accent color, animated width 0% → 100%
- Fades out on complete

### `BackToTop`
- Fixed bottom-right button
- Appears after scrolling 500px
- Smooth scroll to top
- Arrow-up icon, circular button
