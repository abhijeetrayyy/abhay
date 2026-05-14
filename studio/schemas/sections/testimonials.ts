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
      initialValue: [
        { _key: 't1', clientName: 'Sarah M.', clientLocation: 'Berlin, Germany', content: 'Working with Abhay was the most profound healing experience of my life. Through the SAMPO system, I was able to release trauma I had carried for decades. The ceremonies opened a gateway to a new way of being.', serviceType: 'Healing Session', rating: 5 },
        { _key: 't2', clientName: 'James K.', clientLocation: 'Denver, CO', content: 'The Shamanic Training completely transformed my understanding of energy work. Abhay\'s teachings are authentic, grounded, and deeply powerful. I left the training feeling like a new person.', serviceType: 'Training Program', rating: 5 },
        { _key: 't3', clientName: 'Maria L.', clientLocation: 'Mexico City', content: 'I came seeking healing from chronic illness and found so much more. The ceremonies with Abhay helped me reconnect with my body\'s natural ability to heal. I am forever grateful.', serviceType: 'Ceremony', rating: 5 },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
