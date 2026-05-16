import { blockContent } from './blockContent';
import { siteSettings } from './siteSettings';

const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'clientName', title: 'Client Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'clientLocation', title: 'Location', type: 'string' },
    { name: 'clientImage', title: 'Client Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'shortQuote', title: 'Short Quote', type: 'string' },
    { name: 'serviceType', title: 'Service Type', type: 'string', options: { list: ['Healing Session', 'Training Program', 'Masterclass', 'Ceremony', 'Retreat', 'Online Ceremony'] } },
    { name: 'rating', title: 'Rating', type: 'number', options: { list: [1, 2, 3, 4, 5] } },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
  ],
  orderings: [{ title: 'Display Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'clientName', subtitle: 'serviceType', media: 'clientImage' } },
};

const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 },
    { name: 'description', title: 'Description', type: 'text', rows: 5 },
    { name: 'eventType', title: 'Type', type: 'string', options: { list: ['retreat', 'ceremony', 'workshop', 'training', 'online'] } },
    { name: 'startDate', title: 'Start Date', type: 'date', options: { dateFormat: 'YYYY-MM-DD' } },
    { name: 'endDate', title: 'End Date', type: 'date', options: { dateFormat: 'YYYY-MM-DD' } },
    { name: 'locationName', title: 'Location Name', type: 'string' },
    { name: 'locationCity', title: 'City', type: 'string' },
    { name: 'locationCountry', title: 'Country', type: 'string' },
    { name: 'online', title: 'Online Event', type: 'boolean', initialValue: false },
    { name: 'maxParticipants', title: 'Max Participants', type: 'number' },
    { name: 'price', title: 'Price ($)', type: 'number' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'status', title: 'Status', type: 'string', options: { list: ['draft', 'published', 'cancelled', 'completed'] }, initialValue: 'draft' },
  ],
  preview: { select: { title: 'title', subtitle: 'eventType', media: 'heroImage' } },
};

const teaching = {
  name: 'teaching',
  title: 'Teaching',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 },
    { name: 'content', title: 'Content', type: 'blockContent' },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['teaching', 'guide', 'philosophy', 'ceremony', 'integration'] } },
    { name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    { name: 'readTime', title: 'Read Time (minutes)', type: 'number' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'status', title: 'Status', type: 'string', options: { list: ['draft', 'published', 'archived'] }, initialValue: 'draft' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
  orderings: [{ title: 'Published Date', name: 'publishedAt', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'featuredImage' } },
};

const gallery = {
  name: 'gallery',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['ceremony', 'retreat', 'travel', 'portrait', 'nature'] } },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  orderings: [{ title: 'Display Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
};

export { blockContent, testimonial, event, teaching, gallery, siteSettings };
