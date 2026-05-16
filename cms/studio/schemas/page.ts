import { defineType, defineField } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: (Rule: any) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', description: 'Overrides page title for search engines. Max 60 chars.' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, description: 'Meta description for search engines. Max 160 chars.' }),
    defineField({ name: 'ogImage', title: 'Open Graph Image', type: 'image', options: { hotspot: true }, description: 'Social sharing image. Recommended: 1200x630px.' }),
    defineField({ name: 'noIndex', title: 'No Index', type: 'boolean', initialValue: false, description: 'Prevent search engines from indexing this page.' }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'paths' },
        { type: 'stats' },
        { type: 'shamanIntro' },
        { type: 'socialReel' },
        { type: 'programs' },
        { type: 'gallerySection' },
        { type: 'testimonialsSection' },
        { type: 'videoTestimonials' },
        { type: 'teachingsSection' },
        { type: 'eventsSection' },
        { type: 'transformation' },
        { type: 'youtubeSection' },
        { type: 'faqSection' },
        { type: 'webinarCta' },
        { type: 'finalCta' },
      ],
      validation: (Rule: any) => Rule.max(20).warning('Consider splitting into multiple pages'),
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current', seoTitle: 'seoTitle', noIndex: 'noIndex' },
    prepare(selection: any) {
      const { title, slug, seoTitle, noIndex } = selection;
      return {
        title: seoTitle || title,
        subtitle: slug ? `/${slug}${noIndex ? ' (noindex)' : ''}` : 'No slug',
      };
    },
  },
});
