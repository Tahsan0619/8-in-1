# Nonprofit & Charity — Components

---

## 1 · Navigation Components

### 1.1 Main Header

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Logo · Nav Links · [Donate Now ❤] · Theme Toggle            |
| Nav Links       | Causes, Impact, Volunteer, Events, Stories, About           |
| Donate Button   | Always visible, heart icon, animated pulse on hover         |
| Mobile          | Hamburger → slide-in drawer, Donate button stays visible    |
| Sticky          | Yes, shrinks on scroll with subtle shadow                   |

### 1.2 Footer

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Columns         | About Us · Quick Links · Contact · Newsletter               |
| Newsletter      | Email input + Subscribe button with confirmation toast      |
| Social Icons    | Facebook, Twitter, Instagram, YouTube                       |
| Bottom Bar      | © 2026 HopeBridge · Privacy Policy · Terms                  |
| Trust Badges    | Registered NGO seal, financial transparency badge           |

---

## 2 · Campaign Components

### 2.1 Campaign Card

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Image           | 16:10 cover photo with category badge overlay               |
| Content         | Title, short description (2 lines, clamped)                 |
| Progress Bar    | Filled gradient bar: raised / goal                          |
| Stats           | Percentage funded · Donors count · Days remaining           |
| Currency        | BDT (৳) formatted with comma separators                     |
| CTA             | [Donate Now] button + [Share] icon button                   |
| Hover           | Slight lift with shadow, image subtle zoom                  |

### 2.2 Campaign Progress Bar

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Track           | Rounded, muted background                                   |
| Fill            | Gradient from primary to secondary, smooth width transition  |
| Label           | "৳820,000 of ৳1,000,000" above bar, "82%" right-aligned    |
| Animation       | Width animates on page load (CSS transition)                 |
| States          | Active (green), Urgent (<10 days, red pulse), Completed (✓) |

### 2.3 Campaign Timeline

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Vertical timeline with date nodes on left                   |
| Entries         | Date · Title · Description · Optional photo                 |
| Connector       | Dotted line between nodes                                   |
| Latest First    | Newest update at top                                        |

### 2.4 Donor List

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Item            | Avatar (initials) · Name · Amount · Time ago                |
| Anonymous       | Shows "Anonymous" with generic avatar                       |
| Scroll          | Max 5 visible, scrollable or "View All" expander            |

---

## 3 · Donation Components

### 3.1 Amount Selector

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Preset Buttons  | ৳500 · ৳1,000 · ৳2,500 · ৳5,000 · ৳10,000                 |
| Custom Input    | Number field with ৳ prefix, min ৳100                        |
| Selection       | Single select, active state with filled background          |
| Impact Label    | Shows what the amount can achieve (e.g., "Water for 1 family") |

### 3.2 Donation Form (Multi-Step)

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Steps           | 1) Amount & Frequency → 2) Info → 3) Payment & Confirm     |
| Step Indicator  | Numbered circles with connecting line, active/completed fill |
| Frequency       | Radio: One-time · Monthly                                   |
| Anonymous       | Checkbox to hide donor name                                  |
| Dedication      | Optional "In honor of" text field                           |
| Payment Methods | bKash · Nagad · Credit Card · Bank Transfer (simulated)     |
| Validation      | Inline field validation, required markers                   |
| Summary         | Review panel showing campaign, amount, frequency, fees      |

### 3.3 Donation Success

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Centered card with confetti animation                       |
| Content         | Thank you message · Amount · Campaign name · Receipt #     |
| Impact          | "Your donation will..." impact statement                    |
| Actions         | [Share on Social] · [Download Receipt] · [Back to Home]    |
| Confetti        | CSS keyframe animation, auto-stops after 3 seconds          |

### 3.4 Donation Receipt

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Content         | Receipt #, date, donor info, campaign, amount, payment      |
| Download        | Generates printable HTML receipt view (print CSS)           |

---

## 4 · Impact Components

### 4.1 Impact Counter

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | 4-column grid of stat cards                                  |
| Animation       | Count-up animation on scroll into view (Intersection Observer) |
| Items           | Total Raised · Lives Changed · Projects · Regions           |
| Formatting      | Large number, descriptive label below                       |

