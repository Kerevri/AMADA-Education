# AMADA Education Website — Navigation Refactor Prompt

Use this prompt verbatim in Cursor (Agent mode), GitHub Copilot Chat, or Claude Code.

---

## PROMPT START

I need you to refactor the navigation structure of this Next.js education website. There are two separate changes:

---

### CHANGE 1 — TOP NAVBAR: Simplify to brand-only

The current top navbar contains education-specific menu items (Kimləri Təhsil Edirik, Təmiz İdman Mövzuları, Öyrənmə, Resurslar, Narahatlığı Bildir, Əlaqə). These must be removed because this is a sub-section of the full AMADA website and the top bar should not be cluttered with section-specific links.

**What to keep in the top navbar:**
- AMADA logo / wordmark (left side)
- Language toggle AZ / EN (right side)
- Nothing else

**What to remove from the top navbar:**
- All navigation links (Təhsil, Kimləri Təhsil Edirik, Təmiz İdman Mövzuları, Öyrənmə, Resurslar, Narahatlığı Bildir, Əlaqə)
- The "Öyrənməyə Başla" CTA button in the navbar

The top navbar should be slim, clean, and minimal — just identity + language switcher.

---

### CHANGE 2 — LEFT SIDEBAR: Replace collapsible dropdowns with always-open tree

The current left sidebar uses collapsible accordion sections (with expand/collapse arrows). Replace this entirely with a **permanently open, hierarchical tree navigation** with no toggle functionality.

**Structure and visual rules:**

1. **Always fully expanded** — no accordion, no toggle buttons, no chevron arrows. All items visible at all times.

2. **Visual hierarchy using indentation and typography only:**
   - Level 1 (section group label): bold, dark navy `#1F3864`, font-size 13px, uppercase letter-spacing, not clickable, used as a category label
   - Level 2 (main page links): medium weight, teal `#0D9488`, font-size 14px, clickable links, slight left indent (16px)
   - Level 3 (sub-page links): regular weight, gray `#4B5563`, font-size 13px, clickable links, more left indent (32px), with a subtle left border line connecting siblings

3. **Active state:** The currently active page link gets a left border accent `3px solid #C00000` (AMADA red) and background `#FEF2F2`, text color `#C00000`.

4. **Hover state:** Subtle background `#F0FDFA`, text darkens slightly.

5. **No icons** unless they already exist in the codebase — keep it text-only and clean.

6. **The sidebar should be sticky** on desktop (position: sticky, top: 0, height: 100vh, overflow-y: auto).

**The exact tree structure to implement (copy this exactly):**

```
Biz nə edirik
  Təhsil
    Təhsilə baxış
    Təmiz idman davranışları
    İdmançı yolu
    İllik təhsil planı
    Maarifləndirici şəbəkəsi
  Öyrənmə Mərkəzi
    Elektron öyrənmə kurslarına baxış
    Vebinarlar
    Seminarlar
    Məktəb proqramları
    Tibbi təhsil
    Maarifləndirmə & tədbirlər
  Dopinqə qarşı mübarizə
    Dopinqə qarşı qayda pozuntuları
    Qadağan olunmuş siyahı
    Sınaq prosedurları
    Əlavə qidaların riski
    Ciddi məsuliyyət
  Hədəf Qruplar
    İdmançılar
    Dəstək heyəti
    Tibb mütəxəssisləri
    Valideynlər
    Federasiyalar
  Terapevtik İstifadə İcazəsi   ← (standalone link, Level 2, no children)
  Hesabatlılıq & Dəstək
    Resurs kitabxanası
    Narahatlığı bildir
    TSS (Tez-tez soruşulan suallar)
    Komandamızla əlaqə
```

**Implementation notes:**
- Find the existing sidebar component (likely in `components/` or `layout/`).
- Replace the entire accordion/collapse logic with a simple static nested `<nav>` or `<ul>` tree.
- Use the existing Next.js `Link` component and `usePathname()` hook to detect the active route for the active state styling.
- The sidebar width should remain the same as current (do not change layout widths).
- Make sure the sidebar scrolls independently if content is tall — use `overflow-y: auto` on the sidebar container.
- On mobile, the sidebar should collapse into a hamburger/drawer (keep existing mobile behavior if it already exists, otherwise hide sidebar on mobile with a toggle button).

---

### DO NOT CHANGE:
- Page content areas
- Footer
- Any page-level components (hero sections, cards, etc.)
- Routing / URL structure
- Color variables already defined in the project
- Any existing Tailwind config

---

### Verification checklist after making changes:
- [ ] Top navbar shows only logo + language toggle
- [ ] No navigation links in the top bar
- [ ] Left sidebar is always fully expanded (no collapse buttons)
- [ ] Three levels of hierarchy are visually distinct
- [ ] Active page is highlighted in red
- [ ] Sidebar is sticky and scrollable
- [ ] All existing links still route correctly

## PROMPT END
