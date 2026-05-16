import { defineQuery, groq } from "next-sanity";
import { client, isSanityConfigured } from "./client";

export type SanityTestimonial = {
  _id: string;
  clientName: string;
  clientLocation: string | null;
  clientImage: string | null;
  content: string;
  shortQuote: string | null;
  serviceType: string | null;
  rating: number | null;
  order: number;
  featured: boolean;
};

export type SanityEvent = {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string | null;
  description: string | null;
  eventType: string | null;
  startDate: string;
  endDate: string | null;
  locationName: string | null;
  locationCity: string | null;
  locationCountry: string | null;
  online: boolean;
  maxParticipants: number | null;
  price: number | null;
  heroImage: string | null;
  featured: boolean;
  status: string;
};

export type SanityTeaching = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string | null;
  category: string | null;
  featuredImage: string | null;
  readTime: number | null;
  featured: boolean;
  publishedAt: string;
};

export type SanityGallery = {
  _id: string;
  title: string | null;
  image: string | null;
  category: string | null;
  order: number;
};

export type SanityPage = {
  _id: string;
  _rev: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
  sections: SanitySection[];
};

export type SanitySection = {
  _key: string;
  _type: string;
  [key: string]: unknown;
};

const GROUPS = {
  testimonial: groq`_id, clientName, clientLocation, content, shortQuote, serviceType, rating, order, featured, "clientImage": clientImage.asset->url`,
  event: groq`_id, title, slug, shortDescription, description, eventType, startDate, endDate, locationName, locationCity, locationCountry, online, maxParticipants, price, featured, status, "heroImage": heroImage.asset->url`,
  teaching: groq`_id, title, slug, excerpt, category, readTime, featured, publishedAt, "featuredImage": featuredImage.asset->url, content`,
  gallery: groq`_id, title, category, order, "image": image.asset->url`,
};

export const testimonialFields = GROUPS.testimonial;
export const eventFields = GROUPS.event;
export const teachingFields = GROUPS.teaching;
export const galleryFields = GROUPS.gallery;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) { ${GROUPS.testimonial} }`;
export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(order asc) { ${GROUPS.testimonial} }`;
export const eventsQuery = groq`*[_type == "event" && status == "published"] | order(startDate asc) { ${GROUPS.event} }`;
export const featuredEventsQuery = groq`*[_type == "event" && status == "published" && featured == true] | order(startDate asc) { ${GROUPS.event} }`;
export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] { ${GROUPS.event} }`;
export const teachingsQuery = groq`*[_type == "teaching" && status == "published"] | order(publishedAt desc) { ${GROUPS.teaching} }`;
export const galleryQuery = groq`*[_type == "gallery"] | order(order asc) { ${GROUPS.gallery} }`;

export const pageQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  "ogImage": ogImage.asset->url,
  sections[] {
    ...,
    _type == "hero" => {
      ...,
      "backgroundImageUrl": backgroundImage.asset->url,
      "shamanImageUrl": shamanImage.asset->url,
    },
    _type == "paths" => {
      ...,
      paths[] {
        ...,
        "previewVideoUrl": previewVideo.asset->url,
      }
    },
    _type == "shamanIntro" => {
      ...,
      "imageUrl": image.asset->url,
    },
    _type == "socialReel" => {
      ...,
      reels[] {
        ...,
        "videoUrl": video.asset->url,
      }
    },
    _type == "programs" => {
      ...,
      programs[] {
        ...,
        "imageUrl": image.asset->url,
      }
    },
    _type == "gallerySection" => {
      ...,
      images[] {
        ...,
        _type == "gallery" => @-> { "imageUrl": image.asset->url, title, category, alt, aspect },
        _type != "gallery" => {
          ...,
          "imageUrl": image.asset->url,
        }
      }
    },
    _type == "testimonialsSection" => {
      ...,
      testimonials[] {
        ...,
        _type == "testimonial" => @-> { clientName, clientLocation, content, serviceType, rating, "clientImageUrl": clientImage.asset->url },
        _type != "testimonial" => {
          ...,
          "clientImageUrl": clientImage.asset->url,
        }
      }
    },
    _type == "videoTestimonials" => {
      ...,
      videos[] {
        ...,
        "videoFileUrl": videoFile.asset->url,
      }
    },
    _type == "teachingsSection" => {
      ...,
      teachings[] {
        ...,
        _type == "teaching" => @-> { title, excerpt, category, readTime, "imageUrl": featuredImage.asset->url, content },
        _type != "teaching" => {
          ...,
          "imageUrl": image.asset->url,
        }
      }
    },
    _type == "eventsSection" => {
      ...,
      events[] {
        ...,
        _type == "event" => @-> { title, shortDescription, startDate, endDate, locationName, locationCity, locationCountry, online, price, "imageUrl": heroImage.asset->url },
        _type != "event" => {
          ...,
          "imageUrl": image.asset->url,
        }
      }
    },
    _type == "transformation" => {
      ...,
      milestones[] {
        ...,
        "imageUrl": image.asset->url,
      }
    },
  }
}`);

