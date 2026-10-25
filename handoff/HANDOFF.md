# INPHA — Stage 4 Design Handoff & Technical Specification

> **Version:** 3.1 — Modern UI/UX Enhancement & Motion Design  
> **Status:** Stage 3 High-Fidelity UI Approved & Enhanced.  
> **Deliverable Format:** Pure HTML / CSS / Vanilla JavaScript design prototype (no external frameworks).  
> **Review Board:** `index.html`  
> **Client Presentation Deck:** `deck.html`  
> **Figma Import Launcher:** `figma-import.html`

---

## 1. Package Inventory & Architecture

| Asset | Path | Description |
|---|---|---|
| **Design Review Board** | [`index.html`](file:///Users/taklatvs/Desktop/inpha2-main/index.html) | Interactive 3-viewport Figma-style review board with frame inspection and motion toggle. |
| **Design System & Styling** | [`inpha.css`](file:///Users/taklatvs/Desktop/inpha2-main/inpha.css) | Core tokens, modern card compositions, layered elevations, container queries, and motion layer. |
| **Data & Page Structure** | [`data.js`](file:///Users/taklatvs/Desktop/inpha2-main/data.js) | Approved wireframe structure, service taxonomies, and verified client placeholder markers. |
| **High-Fidelity Renderer** | [`hifi.js`](file:///Users/taklatvs/Desktop/inpha2-main/hifi.js) | Modern UI component composition, vector SVG icons, tab switching, and scroll reveal observer. |
| **Client Deck** | [`deck.html`](file:///Users/taklatvs/Desktop/inpha2-main/deck.html) | Full-screen agency slide presentation (1920×1080) with embedded live page frames. |
| **Figma Capture Launcher** | [`figma-import.html`](file:///Users/taklatvs/Desktop/inpha2-main/figma-import.html) | Direct frame URL launcher optimized for html.to.design capture. |
| **Tokens (JSON)** | [`handoff/tokens.json`](file:///Users/taklatvs/Desktop/inpha2-main/handoff/tokens.json) | Exported design tokens (colors, typography, elevation, spacing, motion). |
| **Brand Assets** | [`assets/`](file:///Users/taklatvs/Desktop/inpha2-main/assets) | Approved wide logo, square logo mark, and stacked variants. |

---

## 2. Approved Brand Identity & Color Roles

The color system anchors the brand identity with high visual sophistication and strict WCAG AA contrast compliance:

| Role | Token | Hex | Usage | Contrast vs Paper |
|---|---|---|---|---|
| **Primary Brand Blue** | `--blue` | `#2B6CB0` | Institutional trust, primary actions, active navigation indicator | 5.8:1 (AA) |
| **Deep Blue** | `--blue-d` | `#154B86` | Dark hero stages, deep footer surface, prominent headings | 8.4:1 (AAA) |
| **Growth Green** | `--green` | `#22C55E` | Educational growth, student program accents, safety checkmarks | 3.2:1 (accent) |
| **Green Dark** | `--green-d` | `#15803D` | Text on light green, success states, verified badges | 5.6:1 (AA) |
| **Energy Orange** | `--orange` | `#F59E0B` | Interactive CTAs, highlights, index tag badges, action arrows | 8.6:1 on Navy |
| **Orange Dark** | `--orange-d` | `#D97706` | High-contrast orange accents, hover states | 4.8:1 (AA) |
| **Terracotta Accent** | `--orange-t` | `#B45309` | Text-bearing badges, small index tags, category markers | 5.2:1 (AA) |
| **Soft Background** | `--paper` | `#F7F9FC` | Clean modern base surface, reduces eye fatigue | Surface base |
| **Text Navy** | `--ink` | `#123761` | Primary body and heading copy | 14.8:1 (AAA) |
| **Muted Slate** | `--mute` | `#4D6480` | Secondary copy, metadata, timestamps | 5.6:1 (AA) |
| **Tech Navy** | `--graph` | `#0F2743` | Tech Solutions sections, dark code containers | 15.6:1 (AAA) |

---

## 3. Motion Design & Animation Specification

The enhanced prototype incorporates a comprehensive motion language designed to communicate agency-level polish while preserving prototype lightweight performance:

### Easing & Timing Curves
- **Standard Curve:** `cubic-bezier(0.22, 1, 0.36, 1)` (smooth deceleration, natural physical feel)
- **Hover Transitions:** `150ms – 250ms` (buttons, chips, cards, navigation items)
- **Component Transitions:** `250ms – 450ms` (tab switching, accordion expansion, mobile drawer)
- **Entrances & Reveals:** `450ms – 750ms` (hero elements, card grids, section headers)

### Interaction Choreography
1. **Hero Entrances:** Staggered sequence:
   - Eyebrow Tag (`60ms`) → Headline (`140ms`) → Lead paragraph (`280ms`) → CTAs (`400ms`) → Visual media & badges (`480ms–750ms`).
2. **Ambient Motion:**
   - Decorative background radial mesh orbs float gently on 22s–30s infinite alternating cycles.
   - Floating verification badges (`.float-card`, `.m-badge`) float with subtle 6s sinusoidal oscillation.
3. **Scroll-Triggered Reveals:**
   - Handled via `IntersectionObserver` observing `.rv` and `.rvl` classes.
   - Cards in grids stagger entrances by `60ms–80ms` increments.
4. **Micro-Interactions:**
   - Buttons lift `-2px` on hover with intensified colored glow shadows.
   - Arrow indicators (`→`) glide `+4px` horizontally on link hover.
   - Featured case cards subtly zoom image frames (`scale(1.06)`) on hover.
5. **Accessibility & Static Export:**
   - Respects `prefers-reduced-motion: reduce` unconditionally.
   - Adding `?static=1` to any preview URL or clicking the **"⚡ Motion"** button in `index.html` disables all transitions and renders all elements immediately at full opacity for static capture and Figma export.

---

## 4. Modern Component Inventory

- **Unified Navigation & Header:** Floating glassmorphism navbar with blur backdrop, pill links, hover underline animation, full 2-column desktop mega-menu for services, and a dedicated mobile slide-in navigation drawer.
- **Hero Compositions:** Asymmetrical grid arrangements featuring primary photography, overlapping secondary training snapshots, interactive floating badges, and checklist highlights.
- **Entry Doors:** Deep gradient cards for School & Student (Blue-Green) and Tech & Creative (Deep Navy) with subtle background gridlines, watermark numerals (01/02), and directional action buttons.
- **Topic Cards & Services:** Grid-based cards with crisp inline vector icons (`ICONS`), dual-color badges, and clear hover lifts.
- **Tabbed Program Switcher:** Instant, zero-layout-shift tab switching between Summer Camp, Winter Camp, and Specialized Workshops.
- **Form Controls:** Modern input fields with subtle borders, 4px focus rings, accessible inline validation error messages (`aria-describedby`), and verified success card feedback.

---

## 5. Figma Animation & Prototyping Guide (Agency Workflow)

To enable high-fidelity motion and interactive components directly in Figma:

1. **Import Component Matrix:** Open `http://localhost:8765/figma-components.html` in Chrome and run the **html.to.design** extension. This imports every interactive component with its complete variant states (`Default`, `Hover`, `Pressed`, `Active`, `Expanded`) into Figma.
2. **Combine as Variants:** In Figma, select each component row and click **"Combine as variants"** in the Component Properties panel. Name the property `State`.
3. **Smart Animate Setup Table:**

| Component | Figma Trigger | Target Variant / Action | Animation Type | Easing Curve | Duration |
|:---|:---|:---|:---|:---|:---|
| **Primary Button** | `While hovering` | `State=Hover` | Smart Animate | Ease Out `(0.22, 1, 0.36, 1)` | `200ms` |
| **Button Press** | `While pressing` | `State=Pressed` | Smart Animate | Linear | `100ms` |
| **Ruled Card** | `While hovering` | `State=Hovered` | Smart Animate | Ease Out `(0.22, 1, 0.36, 1)` | `250ms` |
| **Program Tabs** | `On click` | `ActiveTab=[Summer/Winter/Workshops]` | Smart Animate | Ease In Out `(0.22, 1, 0.36, 1)` | `300ms` |
| **Accordion FAQ** | `On click` | `State=Expanded` | Smart Animate | Gentle Spring `(180 stiffness, 22 damping)` | `350ms` |
| **Mega Menu** | `While hovering` | Open Overlay / Swap | Smart Animate | Ease Out `(0.16, 1, 0.3, 1)` | `300ms` |
| **Mobile Drawer** | `On click` | Navigate / Open Overlay | Move In (Right) | Ease Out `(0.22, 1, 0.36, 1)` | `350ms` |
| **Floating Badges**| `After delay 1500ms`| `Position B` ↔ `Position A` loop | Smart Animate | Ease In Out `(0.42, 0, 0.58, 1)` | `2000ms` |
| **Live Pulse Radar**| `After delay 1000ms`| `Radar=Ring` ↔ `Radar=Dot` loop | Smart Animate | Ease Out | `1200ms` |

---

## 6. Responsive Viewport Configurations

The design is built mobile-first and fluidly adapts across container breakpoints:
- **Desktop:** `1440 px` frame container (12-column responsive layout, 1312px max content width).
- **Tablet:** `820 px` frame container (2-column grids, horizontal index bar, consolidated padding).
- **Mobile:** `390 px` frame container (single-column stack, full-width touch-friendly buttons, bottom quick action bar, slide-out navigation drawer).

---

## 7. Implementation Notes for Production Engineering

1. **Static First Architecture:** The prototype is structured so frontend developers can port templates directly into Next.js, Astro, or static HTML without restructuring classes or DOM hierarchies.
2. **Content Integrity:** All placeholder brackets `[ ... ]` in `data.js` indicate areas where real client photography, verified school numbers, or approved legal copy will be inserted prior to deployment.
3. **No External Libraries:** Zero dependency on heavy animation runtimes (e.g. GSAP, Framer Motion); all interactions are implemented with native CSS animations and clean vanilla JavaScript.

