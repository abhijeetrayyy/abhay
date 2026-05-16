import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const videoTestimonials = defineType({
  name: 'videoTestimonials',
  title: 'Video Testimonials Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
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
      initialValue: [
        { _key: 'v1', title: 'Meeting with Master', label: 'Student Story', source: 'youtube', youtubeId: 'PKpKIkGQGv4' },
        { _key: 'v2', title: 'Karnudeja', label: 'Testimonial', source: 'local' },
        { _key: 'v3', title: 'Expanded Consciousness', label: 'Teaching', source: 'youtube', youtubeId: 'buldB9zzREs' },
        { _key: 'v4', title: 'Las Vegas Experience', label: 'Testimonial', source: 'local' },
        { _key: 'v5', title: 'Shaman Lead to Happiness', label: 'Testimony', source: 'youtube', youtubeId: 'Lw2A4Rbyxm0' },
        { _key: 'v6', title: 'Doris', label: 'Testimonial', source: 'local' },
        { _key: 'v7', title: 'Unlimited Love', label: 'Workshop', source: 'youtube', youtubeId: '6fYzu6ZdKJA' },
        { _key: 'v8', title: 'Ceci', label: 'Testimonial', source: 'local' },
      ],
    }),
    sectionStyling,
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