export const homepageQuery = defineQuery(`*[_type == "page"][0]{
  ...,
  "ogImage": ogImage.asset->url,
  sections[] {
    ...,
    _type == "hero" => {
      ...,
      "backgroundImageUrl": backgroundImage.asset->url,
      "shamanImageUrl": shamanImage.asset->url,
    },
    _type == "paths" => {
      ...,
      paths[] {
        ...,
        "previewVideoUrl": previewVideo.asset->url,
      }
    },
    _type == "shamanIntro" => {
      ...,
      "imageUrl": image.asset->url,
    },
    _type == "socialReel" => {
      ...,
      reels[] {
        ...,
        "videoUrl": video.asset->url,
      }
    },
    _type == "programs" => {
      ...,
      programs[] {
        ...,
        "imageUrl": image.asset->url,
      }
    },
    _type == "gallerySection" => {
      ...,
      images[] {
        ...,
        _type == "gallery" => @-> { "imageUrl": image.asset->url, title, category, alt, aspect },
        _type != "gallery" => {
          ...,
          "imageUrl": image.asset->url,
        }
      }
    },
    _type == "testimonialsSection" => {
      ...,
      testimonials[] {
        ...,
        _type == "testimonial" => @-> { clientName, clientLocation, content, serviceType, rating, "clientImageUrl": clientImage.asset->url },
        _type != "testimonial" => {
          ...,
          "clientImageUrl": clientImage.asset->url,
        }
      }
    },
    _type == "videoTestimonials" => {
      ...,
      videos[] {
        ...,
        "videoFileUrl": videoFile.asset->url,
      }
    },
    _type == "teachingsSection" => {
      ...,
      teachings[] {
        ...,
        _type == "teaching" => @-> { title, excerpt, category, readTime, "imageUrl": featuredImage.asset->url, content },
        _type != "teaching" => {
          ...,
          "imageUrl": image.asset->url,
        }
      }
    },
    _type == "eventsSection" => {
      ...,
      events[] {
        ...,
        _type == "event" => @-> { title, shortDescription, startDate, endDate, locationName, locationCity, locationCountry, online, price, "imageUrl": heroImage.asset->url },
        _type != "event" => {
          ...,
          "imageUrl": image.asset->url,
        }
      }
    },
    _type == "transformation" => {
      ...,
      milestones[] {
        ...,
        "imageUrl": image.asset->url,
      }
    },
  }
}`);

export async function getPage(slug: string): Promise<SanityPage | null> {
  if (!isSanityConfigured) return null;
  try {
    return (await client.fetch(pageQuery, { slug })) || null;
  } catch { return null; }
}

export async function getHomepage(): Promise<SanityPage | null> {
  if (!isSanityConfigured) return null;
  try {
    return (await client.fetch(homepageQuery)) || null;
  } catch { return null; }
}

async function safeFetch<T>(query: string, params?: Record<string, unknown>): Promise<T[]> {
  if (!isSanityConfigured) return [];
  try {
    return (await client.fetch(query, params)) || [];
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return safeFetch<SanityTestimonial>(testimonialsQuery);
}

export async function getFeaturedTestimonials(): Promise<SanityTestimonial[]> {
  return safeFetch<SanityTestimonial>(featuredTestimonialsQuery);
}

export async function getEvents(): Promise<SanityEvent[]> {
  return safeFetch<SanityEvent>(eventsQuery);
}

export async function getEventBySlug(slug: string): Promise<SanityEvent | null> {
  if (!isSanityConfigured) return null;
  try {
    return (await client.fetch(eventBySlugQuery, { slug })) || null;
  } catch {
    return null;
  }
}

export async function getTeachings(): Promise<SanityTeaching[]> {
  return safeFetch<SanityTeaching>(teachingsQuery);
}

export async function getGallery(): Promise<SanityGallery[]> {
  return safeFetch<SanityGallery>(galleryQuery);
}

// ── SITE SETTINGS ──────────────────────────────────────────────
export type SiteSettings = {
  _id: string;
  topBar: {
    email: string;
    phone: string;
    showTopBar: boolean;
    socialLinks: Array<{ platform: string; url: string; label?: string }>;
  };
  navigation: {
    logoImage: string | null;
    logoText: string;
    links: Array<{ label: string; href: string; isExternal: boolean }>;
    ctaButton: { label: string; url: string };
  };
  footer: {
    brandDescription: string;
    navigateLinks: Array<{ label: string; href: string; isExternal: boolean }>;
    resourceLinks: Array<{ label: string; href: string; isExternal: boolean }>;
    newsletter: {
      enabled: boolean;
      heading: string;
      description: string;
      placeholder: string;
      successMessage: string;
      buttonText: string;
    };
    copyrightText: string;
    footerQuote: string;
  };
};

const siteSettingsQuery = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  _id,
  topBar {
    email,
    phone,
    showTopBar,
    socialLinks[] { platform, url, label }
  },
  navigation {
    logoImage,
    logoText,
    links[] { label, href, isExternal },
    ctaButton { label, url }
  },
  footer {
    brandDescription,
    navigateLinks[] { label, href, isExternal },
    resourceLinks[] { label, href, isExternal },
    newsletter {
      enabled,
      heading,
      description,
      placeholder,
      successMessage,
      buttonText
    },
    copyrightText,
    footerQuote
  }
}`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!isSanityConfigured) return null;
  try {
    return (await client.fetch(siteSettingsQuery)) || null;
  } catch {
    return null;
  }
}
