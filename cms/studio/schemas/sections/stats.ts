import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const stats = defineType({
  name: 'stats',
  title: 'Stats Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
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
      initialValue: [
        { _key: 's1', value: 30, suffix: '+', label: 'Years Experience' },
        { _key: 's2', value: 5000, suffix: '+', label: 'People Transformed' },
        { _key: 's3', value: 50, suffix: '+', label: 'Countries' },
        { _key: 's4', value: 200, suffix: '+', label: 'Ceremonies/Year' },
      ],
    }),
    sectionStyling,
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
