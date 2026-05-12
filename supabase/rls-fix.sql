-- ═══════════════════════════════════════════════════════════════
-- ABHAY OYUN - RLS FIXES FOR ADMIN ACCESS
-- Run this in Supabase SQL Editor AFTER schema.sql and seed.sql
-- ═══════════════════════════════════════════════════════════════

-- Allow authenticated users (admins) full access to all tables
-- This is needed for the admin panel to work

CREATE POLICY "Admin full access contacts" ON contacts 
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access events" ON events 
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access event_registrations" ON event_registrations 
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access newsletter_subscriptions" ON newsletter_subscriptions 
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access teachings" ON teachings 
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access gallery" ON gallery 
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access testimonials" ON testimonials 
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access activity_log" ON activity_log 
    FOR ALL USING (auth.role() = 'authenticated');
