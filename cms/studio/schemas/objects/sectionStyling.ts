import { defineField } from 'sanity';

export const sectionStyling = defineField({
  name: 'sectionStyling',
  title: 'Styling & Layout',
  type: 'object',
  group: 'styling',
  fields: [
    defineField({
      name: 'theme',
      title: 'Theme Preset',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Dark Mode', value: 'dark' },
          { title: 'Warm Sand', value: 'warm' },
          { title: 'Deep Forest', value: 'forest' },
          { title: 'Midnight', value: 'midnight' },
          { title: 'Custom', value: 'custom' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex code (e.g. #FBF9F5) or CSS value. Overrides theme preset.',
      hidden: ({ parent }: { parent: { theme?: string } }) => parent?.theme !== 'custom',
    }),
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
      hidden: ({ parent }: { parent: { theme?: string } }) => parent?.theme !== 'custom',
    }),
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
      name: 'maxWidth',
      title: 'Max Content Width',
      type: 'string',
      description: 'CSS value (e.g. 1440px, 90vw). Default: 1440px',
    }),
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
      name: 'customCSS',
      title: 'Custom CSS',
      type: 'text',
      rows: 6,
      description: 'Raw CSS applied to the section wrapper. Use & for the section selector.',
    }),
  ],
});

export const themeColors: Record<string, { bg: string; text: string; accent: string }> = {
  default: { bg: '#FBF9F5', text: '#1F1B16', accent: '#C9A04A' },
  dark: { bg: '#0A0F1A', text: '#FDFCFA', accent: '#C9A04A' },
  warm: { bg: '#F5F1EA', text: '#1F1B16', accent: '#A07D2E' },
  forest: { bg: '#1A2E1A', text: '#E8F0E8', accent: '#9BA88B' },
  midnight: { bg: '#0F1A30', text: '#FDFCFA', accent: '#E8CD7A' },
};
