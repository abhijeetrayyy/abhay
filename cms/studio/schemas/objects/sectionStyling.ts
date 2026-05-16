import { defineField } from 'sanity';

export const sectionStyling = defineField({
  name: 'sectionStyling',
  title: 'Section Styling',
  type: 'object',
  group: 'styling',
  options: { collapsible: true, collapsed: true },
  fields: [
    // ── BACKGROUND ──────────────────────────────────────────────
    defineField({
      name: 'backgroundType',
      title: 'Background Type',
      type: 'string',
      options: {
        list: [
          { title: 'Solid Color', value: 'solid' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'None / Transparent', value: 'none' },
        ],
        layout: 'radio',
      },
      initialValue: 'solid',
    }),
    defineField({
      name: 'theme',
      title: 'Theme Preset',
      type: 'string',
      options: {
        list: [
          { title: 'Default (Warm)', value: 'default' },
          { title: 'Dark', value: 'dark' },
          { title: 'Warm Sand', value: 'warm' },
          { title: 'Deep Forest', value: 'forest' },
          { title: 'Midnight', value: 'midnight' },
          { title: 'Custom', value: 'custom' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'default',
      hidden: ({ parent }: { parent: { backgroundType?: string } }) => parent?.backgroundType !== 'solid',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex code (e.g. #FBF9F5). Overrides theme preset.',
      hidden: ({ parent }: { parent: { backgroundType?: string; theme?: string } }) => parent?.backgroundType !== 'solid' && parent?.theme !== 'custom',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }: { parent: { backgroundType?: string } }) => parent?.backgroundType !== 'image',
    }),
    defineField({
      name: 'backgroundImageSettings',
      title: 'Image Settings',
      type: 'object',
      hidden: ({ parent }: { parent: { backgroundType?: string } }) => parent?.backgroundType !== 'image',
      fields: [
        defineField({ name: 'objectFit', title: 'Fit Mode', type: 'string', options: { list: [{ title: 'Cover', value: 'cover' }, { title: 'Contain', value: 'contain' }, { title: 'Fill', value: 'fill' }], layout: 'radio' }, initialValue: 'cover' }),
        defineField({ name: 'objectPosition', title: 'Position', type: 'string', options: { list: [{ title: 'Center', value: 'center' }, { title: 'Top', value: 'top' }, { title: 'Bottom', value: 'bottom' }, { title: 'Left', value: 'left' }, { title: 'Right', value: 'right' }], layout: 'dropdown' }, initialValue: 'center' }),
        defineField({ name: 'attachment', title: 'Attachment', type: 'string', options: { list: [{ title: 'Scroll', value: 'scroll' }, { title: 'Fixed (Parallax)', value: 'fixed' }], layout: 'radio' }, initialValue: 'scroll' }),
        defineField({ name: 'opacity', title: 'Opacity', type: 'number', description: '0 to 1', initialValue: 1 }),
      ],
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      description: 'MP4 or WebM video file',
      hidden: ({ parent }: { parent: { backgroundType?: string } }) => parent?.backgroundType !== 'video',
    }),
    defineField({
      name: 'gradientType',
      title: 'Gradient Type',
      type: 'string',
      options: { list: [{ title: 'Linear', value: 'linear' }, { title: 'Radial', value: 'radial' }, { title: 'Conic', value: 'conic' }], layout: 'radio' },
      initialValue: 'linear',
      hidden: ({ parent }: { parent: { backgroundType?: string } }) => parent?.backgroundType !== 'gradient',
    }),
    defineField({
      name: 'gradientDirection',
      title: 'Gradient Direction / Angle',
      type: 'string',
      description: 'e.g. 135deg, to bottom right, circle at center',
      initialValue: '135deg',
      hidden: ({ parent }: { parent: { backgroundType?: string } }) => parent?.backgroundType !== 'gradient',
    }),
    defineField({
      name: 'gradientStops',
      title: 'Gradient Color Stops',
      type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'color', title: 'Color', type: 'string' }),
        defineField({ name: 'position', title: 'Position %', type: 'number', description: '0-100. Leave empty for auto.' }),
      ]}],
      hidden: ({ parent }: { parent: { backgroundType?: string } }) => parent?.backgroundType !== 'gradient',
    }),

    // ── OVERLAY ─────────────────────────────────────────────────
    defineField({
      name: 'overlay',
      title: 'Overlay',
      type: 'object',
      fields: [
        defineField({ name: 'enabled', title: 'Enable Overlay', type: 'boolean', initialValue: false }),
        defineField({ name: 'type', title: 'Overlay Type', type: 'string', options: { list: [{ title: 'Solid Color', value: 'solid' }, { title: 'Gradient', value: 'gradient' }, { title: 'Pattern (Grain)', value: 'grain' }, { title: 'Vignette', value: 'vignette' }], layout: 'radio' }, initialValue: 'solid', hidden: ({ parent }: { parent: { enabled?: boolean } }) => !parent?.enabled }),
        defineField({ name: 'color', title: 'Overlay Color', type: 'string', description: 'Hex with alpha (e.g. rgba(0,0,0,0.5))', hidden: ({ parent }: { parent: { enabled?: boolean } }) => !parent?.enabled }),
        defineField({ name: 'opacity', title: 'Overlay Opacity', type: 'number', description: '0 to 1', initialValue: 0.5, hidden: ({ parent }: { parent: { enabled?: boolean } }) => !parent?.enabled }),
      ],
    }),

    // ── TYPOGRAPHY ──────────────────────────────────────────────
    defineField({
      name: 'typography',
      title: 'Typography',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'headingFont', title: 'Heading Font', type: 'string', options: { list: [{ title: 'Cormorant Garamond', value: "'Cormorant Garamond', Georgia, serif" }, { title: 'Playfair Display', value: "'Playfair Display', serif" }, { title: 'Cinzel', value: "'Cinzel', serif" }, { title: 'Inter', value: "'Inter', sans-serif" }], layout: 'dropdown' } }),
        defineField({ name: 'bodyFont', title: 'Body Font', type: 'string', options: { list: [{ title: 'Lora', value: "'Lora', Georgia, serif" }, { title: 'Cinzel', value: "'Cinzel', serif" }, { title: 'Inter', value: "'Inter', sans-serif" }, { title: 'Cormorant Garamond', value: "'Cormorant Garamond', Georgia, serif" }], layout: 'dropdown' } }),
        defineField({ name: 'headingSize', title: 'Heading Size Override', type: 'string', description: 'CSS clamp() value, e.g. clamp(2rem, 5vw, 4rem)' }),
        defineField({ name: 'bodySize', title: 'Body Size Override', type: 'string', description: 'CSS value, e.g. 1rem, clamp(0.9rem, 1.2vw, 1.1rem)' }),
        defineField({ name: 'lineHeight', title: 'Line Height', type: 'string', description: 'e.g. 1.5, 1.8' }),
        defineField({ name: 'letterSpacing', title: 'Letter Spacing', type: 'string', description: 'e.g. -0.02em, 0.05em' }),
        defineField({ name: 'textAlign', title: 'Text Align', type: 'string', options: { list: [{ title: 'Left', value: 'left' }, { title: 'Center', value: 'center' }, { title: 'Right', value: 'right' }], layout: 'radio' } }),
      ],
    }),

    // ── COLORS ──────────────────────────────────────────────────
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Hex code (e.g. #1F1B16). Overrides theme preset.',
      hidden: ({ parent }: { parent: { theme?: string } }) => parent?.theme !== 'custom',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Used for buttons, links, highlights. Hex code (e.g. #C9A04A).',
    }),
    defineField({
      name: 'mutedTextColor',
      title: 'Muted / Secondary Text Color',
      type: 'string',
      description: 'For subtitles, captions, secondary text. Hex or rgba.',
    }),
    defineField({
      name: 'borderColor',
      title: 'Border Color',
      type: 'string',
      description: 'Default border color for cards/dividers in this section.',
    }),

    // ── SPACING ─────────────────────────────────────────────────
    defineField({
      name: 'paddingTop',
      title: 'Top Padding',
      type: 'string',
      description: 'CSS value (e.g. 140px, 10vw, clamp(80px, 10vw, 140px))',
    }),
    defineField({
      name: 'paddingBottom',
      title: 'Bottom Padding',
      type: 'string',
      description: 'CSS value (e.g. 140px, 10vw, clamp(80px, 10vw, 140px))',
    }),
    defineField({
      name: 'paddingX',
      title: 'Horizontal Padding',
      type: 'string',
      description: 'CSS value (e.g. clamp(20px, 5vw, 80px)). Applied to left and right.',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max Content Width',
      type: 'string',
      description: 'CSS value (e.g. 1440px, 90vw). Default: 1440px',
    }),
    defineField({
      name: 'gap',
      title: 'Default Gap Between Elements',
      type: 'string',
      description: 'CSS gap value (e.g. clamp(24px, 4vw, 48px)). Applied to grids/flex containers.',
    }),

    // ── LAYOUT ──────────────────────────────────────────────────
    defineField({
      name: 'layout',
      title: 'Layout Template',
      type: 'string',
      options: {
        list: [
          { title: 'Full Width', value: 'full' },
          { title: 'Contained', value: 'contained' },
          { title: 'Narrow', value: 'narrow' },
          { title: 'Split 50/50', value: 'split' },
        ],
        layout: 'radio',
      },
      initialValue: 'contained',
    }),
    defineField({
      name: 'verticalAlign',
      title: 'Vertical Alignment',
      type: 'string',
      options: { list: [{ title: 'Top', value: 'flex-start' }, { title: 'Center', value: 'center' }, { title: 'Bottom', value: 'flex-end' }], layout: 'radio' },
      description: 'How content aligns vertically within the section.',
    }),
    defineField({
      name: 'horizontalAlign',
      title: 'Horizontal Alignment',
      type: 'string',
      options: { list: [{ title: 'Left', value: 'flex-start' }, { title: 'Center', value: 'center' }, { title: 'Right', value: 'flex-end' }], layout: 'radio' },
      description: 'How content aligns horizontally within the section.',
    }),

    // ── BORDERS & RADIUS ────────────────────────────────────────
    defineField({
      name: 'borderTop',
      title: 'Top Border',
      type: 'string',
      description: 'CSS border value (e.g. 1px solid rgba(0,0,0,0.1))',
    }),
    defineField({
      name: 'borderBottom',
      title: 'Bottom Border',
      type: 'string',
      description: 'CSS border value (e.g. 1px solid rgba(0,0,0,0.1))',
    }),
    defineField({
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'string',
      description: 'Applied to section wrapper. e.g. 0, 12px, 24px 24px 0 0',
    }),

    // ── SHADOWS ─────────────────────────────────────────────────
    defineField({
      name: 'shadow',
      title: 'Section Shadow',
      type: 'string',
      description: 'CSS box-shadow value. e.g. 0 4px 24px rgba(0,0,0,0.08)',
    }),
    defineField({
      name: 'cardShadow',
      title: 'Card Shadow Preset',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Subtle', value: '0 2px 8px rgba(0,0,0,0.04)' },
          { title: 'Medium', value: '0 4px 16px rgba(0,0,0,0.08)' },
          { title: 'Large', value: '0 8px 32px rgba(0,0,0,0.12)' },
          { title: 'Elevated', value: '0 16px 48px rgba(0,0,0,0.16)' },
        ],
        layout: 'dropdown',
      },
      description: 'Applied to cards/containers within the section.',
    }),

    // ── ANIMATION ───────────────────────────────────────────────
    defineField({
      name: 'animation',
      title: 'Entrance Animation',
      type: 'string',
      options: {
        list: [
          { title: 'Fade Up', value: 'fade-up' },
          { title: 'Fade In', value: 'fade-in' },
          { title: 'Slide Left', value: 'slide-left' },
          { title: 'Slide Right', value: 'slide-right' },
          { title: 'Scale In', value: 'scale-in' },
          { title: 'None', value: 'none' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'fade-up',
    }),
    defineField({
      name: 'animationDuration',
      title: 'Animation Duration',
      type: 'string',
      description: 'e.g. 0.6s, 1s, 1.2s',
      initialValue: '0.8s',
    }),
    defineField({
      name: 'animationDelay',
      title: 'Animation Delay',
      type: 'string',
      description: 'e.g. 0s, 0.2s, 0.4s',
    }),
    defineField({
      name: 'staggerChildren',
      title: 'Stagger Child Animations',
      type: 'boolean',
      description: 'If true, children animate one after another.',
      initialValue: false,
    }),
    defineField({
      name: 'staggerDelay',
      title: 'Stagger Delay',
      type: 'string',
      description: 'Delay between each child animation. e.g. 0.1s, 0.15s',
      initialValue: '0.1s',
      hidden: ({ parent }: { parent: { staggerChildren?: boolean } }) => !parent?.staggerChildren,
    }),

    // ── DIVIDER ─────────────────────────────────────────────────
    defineField({
      name: 'divider',
      title: 'Section Divider',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'position', title: 'Position', type: 'string', options: { list: [{ title: 'Top', value: 'top' }, { title: 'Bottom', value: 'bottom' }, { title: 'Both', value: 'both' }], layout: 'radio' } }),
        defineField({ name: 'style', title: 'Divider Style', type: 'string', options: { list: [{ title: 'Solid Line', value: 'solid' }, { title: 'Gradient Line', value: 'gradient' }, { title: 'Wave SVG', value: 'wave' }, { title: 'Dots', value: 'dots' }], layout: 'radio' }, initialValue: 'solid' }),
        defineField({ name: 'color', title: 'Divider Color', type: 'string' }),
        defineField({ name: 'thickness', title: 'Thickness', type: 'string', description: 'e.g. 1px, 2px', initialValue: '1px' }),
      ],
    }),

    // ── RESPONSIVE ──────────────────────────────────────────────
    defineField({
      name: 'responsive',
      title: 'Responsive Overrides',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'hideOnMobile', title: 'Hide on Mobile (<768px)', type: 'boolean' }),
        defineField({ name: 'hideOnTablet', title: 'Hide on Tablet (768-1024px)', type: 'boolean' }),
        defineField({ name: 'hideOnDesktop', title: 'Hide on Desktop (>1024px)', type: 'boolean' }),
        defineField({ name: 'mobilePadding', title: 'Mobile Padding Override', type: 'string', description: 'Applied when viewport < 768px' }),
        defineField({ name: 'mobileTextAlign', title: 'Mobile Text Align', type: 'string', options: { list: [{ title: 'Left', value: 'left' }, { title: 'Center', value: 'center' }], layout: 'radio' } }),
      ],
    }),

    // ── ADVANCED ────────────────────────────────────────────────
    defineField({
      name: 'customCSS',
      title: 'Custom CSS',
      type: 'text',
      rows: 8,
      description: 'Raw CSS applied to the section. Use & for the section selector.',
    }),
    defineField({
      name: 'cssClass',
      title: 'Additional CSS Class',
      type: 'string',
      description: 'Custom class name for targeting in global CSS.',
    }),
    defineField({
      name: 'id',
      title: 'Section ID',
      type: 'string',
      description: 'HTML id attribute for anchor links.',
    }),
    defineField({
      name: 'dataAttributes',
      title: 'Data Attributes',
      type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'key', title: 'Key', type: 'string', description: 'e.g. theme, section' }),
        defineField({ name: 'value', title: 'Value', type: 'string' }),
      ]}],
      description: 'Custom data-* attributes for JS targeting.',
    }),
  ],
});

