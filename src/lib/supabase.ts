import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createBrowserClient(supabaseUrl, supabaseAnonKey)
  : ({} as ReturnType<typeof createBrowserClient>);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string | null;
  source: string;
  status: 'new' | 'contacted' | 'in_progress' | 'converted' | 'lost';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assigned_to: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  event_type: 'retreat' | 'ceremony' | 'workshop' | 'online' | 'training';
  category: string | null;
  start_date: string;
  end_date: string | null;
  location_name: string | null;
  location_city: string | null;
  location_country: string | null;
  is_online: boolean;
  max_participants: number;
  spots_remaining: number;
  price_amount: number | null;
  price_currency: string;
  status: 'draft' | 'published' | 'cancelled' | 'postponed' | 'completed';
  is_featured: boolean;
  hero_image: string | null;
  gallery_images: string[] | null;
  created_at: string;
  updated_at: string;
};

export type EventRegistration = {
  id: string;
  event_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  motivation: string | null;
  experience_level: string | null;
  status: 'pending' | 'approved' | 'rejected' | 'waitlisted' | 'cancelled' | 'completed';
  priority: 'low' | 'medium' | 'high';
  admin_notes: string | null;
  created_at: string;
};

export type NewsletterSubscription = {
  id: string;
  email: string;
  name: string | null;
  source: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  subscribed_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_location: string | null;
  client_image: string | null;
  content: string;
  short_quote: string | null;
  related_event_id: string | null;
  service_type: string | null;
  rating: number | null;
  is_featured: boolean;
  display_order: number;
  is_active: boolean;
  created_at: string;
};

export type Gallery = {
  id: string;
  title: string | null;
  description: string | null;
  image_url: string;
  thumbnail_url: string | null;
  alt_text: string | null;
  category: string | null;
  tags: string[] | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
};

export type Teaching = {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  category: 'teaching' | 'guide' | 'philosophy' | 'ceremony' | 'integration' | null;
  featured_image: string | null;
  video_url: string | null;
  video_duration: number | null;
  status: 'draft' | 'published' | 'archived';
  is_featured: boolean;
  read_time_minutes: number | null;
  view_count: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type ActivityLog = {
  id: string;
  user_id: string | null;
  user_email: string | null;
  action: string;
  table_name: string | null;
  record_id: string | null;
  created_at: string;
};
