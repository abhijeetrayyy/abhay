import { defineType, defineField } from 'sanity';

export const paths = defineType({
  name: 'paths',
  title: 'Paths Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Choose Your' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Path to Power' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, initialValue: 'Four sacred doors into the ancient Siberian tradition. Each path is guarded by a spirit — choose the one that calls to you.' }),
    defineField({
      name: 'paths', title: 'Path Cards', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'link', title: 'Link URL', type: 'string' },
            { name: 'color', title: 'Accent Color', type: 'string' },
            { name: 'previewVideo', title: 'Preview Video', type: 'file', options: { accept: 'video/mp4' } },
          ],
          preview: { select: { title: 'title', subtitle: 'subtitle' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'subheading' } },
});
