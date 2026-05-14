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
      initialValue: [
        { _key: 'pr1', title: 'SAMPO System', subtitle: 'Energy Mastery', description: 'Learn the ancient Siberian technique for harnessing and amplifying your personal energy field.', price: '$497', tag: 'Popular', featured: true, link: '/events' },
        { _key: 'pr2', title: 'Shamanic Training', subtitle: 'Level 1 Certification', description: 'Begin your journey as a practitioner with foundational shamanic knowledge and hands-on experience.', price: '$1,997', featured: false, link: '/events' },
        { _key: 'pr3', title: 'Mountain Retreat', subtitle: 'Siberia Immersion', description: 'An intensive 10-day journey to the Altai Mountains for deep healing and transformation.', price: '$3,497', tag: 'Premium', featured: false, link: '/events' },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