### 4.2 Fund Allocation Chart

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Type            | Donut chart (Chart.js)                                       |
| Data            | Category breakdown: Water, Education, Healthcare, Emergency |
| Legend          | Color-coded labels with percentages below chart             |
| Interaction     | Hover shows tooltip with exact amount                       |

### 4.3 Donation Trend Chart

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Type            | Line chart (Chart.js)                                        |
| Data            | Monthly donations over 12 months                            |
| Axes            | X: months, Y: amount (৳)                                    |
| Theme           | Adapts colors for light/dark mode                           |

### 4.4 Financial Transparency Table

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Columns         | Category · Received · Spent · Remaining                    |
| Totals Row      | Bold bottom row with column sums                            |
| Sortable        | Click column headers to sort                                |
| Visual          | Spent/Received ratio bar in each row                        |

---

## 5 · Volunteer Components

### 5.1 Volunteer Opportunity Card

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Row-style card with icon/image left                         |
| Content         | Title · Location · Time commitment · Duration               |
| Skills          | Tag pills for required skills                                |
| CTA             | [Apply] button + [Learn More] link                          |
| Badge           | "Urgent" or "Remote" badge if applicable                    |

### 5.2 Volunteer Signup Form

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Fields          | Name · Email · Phone · Skills (multi-select) · Availability |
| Textarea        | "Why do you want to volunteer?" motivation field            |
| Preferred Area  | Dropdown: Field Work, Events, Admin, Online                 |
| Success State   | Confirmation message with next steps                        |

### 5.3 Volunteer Stats Bar

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Horizontal bar with 3 stats                                  |
| Items           | Active Volunteers · Total Hours · Districts Covered          |
| Style           | Icon + number + label                                        |

---

## 6 · Event Components

### 6.1 Event Card

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Image           | Cover photo with date badge overlay (month/day)             |
| Content         | Title · Date/Time · Location · Fundraising goal             |
| Progress        | Mini progress bar if fundraising event                      |
| Countdown       | Live countdown timer (days, hours, minutes)                 |
| CTA             | [Register] button                                            |
| State           | Upcoming (active) · Happening Now (pulsing) · Past (grayed) |

### 6.2 Event Countdown Timer

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Display         | Days · Hours · Minutes · Seconds (flip-card style optional) |
| Update          | setInterval every 1 second                                   |
| End State       | Shows "Event Started!" or "Event Ended"                     |

### 6.3 Event Registration Modal

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Fields          | Name · Email · Phone · Number of guests                    |
| Confirmation    | Success message with event details & calendar download link  |
| Overlay         | Backdrop blur, close on ESC/outside click                   |

---

## 7 · Story Components

### 7.1 Story Card

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Image left (or top on mobile), content right                |
| Image           | Beneficiary photo, rounded corners                         |
| Content         | Quote excerpt · Beneficiary name · Location                |
| CTA             | [Read Full Story →]                                         |
| Featured        | First story larger, full-width layout                       |

### 7.2 Story Detail

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Long-form article with hero image, blockquote, body text   |
| Sidebar         | Related campaign card + Donate CTA                          |
| Gallery         | Before/After photo comparison if available                  |
| Share           | Social share buttons at bottom                              |

---

## 8 · Shared / UI Components

### 8.1 Theme Toggle

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Icon            | Sun ↔ Moon with rotation transition                         |
| Storage         | localStorage preference, respects `prefers-color-scheme`    |
| Transition      | 300ms background/color transition on `<body>`               |

### 8.2 Toast Notification

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Types           | Success (green) · Error (red) · Info (blue)                 |
| Position        | Bottom-right, stacking                                       |
| Duration        | 4 seconds auto-dismiss, close button                        |
| Animation       | Slide in from right, fade out                               |

### 8.3 Modal

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Overlay         | Semi-transparent backdrop with blur                         |
| Content         | Dynamic content slot                                         |
| Close           | X button, ESC key, click outside                            |
| Focus Trap      | Tab cycling within modal                                     |
| Animation       | Scale up + fade in                                           |

### 8.4 Share Widget

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Options         | Copy Link · Facebook · Twitter · WhatsApp                  |
| Layout          | Inline button group or dropdown                              |
| Copy Feedback   | "Link copied!" toast on clipboard copy                      |

### 8.5 Back to Top

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Visibility      | Appears after scrolling 400px                                |
| Behavior        | Smooth scroll to top                                         |
| Icon            | Arrow up in circular button                                  |
