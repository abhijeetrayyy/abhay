# Elementor Template Import Guide — Abhay Oyun Homepage

## What's Included

The file `abhay-oyun-homepage.json` contains **12 fully-styled sections** ready to import:

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | Full-screen, eyebrow badge, h1 with gradient text, subtitle, 2 CTA buttons |
| 2 | **Shaman Intro** | 2-column: bio text + stats (35+ Years / 40 Countries / 10K+ Healed) + images |
| 3 | **Social Reels** | Header + 5-image gallery grid (Instagram/YouTube moments) |
| 4 | **Gallery** | "40 Countries" header + 9-image gallery |
| 5 | **Testimonials** | 2-column: heading + 4 testimonial cards with quotes |
| 6 | **Teachings** | 2-column: image + accordion with 3 practices (SAMPO, Drum, 1-on-1) |
| 7 | **Events** | 3 full event cards with tags, descriptions, highlights, pricing, CTA |
| 8 | **Transformation** | 2-column: blockquote + 4-item timeline (2004–2022) |
| 9 | **YouTube** | 5 embedded YouTube videos in 3+2 grid (real video IDs) |
| 10 | **Webinar CTA** | 2-column: benefits list + registration card with date |
| 11 | **Final CTA** | Large heading, 2 buttons, trust row, social links |
| 12 | **Footer** | 4-column: brand + nav + legal + newsletter |

---

## Step-by-Step Import

### Step 1: Upload Images to WordPress

Upload these files from the `/public` folder to your WordPress **Media Library**:

**Required images:**
- `abhay_img.png`
- `sao-gallery-img1.jpg` through `sao-gallery-img9.jpg`
- `visited-countries-img.png`
- `healing-global-harmony.jpg`
- `shaman_birch_forest.png`
- `drum_moss_forest.png`
- `yurt_fire_healing.png`
- `ritual-gathering.png`
- `forest-mist.png`
- `abhayoyun-banner-top.png`

**Optional (for Hero video background — add manually after import):**
- Convert `IMG_1651.MOV` → `.mp4` format
- Convert `IMG_1652.MOV` → `.mp4` format

> **Tip:** You can batch-upload all images at once via **Media → Add New** in WordPress.

### Step 2: Import the Template

1. Go to **WordPress Dashboard → Templates → Saved Templates**
2. Click **Import Templates** (top of page)
3. Select `abhay-oyun-homepage.json`
4. Click **Import Now**

### Step 3: Create Your Homepage

1. Go to **Pages → Add New**
2. Name it "Homepage" (or "New Home" if testing)
3. Click **Edit with Elementor**
4. Click the **folder icon** (Add Template) in the editor
5. Go to **My Templates** tab
6. Find "Abhay Oyun Homepage" and click **Insert**
7. The entire page loads with all 12 sections

### Step 4: Re-link Images

After inserting, some images will show as broken because the URLs reference `https://abhayoyun.org/wp-content/uploads/`. For each image:

1. Click on the image widget
2. Click the image thumbnail in the left panel
3. Select the correct image from your Media Library

> **Faster method:** Do a find-and-replace in the JSON file *before importing*. Replace `https://abhayoyun.org/wp-content/uploads/` with your actual WordPress upload path.

### Step 5: Add Video Background (Hero)

1. Click on the Hero section (first section)
2. Go to **Style → Background**
3. Change background type to **Video**
4. Upload your `.mp4` video file
5. Set fallback image

### Step 6: Set as Homepage

1. Go to **Settings → Reading**
2. Set "Your homepage displays" to **A static page**
3. Select your new page as the **Homepage**

---

## What's Pre-Configured (No Manual Work Needed)

- ✅ All text content (headings, paragraphs, quotes, labels)
- ✅ All typography (Playfair Display + Inter fonts, sizes, weights, spacing)
- ✅ All colors (gold #d4a853, navy #0d1117, sand #F9F6F0 backgrounds)
- ✅ All button links (Calendly, Google Forms, social media URLs)
- ✅ All layouts (2-column grids, card layouts, spacing)
- ✅ YouTube video embeds with real video IDs
- ✅ Stats with gradient gold numbers
- ✅ Teachings accordion with 3 practices

## What Needs Manual Touch-Up

- 🖼️ Re-link images from Media Library (~15 images)
- 🎥 Add video background to Hero section
- 🎨 Optionally add Elementor entrance animations (fade-in, slide-up) per section
- 📱 Check mobile responsiveness and adjust if needed
