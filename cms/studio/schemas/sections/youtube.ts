import { defineType, defineField } from 'sanity';
import { sectionStyling } from '../objects/sectionStyling';

export const youtube = defineType({
  name: 'youtubeSection',
  title: 'YouTube Videos Section',
  type: 'object',
  groups: [{ name: 'styling', title: 'Styling' }],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Watch & Learn' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Abhay Oyun' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Teaching' }),
    defineField({
      name: 'videos', title: 'YouTube Videos', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { name: 'youtubeId', title: 'YouTube Video ID', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'youtubeId' } },
        },
      ],
      initialValue: [
        { _key: 'yt1', youtubeId: 'kjFiyWgyvu0', title: 'Abhay Oyun Teaching', subtitle: 'First Steps of SAMPO' },
        { _key: 'yt2', youtubeId: 'EqEK-5uJrAA', title: 'Sacred Drum Ceremony', subtitle: 'Sound Healing Practice' },
        { _key: 'yt3', youtubeId: 'MXW78uQR7xg', title: 'Shamanic Initiation', subtitle: 'Psycho-Energetic Training' },
        { _key: 'yt4', youtubeId: 'rNviNzWV-e4', title: 'Nature Synchronization', subtitle: 'Siberian Forest Ritual' },
        { _key: 'yt5', youtubeId: '9ftcHfDEjeI', title: 'The SAMPO System', subtitle: 'Ancient Energy Mastery' },
      ],
    }),
    defineField({
      name: 'channelLink', title: 'Channel Link', type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'View Channel' },
        { name: 'url', title: 'URL', type: 'url', initialValue: 'https://www.youtube.com/@AbhayOyun' },
      ],
    }),
    sectionStyling,
  ],
  preview: { select: { title: 'heading', subtitle: 'eyebrow' } },
});
