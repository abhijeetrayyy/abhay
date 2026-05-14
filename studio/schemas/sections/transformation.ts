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
      initialValue: [
        { _key: 'tm1', year: '2004', location: 'Japan — Mount Fuji', text: '2,500 people gathered at the base of Mount Fuji under Abhay\'s guidance. Shaman chiefs from North America and Asian tribes united in ceremony for the first time.' },
        { _key: 'tm2', year: '2007', location: 'South Russia', text: 'Major peace conferences and large spiritual gatherings where prayers and sacred rituals were held to bring peace and healing to the war-torn region.' },
        { _key: 'tm3', year: '2015', location: 'Chile', text: 'When earthquakes, volcanic ash, and severe drought converged on Chile, Abhay led ceremonies to shift the collective energetic field and support recovery.' },
        { _key: 'tm4', year: '2022', location: 'Ukraine', text: 'During the New Year\'s Retreat 2021–2022, Abhay received a vision of the invasion. Sacred ceremonies were organized across Europe to focus healing energy on the region.' },
      ],
    }),
  ],
  preview: { select: { title: 'eyebrow' } },
});
