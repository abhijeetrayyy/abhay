import { defineType, defineField } from 'sanity';

export const programs = defineType({
  name: 'programs',
  title: 'Programs Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Programs' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Transform Your Life' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, initialValue: 'Choose your path to awakening. Each program is designed to unlock ancient wisdom and modern transformation.' }),
    defineField({
      name: 'programs', title: 'Program Cards', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'link', title: 'Link URL', type: 'string' },
            { name: 'tag', title: 'Tag', type: 'string', options: { list: ['Popular', 'Premium', 'New', 'Free'] } },
            { name: 'featured', title: 'Featured (hero card)', type: 'boolean', initialValue: false },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
          preview: { select: { title: 'title', subtitle: 'price' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
