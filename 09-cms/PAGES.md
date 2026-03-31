# CMS / Website Builder — Page Layouts

---

## Dashboard Layout

```
┌─────────────────────────────────────────────────────────┐
│  SIDEBAR: Logo | Sites | Builder | Pages | Posts |      │
│           Media | SEO | Settings | Theme               │
├────────┬────────────────────────────────────────────────┤
│        │  HEADER: Site Selector [▼] | 🔔 | 👤 | 🌓    │
│        │────────────────────────────────────────────────│
│  NAV   │                                                │
│  RAIL  │  Welcome Back, Admin                           │
│        │                                                │
│        │  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│        │  │ Published │ │  Drafts  │ │  Traffic │       │
│        │  │    12     │ │     5    │ │  2.4K/mo │       │
│        │  │  pages    │ │   posts  │ │  +12%↑   │       │
│        │  └──────────┘ └──────────┘ └──────────┘       │
│        │                                                │
│        │  ┌─────────────────┬──────────────────────┐    │
│        │  │ RECENT EDITS    │  QUICK ACTIONS        │    │
│        │  │ ─ About page    │  [+ New Page]         │    │
│        │  │   Modified 2h   │  [+ New Post]         │    │
│        │  │ ─ Blog post #4  │  [📤 Publish All]     │    │
│        │  │   Draft 1d ago  │  [⚙ Site Settings]    │    │
│        │  │ ─ Contact page  │                       │    │
│        │  │   Published     │                       │    │
│        │  └─────────────────┴──────────────────────┘    │
│        │                                                │
│        │  ┌─────────────────────────────────────────┐   │
│        │  │ TRAFFIC OVERVIEW (Line Chart — 30 days) │   │
│        │  │ ▁▂▃▅▆▇█▇▆▅▅▆▇████▇▆▅▄▃▃▄▅▆▇█         │   │
│        │  └─────────────────────────────────────────┘   │
│        │                                                │
├────────┴────────────────────────────────────────────────┤
│  FOOTER: Powered by SiteForge CMS · v1.0               │
└─────────────────────────────────────────────────────────┘
```

---

## Page Builder Layout

```
┌─────────────────────────────────────────────────────────┐
│  BUILDER TOOLBAR: ← Back | Page: Homepage [▼]          │
│  [💾 Save] [👁 Preview] [📤 Publish] | Device: 🖥 📱    │
├─────────┬───────────────────────────────────┬───────────┤
│         │                                   │           │
│ SECTION │   LIVE PREVIEW CANVAS             │ PROPERTY  │
│ PANEL   │                                   │ PANEL     │
│         │   ┌─────────────────────────┐     │           │
│ Drag    │   │  ─── HERO SECTION ───   │     │ Section   │
│ sections│   │  Heading + Subtext      │     │ Settings  │
│ here:   │   │  [CTA Button]           │     │           │
│         │   └─────────────────────────┘     │ BG Color  │
│ □ Hero  │                                   │ [_______] │
│ □ Text  │   ┌─────────────────────────┐     │           │
│ □ Image │   │  ─── FEATURES GRID ──── │     │ Padding   │
│ □ Grid  │   │  [■] [■] [■]           │     │ T[__] B[_]│
│ □ CTA   │   │  Feature cards          │     │           │
│ □ Testi │   └─────────────────────────┘     │ Text      │
│ □ Gal.  │                                   │ Font [▼]  │
│ □ Prici │   ┌─────────────────────────┐     │ Size [▼]  │
│ □ FAQ   │   │  ─── CONTACT FORM ───── │     │ Color [■] │
│ □ Conta │   │  Name, Email, Message   │     │ Align ≡≡≡ │
│ □ Foote │   │  [Submit]               │     │           │
│         │   └─────────────────────────┘     │ Spacing   │
│         │                                   │ ●────────○│
│ + Custom│   ← Page sections are sortable →  │           │
│         │                                   │ [Delete]  │
├─────────┴───────────────────────────────────┴───────────┤
│  STATUS: Auto-saved 30s ago | Page: /about | 3 sections │
└─────────────────────────────────────────────────────────┘
```

