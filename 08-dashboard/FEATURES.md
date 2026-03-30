# Dashboard / SaaS — Features

---

## 1. Overview Dashboard

### 1.1 KPI Cards Row
- 4-6 metric cards in a responsive grid
- Each card: metric label, large number (mono font), percentage change with color indicator (green up / red down), sparkline mini-chart
- Metrics: Total Revenue, Active Users, Conversion Rate, MRR, Churn Rate, New Signups
- Numbers animate on load (count-up from 0)
- Click card to navigate to relevant detail page

### 1.2 Revenue Chart (Primary)
- Chart.js area/line chart — monthly/weekly/daily toggle
- Multiple datasets: Revenue, Expenses, Profit
- Hover tooltip with exact values
- Legend toggle to show/hide datasets
- Time range selector: 7d, 30d, 90d, 12m, Custom
- Gradient fill under line matching accent color

### 1.3 Activity Distribution
- Doughnut chart showing user activity by category
- Center number: total activities
- Legend with clickable labels
- Hover: segment expands slightly, tooltip shows percentage

### 1.4 Recent Activity Feed
- Chronological list of recent events
- Each item: icon, description, user avatar, relative time
- Types: New signup, Purchase, Support ticket, Feature usage
- "View all" link at bottom
- Auto-refresh every 30 seconds (simulated)

### 1.5 Quick Actions
- Floating action row or card: Create Invoice, Add Contact, View Reports, Export Data
- Keyboard shortcuts displayed on hover

### 1.6 Top Performers Table
- Mini table: top 5 customers/products/pages
- Columns: Rank, Name, Metric, Change
- Sortable by clicking column headers

---

## 2. Data Tables

### 2.1 Core Table Features
- Sortable columns (click header, asc/desc/none cycle)
- Column resize by dragging borders
- Column visibility toggle (dropdown to show/hide columns)
- Row selection with checkboxes (individual + select all)
- Bulk actions bar appears when rows selected: Delete, Export, Change Status

### 2.2 Search & Filter
- Search input with debounce (300ms)
- Filter dropdowns: Status, Category, Date Range, Custom fields
- Active filters shown as removable chips
- Clear all filters button
- Filter count badge on filter button

### 2.3 Pagination
- Items per page selector: 10, 25, 50, 100
- Page navigation: ← 1 2 3 ... 12 →
- "Showing 1-25 of 342 results" text
- Keyboard navigation: left/right arrow for pages

### 2.4 Row Actions
- Hover reveals action icons on right: Edit, Delete, More (⋯)
- More dropdown: Duplicate, Archive, Export, View Details
- Double-click row opens detail panel/modal
- Right-click context menu (optional)

### 2.5 Inline Editing
- Double-click cell to edit inline
- Enter to save, Escape to cancel
- Visual feedback: cell border turns accent on edit mode
- Validation on save (red border + tooltip on error)

### 2.6 Data Export
- Export selected or all rows
- Formats: CSV, JSON
- Download triggers browser download

### 2.7 Empty State
- Custom illustration/icon when no data
- "No results found" with suggestion to adjust filters
- "Add first item" CTA button

---

## 3. CRM Module

### 3.1 Contacts Page
- Table view with columns: Avatar+Name, Email, Company, Status, Last Contact, Value
- Quick add contact button
- Contact detail slide-over panel (click row)
- Tags/labels on contacts (colorful pills)
- Import contacts button (CSV upload)

