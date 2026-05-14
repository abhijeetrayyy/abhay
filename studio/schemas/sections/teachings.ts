import { defineType, defineField } from 'sanity';

export const teachings = defineType({
  name: 'teachingsSection',
  title: 'Teachings Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Ancient Wisdom' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Shamanic' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Teachings' }),
    defineField({
      name: 'teachings', title: 'Teachings', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 },
            { name: 'category', title: 'Category', type: 'string', options: { list: ['teaching', 'guide', 'philosophy', 'ceremony', 'integration'] } },
            { name: 'readTime', title: 'Read Time (min)', type: 'number' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'link', title: 'Link URL', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
        },
      ],
      initialValue: [
        { _key: 'th1', title: 'The SAMPO System: Ancient Energy Mastery', excerpt: 'Discover the foundational principles of the SAMPO psycho-energetic system — an ancient Siberian technology for accumulating and directing vital force.', category: 'teaching', readTime: 12 },
        { _key: 'th2', title: 'Sacred Drum Healing: A Practical Guide', excerpt: 'Learn how the shamanic drum connects you to the spirit world and facilitates deep healing on physical, emotional, and spiritual levels.', category: 'guide', readTime: 8 },
        { _key: 'th3', title: 'Soul Retrieval: Finding What Was Lost', excerpt: 'Understanding soul fragmentation and the process of soul retrieval — one of the most profound healing practices in the shamanic tradition.', category: 'ceremony', readTime: 15 },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
