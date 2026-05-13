import { defineType, defineField } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: (Rule: any) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
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
    }),
  ],
});
