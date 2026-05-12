# WordPress.com Premium - Implementation Guide

## Step 1: Choose the Right Theme

**Go to:** Appearance > Themes

**Recommended themes (WordPress.com compatible):**
- **twentytwentyfive** - Clean, minimal, good for customization
- **Astra** - Lightweight, customizable
- **GeneratePress** - Simple, clean

**Activate the theme first.**

---

## Step 2: Add Custom CSS

**Go to:** Appearance > Customize > Additional CSS

Delete everything. Paste the entire contents of `premium-custom-css.css` file.

Click **Publish**.

---

## Step 3: Disable Conflicting Settings

**Go to:** Appearance > Customize > Additional CSS

Make sure "Use legacy CSS" is OFF.

**Go to:** Settings > Writing
- Disable any "Auto-format" features

---

## Step 4: Create Your Homepage

**Go to:** Pages > Add New
- Title: "Home"
- In the editor, add nothing (just save)

**Go to:** Settings > Reading
- "Your homepage displays" → A static page
- Homepage: Select "Home"

---

## Step 5: Edit with Block Editor

Since you're on WordPress.com Premium without Elementor plugin access, you'll use the built-in Block Editor.

**For each section, create blocks:**
- Heading block for titles
- Paragraph block for text
- Cover block for image backgrounds
- Group block to wrap sections

**Key:** Use the CSS classes I provided in the code to style each block.

---

## Section Classes to Apply:

Add these classes to Group blocks for each section:

| Section | CSS Class |
|---------|-----------|
| Hero | `.section-hero` |
| About | `.section-about` |
| Teachings | `.section-teachings` |
| Testimonials | `.section-testimonials` |
| Events | `.section-events` |
| Gallery | `.section-gallery` |
| Video | `.section-video` |
| Transformation | `.section-transformation` |
| Final CTA | `.section-cta` |
| Footer | `.section-footer` |

---

## Adding Classes to Blocks:

1. Click on the block
2. In right sidebar, click "Advanced"
3. In "Additional CSS class(es)", add the class name
4. Example: `section-hero`

---

## If You Can Install Plugins:

**Go to:** Plugins > Add New

Search and install:
- **Elementor** (page builder)
- **Essential Addons for Elementor**

Then you can import my JSON templates directly.

---

## Quick Fix Without Plugin:

Use WordPress.com's built-in patterns:

**Go to:** Pages > Home > Edit
Click the "+" button > Search "hero" or "cover"

Use a Cover block with:
- Background image
- Overlay color (use #1A1A14 with 0.7 opacity)
- Centered text

Add the CSS classes I provided to style it.

---

## Need Help?

The CSS file handles all styling. You just need:
1. Good theme
2. Apply CSS in Additional CSS
3. Create pages/sections with correct CSS classes

The CSS I created works with ANY WordPress.com theme that allows custom CSS.
