import { defineType, defineField } from 'sanity';

export const gallery = defineType({
  name: 'gallerySection',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Shamanic Retreats' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Join our' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'shamanic family.' }),
    defineField({
      name: 'images', title: 'Images', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'aspect', title: 'Aspect Ratio', type: 'string', options: { list: ['4/3', '3/4', '1/1'] } },
          ],
          preview: { select: { title: 'alt', media: 'image' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
