# IMMERSIVE MYSTICAL THEME — Abhay Oyun Website

## Overview

A complete redesign of the Abhay Oyun website with an **immersive, mystical, sacred, and healing feel**. The design balances ancient shamanic energy with modern warmth and welcoming aesthetics.

---

## Design Philosophy

### The Feel
- **Sacred but welcoming** — Ancient wisdom accessible to everyone
- **Mystical but grounded** — Otherworldly without being intimidating
- **Healing environment** — Visitors should feel safe, held, and welcomed
- **"Come as you are" energy** — No pretense, just pure intention

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Ivory** | `#FFFDF8` | Primary background — warm, pure |
| **Parchment** | `#F8F3E8` | Secondary background — aged paper feel |
| **Dune Sand** | `#EDE4D3` | Tertiary sections — desert warmth |
| **Divine Gold** | `#C4942A` | Primary accent — sacred, ancient |
| **Light Gold** | `#E8BC5A` | Lighter gold highlights |
| **Pale Gold** | `#F5DFA0` | Soft gold for backgrounds |
| **Forest Deep** | `#3A5430` | Grounding green — nature connection |
| **Earth Terra** | `#B86B4A` | Warm earth — physical grounding |
| **Charcoal Warm** | `#2C2416` | Primary text — soft, readable |
| **Earth Brown** | `#5C4A32` | Secondary text — warm brown |

### Typography

**Cinzel** (serif) — Headings
- Ancient, Roman-inspired feel
- Elegant but readable
- Weights: 400, 500, 600, 700

**Lato** (sans-serif) — Body
- Clean and modern
- Excellent readability
- Weights: 300, 400, 600, 700

---

## Animation & Interactions

### Key Animations

1. **Floating Particles** — Subtle gold dots drifting across sections
2. **Orb Glow** — Soft glowing circles that pulse gently
3. **Breathing Effect** — Elements that slowly expand/contract
4. **Link Underlines** — Smooth reveal on hover
5. **Button Pulse** — CTAs that glow on hover
6. **Card Lift** — Hover effect that lifts cards with shadow
7. **Section Transitions** — Smooth fade-ins between sections

### CSS Animations Used
```css
@keyframes float-particle { /* Drifting gold particles */ }
@keyframes float-orb { /* Glowing orbs floating */ }
@keyframes pulse-glow { /* Gentle pulsing glow */ }
@keyframes breathe { /* Slow breathing opacity */ }
```

---

## Section Breakdown

### 1. Header
- **Style**: Light frosted glass with backdrop blur
- **Logo**: Icon with warm gold accent
- **Navigation**: Underline reveal on hover
- **CTA**: Gold gradient button with glow

### 2. Hero Section
- **Background**: Sacred hero image with soft overlay
- **Decorations**: Floating mystical orbs and particles
- **Content**: Centered with gradient heading
- **Trust indicators**: Years, Countries, Transformed

### 3. Shaman Bio
- **Layout**: 45/55 split
- **Stats**: Large gradient numbers
- **Image**: Decorative frame with borders

### 4. Gallery Sections
- **Social Reels**: 5-column grid
- **40 Countries**: 3-column grid
- **Soft transitions** between sections

### 5. Testimonials
- **Cards**: Top gold gradient bar
- **Quote marks**: Decorative ornament
- **Layout**: 2x2 grid

### 6. Teachings (Accordion)
- **Image**: Left side with floating orb
- **Tabs**: Smooth expand/collapse
- **Color-coded** practices

### 7. Events
- **Alternating layout**: Image left/right
- **Color badges**: Each event type
- **Highlights**: Pill tags

### 8. Transformation Timeline
- **Quote block**: Left side with gold border
- **Timeline**: Right side with dots
- **Years**: Large gradient numbers

### 9. Final CTA
- **Gradient heading**: Large, impactful
- **Two buttons**: Primary + Secondary
- **Trust stats**: Footer style

---

## Setup Instructions

### Step 1: Add Google Fonts

Add to WordPress **Appearance → Customize → Additional CSS**:

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400;600;700&display=swap');
```

### Step 2: Add Theme CSS

Copy the content from `IMMERSIVE-THEME-CSS.css` and paste it into the Additional CSS section.

### Step 3: Import Template

1. Go to **Templates → Saved Templates**
2. Click **Import Templates**
3. Select `abhay-oyun-homepage.json`
4. Import

### Step 4: Create Page

1. Create new page
2. Edit with Elementor
3. Insert template from My Templates
4. Set layout to **Full Width**
5. Hide default header/footer (use blank template or CSS)

### Step 5: Upload Images

Required images for best results:
- `hero-bg.jpg` — Hero background (high quality)
- `AO 2.JPG` — Shaman image
- Gallery images (8-9 images)

---

## Optional Enhancements (Manual in Elementor)

### Parallax Effect
1. Select section
2. Go to **Style → Background**
3. Set to **Classic**
4. Enable **Fixed** attachment

### Video Background (Hero)
1. Select Hero section
2. Go to **Style → Background**
3. Change to **Video**
4. Upload video file

### Custom Cursor (Optional)
Add to Additional CSS:
```css
cursor: url('https://abhayoyun.org/wp-content/uploads/cursor.png'), auto;
```

### Scroll Progress Bar
Add HTML widget at top of page:
```html
<div class="scroll-progress" id="scrollProgress"></div>
<script>
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('scrollProgress').style.width = progress + '%';
});
</script>
```

---

## Troubleshooting

### Fonts Not Loading
- Check if Google Fonts URL is accessible
- Try preconnect: `<link rel="preconnect" href="https://fonts.googleapis.com">`

### Animations Not Working
- Enable Elementor experimental features
- Check for CSS conflicts in theme

### Images Not Displaying
- Verify image URLs in JSON
- Check WordPress media library
- Re-link images manually in Elementor

### Mobile Display Issues
- Test on actual devices
- Adjust padding for smaller screens
- Check if theme has mobile-specific CSS

---

## File Structure

```
abhay/
├── generate-elementor-template.js  # Main generator
├── gen-parts/
│   ├── helpers.js                  # Shared constants & colors
│   ├── sections-1.js              # Header, Hero, Bio, Gallery, Testimonials
│   └── sections-2.js              # Teachings, Events, Timeline, CTA, Footer
├── abhay-oyun-homepage.json       # Generated template (import this)
├── IMMERSIVE-THEME-CSS.css        # Theme CSS for WordPress
├── ELEMENTOR-FREE-SETUP-GUIDE.md  # WordPress setup guide
└── README.md
```

---

## Next Steps

1. **Test locally** — Import and preview
2. **Upload images** — Use high-quality images
3. **Add video** — Hero background video
4. **Fine-tune** — Adjust spacing, colors
5. **Mobile test** — Verify on phones
6. **Performance** — Optimize images, lazy load

---

## Feedback Loop

Share screenshots of:
- Desktop view
- Mobile view
- Any issues or desired changes

We'll iterate until it's exactly right.
