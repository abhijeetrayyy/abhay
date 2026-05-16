import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── HEADER ──────────────────────────────────────────────────
    defineField({
      name: 'topBar',
      title: 'Top Bar',
      type: 'object',
      group: 'header',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'email', title: 'Email', type: 'string', initialValue: 'contact@earthforpeace.com' },
        { name: 'phone', title: 'Phone', type: 'string', initialValue: '+1 (212) 256 1366' },
        { name: 'showTopBar', title: 'Show Top Bar', type: 'boolean', initialValue: true },
          {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [{ type: 'object', fields: [
              { name: 'platform', title: 'Platform', type: 'string', options: { list: [
                { title: 'YouTube', value: 'youtube' },
                { title: 'Instagram', value: 'instagram' },
                { title: 'Facebook', value: 'facebook' },
                { title: 'TikTok', value: 'tiktok' },
                { title: 'WhatsApp', value: 'whatsapp' },
                { title: 'X (Twitter)', value: 'twitter' },
                { title: 'LinkedIn', value: 'linkedin' },
                { title: 'Telegram', value: 'telegram' },
                { title: 'Custom', value: 'custom' },
              ], layout: 'dropdown' }, validation: (Rule: any) => Rule.required() },
              { name: 'url', title: 'URL', type: 'string', validation: (Rule: any) => Rule.required() },
              { name: 'label', title: 'Display Label', type: 'string', description: 'Only shown if platform is Custom' },
            ]}],
          options: { layout: 'tags' },
          initialValue: [
            { platform: 'youtube', url: 'https://www.youtube.com/@earthforpeace' },
            { platform: 'instagram', url: 'https://www.instagram.com/earthforpeace' },
            { platform: 'facebook', url: 'https://facebook.com/earthforpeace' },
            { platform: 'tiktok', url: 'https://tiktok.com/@earthforpeace' },
            { platform: 'whatsapp', url: 'https://wa.me/12122561366' },
          ],
        },
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'object',
      group: 'header',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'logoImage', title: 'Logo Image', type: 'image', options: { hotspot: true } },
        { name: 'logoText', title: 'Logo Text', type: 'string', initialValue: 'Abhay Oyun' },
        {
          name: 'links',
          title: 'Navigation Links',
          type: 'array',
          of: [{ type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'href', title: 'URL', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'isExternal', title: 'Open in New Tab', type: 'boolean', initialValue: false },
          ]}],
          initialValue: [
            { label: 'Home', href: '/', isExternal: false },
            { label: 'Gallery', href: '/gallery', isExternal: false },
            { label: 'Events', href: '/events', isExternal: false },
            { label: 'Teachings', href: '/teachings', isExternal: false },
            { label: 'Contact', href: '/contact', isExternal: false },
          ],
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Begin Journey' },
            { name: 'url', title: 'URL', type: 'string', initialValue: '/contact' },
          ],
        },
      ],
    }),
    // ── FOOTER ──────────────────────────────────────────────────
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'brandDescription', title: 'Brand Description', type: 'text', rows: 3, initialValue: 'Master Shaman & Guardian of Our Planet. Guiding seekers home since 1991.' },
        {
          name: 'navigateLinks',
          title: 'Navigate Links',
          type: 'array',
          of: [{ type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'href', title: 'URL', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'isExternal', title: 'Open in New Tab', type: 'boolean', initialValue: false },
          ]}],
          initialValue: [
            { label: 'Home', href: '/', isExternal: false },
            { label: 'About', href: '/#about', isExternal: false },
            { label: 'Gallery', href: '/gallery', isExternal: false },
            { label: 'Events', href: '/events', isExternal: false },
            { label: 'Teachings', href: '/teachings', isExternal: false },
          ],
        },
        {
          name: 'resourceLinks',
          title: 'Resource Links',
          type: 'array',
          of: [{ type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'href', title: 'URL', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'isExternal', title: 'Open in New Tab', type: 'boolean', initialValue: false },
          ]}],
          initialValue: [
            { label: 'YouTube Channel', href: 'https://www.youtube.com/@earthforpeace', isExternal: true },
            { label: 'contact@earthforpeace.com', href: 'mailto:contact@earthforpeace.com', isExternal: false },
            { label: '+1 (212) 256 1366', href: 'tel:+12122561366', isExternal: false },
          ],
        },
        {
          name: 'newsletter',
          title: 'Newsletter',
          type: 'object',
          fields: [
            { name: 'enabled', title: 'Enable Newsletter Signup', type: 'boolean', initialValue: true },
            { name: 'heading', title: 'Heading', type: 'string', initialValue: 'Awaken Weekly' },
            { name: 'description', title: 'Description', type: 'string', initialValue: 'Receive potent insights directly from Abhay.' },
            { name: 'placeholder', title: 'Input Placeholder', type: 'string', initialValue: 'Your email' },
            { name: 'successMessage', title: 'Success Message', type: 'string', initialValue: "You're subscribed. Welcome to the circle." },
            { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Join' },
          ],
        },
        { name: 'copyrightText', title: 'Copyright Text', type: 'string', initialValue: 'Abhay Oyun. All Rights Reserved.' },
        { name: 'footerQuote', title: 'Footer Quote', type: 'string', initialValue: 'Walk in Power. Walk in Light.' },
      ],
    }),
    // ── SEO ─────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'siteTitle', title: 'Site Title', type: 'string', initialValue: 'Shaman Abhay Oyun' },
        { name: 'siteDescription', title: 'Site Description', type: 'text', rows: 3 },
        { name: 'ogImage', title: 'Open Graph Image', type: 'image', options: { hotspot: true } },
        { name: 'favicon', title: 'Favicon', type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    select: { title: 'seo.siteTitle', subtitle: 'navigation.logoText' },
    prepare: ({ title, subtitle }: { title?: string; subtitle?: string }) => ({
      title: title || 'Site Settings',
      subtitle: subtitle || 'Configure header, footer & SEO',
    }),
  },
});
