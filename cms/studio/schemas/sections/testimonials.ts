import { defineType, defineField } from 'sanity';

export const testimonials = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Testimonials' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Stories of Transformation' }),
    defineField({
      name: 'testimonials', title: 'Testimonials', type: 'array', of: [
        { type: 'reference', to: [{ type: 'testimonial' }] },
        {
          type: 'object',
          fields: [
            { name: 'clientName', title: 'Client Name', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'clientLocation', title: 'Location', type: 'string' },
            { name: 'content', title: 'Content', type: 'text', validation: (Rule: any) => Rule.required() },
            { name: 'serviceType', title: 'Service Type', type: 'string' },
            { name: 'rating', title: 'Rating', type: 'number', options: { list: [1, 2, 3, 4, 5] } },
            { name: 'clientImage', title: 'Client Image', type: 'image', options: { hotspot: true } },
          ],
          preview: { select: { title: 'clientName', subtitle: 'clientLocation', media: 'clientImage' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
