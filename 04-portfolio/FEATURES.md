# Portfolio — Feature Specifications

---

## 1. Personal Portfolio

### 1.1 Hero Section
- Full viewport height
- Name: large display typography (72-96px)
- Animated tagline: typewriter cycling through roles ("Full Stack Developer" → "UI Designer" → "Creative Thinker")
- Brief intro line (1-2 sentences)
- CTA buttons: "View Work" + "Contact Me"
- Subtle background: gradient mesh, animated grain texture, or abstract CSS shapes
- Scroll indicator at bottom

### 1.2 About Section
- 2-column: photo (left, with artistic border/gradient treatment) + text (right)
- Bio: 2-3 paragraphs with personality
- Quick facts sidebar: location, experience years, specialization
- "Download CV" button (accent, with download icon)

### 1.3 Skills Section
- Option A: Progress bars with percentage (animated on scroll)
- Option B: Tag cloud with skill pills grouped by category (Frontend, Backend, Design, Tools)
- Skill categories as tabs or grouped sections
- Technologies: logo icons + labels
- Proficiency indicated by fill level or tier (Expert, Advanced, Intermediate)

### 1.4 Experience Timeline
- Vertical timeline, alternating sides (desktop)
- Each entry: company logo/dot + role + company + date range + description bullets
- Most recent at top
- Animate entries on scroll reveal

### 1.5 Education Section
- Card layout or timeline continuation
- Each: degree + institution + year + optional notable achievements
- Simpler than experience, 2-3 entries

### 1.6 Downloadable CV
- Button with download icon
- Links to PDF stored in repo/public folder
- Accent-styled button, prominent placement

---

## 2. Work / Projects

### 2.1 Project Grid
- 2-column grid, alternating large/small cards
- Each card: cover image (16:9 or custom) + project name + category tag + tech stack pills
- Hover: image parallax shift or scale, overlay with "View Project" text, cursor changes to circle with label
- Category filter bar: All, Web, Mobile, Design, Branding (pill buttons with smooth filter animation)
- 8-12 projects

### 2.2 Project Detail
- **Hero:** Full-width project image
- **Title + meta:** project name + client + year + role + tech stack (pills) + links (Live Demo, GitHub)
- **Description:** What the project is, the problem it solves
- **Process sections:** Challenge → Approach → Solution
- **Screenshot gallery:** Grid of project screenshots (clickable for lightbox)
- **Key features:** bullet list or icon cards
- **Results/Impact:** metric cards (if applicable)
- **Next/Previous project navigation** at bottom

### 2.3 Live Demo + GitHub Buttons
- Side-by-side buttons below project hero
- Live Demo: accent button with external link icon
- GitHub: secondary/outline button with GitHub icon
- Open in new tab

---

## 3. Creative / Agency Portfolio

### 3.1 Full-Screen Project Showcase
- Scroll-snap container: each project gets full viewport height
- Content: large cover image (80% of viewport) + project name overlay + category
- Scroll between projects snaps to full screens
- Numbers: 01/05 counter indicator
- Desktop only — falls back to normal grid on mobile

### 3.2 Before/After Slider
- For redesign projects
- Horizontal drag slider dividing "before" and "after" images
- Handle: circular drag button on divider line
- Labels: "Before" / "After" on respective sides
- Touch + mouse draggable

### 3.3 Video Reel Embed
- Featured section: "Watch our reel" with large video thumbnail
- Play button overlay (large circle + triangle)
- Click opens video in lightbox (YouTube/Vimeo embed)
- Responsive 16:9 container

### 3.4 Awards / Recognition
- Horizontal strip or grid
- Each: award logo/badge + award name + year + project name
- Clean, compact presentation
- Optional: link to award page

---

## 4. Photography Portfolio

### 4.1 Masonry Image Grid
- True masonry layout (CSS multi-column or JS masonry)
- Images at natural aspect ratios, tightly packed
- 3 columns → 2 → 1 (responsive)
- Hover: slight overlay with photo details (camera, location)
- Lazy loading for performance

### 4.2 Lightbox Viewer
- Click image → full-screen overlay
- Navigation: left/right arrows + swipe on mobile
- Close: X button + backdrop click + Escape key
- Image counter (3/24)
- EXIF info display (optional: camera, lens, settings)
- Keyboard navigation (arrow keys)

### 4.3 Category Albums
- Album covers as cards: featured image + album name + photo count
- Categories: Portrait, Landscape, Street, Events, Abstract
- Click → filtered gallery for that album

### 4.4 Print/Hire Inquiry Form
- Contact form specific to photography
- Fields: name, email, inquiry type (hire/print/license), details, preferred dates
- "Request a quote" button

---

## 5. Testimonials

### 5.1 Client Quotes
- Grid or carousel of testimonial cards
- Each: large quote text + client photo (64px circle) + name + role + company name/logo
- Star rating per client (optional)
- Decorative quote marks (CSS pseudo-element)
- 4-6 testimonials

---

## 6. Contact

### 6.1 Contact Form
- Fields: name, email, subject (dropdown: Hire Me, Project Inquiry, Freelance, Other), message
- Inline validation
- Submit: accent button, loading state, success animation (checkmark morph)
- Anti-spam: honeypot field

### 6.2 Social Links
- Row of social icons: GitHub, LinkedIn, Twitter/X, Dribbble, Behance, Instagram
- Icon-only, circle buttons
- Hover: accent color + slight lift

### 6.3 Availability Badge
- Status indicator in hero or contact section
- Green dot + "Available for hire" / Red dot + "Currently busy"
- Eye-catching but not obnoxious

### 6.4 Calendar Booking Link
- "Schedule a call" button
- Opens calendar booking page (UI mockup of time slot selection)
- Week view with available slots highlighted
- Click slot → confirmation

---

## 7. UI/UX Global

### 7.1 Custom Cursor
- Replaces default cursor on desktop
- Small dot (8px) follows mouse with slight delay (lerp)
- Expands on hover over interactive elements (48px circle)
- Over images: becomes "View" text
- Over links: becomes larger circle
- Hidden on touch devices

### 7.2 Page Transitions
- Route changes: page fades out (200ms) + new page fades/slides in (400ms)
- Smooth, cinematic feel
- Loading state during transition

### 7.3 Scroll-Triggered Reveals
- Text: words or lines reveal one by one as you scroll
- Images: scale from 0.9 → 1, opacity 0 → 1
- Cards: stagger animation (100ms apart)
- Intersection Observer with configurable threshold

### 7.4 Mobile Gestures
- Swipe left/right on gallery images
- Pull-to-dismiss on lightbox
- Touch-friendly: 44px minimum tap targets

### 7.5 Dark / Light Mode
- Toggle with smooth transition
- Dark mode: near-black backgrounds make project images pop
- Light mode: clean white for content readability
- System preference detection + localStorage
