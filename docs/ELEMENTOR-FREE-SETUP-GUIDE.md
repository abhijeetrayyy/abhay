# Elementor Setup Guide — Abhay Oyun Homepage

## Overview

This guide walks you through fixing the narrowed/cramped layout issue and removing the default WordPress header/footer when using **Elementor Free** (without Elementor Pro).

---

## Step 1: Regenerate the Template File

The template generator has been updated to remove the `elementor_canvas` setting (which requires Elementor Pro). Regenerate your JSON:

```bash
cd "C:\Users\msi\Desktop\abhay"
node generate-elementor-template.js
```

This creates an updated `abhay-oyun-homepage.json` file.

---

## Step 2: Import Template into WordPress

1. Go to **WordPress Dashboard → Templates → Saved Templates**
2. Click **Import Templates** (top-right)
3. Select `abhay-oyun-homepage.json`
4. Click **Import Now**

---

## Step 3: Create Homepage in WordPress

1. Go to **Pages → Add New**
2. Name it "Home" or "New Home"
3. Click **Edit with Elementor**
4. Click the **folder icon** (Add Template) in the Elementor editor
5. Go to **My Templates** tab
6. Find "Abhay Oyun Homepage" and click **Insert**

---

## Step 4: Fix Full-Width Layout (CRITICAL)

**This is why your content appears narrowed.**

1. In the Elementor editor, click the **Page Settings** gear icon (bottom-left corner)
2. Under **Page Layout**, select **Full Width**
3. Click **Update/Publish**

**Alternative Method:**
1. Exit Elementor
2. Edit the page in WordPress editor
3. In the right sidebar (under Page Attributes), look for **Template** dropdown
4. Select **Full Width** (or "Canvas" if available)

---

## Step 5: Hide Default WordPress Header/Footer

### Method A: Use Your Theme's "Blank" Template (Recommended)

1. Edit the page in WordPress
2. Look for **Page Attributes** box in the right sidebar
3. In the **Template** dropdown, select **Blank** or **Full Width** or **Elementor Canvas** (depends on your theme)
4. This removes theme header/footer automatically

### Method B: CSS Override (if no blank template)

Add this CSS via **Appearance → Customize → Additional CSS**:

```css
/* Hide default WordPress header */
header.site-header,
header#masthead,
header.header,
#site-header,
.site-header {
    display: none !important;
}

/* Hide default WordPress footer */
footer.site-footer,
footer#colophon,
footer.footer,
#site-footer,
.site-footer {
    display: none !important;
}
```

> **Note:** The CSS selectors depend on your WordPress theme. The header/footer may have different class names in different themes. You may need to inspect your site's HTML to find the exact selector.

### Method C: Edit Header/Footer in Theme Customizer

1. Go to **Appearance → Customize**
2. Look for **Header** or **Navigation** settings
3. Set header layout to "Hidden" or disable default header
4. Look for **Footer** settings
5. Disable or hide the default footer

---

## Step 6: Re-link Images (After Import)

Images may show broken after import. For each image:

1. Click on the image widget in Elementor
2. Click the image thumbnail in the left panel
3. Select the correct image from your Media Library

Or do a find-and-replace in the JSON before importing:

```javascript
// In abhay-oyun-homepage.json, replace:
"url": "https://abhayoyun.org/wp-content/uploads/..."
// with your current WordPress upload URL
```

---

## Step 7: Set as Homepage

1. Go to **Settings → Reading**
2. Set "Your homepage displays" to **A static page**
3. Select your new page as the **Homepage**

---

## Complete Setup Checklist

- [ ] Regenerate JSON with `node generate-elementor-template.js`
- [ ] Import template into WordPress
- [ ] Create page and insert template
- [ ] Set page layout to "Full Width"
- [ ] Use blank/template to hide default header/footer
- [ ] OR add CSS to hide default header/footer
- [ ] Re-link any broken images
- [ ] Set page as homepage
- [ ] Test on mobile for responsiveness

---

## Troubleshooting

### Content Still Cramped/Narrowed

1. Check if your WordPress theme is wrapping content in a container
2. Use browser DevTools (F12) to inspect if there's a parent container limiting width
3. Add this to **Additional CSS** if needed:

```css
.elementor-section-wrap {
    max-width: 100% !important;
}

.elementor-container {
    max-width: 100% !important;
}
```

### Header/Footer Still Showing

1. Inspect your page source (Ctrl+U) to find exact class names
2. Update the CSS selectors in Method B above
3. Example: If your theme uses `class="main-header"`, use:
```css
.main-header { display: none !important; }
```

### Elementor Editor Issues

If Elementor Free won't let you edit certain areas:
- You cannot edit headers/footers without Elementor Pro's Theme Builder
- The workaround is to hide the theme's header/footer entirely and use the template's built-in header section

---

## Elementor Pro Features (Future Upgrade)

If you decide to get Elementor Pro, you'll gain:
- **Theme Builder**: Full control over header/footer templates
- **Popup Builder**: Create modal overlays
- **Custom Code**: Inject custom CSS/JS site-wide
- **Dynamic Content**: More powerful widget options

Elementor Pro costs ~$59/year for 1 site.

---

## Need Further Help?

For the complete section-by-section breakdown and image re-linking guide, see `ELEMENTOR-IMPORT-GUIDE.md` in this project folder.
