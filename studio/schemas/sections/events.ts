import { defineType, defineField } from 'sanity';

export const events = defineType({
  name: 'eventsSection',
  title: 'Events Showcase Section',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Upcoming Events' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Join Abhay' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'in the Field.' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, initialValue: 'Intimate gatherings designed for real transformation. No performance — only depth, ceremony, and direct energetic healing.' }),
    defineField({
      name: 'events', title: 'Event Cards', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'tag', title: 'Tag', type: 'string' },
            { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'date', title: 'Date', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'seats', title: 'Seats', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'color', title: 'Accent Color', type: 'string' },
            { name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
            { name: 'badge', title: 'Badge', type: 'string', options: { list: ['Filling Fast', 'Limited', 'Free Entry', 'Sold Out'] } },
            { name: 'registerUrl', title: 'Register URL', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'date' } },
        },
      ],
      initialValue: [
        { _key: 'e1', tag: "Men's Intensive", title: 'Reclaim Your Masculine Power', date: 'March 25–29, 2025', location: 'Denver, Colorado', seats: '18 spots remaining', price: 'From $1,200', description: 'A 5-day immersive for men ready to step fully into their energetic sovereignty. Cold exposure, sacred fire ceremony, drum healing, and direct shamanic mentorship with Master Abhay.', color: '#1F1B16', highlights: ['Cold Plunge Ceremony', 'Sacred Fire Ritual', 'Drum Healing', '1-on-1 Session'], badge: 'Filling Fast', registerUrl: 'https://forms.gle/jEDaUrKwbyHd8WvUA' },
        { _key: 'e2', tag: "Women's Gathering", title: 'Shamanism — Source of Happiness & Love', date: 'March 20–22, 2025', location: 'Denver, Colorado', seats: '12 spots remaining', price: 'From $890', description: 'A sacred gathering for women. Reconnect with the ancient feminine power of the Earth through ceremony, sound medicine, and shamanic healing circles.', color: '#C9A04A', highlights: ['Sound Ceremony', 'Sisterhood Circle', 'Energy Work', 'Forest Ritual'], badge: 'Limited', registerUrl: 'https://forms.gle/jEDaUrKwbyHd8WvUA' },
        { _key: 'e3', tag: 'Free Webinar', title: 'Your First Step Into the SAMPO System', date: 'March 19, 2025', location: 'Online · Global', seats: 'Open registration', price: 'Free', description: 'Experience the SAMPO System from anywhere in the world. A live initiation into the foundations of shamanic energy work. Open to all seekers.', color: '#8B7E6E', highlights: ['Live Q&A', 'Energy Practice', 'SAMPO Intro', 'Worldwide Access'], badge: 'Free Entry', registerUrl: 'https://forms.gle/jEDaUrKwbyHd8WvUA' },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