---

## Pages Manager Layout

```
┌─────────────────────────────────────────────────────────┐
│  SIDEBAR │  HEADER                                      │
├──────────┤──────────────────────────────────────────────│
│          │  Pages (12)                   [+ New Page]   │
│          │  ┌──────────────────────────────────────┐    │
│          │  │ Search pages...  │ Status [▼] │ ≡ ⊞  │    │
│          │  └──────────────────────────────────────┘    │
│          │                                              │
│          │  ┌──────┬────────────┬────────┬──────┬────┐  │
│          │  │ Page │ Slug       │ Status │ Date │ ··· │  │
│          │  ├──────┼────────────┼────────┼──────┼────┤  │
│          │  │ Home │ /          │ 🟢 Live│ Jan 5│ ···│  │
│          │  │ About│ /about     │ 🟢 Live│ Jan 3│ ···│  │
│          │  │ Team │ /team      │ 🟡 Dra │ Jan 8│ ···│  │
│          │  │ Blog │ /blog      │ 🟢 Live│ Dec  │ ···│  │
│          │  │ Cont.│ /contact   │ 🟢 Live│ Dec  │ ···│  │
│          │  │ Prici│ /pricing   │ 🔴 Arch│ Nov  │ ···│  │
│          │  └──────┴────────────┴────────┴──────┴────┘  │
│          │                                              │
│          │  ··· = [Edit] [Duplicate] [Delete] [View]    │
│          │                                              │
│          │  ◀ 1 2 3 ▶                                   │
└──────────┴──────────────────────────────────────────────┘
```

---

## Post Editor Layout

