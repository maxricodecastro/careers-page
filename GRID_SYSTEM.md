# Grid System Implementation

This document details the 4-column grid system implementation and how it's used throughout the Profound Careers application.

---

## 📐 Grid System Overview

### Core Specifications

| Property | Value | CSS Variable |
|----------|-------|--------------|
| **Total Container Width** | `1088px` (max) | `--container-max: 1088px` |
| **Number of Columns** | 4 | — |
| **Column Width** | `264px` (max, scales down) | `--column-width: 264px` |
| **Container Padding** | `16px` (left/right) | `--container-padding: 16px` |
| **Calculation** | 264px × 4 = 1056px + 32px padding = 1088px (at max width) | — |
| **Responsive Behavior** | Columns scale proportionally below 1088px | — |

### Grid Structure

```
┌─────────────────────────────────────────────────────────┐
│ Container: 1088px max-width, 16px padding               │
│                                                          │
│ ┌─────────┬─────────┬─────────┬─────────┐              │
│ │ Col 1   │ Col 2   │ Col 3   │ Col 4   │              │
│ │ 264px   │ 264px   │ 264px   │ 264px   │              │
│ └─────────┴─────────┴─────────┴─────────┘              │
│                                                          │
│ Total: 1056px (grid) + 32px (padding) = 1088px         │
└─────────────────────────────────────────────────────────┘
```

---

## 🏗️ Implementation Details

### CSS Grid Setup

The grid is implemented using CSS Grid with responsive column widths:

```tsx
<div
  className="relative grid items-center h-[56px]"
  style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}
>
  {/* Grid content */}
</div>
```

**Key Properties:**
- `grid`: Enables CSS Grid layout
- `gridTemplateColumns: 'repeat(4, minmax(0, 264px))'`: Creates 4 equal columns that:
  - Scale down proportionally when container width < 1088px
  - Cap at 264px maximum width on large screens
  - Maintain equal widths across all columns
- `items-center`: Vertically centers all grid items
- `relative`: Allows absolute positioning of child elements (for dividers, etc.)

