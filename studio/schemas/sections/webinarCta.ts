import { defineType, defineField } from 'sanity';

export const webinarCta = defineType({
  name: 'webinarCta',
  title: 'Webinar CTA Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Free Webinar' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Your Transformation' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Starts Free' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, initialValue: 'Join thousands of people who made their first shift in a single free masterclass. No experience required — only willingness.' }),
    defineField({
      name: 'benefits', title: 'Benefit Bullets', type: 'array', of: [{ type: 'string' }],
      initialValue: [
        'Live introduction to the SAMPO psycho-energetic system',
        'Discover your unique energy type and its strengths',
        'First steps in shamanic self-healing techniques',
        'Live Q&A with Shaman Abhay Oyun',
      ],
    }),
    defineField({
      name: 'card', title: 'Card Details', type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Next Session' },
        { name: 'date', title: 'Date', type: 'string', initialValue: 'March 19, 2025' },
        { name: 'meta', title: 'Meta', type: 'string', initialValue: 'Online · Free Entry · Global' },
        { name: 'quote', title: 'Quote', type: 'string', initialValue: 'The first step costs nothing but the courage to begin.' },
        { name: 'primaryButton', title: 'Primary Button Label', type: 'string', initialValue: 'Reserve Your Spot — Free →' },
        { name: 'primaryUrl', title: 'Primary Button URL', type: 'string', initialValue: 'https://forms.gle/jEDaUrKwbyHd8WvUA' },
        { name: 'secondaryButton', title: 'Secondary Button Label', type: 'string', initialValue: 'Book Private 1-on-1 Session' },
        { name: 'secondaryUrl', title: 'Secondary Button URL', type: 'string', initialValue: 'https://calendly.com/hurraymangalam/individualsessions' },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
