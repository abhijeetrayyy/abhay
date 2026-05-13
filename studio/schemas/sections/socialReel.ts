import { defineType, defineField } from 'sanity';

export const socialReel = defineType({
  name: 'socialReel',
  title: 'Social Reel Section',
  type: 'object',
  fields: [
    defineField({ name: 'handle', title: 'Social Handle', type: 'string', initialValue: '@EarthForPeace' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Sacred Moments.' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Witnessed.' }),
    defineField({
      name: 'socialLinks', title: 'Social Links', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'url', title: 'URL', type: 'url', validation: (Rule: any) => Rule.required() },
          ],
          preview: { select: { title: 'label', subtitle: 'url' } },
        },
      ],
    }),
    defineField({
      name: 'reels', title: 'Reels', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'platform', title: 'Platform', type: 'string', options: { list: ['Instagram', 'YouTube', 'TikTok'] } },
            { name: 'views', title: 'Views', type: 'string' },
            { name: 'duration', title: 'Duration', type: 'string' },
            { name: 'link', title: 'Link URL', type: 'url' },
            { name: 'video', title: 'Video File', type: 'file', options: { accept: 'video/mp4,video/quicktime' } },
          ],
          preview: { select: { title: 'label', subtitle: 'platform' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'handle' } },
});
