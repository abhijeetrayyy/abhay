import { defineType, defineField } from 'sanity';

export const videoTestimonials = defineType({
  name: 'videoTestimonials',
  title: 'Video Testimonials Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Video Stories' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Real Voices' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'of Transformation' }),
    defineField({
      name: 'videos', title: 'Videos', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'label', title: 'Label', type: 'string', options: { list: ['Student Story', 'Testimonial', 'Teaching', 'Testimony', 'Workshop'] } },
            {
              name: 'source', title: 'Video Source', type: 'string', options: { list: [{ title: 'YouTube', value: 'youtube' }, { title: 'Local File', value: 'local' }] },
            },
            { name: 'youtubeId', title: 'YouTube ID', type: 'string', hidden: ({ parent }: { parent: Record<string, unknown> }) => parent?.source !== 'youtube' },
            { name: 'videoFile', title: 'Video File', type: 'file', options: { accept: 'video/mp4,video/quicktime' }, hidden: ({ parent }: { parent: Record<string, unknown> }) => parent?.source !== 'local' },
          ],
          preview: { select: { title: 'title', subtitle: 'label' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
