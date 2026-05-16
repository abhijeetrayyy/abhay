import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const teachings = defineType({
  name: 'teachingsSection',
  title: 'Teachings Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Ancient Wisdom' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Shamanic' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Teachings' }),
    defineField({
      name: 'teachings', title: 'Teachings', type: 'array', of: [
        { type: 'reference', to: [{ type: 'teaching' }] },
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 },
            { name: 'category', title: 'Category', type: 'string', options: { list: ['teaching', 'guide', 'philosophy', 'ceremony', 'integration'] } },
            { name: 'readTime', title: 'Read Time (min)', type: 'number' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'link', title: 'Link URL', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
        },
      ],
    }),
    sectionStyling,
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
