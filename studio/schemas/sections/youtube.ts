import { defineType, defineField } from 'sanity';

export const youtube = defineType({
  name: 'youtubeSection',
  title: 'YouTube Videos Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Watch & Learn' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Abhay Oyun' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Teaching' }),
    defineField({
      name: 'videos', title: 'YouTube Videos', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'youtubeId', title: 'YouTube Video ID', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'youtubeId' } },
        },
      ],
    }),
    defineField({
      name: 'channelLink', title: 'Channel Link', type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'View Channel' },
        { name: 'url', title: 'URL', type: 'url', initialValue: 'https://www.youtube.com/@AbhayOyun' },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
