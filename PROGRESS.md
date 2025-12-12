# Profound Careers - Development Progress

This document tracks the implementation progress of the Profound Careers page, based on the design system and reference site [tryprofound.com/careers](https://www.tryprofound.com/careers).

---

## 📋 Project Overview

**Goal:** Recreate the Profound Careers page with a consistent 4-column grid system, following the design specifications.

**Reference:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Complete design tokens and specifications  
**Grid System:** [GRID_SYSTEM.md](./GRID_SYSTEM.md) - Grid implementation details

---

## ✅ Completed Components

### 1. Header Component (`app/components/Header.tsx`)

**Status:** ✅ Complete

**Features Implemented:**
- Sticky header with backdrop blur
- 4-column grid layout
- Logo section (Column 1)
- Navigation menu spanning columns 2-3
- Right-side actions: "Log in" and "Get a Demo" button (Column 4)
- Vertical centering fix applied
- Responsive grid columns using `minmax(0, 264px)`

**Layout:**
```
┌─────────┬──────────────────────┬─────────┐
│ Logo    │ Navigation (span 2) │ Actions │
│ Col 1   │ Col 2-3             │ Col 4   │
└─────────┴──────────────────────┴─────────┘
```

**Key Implementation Details:**
- Uses `container-main` wrapper for consistent max-width and padding
- Grid height set to `h-[54px]` to match header `min-h-[54px]`
- Navigation items include dropdown indicators (ChevronDown) for Platform, Resources, Solutions
- Active state styling for "Careers" link

---

### 2. Hero Component (`app/components/Hero.tsx`)

**Status:** ✅ Complete

**Features Implemented:**
- Full viewport height section (`h-screen`)
- 4-column grid with dotted vertical dividers
- Centered content with white circle background element
- Main heading: "We help the world understand AI"
- Subheading text
- "View open roles" button
- Responsive grid columns

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                    Full Width Grid                      │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                      │
│  │  │  │  │  │  │  │  │  │  │  │                      │
│  └─────┘ └─────┘ └─────┘ └─────┘                      │
│                                                          │
│              [Centered Content]                         │
│              • White circle                             │
│              • Heading                                  │
│              • Subheading                               │
│              • Button                                   │
└─────────────────────────────────────────────────────────┘
```

**Key Implementation Details:**
- 5 vertical dotted lines positioned at 0%, 25%, 50%, 75%, 100%
- Content spans all 4 columns (`col-span-4`)
- White circle: `w-[324px] h-[324px]` with `opacity-10`
- Uses percentage-based positioning for dividers to maintain alignment at all screen sizes

---

### 3. Jobs Component (`app/components/Jobs.tsx`)

**Status:** ✅ Complete

**Features Implemented:**
- Top border (solid line matching divider color)
- Black background (temporary, will be changed)
- Nested grid layout for content organization
- Mission section spanning columns 1-2
- Stats sections in columns 3 and 4
- Individual stat borders aligned with grid dividers
- Responsive text widths using `max-w-*`

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│ ─────────────────────────────────────────────────────── │ ← Top border
│                                                          │
│ ┌──────────────────────┬─────────┬─────────┐          │
│ │ Mission (span 2)     │ Stats   │ Stats   │          │
│ │                      │ │ 1B+   │ │ 10M+  │          │
│ │ • Our mission        │ │ 30B+  │         │          │
│ │ • Mission statement  │         │         │          │
│ │ • Paragraphs         │         │         │          │
│ └──────────────────────┴─────────┴─────────┘          │
└─────────────────────────────────────────────────────────┘
```

**Mission Section:**
- Heading: "Our mission" (h3)
- Main statement: Large text (h2) with `max-w-[324px]`
- Two paragraphs with `max-w-[384px]` for optimal reading width
- Responsive: Text scales down on smaller screens

**Stats Sections:**
- Column 3: "1B+" and "30B+" stats stacked vertically
- Column 4: "10M+" stat
- Each stat has individual left border (`#555555`) aligned with grid divider
- Borders positioned at `-left-4` to account for padding and align with grid

**Key Implementation Details:**
- Nested grid: Outer grid for dividers, inner grid (`col-span-4`) for content
- Content container uses `py-32` for vertical padding (will be adjusted)
- Section height is viewport height (`h-screen`) - will be changed to content-based
- Background is black (`bg-[var(--bg-black)]`) - will be changed later
- Fixed width issue resolved: Changed `w-[324px]` to `max-w-[324px]` for responsive scaling

---

## 🎨 Design System Implementation

### CSS Variables (`app/globals.css`)

**Status:** ✅ Complete

All design tokens from `DESIGN_SYSTEM.md` are implemented:
- Background colors: `--bg-primary`, `--bg-black`, `--bg-header`
- Text colors: `--text-primary`, `--text-secondary`, `--text-muted`, `--text-dark`
- UI colors: `--btn-dark`, `--btn-light`, `--divider`, `--border`
- Layout: `--container-max`, `--container-padding`, `--column-width`
- Typography: Letter spacing variables for h1, h2, body-lg, body

### Typography Classes

**Status:** ✅ Complete

- `.text-h1` - Hero headings (56px, 64px line-height)
- `.text-h2` - Section headings (24px, 32px line-height)
- `.text-h3` - Subsection headings (needs to be added to globals.css)
- `.text-body-lg` - Large body text (18px, 24px line-height)
- `.text-body-md` - Medium body text (needs to be added to globals.css)
- `.text-body` - Default body text (16px, 24px line-height)
- `.text-small` - Small text (14px, 20px line-height)

### Layout Utilities

**Status:** ✅ Complete

- `.container-main` - Main container with max-width 1088px and padding
- `.dotted-line` - Dotted divider line utility
- `.btn-primary` - Primary button styles
- `.btn-secondary` - Secondary button styles
- `.btn-filter` - Filter/dropdown button styles

---

## 📐 Grid System Implementation

**Status:** ✅ Complete

**Core Features:**
- 4-column grid with `repeat(4, minmax(0, 264px))`
- Responsive columns that scale proportionally
- Percentage-based divider positioning (25%, 50%, 75%)
- Consistent `container-main` wrapper usage

**Components Using Grid:**
1. ✅ Header - Single grid layout
2. ✅ Hero - Grid with dividers
3. ✅ Jobs - Nested grid layout

**Documentation:** See [GRID_SYSTEM.md](./GRID_SYSTEM.md) for detailed implementation guide.

---

## 🚧 Pending/Deferred Features

### Components Not Yet Implemented

- [ ] Job Listings Section
  - "We have 58 open positions" heading
  - Filter dropdowns (departments/locations)
  - Job cards list
  - Job card click → detail page

- [ ] Design Team Card
  - Avatars
  - "Design Opportunities at Profound" content

- [ ] Investors Section
  - Investor logos
  - Individual investor cards

- [ ] Values Section
  - 4 value cards: Invent, Experiment, Impact, Build

- [ ] Process Section
  - Timeline: Intro call → Debrief → Onsite

- [ ] Press/Featured Section
  - Publication logos

- [ ] Footer
  - Links
  - Social media
  - Copyright

### Functionality Not Yet Implemented

- [ ] Mobile hamburger menu
- [ ] Dropdown menu functionality
- [ ] Job filtering (departments/locations)
- [ ] Job card click → detail page
- [ ] WebGL effects (currently using placeholder circles)

### Assets Needed

- [ ] Profound logo SVG
- [ ] Investor logos
- [ ] Team member photos
- [ ] Press publication logos

---

## 🔧 Technical Notes

### Responsive Behavior

- Grid columns scale proportionally below 1088px
- Text widths use `max-w-*` for responsive scaling
- Percentage-based positioning ensures dividers align at all screen sizes

### Known Issues / Future Improvements

1. **Jobs Component:**
   - Height is currently `h-screen` - should be content-based
   - Background is black - will be changed
   - Padding `py-32` - will be adjusted

2. **Typography:**
   - `.text-h3` and `.text-body-md` classes need to be added to `globals.css`

3. **Responsive Breakpoints:**
   - Consider adding breakpoints for tablet (2 columns) and mobile (1 column)
   - Currently scales proportionally at all sizes

---

## 📊 Progress Summary

| Component | Status | Notes |
|-----------|--------|-------|
| Design System | ✅ Complete | All tokens and utilities implemented |
| Grid System | ✅ Complete | Documented and working across components |
| Header | ✅ Complete | Fully functional with navigation |
| Hero | ✅ Complete | Viewport height with centered content |
| Jobs (Mission + Stats) | ✅ Complete | Nested grid with stat borders |
| Job Listings | ⏳ Pending | Next to implement |
| Design Team Card | ⏳ Pending | — |
| Investors | ⏳ Pending | — |
| Values | ⏳ Pending | — |
| Process | ⏳ Pending | — |
| Press/Featured | ⏳ Pending | — |
| Footer | ⏳ Pending | — |

**Overall Progress:** ~30% complete (3 of 10+ sections)

---

## 🔗 Related Documentation

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Complete design specifications
- [GRID_SYSTEM.md](./GRID_SYSTEM.md) - Grid implementation guide
- [README.md](./README.md) - Project setup and overview

---

*Last updated: After Jobs component completion with nested grid and stat borders*

