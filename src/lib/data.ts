import { supabase } from './supabase';
import type { Event, Testimonial, Gallery, Teaching, Contact, EventRegistration, NewsletterSubscription, ActivityLog } from './supabase';

// ─── EVENTS ───────────────────────────────────────────

export async function getPublishedEvents(): Promise<Event[]> {
  const { data } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'published')
    .order('start_date', { ascending: true });
  return data || [];
}

export async function getFeaturedEvents(): Promise<Event[]> {
  const { data } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'published')
    .eq('is_featured', true)
    .order('start_date', { ascending: true });
  return data || [];
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const { data } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .single();
  return data;
}

export async function getAllEvents(): Promise<Event[]> {
  const { data } = await supabase
    .from('events')
    .select('*')
    .order('start_date', { ascending: false });
  return data || [];
}

export async function getUpcomingEvents(): Promise<Event[]> {
  const { data } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'published')
    .gte('start_date', new Date().toISOString().split('T')[0])
    .order('start_date', { ascending: true });
  return data || [];
}

// ─── TESTIMONIALS ───────────────────────────────────────

export async function getActiveTestimonials(): Promise<Testimonial[]> {
  const { data } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  return data || [];
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const { data } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .eq('is_featured', true)
    .order('display_order', { ascending: true });
  return data || [];
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const { data } = await supabase
    .from('testimonials')
    .select('*')
    .order('display_order', { ascending: true });
  return data || [];
}

export async function createTestimonial(testimonial: Partial<Testimonial>): Promise<Testimonial | null> {
  const { data } = await supabase.from('testimonials').insert(testimonial).select().single();
  return data;
}

export async function updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<Testimonial | null> {
  const { data } = await supabase.from('testimonials').update(updates).eq('id', id).select().single();
  return data;
}

export async function deleteTestimonial(id: string): Promise<void> {
  await supabase.from('testimonials').delete().eq('id', id);
}

// ─── GALLERY ───────────────────────────────────────────

export async function getActiveGallery(): Promise<Gallery[]> {
  const { data } = await supabase
    .from('gallery')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  return data || [];
}

export async function getAllGallery(): Promise<Gallery[]> {
  const { data } = await supabase
    .from('gallery')
    .select('*')
    .order('display_order', { ascending: true });
  return data || [];
}

// ─── TEACHINGS ─────────────────────────────────────────

export async function getPublishedTeachings(): Promise<Teaching[]> {
  const { data } = await supabase
    .from('teachings')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  return data || [];
}

export async function getFeaturedTeachings(): Promise<Teaching[]> {
  const { data } = await supabase
    .from('teachings')
    .select('*')
    .eq('status', 'published')
    .eq('is_featured', true)
    .single();
  return data;
}

// ─── CONTACTS (ADMIN) ───────────────────────────────────

export async function getAllContacts(): Promise<Contact[]> {
  const { data } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export async function getContactsByStatus(status: string): Promise<Contact[]> {
  const { data } = await supabase
    .from('contacts')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false });
  return data || [];
}

export async function updateContact(id: string, updates: Partial<Contact>): Promise<void> {
  await supabase.from('contacts').update(updates).eq('id', id);
}

export async function createContact(data: { name: string; email: string; phone?: string; subject?: string; message?: string; source?: string }): Promise<void> {
  await supabase.from('contacts').insert({
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    subject: data.subject || null,
    message: data.message || null,
    source: data.source || 'contact_form',
    status: 'new',
    priority: 'medium',
  });
}

// ─── EVENT REGISTRATIONS (ADMIN) ───────────────────────

export async function getAllRegistrations(): Promise<EventRegistration[]> {
  const { data } = await supabase
    .from('event_registrations')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export async function getRegistrationsByEvent(eventId: string): Promise<EventRegistration[]> {
  const { data } = await supabase
    .from('event_registrations')
    .select('*')
    .eq('event_id', eventId)
    .order('created_at', { ascending: false });
  return data || [];
}

export async function updateRegistration(id: string, updates: Partial<EventRegistration>): Promise<void> {
  await supabase.from('event_registrations').update(updates).eq('id', id);
}

// ─── NEWSLETTER (ADMIN & PUBLIC) ────────────────────────

export async function subscribeToNewsletter(email: string, name?: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('newsletter_subscriptions').insert({
      email,
      name: name || null,
      source: 'website',
      status: 'active',
    });
    if (error) {
      if (error.code === '23505') return { success: false, error: 'This email is already subscribed.' };
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch {
    return { success: false, error: 'Something went wrong.' };
  }
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscription[]> {
  const { data } = await supabase
    .from('newsletter_subscriptions')
    .select('*')
    .order('subscribed_at', { ascending: false });
  return data || [];
}

export async function updateSubscription(id: string, updates: Partial<NewsletterSubscription>): Promise<void> {
  await supabase.from('newsletter_subscriptions').update(updates).eq('id', id);
}

// ─── ACTIVITY LOG (ADMIN) ──────────────────────────────

export async function updateEvent(id: string, updates: Partial<Event>): Promise<void> {
  await supabase.from('events').update(updates).eq('id', id);
}

export async function getRecentActivity(limit = 10): Promise<ActivityLog[]> {
  const [logs, recentContacts] = await Promise.all([
    supabase.from('activity_log').select('*').order('created_at', { ascending: false }).limit(limit),
    supabase.from('contacts').select('id, name, email, created_at').order('created_at', { ascending: false }).limit(limit),
  ]);

  if (logs.data && logs.data.length > 0) return logs.data;

  // Fallback to showing recent contacts as activity
  return (recentContacts.data || []).map((c: { id: string; name: string; email: string; created_at: string }) => ({
    id: c.id,
    user_id: null,
    user_email: c.email,
    action: 'contact_form',
    table_name: 'contact',
    record_id: c.id,
    old_values: null,
    new_values: null,
    ip_address: null,
    user_agent: null,
    created_at: c.created_at,
  }));
}

// ─── ADMIN STATS ────────────────────────────────────────

export async function getAdminStats(): Promise<{
  totalLeads: number;
  newLeads: number;
  activeEvents: number;
  totalEvents: number;
  pendingRegistrations: number;
  totalRegistrations: number;
  newsletterSubscribers: number;
  totalTestimonials: number;
}> {
  const [leads, events, registrations, newsletters, testimonials] = await Promise.all([
    supabase.from('contacts').select('id, status'),
    supabase.from('events').select('id, status'),
    supabase.from('event_registrations').select('id, status'),
    supabase.from('newsletter_subscriptions').select('id, status'),
    supabase.from('testimonials').select('id'),
  ]);

  const allLeads: { status: string }[] = leads.data || [];
  const allEvents: { status: string }[] = events.data || [];
  const allRegs: { status: string }[] = registrations.data || [];
  const allNews: { status: string }[] = newsletters.data || [];
  const allTest = testimonials.data || [];

  return {
    totalLeads: allLeads.length,
    newLeads: allLeads.filter(l => l.status === 'new').length,
    activeEvents: allEvents.filter(e => e.status === 'published').length,
    totalEvents: allEvents.length,
    pendingRegistrations: allRegs.filter(r => r.status === 'pending').length,
    totalRegistrations: allRegs.length,
    newsletterSubscribers: allNews.filter(n => n.status === 'active').length,
    totalTestimonials: allTest.length,
  };
}
