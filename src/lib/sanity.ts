import 'server-only';
import { createClient } from 'next-sanity';
import groq from 'groq';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01';

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

export async function getTestimonials() {
  return client.fetch(groq`*[_type == "testimonial"] | order(order asc) {
    _id, clientName, clientLocation, content, shortQuote, serviceType, rating, featured,
    "clientImage": clientImage.asset->url
  }`);
}

export async function getFeaturedTestimonials() {
  return client.fetch(groq`*[_type == "testimonial" && featured == true] | order(order asc) {
    _id, clientName, clientLocation, content, shortQuote, serviceType, rating,
    "clientImage": clientImage.asset->url
  }`);
}

export async function getEvents() {
  return client.fetch(groq`*[_type == "event" && status == "published"] | order(startDate asc) {
    _id, title, shortDescription, eventType, startDate, endDate, locationName, locationCity,
    locationCountry, online, maxParticipants, price, featured, status,
    "heroImage": heroImage.asset->url
  }`);
}

export async function getTeachings() {
  return client.fetch(groq`*[_type == "teaching" && status == "published"] | order(publishedAt desc) {
    _id, title, excerpt, category, readTime, featured,
    "featuredImage": featuredImage.asset->url
  }`);
}

export async function getGallery() {
  return client.fetch(groq`*[_type == "gallery"] | order(order asc) {
    _id, title, category,
    "image": image.asset->url
  }`);
}
