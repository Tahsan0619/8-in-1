# CMS / Website Builder — Feature Specifications

---

## 1. Page Builder

### 1.1 Drag-and-Drop Section System
- Left panel: categorized section blocks (Hero, Text, Image, Grid, CTA, Testimonials, Gallery, Pricing, FAQ, Contact, Footer, Custom HTML)
- Drag from panel → drop onto canvas between existing sections
- Visual drop indicators: blue horizontal line at drop position
- Reorder existing sections: drag handle at section top
- Duplicate section: copies with all content and settings
- Delete section: confirmation toast with undo (5s)

### 1.2 Live Preview Canvas
- Center panel: renders page exactly as it will appear
- Editable inline: click text to edit headings, paragraphs, button labels
- Section selection: click → blue outline + toolbar appears (move up/down, duplicate, settings, delete)
- Responsive preview: toggle between Desktop (100%), Tablet (768px), Mobile (375px)
- Device frame: subtle border simulating browser/device chrome
- Zoom: fit-to-width by default, pinch/scroll zoom or percentage dropdown

### 1.3 Property Panel
- Right panel: context-sensitive properties for selected section/element
- **Layout:** padding (4-side), margin, width (%, px, auto), flex direction, alignment
- **Typography:** font family (Google Fonts dropdown), size, weight, line-height, letter-spacing, color, text-align
- **Background:** solid color, gradient builder, image upload with position/size/repeat, overlay opacity
- **Border:** width, style (solid/dashed/dotted), color, radius (per-corner or uniform)
- **Effects:** box-shadow, opacity, CSS filter (blur, brightness)
- **Responsive overrides:** icon per breakpoint to set property differently on mobile/tablet
- All changes apply instantly to canvas

### 1.4 Section Templates
- Pre-built section variants: "Hero with Image Left", "3-Column Feature Grid", "Testimonial Carousel", etc.
- Browsable gallery with live preview thumbnails
- One-click insert: adds section with placeholder content
- Edit all content and styling after insertion
- Categories: Headers, Content, Features, Testimonials, Pricing, CTA, Footers

### 1.5 Auto-Save & Version History
- Auto-save every 30 seconds (status indicator: "Saved" / "Saving..." / "Unsaved changes")
- Manual save: Ctrl+S / button
- Version history: list of save points with timestamps
- Restore previous version (replaces current, old version still accessible)
- Unsaved changes warning on page navigation

---

## 2. Page Management

### 2.1 Pages List
- Table/grid view toggle
- Columns: Page title, URL slug, status (Live/Draft/Archived), last modified, author
- Sort by any column
- Bulk actions: publish, unpublish, delete (with checkbox select)
- Search by title
- Filter by status

### 2.2 Create / Edit Page
- Create: title input → auto-generates slug → opens in builder
- Edit: opens builder with page sections loaded
- Page settings modal: title, slug (editable), SEO meta, featured image, parent page (for hierarchy)
- Duplicate page: creates copy with "-copy" suffix
- Delete page: confirmation dialog, moves to trash (recoverable for 30 days)
- Page status: Draft (save without publishing), Published (live), Archived (hidden from site)

### 2.3 Page Hierarchy / Navigation
- Pages can have parent-child relationships for URL structure
- Nav menu builder: drag to reorder, indent for sub-items
- Auto-generate nav from page hierarchy or manual override
- External link items: custom URL + label

---

## 3. Blog / Content Management

### 3.1 Blog Posts List
- Grid of post cards: featured image, title, excerpt, status, date, category
- Filter by: category, status, author, date range
- Sort: newest, oldest, A-Z, most viewed
- Bulk publish/draft/delete

### 3.2 Post Editor (Rich Text)
- Full-width rich text editor with formatting toolbar
- **Toolbar:** Bold, Italic, Underline, Strikethrough | Headings (H1-H4) | Links | Images | Video embed | Blockquote | Code block | Ordered/Unordered list | Table | Horizontal rule | Alignment | Undo/Redo
- **Slash commands:** Type "/" to insert blocks (image, video, divider, code, callout)
- **Inline formatting:** Select text → floating toolbar for quick formatting
- **Media insertion:** Upload from device or select from Media Library
- **Embeds:** Paste YouTube/Vimeo/Twitter URL → auto-embed with preview
- **Markdown shortcuts:** `**bold**`, `*italic*`, `# heading`, `> quote`, `` `code` ``
- Word count & estimated reading time in footer

### 3.3 Post Meta Sidebar
- **Status:** Draft, Published, Scheduled (with date/time picker)
- **Category:** dropdown with option to create new inline
- **Tags:** tag input with autocomplete, multi-select
- **Featured image:** upload/select from media library, preview
- **Excerpt:** optional manual excerpt or auto-generated from first paragraph
- **Author:** dropdown (multi-author support)
- **URL slug:** auto-generated from title, editable

### 3.4 Categories & Tags
- Category manager: CRUD list with parent-child hierarchy
- Tag manager: cloud view + list view, merge duplicate tags
- Color coding for categories (optional accent colors)
- Post count per category/tag

### 3.5 Scheduled Publishing
- Set future publish date/time → post auto-publishes (simulated with timer display)
- Calendar view: visual timeline of scheduled content
- Reschedule: drag post to new date on calendar

---

## 4. Media Library

