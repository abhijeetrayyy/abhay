import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const paths = defineType({
  name: 'paths',
  title: 'Paths Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Choose Your' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Path to Power' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, initialValue: 'Four sacred doors into the ancient Siberian tradition. Each path is guarded by a spirit — choose the one that calls to you.' }),
    defineField({
      name: 'paths', title: 'Path Cards', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'link', title: 'Link URL', type: 'string' },
            { name: 'color', title: 'Accent Color', type: 'string' },
            { name: 'previewVideo', title: 'Preview Video', type: 'file', options: { accept: 'video/mp4' } },
          ],
          preview: { select: { title: 'title', subtitle: 'subtitle' } },
        },
      ],
      initialValue: [
        { _key: 'p1', title: 'The SAMPO System', subtitle: 'Tengri — Sky Father', description: 'The foundational energy mastery system. Learn to accumulate, protect, and direct your vital force using ancient Siberian techniques passed down from the celestial realms.', link: '/teachings', color: '#C9A04A' },
        { _key: 'p2', title: 'Sacred Healing', subtitle: 'Umai — Earth Mother', description: 'Private shamanic healing sessions rooted in the nurturing wisdom of Umai. Soul retrieval, energy clearing, and deep ancestral healing for those ready to transform.', link: 'https://calendly.com/hurraymangalam/individualsessions', color: '#E8CD7A' },
        { _key: 'p3', title: 'Shamanic Training', subtitle: 'Ulgen — Spirit of Light', description: 'A structured path to becoming a practitioner. Level 1 certification through intensive residential immersions, drum journeying, and ceremonial leadership.', link: '/events', color: '#8B7E6E' },
        { _key: 'p4', title: 'Shadow & Ancestral Work', subtitle: 'Erlik — Lord of Depths', description: 'Deep transformational work for those ready to face the shadow. Ancestral lineage healing, soul fragment recovery, and karmic release through guided ceremonies.', link: '/teachings', color: '#A07D2E' },
      ],
    }),
    sectionStyling,
  ],
  preview: { select: { title: 'heading', subtitle: 'subheading' } },
});
