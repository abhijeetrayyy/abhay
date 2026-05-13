export {
  client,
  isSanityConfigured,
  getServerClient,
} from "./sanity/client";
export { urlFor, sanityImageLoader } from "./sanity/image";
export {
  getTestimonials,
  getFeaturedTestimonials,
  getEvents,
  getEventBySlug,
  getTeachings,
  getGallery,
  getPage,
  getHomepage,
} from "./sanity/queries";
export type {
  SanityTestimonial,
  SanityEvent,
  SanityTeaching,
  SanityGallery,
  SanityPage,
  SanitySection,
} from "./sanity/queries";
