import { defineType, defineField } from 'sanity';

export const faq = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'FAQ' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Common Questions' }),
    defineField({
      name: 'faqs', title: 'FAQ Items', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule: any) => Rule.required() },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
