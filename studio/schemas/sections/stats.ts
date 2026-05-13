import { defineType, defineField } from 'sanity';

export const stats = defineType({
  name: 'stats',
  title: 'Stats Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Proven Results' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Transforming Lives Worldwide' }),
    defineField({
      name: 'stats', title: 'Statistics', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'number', validation: (Rule: any) => Rule.required() },
            { name: 'suffix', title: 'Suffix', type: 'string', description: 'e.g. +, %, K' },
            { name: 'label', title: 'Label', type: 'string', validation: (Rule: any) => Rule.required() },
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
