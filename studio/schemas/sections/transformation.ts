import { defineType, defineField } from 'sanity';

export const transformation = defineType({
  name: 'transformation',
  title: 'Transformation / Timeline Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Global Impact' }),
    defineField({
      name: 'quote', title: 'Quote', type: 'text', rows: 2,
      initialValue: 'When you reconnect with your wild nature, trauma doesn\'t just heal — it transforms into power.',
    }),
    defineField({ name: 'quoteAttribution', title: 'Quote Attribution', type: 'string', initialValue: '— Shaman Abhay Oyun' }),
    defineField({
      name: 'description', title: 'Description', type: 'text', rows: 3,
      initialValue: 'Called the World Shaman and Guardian of Our Planet, Abhay Oyun has dedicated his life to responding to global crises through the ancient lens of shamanic intervention.',
    }),
    defineField({
      name: 'milestones', title: 'Timeline Milestones', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Year', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'text', title: 'Description', type: 'text', rows: 3 },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
          preview: { select: { title: 'year', subtitle: 'location', media: 'image' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'eyebrow' } },
});