**Responsive Behavior:**
- **Large screens (≥1088px)**: Columns are exactly 264px each
- **Smaller screens (<1088px)**: Columns scale proportionally, maintaining equal widths
- **Minimum width**: Columns can shrink to accommodate content (minmax ensures they don't overflow)

### Container Wrapper

All grid implementations are wrapped in the `container-main` class:

```tsx
<div className="container-main relative w-full">
  {/* Grid container */}
</div>
```

**CSS Definition:**
```css
.container-main {
  max-width: var(--container-max); /* 1088px */
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding); /* 16px */
  padding-right: var(--container-padding); /* 16px */
}
```

---

## 🧩 Header Component Implementation

### Structure

The Header component uses the 4-column grid to organize its content:

```
┌─────────┬──────────────────────┬─────────┐
│ Logo    │ Navigation (span 2)   │ Actions │
│ Col 1   │ Col 2-3              │ Col 4   │
└─────────┴──────────────────────┴─────────┘
```

### Code Implementation

```tsx
<header className="sticky top-0 z-50 min-h-[56px] border-b border-[var(--divider)] bg-[var(--bg-header)] backdrop-blur-sm flex items-center">
  <div className="container-main relative w-full">
    <div
      className="relative grid items-center h-[56px]"
      style={{ gridTemplateColumns: 'repeat(4, 264px)' }}
    >
      {/* Column 1: Logo */}
      <div className="flex items-center">
        <Link href="/">...</Link>
      </div>

      {/* Columns 2-3: Navigation (spans 2 columns) */}
      <nav className="col-span-2 flex items-center justify-center gap-1">
        {/* Navigation items */}
      </nav>

      {/* Column 4: Right side actions */}
      <div className="flex items-center justify-end gap-4">
        {/* Log in + Get a Demo */}
      </div>
    </div>
  </div>
</header>
```

### Column Breakdown

1. **Column 1 (264px)**: Logo section
   - Contains the Profound logo and brand name
   - Uses `flex items-center` for vertical alignment

2. **Columns 2-3 (528px total)**: Navigation section
   - Spans 2 columns using `col-span-2`
   - Centers navigation items with `justify-center`
   - Contains: Platform, Resources, Solutions, Enterprise, Pricing, Careers

3. **Column 4 (264px)**: Right side actions
   - Contains "Log in" link and "Get a Demo" button
   - Uses `justify-end` to align items to the right

### Vertical Centering Fix

**Problem:** Header items were pushed to the top instead of being vertically centered.

**Solution:** Applied the following fixes:

1. **Header level**: Added `flex items-center` to make the header a flex container
   ```tsx
   <header className="... flex items-center">
   ```

2. **Container level**: Added `w-full` to ensure full width
   ```tsx
   <div className="container-main relative w-full">
   ```

3. **Grid level**: Added explicit height `h-[56px]` to match header's `min-h-[56px]`
   ```tsx
   <div className="relative grid items-center h-[56px]">
   ```

**Why this works:**
- The header's `min-h-[56px]` sets the minimum height
- The grid container's `h-[56px]` ensures it takes the full height
- `items-center` on the grid vertically centers all grid items
- `flex items-center` on the header ensures the container-main is also centered

---

## 📋 Usage Patterns

### Pattern 1: Single Column Usage

```tsx
<div className="grid" style={{ gridTemplateColumns: 'repeat(4, 264px)' }}>
  <div className="col-span-1">
    {/* Content in column 1 */}
  </div>
</div>
```

### Pattern 2: Spanning Multiple Columns

```tsx
<div className="grid" style={{ gridTemplateColumns: 'repeat(4, 264px)' }}>
  <div className="col-span-2">
    {/* Content spans columns 1-2 */}
  </div>
  <div className="col-span-2">
    {/* Content spans columns 3-4 */}
  </div>
</div>
```

### Pattern 3: Full Width (All 4 Columns)

```tsx
<div className="grid" style={{ gridTemplateColumns: 'repeat(4, 264px)' }}>
  <div className="col-span-4">
    {/* Content spans all 4 columns */}
  </div>
</div>
```

### Pattern 4: Mixed Layout (Header Example)

```tsx
<div className="grid items-center" style={{ gridTemplateColumns: 'repeat(4, 264px)' }}>
  <div className="col-span-1">
    {/* Column 1 */}
  </div>
  <div className="col-span-2">
    {/* Columns 2-3 */}
  </div>
  <div className="col-span-1">
    {/* Column 4 */}
  </div>
</div>
```

---

## 🎨 Visual Dividers

### Dotted Line Implementation

For sections that need visual column separators, use the `dotted-line` class:

```tsx
<div className="absolute left-[264px] top-0 bottom-0 dotted-line" />
```

**CSS Definition:**
```css
.dotted-line {
  width: 1px;
  background: linear-gradient(
    180deg,
    var(--divider),
    var(--divider) 50%,
    transparent 50%,
    transparent
  );
  background-size: 2px 12px; /* 6px dot, 6px gap */
}
```

**Usage in Hero Component:**
```tsx
<div className="relative grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}>
  {/* Left border */}
  <div className="absolute left-0 top-0 bottom-0 dotted-line" />
  
  {/* After column 1 - 25% of grid width */}
  <div className="absolute left-[25%] top-0 bottom-0 dotted-line" />
  
  {/* After column 2 - 50% of grid width */}
  <div className="absolute left-[50%] top-0 bottom-0 dotted-line" />
  
  {/* After column 3 - 75% of grid width */}
  <div className="absolute left-[75%] top-0 bottom-0 dotted-line" />
  
  {/* Right border */}
  <div className="absolute right-0 top-0 bottom-0 dotted-line" />
</div>
```

**Positioning:**
- `left-0`: Left edge of container
- `left-[25%]`: After column 1 (25% of grid width)
- `left-[50%]`: After column 2 (50% of grid width)
- `left-[75%]`: After column 3 (75% of grid width)
- `right-0`: Right edge of container

**Why percentage-based positioning?**
Since the grid columns now scale responsively, dividers must use percentage-based positioning to align with column boundaries at all screen sizes. Fixed pixel values (like `264px`) would only work at the maximum width.

---

## 🔧 Best Practices

### 1. Always Wrap in `container-main`

```tsx
<div className="container-main relative">
  {/* Grid container */}
</div>
```

This ensures:
- Maximum width of 1088px
- Centered on the page
- Consistent padding (16px on each side)

### 2. Use Explicit Heights for Vertical Centering

When you need vertical centering, set an explicit height on the grid container:

```tsx
<div className="grid items-center h-[56px]" style={{ gridTemplateColumns: 'repeat(4, 264px)' }}>
```

### 3. Use `col-span-*` for Multi-Column Content

```tsx
<nav className="col-span-2">
  {/* Spans 2 columns */}
</nav>
```

### 4. Combine with Flexbox for Internal Alignment

```tsx
<div className="col-span-2 flex items-center justify-center">
  {/* Flexbox for internal item alignment */}
</div>
```

### 5. Use Relative Positioning for Dividers

```tsx
<div className="relative grid">
  {/* Grid content */}
  <div className="absolute left-[264px] dotted-line" />
</div>
```

---

## 📱 Responsive Behavior

### Current Implementation

The grid system uses `minmax(0, 264px)` for responsive columns:

- **Desktop (≥1088px)**: Columns are exactly 264px each (1056px total + 32px padding = 1088px)
- **Tablet (<1088px)**: Columns scale proportionally, maintaining equal widths
- **Mobile**: Columns continue to scale down, ensuring content remains accessible

### How It Works

The `minmax(0, 264px)` function:
- **Minimum**: `0` - Allows columns to shrink below 264px when needed
- **Maximum**: `264px` - Caps column width at 264px on large screens
- **Equal distribution**: All 4 columns maintain equal widths at all screen sizes

### Example Behavior

| Screen Width | Container Width | Column Width | Total Grid |
|--------------|----------------|--------------|------------|
| 1920px | 1088px | 264px | 1056px |
| 1200px | 1088px | 264px | 1056px |
| 1000px | 968px | 234px | 936px |
| 800px | 768px | 184px | 736px |
| 600px | 568px | 134px | 536px |

*Note: Container width = screen width (up to 1088px max) - 32px padding*

### Future Enhancements

For more advanced responsive behavior, consider:

1. **Breakpoint at 768px**: Reduce to 2 columns for better mobile experience
2. **Breakpoint at 640px**: Single column layout
3. **Breakpoint at 1088px**: Maintain current 4-column layout

Example future responsive approach:
```tsx
<div 
  className="grid"
  style={{
    gridTemplateColumns: 
      window.innerWidth >= 1088 
        ? 'repeat(4, minmax(0, 264px))'
        : window.innerWidth >= 768
        ? 'repeat(2, 1fr)'
        : '1fr'
  }}
>
```

Or using Tailwind responsive classes (when implemented):
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

---

## 🎯 Key Takeaways

1. **Responsive Column Width**: Each column is maximum 264px wide, scales down proportionally
2. **Total Width**: 1056px (grid) + 32px (padding) = 1088px container (at max width)
3. **Vertical Centering**: Requires explicit height on grid container + `items-center`
4. **Column Spanning**: Use `col-span-*` classes for multi-column content
5. **Container Wrapper**: Always use `container-main` for consistent layout
6. **Visual Dividers**: Use `dotted-line` class with percentage-based absolute positioning (25%, 50%, 75%)
7. **Responsive Scaling**: Grid automatically adapts to screen size while maintaining proportions

---

## 📝 Component Checklist

When implementing a new component using the grid system:

- [ ] Wrap in `container-main` class
- [ ] Use `grid` with `gridTemplateColumns: 'repeat(4, minmax(0, 264px))'` for responsive columns
- [ ] Set explicit height if vertical centering is needed
- [ ] Use `col-span-*` for multi-column content
- [ ] Add `items-center` for vertical alignment
- [ ] Use `relative` positioning if adding dividers
- [ ] Use percentage-based positioning (25%, 50%, 75%) for dividers, not fixed pixels
- [ ] Test at multiple screen sizes (1088px, 768px, 640px) to ensure proper responsive behavior

---

---

## 🧩 Jobs Component Implementation

### Structure

The Jobs component (Mission + Stats section) uses a nested grid layout:

```
┌─────────────────────────────────────────────────────────┐
│ Container: 1088px max-width, 16px padding               │
│                                                          │
│ ┌──────────────────────┬─────────┬─────────┐          │
│ │ Mission (span 2)     │ Stats   │ Stats   │          │
│ │ Col 1-2              │ Col 3   │ Col 4   │          │
│ └──────────────────────┴─────────┴─────────┘          │
└─────────────────────────────────────────────────────────┘
```

### Code Implementation

```tsx
<section className="relative w-full h-screen">
  <div className="container-main relative">
    {/* Outer grid with dividers */}
    <div className="relative grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}>
      {/* Dotted dividers at column boundaries */}
      <div className="absolute left-0 top-0 bottom-0 dotted-line" />
      <div className="absolute left-[25%] top-0 bottom-0 dotted-line" />
      <div className="absolute left-[50%] top-0 bottom-0 dotted-line" />
      <div className="absolute left-[75%] top-0 bottom-0 dotted-line" />
      <div className="absolute right-0 top-0 bottom-0 dotted-line" />
      
      {/* Content container - nested grid */}
      <div className="col-span-4 relative z-10 grid py-32" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}>
        {/* Mission section - spans columns 1-2 */}
        <div className="col-span-2 px-4">
          {/* Mission content */}
        </div>
        
        {/* Stats sections - individual columns */}
        <div className="col-span-1 px-4">
          {/* Individual stat with left border */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### Key Features

1. **Nested Grid Layout**
   - Outer grid: Contains dotted dividers and provides structure
   - Inner grid (`col-span-4`): Contains actual content, spans all 4 columns
   - Both use the same `gridTemplateColumns: 'repeat(4, minmax(0, 264px))'` for alignment

2. **Mission Section (Columns 1-2)**
   - Spans 2 columns using `col-span-2`
   - Uses `max-w-[324px]` and `max-w-[384px]` for responsive text widths
   - Content scales down on smaller screens while maintaining optimal reading width

3. **Stats Sections (Columns 3-4)**
   - Each stat occupies one column (`col-span-1`)
   - Individual stats have left borders aligned with grid dividers
   - Borders use `absolute -left-4` to account for `px-4` padding and align with grid column boundaries

4. **Stat Border Alignment**
   - Each stat has its own border that matches its height
   - Borders positioned at `-left-4` (negative 16px) to align with grid dividers at 50% and 75%
   - Border color: `#555555` (medium grey)
   - Height matches individual stat content, not the entire column

### Responsive Text Widths

**Problem:** Fixed widths (`w-[324px]`) don't scale on smaller screens.

**Solution:** Use `max-w-*` instead of `w-*`:
- `max-w-[324px]`: Allows text to shrink below 324px when needed
- `max-w-[384px]`: Allows text to shrink below 384px when needed
- Text wraps naturally while maintaining optimal reading width on larger screens

### Border Positioning Technique

For borders that need to align with grid column dividers but are inside padded containers:

```tsx
<div className="col-span-1 px-4">
  <div className="relative">
    {/* Border positioned at -16px to account for px-4 padding */}
    <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-[#555555]" />
    {/* Content */}
  </div>
</div>
```

**Why `-left-4`?**
- Container has `px-4` (16px padding on each side)
- Grid divider is at the column boundary (0% of column)
- `-left-4` moves border 16px left, aligning it with the grid divider

---

## 🔗 Related Files

- **Design System**: `DESIGN_SYSTEM.md` - Overall design tokens and specifications
- **Header Component**: `app/components/Header.tsx` - Header implementation example
- **Hero Component**: `app/components/Hero.tsx` - Grid with dividers example
- **Jobs Component**: `app/components/Jobs.tsx` - Nested grid with stat borders example
- **Global Styles**: `app/globals.css` - CSS variables and utility classes

---

*Last updated: Added Jobs component implementation with nested grid and stat border alignment*

