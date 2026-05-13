import { defineType, defineField } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Siberian Shaman & Guardian of Our Planet' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Between Worlds' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Abhay Oyun' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, initialValue: 'Awakening the world to the raw power of ancient Siberian shamanic traditions. Sacred ceremonies, healing, and training since 1991.' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'shamanImage', title: 'Shaman Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'primaryButton', title: 'Primary Button', type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Book a Session' },
        { name: 'url', title: 'URL', type: 'url', initialValue: 'https://calendly.com/hurraymangalam/individualsessions' },
      ],
    }),
    defineField({
      name: 'secondaryButton', title: 'Secondary Button', type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Join the Webinar' },
        { name: 'url', title: 'URL', type: 'url', initialValue: 'https://forms.gle/jEDaUrKwbyHd8WvUA' },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'tagline' } },
});
