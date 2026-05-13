import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-05-01';

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

export async function getTestimonials() {
  const data = await client.fetch(`*[_type == "testimonial"] | order(order asc) { _id, clientName, clientLocation, content, shortQuote, serviceType, rating, featured, "clientImage": clientImage.asset->url }`);
  return data || [];
}

export async function getFeaturedTestimonials() {
  const data = await client.fetch(`*[_type == "testimonial" && featured == true] | order(order asc) { _id, clientName, clientLocation, content, shortQuote, serviceType, rating, "clientImage": clientImage.asset->url }`);
  return data || [];
}

export async function getEvents() {
  const data = await client.fetch(`*[_type == "event" && status == "published"] | order(startDate asc) { _id, title, shortDescription, eventType, startDate, endDate, locationName, locationCity, locationCountry, online, maxParticipants, price, featured, "heroImage": heroImage.asset->url }`);
  return data || [];
}

export async function getTeachings() {
  const data = await client.fetch(`*[_type == "teaching" && status == "published"] | order(publishedAt desc) { _id, title, excerpt, category, readTime, featured, "featuredImage": featuredImage.asset->url }`);
  return data || [];
}

export async function getGallery() {
  const data = await client.fetch(`*[_type == "gallery"] | order(order asc) { _id, title, category, "image": image.asset->url }`);
  return data || [];
}