### 3.2 Contact Detail Panel
- Slide-over from right (doesn't leave page)
- Avatar, name, email, phone, company, role
- Activity timeline: calls, emails, meetings, notes
- Add note / Log activity buttons
- Deal association section
- Edit / Delete actions

### 3.3 Pipeline Board (Kanban)
- Columns: Lead → Qualified → Proposal → Negotiation → Won / Lost
- Each card: Contact name, deal value, company, days in stage
- Drag-and-drop cards between columns
- Column header shows: count and total value
- Add new deal button per column
- Won/Lost columns with different visual treatment (green/red tint)

### 3.4 Deal Detail Modal
- Deal name, value, stage, probability
- Associated contact
- Activity history
- Notes section
- Expected close date
- Stage history timeline

---

## 4. Analytics Module

### 4.1 Traffic Overview
- Line chart: visitors over time (unique + total)
- Metric cards: Total Visits, Unique Visitors, Bounce Rate, Avg. Session Duration
- Time range: Today, 7d, 30d, 90d, Custom

### 4.2 Source Breakdown
- Horizontal bar chart: Direct, Organic Search, Social, Referral, Email, Paid
- Click source to drill down into details
- Percentage labels on bars

### 4.3 Top Pages Table
- Columns: Page URL, Views, Unique Views, Avg. Time, Bounce Rate
- Sparkline in views column
- Sortable, filterable

### 4.4 Geographic Distribution
- World map (simplified SVG) with colored regions
- Hover region for country stats
- Top 10 countries list alongside map
- Color intensity = traffic volume

### 4.5 Conversion Funnel
- Vertical funnel visualization
- Stages: Visit → Signup → Trial → Paid → Retained
- Conversion rate between each stage
- Drop-off percentage highlighted in red

### 4.6 Real-Time Panel
- Live visitor count with animated number
- Active pages list with visitor count
- Events per minute graph (live-updating sparkline)
- "Online now" indicator pulses

---

## 5. Finance Module

### 5.1 Finance Overview
- Revenue vs Expenses chart (stacked bar or dual-line)
- P&L summary card: Revenue, Expenses, Net Income, margin %
- MRR/ARR trend chart
- Outstanding invoices total
- Cash flow projection (next 30 days)

### 5.2 Invoice List
- Table: Invoice #, Client, Amount, Status (Paid/Pending/Overdue/Draft), Due Date, Issued Date
- Status pill with color coding
- Bulk actions: Send reminder, Mark as paid, Download
- Filter by status, date range, client

### 5.3 Create Invoice
- Multi-section form: Client selection, Line items table (item, qty, rate, amount), Tax, Discount, Notes
- Line items: Add/remove rows, auto-calculate totals
- Auto-generate invoice number
- Preview mode before sending
- Save as draft or send immediately

### 5.4 Invoice Detail
- Full invoice view (printable layout)
- Header: Company info, invoice #, dates
- Client info block
- Line items table
- Subtotal, tax, discount, total
- Payment status badge
- Actions: Send, Download PDF, Mark Paid, Edit, Delete
- Payment history section

### 5.5 Expense Tracking
- Expense list with category, amount, date, receipt
- Category breakdown chart (doughnut)
- Monthly comparison bar chart
- Add expense modal with category selector and receipt upload

---

## 6. Settings

### 6.1 Account Settings
- Profile photo, name, email, timezone
- Password change (current + new + confirm)
- Two-factor authentication toggle (mock)
- Session management: active sessions list with revoke

### 6.2 Team Management (User Management)
- Team members table: Avatar, Name, Email, Role, Status, Last Active
- Invite member modal: email + role selector
- Role types: Owner, Admin, Member, Viewer
- Edit role inline
- Remove member with confirmation

### 6.3 Billing
- Current plan card with features breakdown
- Plan comparison table (Free, Pro, Enterprise)
- Usage meter: API calls, storage, team members
- Payment method card (last 4 digits, expiry)
- Billing history table with download receipts

### 6.4 Integrations
- Grid of available integrations (Slack, GitHub, Stripe, etc.)
- Each card: logo, name, description, [Connect] / [Connected ✓]
- Connected integrations show settings link
- Search/filter integrations

### 6.5 API Settings
- API key display (masked with reveal toggle)
- Generate new key (with confirmation)
- Webhook URL configuration
- API usage chart (requests per day)
- Documentation link

### 6.6 Appearance
- Theme: Light / Dark / System
- Sidebar: Expanded / Collapsed default
- Density: Comfortable / Compact
- Language selector
- Date format preference

---

## 7. Notifications

### 7.1 Notification Center Page
- Full-page notification list grouped by date
- Types: System, Team, Billing, Security, Integration
- Each item: icon, title, description, time, read/unread
- Mark as read (individual + mark all)
- Delete notification

### 7.2 Notification Preferences
- Per-category toggle matrix: Email, Push, In-app
- Categories: Security alerts, billing, team activity, product updates, weekly digest
- Quiet hours setting
- Email digest frequency: Real-time, Daily, Weekly

### 7.3 Toast Notifications
- Non-blocking toasts appear top-right
- Types: Success (green), Error (red), Warning (yellow), Info (blue)
- Auto-dismiss after 5 seconds
- Manual dismiss with ✕ button
- Stack up to 3 visible at once
- Action button within toast (e.g., "Undo", "View")

---

## 8. Global UI/UX Features

### 8.1 Command Palette
- `Cmd+K` / `Ctrl+K` triggers overlay
- Search pages, actions, settings, contacts, invoices
- Keyboard navigation with arrow keys
- Recent actions section
- Categorized results with icons

### 8.2 Sidebar Navigation
- Collapsible (toggle or auto on tablet)
- Sections: Main, CRM, Finance, Analytics, Settings
- Hover tooltip when collapsed shows label
- Active item: accent bg, white text
- Nested items for sub-pages
- User avatar + org name at bottom
- Collapse button at bottom

### 8.3 Header Bar
- Breadcrumbs: Dashboard > Analytics > Traffic
- Global search input
- Notification bell with unread count
- Theme toggle
- User avatar dropdown: Profile, Settings, Help, Log out

### 8.4 Keyboard Shortcuts
- `Cmd+K`: Command palette
- `Cmd+/`: Show keyboard shortcut help
- `Cmd+N`: New item (context-dependent)
- `Cmd+S`: Save current form
- `Esc`: Close modal/panel
- `?`: Open help

### 8.5 Dark Mode
- Dark-first design, light mode derived from it
- System preference detection with manual override
- Smooth 150ms transition on toggle
- All charts adjust colors for dark/light backgrounds

### 8.6 Responsive Design
- Desktop: Full sidebar + multi-column content
- Tablet: Collapsed sidebar + 2-column
- Mobile: Hidden sidebar (hamburger), single column, stacked cards
- Tables switch to card view on mobile

### 8.7 Loading & Skeleton States
- Initial page: skeleton for KPIs, charts, tables
- Data refresh: subtle loading bar at top of content area
- Button loading: spinner replaces text
- Optimistic updates for quick actions
