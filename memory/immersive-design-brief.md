---
name: immersive-design-brief
description: Abhay Oyun website - immersive mystical shamanic healing theme, one section at a time
metadata:
  type: project
---

## Design Vision

**Client:** Abhay Oyun - Siberian Shaman
**Feel:** Premium shamanic, professional like Mindvalley
**Reference:** mindvalley.com - professional, polished, premium feel

**Key principles from Mindvalley:**
- Full-viewport heroes with large imagery
- Massive typography (64-80px headlines)
- Generous whitespace
- Minimal decorative elements
- Card-based layouts with rich images
- Dark/light contrast alternating sections
- Scroll-triggered animations (subtle)
- High contrast colors

## Current Status

**Phase:** v2 Rebuild - Mindvalley-inspired redesign
**Working directory:** `immersive-theme/`
**Progress:** Hero ✓ (v2), remaining sections need rebuild

## Sections Status

- [x] Section 01: Hero v2 - Full viewport, massive typography, dark theme, social proof bar
- [ ] Sections 02-11 - pending rebuild

## Color System (v2)

**Dark Theme Sections:** bg #1A1A14, text #FAF8F3, accent #D4A853
**Light Theme Sections:** bg #FAF8F3, text #2C2418, accent #3A5430

## Typography Scale (v2)

| Element | Size Desktop |
|---------|--------------|
| Hero Title | 72-96px |
| Section Title | 56-72px |
| Subtitle | 28-36px |
| Body Large | 18-20px |
| Body | 16px |

## Custom Theme Created

**Location:** `abhay/abhay-theme/`
**Purpose:** Strip ALL theme conflicts, pure design control

Files:
- style.css - Reset + base styles, no conflicts
- functions.php - Clean enqueue, remove conflicts
- header.php - Minimal header
- footer.php - Minimal footer
- index.php - Page template
- page-fullwidth.php - Full width template

**Installation:**
1. ZIP abhay-theme folder
2. Upload to WordPress > Appearance > Themes
3. Activate
4. Set Elementor page as homepage
