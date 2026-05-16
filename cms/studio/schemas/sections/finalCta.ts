import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const finalCta = defineType({
  name: 'finalCta',
  title: 'Final CTA Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Ready to Begin Your Journey?' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, initialValue: 'Whether you\'re seeking healing, transformation, or to awaken your shamanic abilities — the path awaits. Take the first step today.' }),
    defineField({
      name: 'primaryButton', title: 'Primary Button', type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Book a Session' },
        { name: 'url', title: 'URL', type: 'string', initialValue: 'https://calendly.com/hurraymangalam/individualsessions' },
      ],
    }),
    defineField({
      name: 'secondaryButton', title: 'Secondary Button', type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Contact Abhay' },
        { name: 'url', title: 'URL', type: 'string', initialValue: 'mailto:contact@earthforpeace.com' },
      ],
    }),
    defineField({ name: 'bottomQuote', title: 'Bottom Quote', type: 'string', initialValue: 'Walk in Power. Walk in Light.' }),
    sectionStyling,
  ],
  preview: { select: { title: 'heading' } },
});
