# Portfolio — Component Specifications

---

## Layout Components

### `Header`
- **Desktop:** Name/Logo left | Nav center (Home, Work, About, Contact) | Theme toggle right
- **Over hero:** Transparent, white text
- **Scrolled:** Solid bg, shadow, compact
- **Mobile:** Name left | Hamburger right
- **Nav hover:** Underline grows from left (200ms)

### `Footer`
- Minimal: copyright + "Built with ☕" + social icons
- Centered, small text
- Consistent across all pages

### `MobileMenu`
- Full-screen overlay, dark background
- Large nav links (48px font, stacked)
- Stagger animation per link (slide in from right)
- Close X top-right
- Social icons at bottom

### `CustomCursor`
- Two elements: outer ring (40px) + inner dot (8px)
- Inner dot follows mouse with 0ms delay
- Outer ring follows with ~80ms lerp delay
- Hover states: ring expands, changes blend mode, or shows text
- `mix-blend-mode: difference` for contrast on any bg
- Disabled on touch devices (check `pointer: coarse`)

---

## Hero Components

### `HeroSection`
- Full viewport, centered content
- Background: animated gradient mesh (CSS radial gradients with animation) or subtle noise texture
- Name: Display XL (96px desktop, 56px mobile)
- Animated tagline: typewriter effect with blinking cursor
  - Array of strings, types out, pauses, deletes, types next
  - Monospace font for cursor effect
- Intro line: body-large, max-width 480px
- CTA buttons row: primary + ghost
- Availability badge: dot + text below CTAs

### `AvailabilityBadge`
- Small inline element: colored dot (8px) + text
- Green dot pulse animation for "Available"
- Red dot static for "Busy"
- Placed in hero or contact section

---

## Project Components

### `ProjectCard`
- Cover image (16:9 or custom aspect), radius-lg
- Title below image
- Tech stack: small pills/tags row
- **Hover:** Image scales 1.05, overlay gradient from bottom, project name slides up, cursor becomes "View" circle
- **Filter animation:** Scale 0.9 + fade out when filtered away, scale 1 + fade in when matching

### `ProjectFilter`
- Row of pill buttons: All, Web, Mobile, Design, etc.
- Active: accent bg, white text
- Inactive: transparent, border, text-secondary
- Click: smooth filter with 300ms animation

### `ProjectDetail`
- Hero image: full-width, radius-lg
- Meta bar: client + year + role (horizontal pills or text)
- Tech stack: pills row
- Action buttons: "Live Demo ↗" (accent) + "GitHub ↗" (outline)
- Content sections: heading + paragraphs
- Screenshot grid: CSS grid, radius-md, clickable for lightbox
- Prev/Next navigation: project name with arrows

### `BeforeAfterSlider`
- Two overlapping images, same size
- Vertical divider line (2px accent)
- Circular handle on divider (32px, accent bg, drag icon)
- Drag or click to move divider
- Labels: "Before" / "After" positioned on their sides
- Touch + mouse events

### `FullScreenShowcase`
- CSS scroll-snap container (`scroll-snap-type: y mandatory`)
- Each child: 100vh, `scroll-snap-align: start`
- Project image fills most of viewport (80vh)
- Counter: "01 / 05" positioned corner
- Title + category overlaid bottom-left
- Desktop only — falls back to grid on mobile

---

## Gallery Components

### `MasonryGrid`
- CSS multi-column or JS masonry
- column-count: 3 (desktop), 2 (tablet), 1 (mobile)
- column-gap: 16px
- Items: img with `break-inside: avoid`, margin-bottom: 16px
- Lazy loading on images

### `Lightbox`
- Full-screen overlay (z-index: 1000), black bg (95% opacity)
- Current image: centered, max-width/height with object-fit contain
- Navigation: left/right arrows (positioned sides) + keyboard arrows
- Close: X button (top-right) + Escape + backdrop click
- Counter: "3 / 24" (top-center)
- Swipe on mobile for prev/next
- Fade + scale animation on open/close

### `AlbumCard`
- Cover image + album name + photo count badge
- Radius-lg
- Hover: image scale, overlay with name + "View Album →"

---

## About Components

### `SkillTag`
- Small pill: icon (optional) + skill name
- Grouped by category with category heading
- Accent bg for primary skills, subtle bg for secondary
- Gap: 8px

### `SkillBar` (alternative)
- Label + percentage text
- Bar: bg track + filled accent progress
- Animate fill on scroll entry (0% → target%)
- Width: 100%

### `ExperienceEntry`
- Timeline dot + connector line
- Content card: role (H4) + company + date range (badge) + description
- Alternating left/right on desktop
- Single column on mobile

---

## Testimonial Components

### `TestimonialCard`
- Large decorative quote mark (accent color, CSS pseudo)
- Quote text: body-large, max-width 560px
- Author: photo (56px circle) + name + role + company
- Optional star rating below quote
- Card: surface bg, radius-xl, padding 32px
- Hover: subtle shadow increase

---

## Contact Components

### `ContactForm`
- Fields: name, email, subject (dropdown), message (textarea)
- Input styling: bottom-border-only or full-border (matches portfolio vibe)
- Focus: accent border color
- Validation: inline, below inputs
- Submit: accent button, loading state (spinner), success (checkmark morph + "Sent!" message)

### `SocialLinks`
- Row of icon buttons: GitHub, LinkedIn, Twitter/X, Dribbble, etc.
- Circle buttons (44px) or icon-only
- Hover: accent color fill + slight scale
- Open new tab

### `CalendarBooking`
- Simple week view grid
- Available slots: accent bg, clickable
- Unavailable: grayed out
- Selected: darker accent + check
- Confirm button
- UI mockup only

---

## Animation Components

### `ScrollReveal`
- Intersection Observer wrapper
- Modes: fade-up, fade-in, scale-up, slide-left, slide-right
- Configurable delay for stagger
- Duration: 600ms
- Once: true (no re-animate)
- Respects prefers-reduced-motion

### `TypewriterText`
- Takes array of strings
- Types characters (80ms/char), pauses (2s), deletes (40ms/char), moves to next
- Blinking cursor: 1px accent line, 530ms blink interval
- Infinite loop

### `PageTransition`
- On route change: fade-out current (200ms) → blank (100ms) → fade-in new (300ms)
- Optional: slide direction based on navigation

### `ParallaxImage`
- Image moves at slower rate than scroll (translateY adjusted by scroll delta)
- Factor: 0.2-0.4 of scroll speed
- Overflow hidden on container
- Image slightly oversized (110%) to prevent gaps

---

## UI Utility Components

### `ThemeToggle`
- Sun/Moon seamless morph (or simple swap)
- Smooth transition for all themed elements

### `BackToTop`
- Arrow-up icon, small circle, fixed bottom-right
- Appears after 600px scroll
- Smooth scroll

### `Tooltip`
- Small text bubble on hover
- Position: above element
- Arrow pointing down
- 200ms delay before show
- Used for: social icons, skill tags, navigation
