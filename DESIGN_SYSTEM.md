# Profound Careers - Design System

Reference document for recreating [tryprofound.com/careers](https://www.tryprofound.com/careers)

---

## 📐 Layout System

### Container
| Property | Value | Tailwind Class |
|----------|-------|----------------|
| Max Width | `1088px` | `max-w-[1088px]` |
| Padding | `0 16px` | `px-4` |
| Centering | `margin: 0 auto` | `mx-auto` |

### 4-Column Grid
| Property | Value |
|----------|-------|
| Columns | 4 equal columns |
| Each column | `264px` wide |
| Total | 264 × 4 = 1056px + 32px padding = 1088px |

### Grid Usage Patterns
```
┌─────────┬─────────┬─────────┬─────────┐
│  Col 1  │  Col 2  │  Col 3  │  Col 4  │
├─────────┴─────────┼─────────┴─────────┤
│   Span 2 (1-2)    │   Span 2 (3-4)    │  ← Mission + Stats section
├─────────┴─────────┴─────────┴─────────┤
│              Span 4 (full)            │  ← Job listings
└───────────────────────────────────────┘
```

### Dotted Dividers
Vertical dotted lines between columns using CSS gradient trick:
```css
width: 1px;
background: linear-gradient(180deg, #232323, #232323 50%, transparent 0, transparent);
background-size: 2px 12px; /* 6px dot, 6px gap */
```

### Responsive Breakpoints
| Breakpoint | Columns | Notes |
|------------|---------|-------|
| Desktop (lg+) | 4 columns | Full grid with dotted lines |
| Tablet (md) | 2 columns | Each spans 2 original columns |
| Mobile (sm) | 1 column | Full width stacking |

---

## 🎨 Color Palette

### Primary Colors
| Name | Hex | RGB | CSS Variable | Usage |
|------|-----|-----|--------------|-------|
| White | `#edf2f5` | `237, 242, 245` | `--color-text-primary` | Primary text, headings |
| Gray 1 | `#9f9f9f` | `159, 159, 159` | `--color-text-secondary` | Secondary body text |
| Gray 2 | `#828282` | `130, 130, 130` | `--color-text-muted` | Nav items, tertiary text |

### Background Colors
| Name | Hex | RGB | CSS Variable | Usage |
|------|-----|-----|--------------|-------|
| Background | `#0d0d0d` | `13, 13, 13` | `--color-bg-primary` | Page background |
| Pure Black | `#000000` | `0, 0, 0` | `--color-bg-black` | Some sections, html root |
| Header BG | `rgba(0,0,0,0.7)` | — | `--color-bg-header` | Sticky header |

### UI Colors
| Name | Hex | RGB | CSS Variable | Usage |
|------|-----|-----|--------------|-------|
| Button Dark | `#333333` | `51, 51, 51` | `--color-btn-dark` | "Learn more" buttons |
| Button Light | `#ffffff` | `255, 255, 255` | `--color-btn-light` | "Get a Demo" button |
| Divider | `#232323` | `35, 35, 35` | `--color-divider` | Dotted grid lines, borders |

---

## 🔤 Typography

### Font Family
**InterVariable** with fallbacks:
```css
font-family: InterVariable, "InterVariable Fallback", "SF Pro Display", 
             -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, 
             Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
```

### Type Scale

| Name | Size | Line Height | Letter Spacing | Weight | Usage |
|------|------|-------------|----------------|--------|-------|
| `h1` | 56px | 64px | -2.94px | 500 | Hero headings |
| `h2` | 24px | 32px | -0.3px | 500 | Section headings |
| `body-lg` | 18px | 24px | -0.045px | 400 | Large body text |
| `body` | 16px | 24px | -0.2px | 400 | Default body text |
| `small` | 14px | 20px | 0 | 400 | Buttons, job cards, labels |

### Text Colors by Context
| Context | Color | Hex |
|---------|-------|-----|
| Headings | White | `#edf2f5` |
| Body text | White | `#edf2f5` |
| Secondary text | Gray | `#9f9f9f` |
| Nav items | Gray | `#828282` |
| Muted/tertiary | Gray | `#828282` |

---

## 🧩 Component Specs

### Buttons

#### Primary Button ("Get a Demo")
```css
background: #ffffff;
color: #222222;
padding: 6px 12px;
border-radius: 8px;
font-size: 14px;
font-weight: 500;
```

#### Secondary Button ("Learn more")
```css
background: #333333;
color: #edf2f5;
padding: 6px 12px;
border-radius: 8px;
font-size: 14px;
font-weight: 500;
```

#### Ghost Button (Nav items)
```css
background: transparent;
color: #828282;
padding: 0 12px;
font-size: 14px;
```

### Header/Navbar
```css
position: sticky;
top: 0;
z-index: 50;
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(?px); /* TBD */
height: ~56px; /* TBD - verify */
```

### Job Card
- Full width within container
- Border top: `1px solid #232323`
- Padding: vertical spacing TBD
- Layout: Title + Department | Location | Learn more button

### Dropdown (Filter buttons)
```css
background: transparent;
border: 1px solid #232323;
border-radius: 8px;
padding: 6px 12px;
color: #edf2f5;
font-size: 14px;
```

---

## 📱 Responsive Behavior

### Grid Columns
- **Desktop (1024px+)**: 4 columns, all dotted lines visible
- **Tablet (768px-1023px)**: 2 columns, some lines hidden
- **Mobile (<768px)**: 1 column, no dotted lines

### Header
- Desktop: Full nav visible
- Mobile: Hamburger menu (deferred)

---

## 🏗️ Page Structure

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (sticky)                                         │
│ Logo | Nav Items | Log in | Get a Demo                  │
├─────────────────────────────────────────────────────────┤
│ HERO SECTION                                            │
│ "We help the world understand AI"                       │
│ [View open roles button]                                │
├─────────────────────────────────────────────────────────┤
│ MISSION + STATS SECTION (4-col grid with dotted lines)  │
│ Col 1-2: Our mission text    │ Col 3-4: Stats (1B+ etc) │
├─────────────────────────────────────────────────────────┤
│ JOB LISTINGS SECTION                                    │
│ "We have 58 open positions" + Filters                   │
│ [Job cards list...]                                     │
├─────────────────────────────────────────────────────────┤
│ DESIGN TEAM CARD                                        │
│ Avatars + "Design Opportunities at Profound"            │
├─────────────────────────────────────────────────────────┤
│ INVESTORS SECTION                                       │
│ Logos + Individual investor cards                       │
├─────────────────────────────────────────────────────────┤
│ VALUES SECTION                                          │
│ 4 value cards (Invent, Experiment, Impact, Build)       │
├─────────────────────────────────────────────────────────┤
│ PROCESS SECTION                                         │
│ Timeline: Intro call → Debrief → Onsite                 │
├─────────────────────────────────────────────────────────┤
│ PRESS/FEATURED SECTION                                  │
│ Publication logos                                       │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│ Links + Social + Copyright                              │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Implementation Notes

### Deferred Features
- [ ] Mobile hamburger menu
- [ ] Dropdown menu functionality
- [ ] Job filtering (departments/locations)
- [ ] Job card click → detail page
- [ ] WebGL effects (using placeholder circles)
- [ ] Actual logo (using placeholder)
- [ ] Real investor/press logos (using placeholders)

### Assets Needed
- [ ] Profound logo SVG
- [ ] Investor logos
- [ ] Team member photos
- [ ] Press publication logos

---

## 🔗 Reference
- Live site: https://www.tryprofound.com/careers
- Inspected on: December 2024