```
┌─────────────────────────────────────────────────────────┐
│  ← Back to Posts  │  [Save Draft] [Schedule] [Publish]  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────┬───────────────┐    │
│  │                                 │ POST META     │    │
│  │  Post Title                     │               │    │
│  │  ─────────────────────────      │ Status: Draft │    │
│  │                                 │               │    │
│  │  ┌───────────────────────────┐  │ Category [▼]  │    │
│  │  │ B I U S │ H1 H2 │ 🔗 📷  │  │ Tags          │    │
│  │  ├───────────────────────────┤  │ [tag] [tag] + │    │
│  │  │                           │  │               │    │
│  │  │  Rich text editor area    │  │ Featured Img  │    │
│  │  │                           │  │ ┌───────────┐ │    │
│  │  │  Lorem ipsum dolor sit    │  │ │  📷 Drop  │ │    │
│  │  │  amet, consectetur...     │  │ │  or click │ │    │
│  │  │                           │  │ └───────────┘ │    │
│  │  │  > Blockquote text        │  │               │    │
│  │  │                           │  │ ── SEO ──     │    │
│  │  │  ```code block```         │  │ Meta Title    │    │
│  │  │                           │  │ [__________]  │    │
│  │  │                           │  │ Meta Desc     │    │
│  │  │                           │  │ [__________]  │    │
│  │  │                           │  │ URL Slug      │    │
│  │  │                           │  │ [__________]  │    │
│  │  │                           │  │               │    │
│  │  └───────────────────────────┘  │ SEO Score: 72 │    │
│  │                                 │ ████████░░ OK │    │
│  └─────────────────────────────────┴───────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Media Library Layout

```
┌─────────────────────────────────────────────────────────┐
│  SIDEBAR │  Media Library (248 files)   [📤 Upload]     │
├──────────┤──────────────────────────────────────────────│
│          │  [Search...] │ Type [▼] │ Date [▼] │ ≡ ⊞    │
│          │                                              │
│          │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐        │
│          │  │ 🖼   │ │ 🖼   │ │ 🖼   │ │ 🖼   │        │
│          │  │      │ │      │ │      │ │      │        │
│          │  │hero. │ │team. │ │logo. │ │bg-01.│        │
│          │  │420KB │ │1.2MB │ │45KB  │ │890KB │        │
│          │  └──────┘ └──────┘ └──────┘ └──────┘        │
│          │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐        │
│          │  │ 📄   │ │ 🖼   │ │ 🖼   │ │ 📄   │        │
│          │  │      │ │      │ │      │ │      │        │
│          │  │doc.  │ │post. │ │feat. │ │data. │        │
│          │  │120KB │ │560KB │ │340KB │ │88KB  │        │
│          │  └──────┘ └──────┘ └──────┘ └──────┘        │
│          │                                              │
│          │  ─── Selected: hero-banner.jpg ───           │
│          │  Dimensions: 1920×1080 │ Size: 420KB         │
│          │  Alt text: [________________]                │
│          │  [Copy URL] [Insert] [Delete]                │
└──────────┴──────────────────────────────────────────────┘
```

---

## SEO Settings Layout

```
┌─────────────────────────────────────────────────────────┐
│  SIDEBAR │  SEO Settings                                │
├──────────┤──────────────────────────────────────────────│
│          │  [Global SEO] [Per-Page] [Sitemap] [Robots]  │
│          │                                              │
│          │  ── GLOBAL SEO ──                            │
│          │                                              │
│          │  Site Title:  [SiteForge — Build Better___]  │
│          │  Separator:   [ | ▼]                         │
│          │  Default Description:                        │
│          │  [A modern website builder for everyone___]  │
│          │                                              │
│          │  ── SOCIAL / OG TAGS ──                      │
│          │  OG Image: [📷 Upload default OG image]      │
│          │  Twitter Card: [summary_large_image ▼]       │
│          │                                              │
│          │  ── PAGE SEO AUDIT ──                        │
│          │  ┌─────────────┬───────┬───────────────┐     │
│          │  │ Page        │ Score │ Issues         │     │
│          │  ├─────────────┼───────┼───────────────┤     │
│          │  │ Homepage    │ 92 🟢 │ None           │     │
│          │  │ About       │ 78 🟡 │ Missing alt    │     │
│          │  │ Blog Post 1 │ 65 🟡 │ Short desc     │     │
│          │  │ Contact     │ 45 🔴 │ No meta, no H1 │     │
│          │  └─────────────┴───────┴───────────────┘     │
│          │                                              │
│          │  [Save Changes]                              │
└──────────┴──────────────────────────────────────────────┘
```

---

## Theme Editor Layout

```
┌─────────────────────────────────────────────────────────┐
│  SIDEBAR │  Theme Editor              [Reset] [Save]    │
├──────────┤──────────────────────────────────────────────│
│          │  ┌──────────────┬───────────────────────┐    │
│          │  │ THEME PANEL  │  LIVE PREVIEW          │    │
│          │  │              │                        │    │
│          │  │ ── Colors    │  ┌──────────────────┐  │    │
│          │  │ Primary [■]  │  │  Simulated page  │  │    │
│          │  │ Accent  [■]  │  │  with current    │  │    │
│          │  │ BG      [■]  │  │  theme applied   │  │    │
│          │  │ Text    [■]  │  │                  │  │    │
│          │  │              │  │  Heading text     │  │    │
│          │  │ ── Fonts     │  │  Body paragraph   │  │    │
│          │  │ Heading [▼]  │  │  [Button]        │  │    │
│          │  │ Body    [▼]  │  │                  │  │    │
│          │  │              │  │  Card example    │  │    │
│          │  │ ── Spacing   │  │  ┌────────────┐  │  │    │
│          │  │ Section ●──○ │  │  │ Component  │  │  │    │
│          │  │ Element ●──○ │  │  │ preview    │  │  │    │
│          │  │              │  │  └────────────┘  │  │    │
│          │  │ ── Borders   │  │                  │  │    │
│          │  │ Radius  ●──○ │  └──────────────────┘  │    │
│          │  │ Width   [▼]  │                        │    │
│          │  └──────────────┴───────────────────────┘    │
└──────────┴──────────────────────────────────────────────┘
```
