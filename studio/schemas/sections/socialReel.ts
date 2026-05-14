import { defineType, defineField } from 'sanity';

export const socialReel = defineType({
  name: 'socialReel',
  title: 'Social Reel Section',
  type: 'object',
  fields: [
    defineField({ name: 'handle', title: 'Social Handle', type: 'string', initialValue: '@EarthForPeace' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Sacred Moments.' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Witnessed.' }),
    defineField({
      name: 'socialLinks', title: 'Social Links', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'url', title: 'URL', type: 'url', validation: (Rule: any) => Rule.required() },
          ],
          preview: { select: { title: 'label', subtitle: 'url' } },
        },
      ],
      initialValue: [
        { _key: 'sl1', label: 'YouTube', url: 'https://www.youtube.com/@earthforpeace' },
        { _key: 'sl2', label: 'Instagram', url: 'https://www.instagram.com/earthforpeace' },
        { _key: 'sl3', label: 'Facebook', url: 'https://facebook.com/earthforpeace' },
        { _key: 'sl4', label: 'TikTok', url: 'https://tiktok.com/@earthforpeace' },
        { _key: 'sl5', label: 'WhatsApp', url: 'https://wa.me/12122561366' },
      ],
    }),
    defineField({
      name: 'reels', title: 'Reels', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'platform', title: 'Platform', type: 'string', options: { list: ['Instagram', 'YouTube', 'TikTok'] } },
            { name: 'views', title: 'Views', type: 'string' },
            { name: 'duration', title: 'Duration', type: 'string' },
            { name: 'link', title: 'Link URL', type: 'url' },
            { name: 'video', title: 'Video File', type: 'file', options: { accept: 'video/mp4,video/quicktime' } },
          ],
          preview: { select: { title: 'label', subtitle: 'platform' } },
        },
      ],
      initialValue: [
        { _key: 'r1', label: 'Shamanic Ceremony', platform: 'Instagram', views: '24K', duration: '0:58', link: 'https://www.instagram.com/earthforpeace/' },
        { _key: 'r2', label: 'Healing Ritual Fire', platform: 'Instagram', views: '18K', duration: '1:12', link: 'https://www.instagram.com/earthforpeace/' },
        { _key: 'r3', label: 'SAMPO Teaching', platform: 'YouTube', views: '41K', duration: '2:34', link: 'https://www.youtube.com/@earthforpeace' },
        { _key: 'r4', label: 'Sacred Drum Journey', platform: 'Instagram', views: '31K', duration: '0:47', link: 'https://www.instagram.com/earthforpeace/' },
        { _key: 'r5', label: 'Nature Synchronization', platform: 'YouTube', views: '19K', duration: '1:55', link: 'https://www.youtube.com/@earthforpeace' },
      ],
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'handle' } },
});