// ── THEME PRESETS ───────────────────────────────────────────────
export const themeColors: Record<string, { bg: string; text: string; accent: string; muted?: string; border?: string }> = {
  default: { bg: '#FBF9F5', text: '#1F1B16', accent: '#C9A04A', muted: 'rgba(31,27,22,0.55)', border: 'rgba(31,27,22,0.06)' },
  dark: { bg: '#0A0F1A', text: '#FDFCFA', accent: '#C9A04A', muted: 'rgba(253,252,250,0.55)', border: 'rgba(253,252,250,0.08)' },
  warm: { bg: '#F5F1EA', text: '#1F1B16', accent: '#A07D2E', muted: 'rgba(31,27,22,0.55)', border: 'rgba(31,27,22,0.06)' },
  forest: { bg: '#1A2E1A', text: '#E8F0E8', accent: '#9BA88B', muted: 'rgba(232,240,232,0.55)', border: 'rgba(232,240,232,0.08)' },
  midnight: { bg: '#0F1A30', text: '#FDFCFA', accent: '#E8CD7A', muted: 'rgba(253,252,250,0.55)', border: 'rgba(253,252,250,0.08)' },
};

// ── SHADOW PRESETS ──────────────────────────────────────────────
export const shadowPresets: Record<string, string> = {
  none: 'none',
  subtle: '0 2px 8px rgba(0,0,0,0.04)',
  medium: '0 4px 16px rgba(0,0,0,0.08)',
  large: '0 8px 32px rgba(0,0,0,0.12)',
  elevated: '0 16px 48px rgba(0,0,0,0.16)',
};

// ── ANIMATION PRESETS ───────────────────────────────────────────
export const animationPresets: Record<string, { initial: Record<string, any>; animate: Record<string, any> }> = {
  'fade-up': { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  'fade-in': { initial: { opacity: 0 }, animate: { opacity: 1 } },
  'slide-left': { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  'slide-right': { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  'scale-in': { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  'none': { initial: {}, animate: {} },
};
