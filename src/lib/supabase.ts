import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create client if we have the required env vars
export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({} as SupabaseClient);

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
