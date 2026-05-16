import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const shamanIntro = defineType({
  name: 'shamanIntro',
  title: 'Shaman Intro Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'The Shaman' }),
    defineField({
      name: 'heading', title: 'Heading', type: 'array', of: [{ type: 'string' }],
      description: 'Each item is a line break. Last line can be styled as italic gold.',
      initialValue: ['30+ Years.', '50+ Countries.', 'One Mission.'],
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 5, initialValue: 'Born in Siberia and initiated into the shamanic path in 1991, Abhay Oyun has dedicated his life to preserving and sharing the ancient wisdom of his ancestors. Trained in the sacred traditions of the Altai Mountains, he bridges the seen and unseen worlds.\n\nHis mission is simple yet profound: to awaken humanity to the transformative power of nature-based spirituality.' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageCaption', title: 'Image Caption', type: 'string', initialValue: 'Guardian of Our Planet' }),
    defineField({ name: 'imageQuote', title: 'Image Quote', type: 'string', initialValue: 'Walk in Power. Walk in Light.' }),
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
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Learn More' },
        { name: 'url', title: 'URL', type: 'string', initialValue: '/about' },
      ],
    }),
    defineField({
      name: 'stats', title: 'Mini Stats', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string', initialValue: '5,000+' },
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Healed' },
          ],
          preview: { select: { title: 'label', subtitle: 'number' } },
        },
      ],
      initialValue: [
        { _key: 'ms1', number: '5,000+', label: 'Healed' },
        { _key: 'ms2', number: '200+', label: 'Ceremonies/Year' },
        { _key: 'ms3', number: '30+', label: 'Years' },
      ],
    }),
    sectionStyling,
  ],
  preview: { select: { title: 'eyebrow', subtitle: 'heading' } },
});
