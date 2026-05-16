import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const faq = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
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
      initialValue: [
        { _key: 'f1', question: 'What can I expect from a session with Abhay?', answer: 'Each session is a unique healing journey tailored to your specific needs. Through ancient Siberian techniques, Abhay helps clear energetic blockages, retrieve lost soul fragments, and restore your natural vitality. Clients often report profound shifts in their physical, emotional, and spiritual well-being.' },
        { _key: 'f2', question: 'Do I need prior experience with shamanic practices?', answer: 'No prior experience is necessary. Whether you\'re completely new to shamanic work or have been on this path for years, Abhay meets you where you are. His teaching style is accessible yet profound, ensuring each person receives exactly what they need.' },
        { _key: 'f3', question: 'How do I prepare for a shamanic ceremony?', answer: 'Preparation is simple but important: arrive with an open heart and mind, avoid alcohol for 24 hours before, and come with intention. Abhay will guide you through the rest. Trust the process and allow the ancient wisdom to work through you.' },
        { _key: 'f4', question: 'What\'s included in the Shamanic Training program?', answer: 'The training includes foundational knowledge of shamanic principles, hands-on practice with energy techniques, personal healing sessions, group ceremonies, and ongoing support. You\'ll learn the SAMPO System and leave equipped to begin your own practice.' },
      ],
    }),
    sectionStyling,
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
