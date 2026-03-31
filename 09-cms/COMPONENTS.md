# CMS / Website Builder — Component Specifications

---

## Layout Components

### `AppShell`
- **Sidebar:** 240px fixed rail — logo, nav items with icons, collapse to 64px icon-only mode
- **Header:** Site selector dropdown, notification bell, user avatar, theme toggle
- **Content area:** Scrollable main panel with breadcrumb trail
- **Mobile:** Sidebar becomes slide-out drawer with hamburger trigger

### `Sidebar`
- Logo/brand at top
- Nav groups: Content (Pages, Posts, Media), Design (Builder, Templates, Theme), Settings (SEO, General)
- Active item: accent background + left border indicator
- Collapse toggle at bottom — shrinks to icon-only rail
- Badge counts: draft count on Posts, media count on Media

### `TopBar`
- Site selector dropdown (for multi-site): site name + favicon + chevron
- Breadcrumb: Dashboard > Pages > Edit "About"
- Right: notification bell (badge), user avatar dropdown, dark/light toggle
- Sticky on scroll

### `CommandPalette`
- Trigger: Cmd/Ctrl + K
- Search input with icon
- Result categories: Pages, Posts, Actions, Settings
- Keyboard nav: arrow keys + enter
- Recent items shown on empty search

---

## Builder Components

### `SectionPanel`
- Left sidebar in builder view, width 260px
- Categorized section blocks: Layout, Content, Media, Forms, Commerce
- Each block: icon + label, draggable
- Search/filter at top
- Drag ghost shows section outline

### `Canvas`
- Center area — live WYSIWYG preview
- Section containers with hover outlines (dashed blue border)
- Click section → highlights with solid border + drag handle top + delete/duplicate/settings icons
- Drop zones: horizontal lines appear between sections on drag-over
- Responsive toggle: Desktop (100%) / Tablet (768px) / Mobile (375px) — canvas resizes with device frame

### `PropertyPanel`
- Right sidebar, width 300px
- Context-sensitive: shows properties for selected section/element
- Sections: Layout (padding, margin, width), Typography (font, size, weight, color, align), Background (color, image, gradient), Border (width, color, radius), Spacing (gap, padding)
- Color pickers: swatch + hex input + opacity slider
- Numeric inputs: with drag-to-adjust and unit selectors (px, %, rem)
- Responsive overrides: per-breakpoint property tabs

### `SectionBlock`
- Container for each page section in the canvas
- Drag handle (⠿ grip dots) at top center
- Hover toolbar: ↑ Move up | ↓ Move down | ⎘ Duplicate | ⚙ Settings | 🗑 Delete
- Click to select → property panel loads section config
- Content editable inline: headings, paragraphs, button text

### `DevicePreview`
- Toggle bar: Desktop / Tablet / Mobile icons
- Canvas resizes with smooth transition
- Device frame border (optional subtle outline)
- Scrollable within frame

---

## Content Components

### `RichTextEditor`
- Toolbar: Bold, Italic, Underline, Strikethrough | H1, H2, H3 | Link, Image, Video | Quote, Code, List (ordered/unordered) | Alignment | Undo/Redo
- Floating toolbar for inline selection formatting
- Slash commands: type "/" for quick insert menu
- Media embeds: paste URL → auto-embed (YouTube, Twitter, etc.)
- Markdown shortcuts: `**bold**`, `# heading`, `> quote`
- Code blocks with syntax highlighting (visual only)
- Word count + reading time footer

### `PageCard`
- Card for pages manager grid view
- Thumbnail preview (auto-generated from page content or placeholder)
- Title, slug, status badge (Live/Draft/Archived), last modified date
- Hover: Edit, Duplicate, View, Delete actions
- List variant: row layout with same info + author column

### `PostCard`
- Similar to PageCard but with: category tag, featured image, excerpt preview
- Status: Published, Draft, Scheduled (with date)
- Author avatar + name inline

### `MediaCard`
- Thumbnail preview (image) or file icon (doc/pdf/video)
- Filename, file size, upload date
- Checkbox for multi-select
- Click: opens detail panel with metadata, alt text input, copy URL, delete
- Hover: quick actions overlay

---

## SEO Components

### `SEOScoreCard`
- Circular progress indicator (0-100)
- Color coded: 🟢 80-100, 🟡 50-79, 🔴 0-49
- Score label: "Excellent", "Needs Work", "Poor"
- Expandable checklist: ✅ Title present, ✅ Meta desc, ❌ Missing alt text, etc.

### `MetaPreview`
- Google search result preview: Title (blue link), URL (green), Description (gray)
- Facebook OG card preview: image + title + description
- Twitter card preview: image + title + description
- Updates live as user types meta fields

### `SEOChecklist`
- Per-page audit items
- Categories: Technical, Content, Social, Performance
- Each item: status icon (✅/❌/⚠) + description + fix action link
- Overall score aggregated from items

---

## Settings Components

### `SiteSettingsForm`
- Grouped sections: General, Domain, Analytics, Custom Code, Danger Zone
- Form inputs: text, textarea, file upload (favicon), toggle switches
- Save button with loading state
- Unsaved changes warning on navigation

### `TemplateCard`
- Preview thumbnail (full-page screenshot)
- Template name, category tag, section count
- [Use Template] button → inserts all sections into builder
- [Preview] → full-screen modal preview
- Filter bar: All, Business, Portfolio, Blog, Landing Page

### `ThemeControls`
- Color pickers with presets: Primary, Secondary, Accent, Background, Text
- Font selectors: dropdown with Google Fonts preview
- Spacing sliders: Section padding, element gap
- Border radius slider with live preview
- Reset to defaults button
- Export/import theme JSON

---

## Utility Components

### `Toast`
- Position: bottom-right
- Types: success (green), error (red), info (blue), warning (amber)
- Auto-dismiss: 4 seconds
- Action button variant: "Undo" on delete actions
- Stack up to 3

### `Modal`
- Centered overlay with backdrop
- Sizes: sm (400px), md (560px), lg (720px), full (90vw)
- Header with title + close X
- Scrollable body, sticky footer with action buttons
- Close on Escape key and backdrop click

### `ConfirmDialog`
- Small modal: title + description + Cancel/Confirm buttons
- Destructive variant: red confirm button with "Type DELETE to confirm" input

### `StatusBadge`
- Variants: Live (green), Draft (amber), Scheduled (blue), Archived (gray)
- Dot indicator + text label
- Pill shape, compact sizing

### `DropZone`
- Dashed border area for file upload / section drop
- States: default (dashed), hover/dragover (accent border + tint), uploading (progress bar)
- Click to browse or drag-and-drop
- File type / size validation with error message
