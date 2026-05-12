# Abhay Oyun - Immersive Theme

Premium shamanic WordPress theme. Minimal, fast, no conflicting styles.

## Installation

1. **Upload to WordPress:**
   - ZIP the `abhay-theme` folder
   - Go to Appearance > Themes > Add New > Upload Theme
   - Upload and activate

2. **Or via FTP:**
   - Upload `abhay-theme` folder to `/wp-content/themes/`
   - Activate in WordPress admin

3. **Setup Elementor:**
   - Install Elementor Free plugin
   - Create or import your pages using the JSON templates from `/immersive-theme/`
   - Assign your Elementor page as homepage

4. **Settings:**
   - Go to Settings > Reading
   - Set "Your homepage displays" to A static page
   - Select your Elementor page as homepage

## Theme Features

- **Cinzel + Lato typography** - No Inter, Roboto, or theme fonts
- **CSS Reset** - No conflicting global styles
- **Elementor Ready** - Stripped of theme interference
- **Premium Animations** - Smooth, subtle motion
- **Custom Scrollbar** - Styled to match brand

## File Structure

```
abhay-theme/
├── style.css      # Main styles (no conflicts)
├── functions.php  # Clean enqueue, no overrides
├── header.php     # Minimal header
├── footer.php     # Minimal footer
├── index.php      # Page template
└── README.md      # This file
```

## Custom CSS Variables

```css
--color-charcoal: #1A1A14;
--color-ivory: #FAF8F3;
--color-gold: #D4A853;
--color-forest: #3A5430;
--color-terra: #B86B4A;
```

## Import JSON Template

1. Go to Templates > Saved Templates (in Elementor)
2. Or use the import tool in /immersive-theme/
3. The JSON files in /immersive-theme/ contain the section structure

## Notes

- This theme strips ALL global styles that conflict with design
- Elementor custom CSS in sections will handle all styling
- No parent theme dependencies
- No page builder bloat
