export { client, isSanityConfigured, getServerClient } from "./client";
export { urlFor, sanityImageLoader } from "./image";
export { sanityFetch, SanityLive } from "./live";
export {
  getTestimonials,
  getFeaturedTestimonials,
  getEvents,
  getEventBySlug,
  getTeachings,
  getGallery,
  getPage,
  getHomepage,
  testimonialsQuery,
  featuredTestimonialsQuery,
  eventsQuery,
  featuredEventsQuery,
  eventBySlugQuery,
  teachingsQuery,
  galleryQuery,
  pageQuery,
  homepageQuery,
  testimonialFields,
  eventFields,
  teachingFields,
  galleryFields,
} from "./queries";
export type {
  SanityTestimonial,
  SanityEvent,
  SanityTeaching,
  SanityGallery,
  SanityPage,
  SanitySection,
} from "./queries";
