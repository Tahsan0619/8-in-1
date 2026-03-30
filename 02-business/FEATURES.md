# Business / Corporate — Feature Specifications

---

## 1. Homepage

### 1.1 Full-Screen Hero
- Height: 100vh (with nav overlay)
- Background: subtle gradient (dark navy → deep purple) or lifestyle photo with overlay
- Content: overline tag ("Digital Agency") + main headline (2 lines max) + subtext paragraph + 2 CTA buttons (primary + secondary)
- Subtle floating shapes or grid pattern in background (CSS only, no images)
- Scroll indicator: animated chevron at bottom

### 1.2 Services Section
- Section title with overline + heading + subtext
- 3-column icon card grid
- Each card: icon (in colored circle bg) + service name + short description + "Learn more →" link
- Cards animate in on scroll (stagger)
- Hover: lift + shadow

### 1.3 About Preview
- 2-column layout: text left, image right (or vice versa)
- Overline + heading + 2 paragraphs + "About Us →" link
- Image with slight rotation/offset border accent

### 1.4 Stats Counter
- Full-width accent background section
- 4 stat blocks in a row: number (count-up animated) + label
- Stats: "150+ Projects Completed", "80+ Happy Clients", "12 Years Experience", "15 Countries Served"
- Numbers animate when section scrolls into view

### 1.5 Client Logos
- Horizontal strip of grayscale logos
- 6-8 logos, auto-scroll marquee effect or static grid
- Hover: logo becomes full color
- Title: "Trusted by leading companies"

### 1.6 Testimonials Carousel
- Card-based carousel, 1 visible at a time (centered)
- Each card: quote text (large, italic) + client photo (circle) + name + role + company
- Navigation: dots + arrows
- Auto-slide every 5 seconds, pause on hover

### 1.7 CTA Banner
- Full-width section with accent gradient background
- Bold headline: "Ready to start your project?"
- Subtext + primary CTA button
- Optional: subtle background pattern

### 1.8 Blog Preview
- 3-column grid of latest blog posts
- Each: thumbnail image + category badge + title + excerpt (2 lines) + date + read time
- "View all posts →" link

### 1.9 Footer
- 4-column layout: Company info (logo + blurb), Quick Links, Services, Contact Info
- Newsletter signup: email input + subscribe button
- Social media icon links
- Bottom bar: copyright + privacy + terms links
- Dark background (regardless of mode)

---

## 2. Services

### 2.1 Services Listing
- Page hero: headline + subtext
- Service cards in grid (3 columns)
- Each card: icon + title + description + "Learn more" link
- Alternating row layouts (optional: some full-width featured)

### 2.2 Service Detail Page
- Hero: service title + icon + brief description
- Content sections: what we do, our approach, deliverables
- Related case studies (2-3 cards)
- Sidebar: key benefits list, CTA button
- FAQ accordion specific to this service

### 2.3 Pricing Table
- 3 tiers: Starter, Professional, Enterprise
- Toggle: monthly / yearly (yearly shows discount)
- Each tier: name + price + billing period + feature list (checks/crosses) + CTA button
- Middle tier highlighted ("Most Popular" badge)
- Smooth price transition on toggle

### 2.4 FAQ Accordion
- Clean accordion with + / − toggle icons
- Smooth height animation on open/close
- Only one open at a time
- 6-8 questions per service

---

## 3. About

### 3.1 Company Story Timeline
- Vertical timeline (desktop), single column (mobile)
- Alternating left/right entries
- Each entry: year + title + description + optional image
- Timeline line with dot markers
- Animate entries on scroll

### 3.2 Team Grid
- 4-column grid of team member cards
- Each: photo (1:1 ratio, rounded corners) + name + role + social icons (LinkedIn, Twitter)
- Hover: overlay with brief bio or social icons appear
- Photo: real-looking, warm, professional

### 3.3 Mission / Vision / Values
- 3-column layout or tabbed interface
- Each: icon + heading + paragraph
- Clean, text-focused design

### 3.4 Office / Location
- Google Maps embed (responsive iframe)
- Address, phone, email alongside map
- Office photos gallery (small carousel or grid)

---

## 4. Portfolio / Work

### 4.1 Project Grid
- Masonry or uniform grid layout
- Category filter bar: All, Web, Mobile, Branding, Marketing (pill buttons)
- Each project: cover image + title + category tag
- Smooth filter animation (fade/scale)
- 8-12 projects

### 4.2 Project Detail / Case Study
- Hero: project title + client name + cover image (full width)
- Metadata bar: industry, timeline, services used
- Sections: The Challenge, Our Solution, The Results
- Results: metric highlights (stat cards)
- Screenshots gallery (responsive image grid)
- Client testimonial quote
- "Next project" navigation at bottom

---

## 5. Contact

### 5.1 Contact Form
- Fields: Name, Email, Phone (optional), Company, Budget range (dropdown or slider), Service interest (dropdown), Message
- Real-time validation (required fields, email format)
- Submit button with loading state
- Success: inline success message with checkmark animation
- CSRF-safe form design

### 5.2 Contact Info
- Displayed alongside form (2-column layout)
- Address with icon
- Phone number with icon
- Email with icon
- Business hours

### 5.3 Google Maps
- Embedded map below contact section
- Custom marker style
- Responsive iframe

### 5.4 Social Links
- Row of social media icons: LinkedIn, Facebook, Twitter/X, Instagram
- Opens in new tab

---

## 6. Blog

### 6.1 Blog Listing
- Hero: "Our Blog" + search bar
- Category filter: All, Technology, Business, Design, News (horizontal pills)
- Grid: 3 columns, responsive
- Each card: thumbnail + category badge + title + excerpt + author avatar + name + date + read time
- Pagination at bottom

### 6.2 Blog Detail
- Featured image (full width or contained)
- Title (H1) + author card (avatar + name + date + read time)
- Article body: rich typography, proper heading hierarchy, blockquotes, code blocks, images
- Reading time estimate based on word count
- Share buttons: Facebook, Twitter/X, LinkedIn, WhatsApp, Copy link
- Related posts (3 cards) at bottom
- Author bio card at end of article

---

## 7. UI/UX Global

### 7.1 Scroll Animations
- Content sections fade up on scroll entry
- Staggered card animations (100ms delay per card)
- Stats count up when visible
- Intersection Observer based, fires once
- Reduced motion: respects `prefers-reduced-motion`

### 7.2 Sticky Header
- Transparent on hero, becomes solid on scroll
- Active nav link highlighted
- Smooth background/shadow transition
- Mobile: hamburger menu, slide-in drawer

### 7.3 Dark / Light Mode
- Toggle in header
- Smooth 200ms transition
- localStorage persistence
- System preference on first visit

### 7.4 Page Loader
- Thin progress bar at top (accent color)
- Shows on page navigation
- Completes on content loaded

### 7.5 Mobile Menu
- Hamburger icon → full-screen overlay or slide-in drawer
- Nav links stacked vertically with large tap targets
- Close button + backdrop close
- Social links at bottom of drawer
