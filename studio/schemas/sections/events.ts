import { defineType, defineField } from 'sanity';

export const events = defineType({
  name: 'eventsSection',
  title: 'Events Showcase Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Upcoming Events' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Join Abhay' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'in the Field.' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, initialValue: 'Intimate gatherings designed for real transformation. No performance — only depth, ceremony, and direct energetic healing.' }),
    defineField({
      name: 'events', title: 'Event Cards', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'tag', title: 'Tag', type: 'string' },
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'date', title: 'Date', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'seats', title: 'Seats', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'color', title: 'Accent Color', type: 'string' },
            { name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
            { name: 'badge', title: 'Badge', type: 'string', options: { list: ['Filling Fast', 'Limited', 'Free Entry', 'Sold Out'] } },
            { name: 'registerUrl', title: 'Register URL', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'date' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