### 4.1 File Upload
- Drag-and-drop zone: large dashed area, accepts multiple files
- Click-to-browse: standard file picker
- Supported formats: JPG, PNG, GIF, SVG, WebP, PDF, DOC, MP4
- Upload progress: per-file progress bar
- Validation: file size limit (10MB), type checking with error message
- Auto-thumbnail generation for images

### 4.2 Media Grid / List View
- Grid: thumbnails in masonry-like layout, file type icon for non-images
- List: filename, type icon, dimensions (images), size, upload date, actions
- Search by filename
- Filter by type (images, documents, videos)
- Sort by date, name, size
- Multi-select with checkboxes for bulk delete

### 4.3 Media Detail Panel
- Click any file → slide-in detail panel (right side) or modal
- Large preview (zoom for images)
- Metadata: filename (editable), alt text input, dimensions, file size, uploaded date, URL
- Actions: Copy URL, Download, Insert into post/page, Delete
- Image editing: crop, rotate (basic)

### 4.4 Integration with Editor
- Insert media button in rich text editor → opens media library picker
- Select file → inserts at cursor position
- Drag from media library → drop into page builder sections

---

## 5. SEO Tools

### 5.1 Per-Page SEO
- Meta title input with character count (optimal: 50-60 chars)
- Meta description textarea with character count (optimal: 150-160 chars)
- URL slug editor
- Google preview: live-updating search result mockup
- Focus keyword input → checks keyword usage in title, description, headings, body

### 5.2 SEO Score & Audit
- Score 0-100 per page, color-coded (green/yellow/red)
- Checklist items:
  - ✅ Title tag present and within length
  - ✅ Meta description present and within length
  - ✅ H1 heading exists (and only one)
  - ✅ Images have alt text
  - ✅ URL is clean and readable
  - ✅ Focus keyword appears in title
  - ❌ Missing items highlighted with fix suggestions
- Overall site SEO score (average of all pages)

### 5.3 Social / Open Graph
- OG title, description, image preview per page
- Twitter card type selector (summary, summary_large_image)
- Facebook & Twitter card previews: live updating mockups
- Default OG fallback settings (site-wide)

### 5.4 Sitemap & Robots
- Auto-generated sitemap display (page list with last-modified dates)
- Include/exclude pages from sitemap (toggle per page)
- Robots.txt editor: raw text editor with syntax hints
- Noindex/nofollow toggle per page

---

## 6. Site Settings

### 6.1 General Settings
- Site name, tagline input fields
- Favicon upload (preview at different sizes)
- Default language selector
- Date/time format preferences
- Timezone selector

### 6.2 Domain & Deployment
- Custom domain input with DNS instructions (simulated)
- SSL status indicator (always "Secure" in demo)
- Deployment status: last published date/time
- [Publish Site] button → build & deploy animation

### 6.3 Analytics Integration
- Google Analytics tracking ID input
- Basic built-in analytics: page views, unique visitors, top pages, referrers (simulated data)
- Dashboard widget: chart showing 30-day traffic trend
- Toggle analytics tracking on/off

### 6.4 Custom Code Injection
- Head code: textarea for custom CSS/scripts in `<head>`
- Body code: textarea for scripts before `</body>`
- Per-page custom code (override global)
- Syntax highlighting in code textareas (visual only)

---

## 7. Theme Customizer

### 7.1 Color System
- Primary, secondary, accent, background, text color pickers
- Preset themes: "Default", "Ocean", "Sunset", "Forest", "Midnight"
- Custom palette builder
- Live preview: all changes reflected instantly on preview pane

### 7.2 Typography
- Heading font family (Google Fonts dropdown with preview)
- Body font family
- Base font size slider (14-18px)
- Line height slider
- Font weight presets

### 7.3 Spacing & Layout
- Section padding slider
- Element gap slider
- Content max-width slider
- Card border-radius slider
- Button border-radius slider

### 7.4 Export / Import
- Export theme as JSON
- Import theme JSON → applies all settings
- Reset to defaults button (with confirmation)

---

## 8. UI/UX Global

### 8.1 Responsive Behavior
- Builder: panels collapse on tablet, builder becomes full-screen on mobile with bottom toolbar
- Dashboard/pages: sidebar collapses to hamburger on mobile
- Tables: horizontal scroll on mobile
- Media grid: 4 → 3 → 2 → 1 columns

### 8.2 Dark / Light Mode
- Toggle in header bar
- Preference saved in localStorage
- System detection on first visit
- Smooth transition (150ms) on toggle
- Builder canvas: separate theme from editor UI (canvas reflects site theme)

### 8.3 Keyboard Shortcuts
- `Ctrl+S` — Save page/post
- `Ctrl+Z` — Undo
- `Ctrl+Shift+Z` — Redo
- `Ctrl+K` — Command palette
- `Delete` / `Backspace` — Delete selected section
- `Ctrl+D` — Duplicate selected section
- `Escape` — Deselect / close panel

### 8.4 Toast Notifications
- Position: bottom-right
- Types: success, error, info, warning
- Auto-dismiss: 4 seconds
- Undo action on destructive operations
- Stack up to 3

### 8.5 Loading States
- Skeleton loaders: page cards, media grid, post list
- Save indicator: "Saving..." → "Saved ✓" transition in toolbar
- Page build: full-screen progress animation on publish
- Builder section load: placeholder shimmer while rendering
