-- ═══════════════════════════════════════════════════════════════
-- ABHAY OYUN - SUPABASE DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ═══════════════════════════════════════════════════════════════
-- CONTACTS (Begin Journey, Contact Form Submissions)
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT,
    source TEXT DEFAULT 'contact_form', -- contact_form, begin_journey, newsletter
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'converted', 'lost')),
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    assigned_to TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for contacts
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_source ON contacts(source);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);

-- ═══════════════════════════════════════════════════════════════
-- EVENTS
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    short_description TEXT,
    event_type TEXT NOT NULL CHECK (event_type IN ('retreat', 'ceremony', 'workshop', 'online', 'training')),
    category TEXT,

    -- Date & Location
    start_date DATE NOT NULL,
    end_date DATE,
    start_time TIME,
    end_time TIME,
    timezone TEXT DEFAULT 'Europe/Amsterdam',
    location_name TEXT,
    location_address TEXT,
    location_city TEXT,
    location_country TEXT,
    is_online BOOLEAN DEFAULT false,
    online_platform TEXT,
    meeting_link TEXT,

    -- Capacity & Pricing
    max_participants INTEGER DEFAULT 20,
    spots_remaining INTEGER,
    price_amount DECIMAL(10, 2),
    price_currency TEXT DEFAULT 'USD',
    price_label TEXT,
    early_bird_available BOOLEAN DEFAULT false,
    early_bird_deadline DATE,
    early_bird_price DECIMAL(10, 2),

    -- Media
    hero_image TEXT,
    gallery_images TEXT[], -- Array of image URLs
    video_url TEXT,

    -- Status
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'cancelled', 'postponed', 'completed')),
    is_featured BOOLEAN DEFAULT false,
    is_spot_limited BOOLEAN DEFAULT false,
    spot_threshold INTEGER DEFAULT 5,

    -- SEO
    meta_title TEXT,
    meta_description TEXT,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    published_at TIMESTAMPTZ,

    CONSTRAINT valid_dates CHECK (end_date IS NULL OR end_date >= start_date),
    CONSTRAINT valid_spots CHECK (spots_remaining IS NULL OR spots_remaining <= max_participants)
);

-- Indexes for events
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_type ON events(event_type);
CREATE INDEX idx_events_start_date ON events(start_date);
CREATE INDEX idx_events_slug ON events(slug);

-- ═══════════════════════════════════════════════════════════════
-- EVENT REGISTRATIONS (Leads/Applications for Events)
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE event_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,

    -- Personal Info
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,

    -- Application Details
    motivation TEXT,
    experience_level TEXT CHECK (experience_level IN ('beginner', 'intermediate', 'advanced', 'practitioner')),
    how_did_you_hear TEXT,
    referral_source TEXT,

    -- Status
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'waitlisted', 'cancelled', 'completed')),
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),

    -- Admin
    admin_notes TEXT,
    interview_date TIMESTAMPTZ,
    interview_notes TEXT,

    -- Payment
    payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'paid', 'refunded')),
    payment_amount DECIMAL(10, 2),
    payment_date TIMESTAMPTZ,

    -- Communication
    email_sent BOOLEAN DEFAULT false,
    last_contacted_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(event_id, email)
);

-- Indexes for event_registrations
CREATE INDEX idx_registrations_event ON event_registrations(event_id);
CREATE INDEX idx_registrations_status ON event_registrations(status);
CREATE INDEX idx_registrations_email ON event_registrations(email);

-- ═══════════════════════════════════════════════════════════════
-- NEWSLETTER SUBSCRIPTIONS
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE newsletter_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    unsubscribed_at TIMESTAMPTZ,
    preferences JSONB DEFAULT '{"transmissions": true, "events": true, "teachings": true}'::JSONB
);

CREATE INDEX idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscriptions(status);

-- ═══════════════════════════════════════════════════════════════
-- TEACHINGS/ARTICLES
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE teachings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    category TEXT CHECK (category IN ('teaching', 'guide', 'philosophy', 'ceremony', 'integration')),

    -- Media
    featured_image TEXT,
    video_url TEXT,
    video_duration INTEGER, -- in seconds

    -- Publication
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    is_featured BOOLEAN DEFAULT false,
    read_time_minutes INTEGER,

    -- Engagement
    view_count INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0,

    -- SEO
    meta_title TEXT,
    meta_description TEXT,

    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_teachings_status ON teachings(status);
CREATE INDEX idx_teachings_category ON teachings(category);
CREATE INDEX idx_teachings_slug ON teachings(slug);

-- ═══════════════════════════════════════════════════════════════
-- GALLERY IMAGES
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE gallery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    description TEXT,
    image_url TEXT NOT NULL,
    thumbnail_url TEXT,
    alt_text TEXT,

    -- Categorization
    category TEXT CHECK (category IN ('ceremony', 'retreat', 'travel', 'portrait', 'nature', 'other')),
    tags TEXT[],

    -- Display
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,

    -- Metadata
    location TEXT,
    event_id UUID REFERENCES events(id) ON DELETE SET NULL,
    taken_at DATE,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_gallery_category ON gallery(category);
CREATE INDEX idx_gallery_active ON gallery(is_active);
CREATE INDEX idx_gallery_order ON gallery(display_order);

-- ═══════════════════════════════════════════════════════════════
-- TESTIMONIALS
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_name TEXT NOT NULL,
    client_location TEXT,
    client_image TEXT,

    -- Content
    content TEXT NOT NULL,
    short_quote TEXT,

    -- Context
    related_event_id UUID REFERENCES events(id) ON DELETE SET NULL,
    service_type TEXT,

    -- Display
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    is_featured BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_testimonials_active ON testimonials(is_active);
CREATE INDEX idx_testimonials_featured ON testimonials(is_featured);

-- ═══════════════════════════════════════════════════════════════
-- ADMIN USERS (for authentication)
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    role TEXT DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'manager', 'viewer')),
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════════════════
-- ACTIVITY LOG (Audit Trail)
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE activity_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    user_email TEXT,
    action TEXT NOT NULL,
    table_name TEXT,
    record_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_activity_user ON activity_log(user_id);
CREATE INDEX idx_activity_table ON activity_log(table_name);
CREATE INDEX idx_activity_created ON activity_log(created_at DESC);

-- ═══════════════════════════════════════════════════════════════
-- FUNCTIONS & TRIGGERS
-- ═══════════════════════════════════════════════════════════════

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to tables with updated_at
CREATE TRIGGER contacts_updated_at BEFORE UPDATE ON contacts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER events_updated_at BEFORE UPDATE ON events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER event_registrations_updated_at BEFORE UPDATE ON event_registrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER teachings_updated_at BEFORE UPDATE ON teachings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Auto-calculate spots remaining
CREATE OR REPLACE FUNCTION calculate_spots_remaining()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.spots_remaining IS NULL THEN
        NEW.spots_remaining := NEW.max_participants;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER events_calculate_spots BEFORE INSERT ON events
    FOR EACH ROW EXECUTE FUNCTION calculate_spots_remaining();

-- ═══════════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS)
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachings ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;

-- Public read for published content
CREATE POLICY "Public can view published events" ON events
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view published teachings" ON teachings
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view active gallery" ON gallery
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active testimonials" ON testimonials
    FOR SELECT USING (is_active = true);

-- Admin full access (configure after creating auth)
-- CREATE POLICY "Admin full access contacts" ON contacts FOR ALL USING (auth.role() = 'authenticated');
-- CREATE POLICY "Admin full access events" ON events FOR ALL USING (auth.role() = 'authenticated');
-- etc.

-- ═══════════════════════════════════════════════════════════════
-- SAMPLE DATA (Optional - remove in production)
-- ═══════════════════════════════════════════════════════════════

-- Insert sample admin user
INSERT INTO admin_users (email, name, role) VALUES
    ('admin@abhayoyun.com', 'Abhay Oyun', 'super_admin');

-- Insert sample events
INSERT INTO events (title, slug, short_description, event_type, start_date, end_date, location_name, location_city, location_country, max_participants, price_amount, status, is_featured) VALUES
    ('Ancestral Fire Retreat', 'ancestral-fire-retreat-2026', 'A 7-day immersive journey into the heart of Siberian shamanic traditions', 'retreat', '2026-06-14', '2026-06-21', 'Altai Mountains', 'Gorno-Altaysk', 'Russia', 8, 2800, 'published', true),
    ('Opening the Ancestral Channel', 'opening-ancestral-channel', 'A 3-hour group ceremony to connect with your lineage', 'ceremony', '2026-05-31', NULL, 'Online via Zoom', 'Online', 'Worldwide', 8, 150, 'published', false),
    ('Shamanic Training Level 1', 'shamanic-training-level-1', 'The foundational training for those called to walk the shamanic path', 'training', '2026-08-01', '2026-08-07', 'Sintra', 'Sintra', 'Portugal', 8, 1800, 'published', false),
    ('Divination & Oracle Workshop', 'divination-oracle-workshop', 'Learn the art of reading the unseen through Siberian rune traditions', 'workshop', '2026-07-20', NULL, 'Berlin Shamanic Center', 'Berlin', 'Germany', 10, 300, 'published', false);

-- Insert sample contacts
INSERT INTO contacts (name, email, message, source, status, priority) VALUES
    ('Maria Santos', 'maria.santos@email.com', 'I am interested in the Ancestral Fire Retreat and would like to know more about the application process.', 'begin_journey', 'new', 'high'),
    ('James Chen', 'james.chen@email.com', 'Looking for guidance on integrating my recent plant medicine experience. Is there a ceremony coming up soon?', 'contact_form', 'new', 'medium'),
    ('Sofia Andersson', 'sofia.a@email.com', 'I have completed Level 1 training and would like information about Level 2.', 'contact_form', 'contacted', 'low');

-- Insert sample event registrations
INSERT INTO event_registrations (event_id, first_name, last_name, email, motivation, status)
SELECT
    e.id,
    'Elena Kowalski',
    'Kowalski',
    'elena.kowalski@email.com',
    'I have been seeking to connect with my ancestral roots and feel called to this retreat. I have some experience with meditation but no prior shamanic work.',
    'pending'
FROM events e WHERE slug = 'ancestral-fire-retreat-2026';

-- Insert sample teachings
INSERT INTO teachings (title, slug, excerpt, category, status, read_time_minutes) VALUES
    ('What Happens When the Drum Stops', 'when-drum-stops', 'On silence, integration, and the work that happens after ceremony.', 'ceremony', 'published', 15),
    ('On Choosing a Shaman', 'choosing-a-shaman', 'How to find the right practitioner for your journey.', 'guide', 'published', 6),
    ('The Difference Between Healing and Fixing', 'healing-vs-fixing', 'Why transformation cannot be rushed.', 'philosophy', 'published', 8);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_location, content, short_quote, rating, is_featured) VALUES
    ('Anna K.', 'Amsterdam, Netherlands', 'Words cannot fully capture the transformation I experienced. This work goes beyond anything I have encountered in my years of spiritual seeking. Abhay holds a space that is both fierce and tender, exactly what deep healing requires.', 'This work goes beyond anything I have encountered.', 5, true),
    ('Michael R.', 'Berlin, Germany', 'The Ancestral Fire Retreat was one of the most profound experiences of my life. I arrived carrying heavy ancestral patterns and left feeling lighter, clearer, and more connected to my lineage than ever before.', 'I arrived carrying heavy patterns and left feeling lighter.', 5, true),
    ('Sophie L.', 'Paris, France', 'Working with Abhay helped me understand the root causes of patterns I had struggled with for years. His approach is both deeply traditional and accessible to modern seekers.', 'His approach is both traditional and accessible.', 5, false);

-- Insert sample newsletter subscriptions
INSERT INTO newsletter_subscriptions (email, name, source) VALUES
    ('newsletter.subscriber@email.com', 'Newsletter Reader', 'website');

-- ═══════════════════════════════════════════════════════════════
-- VIEWS FOR ADMIN DASHBOARD
-- ═══════════════════════════════════════════════════════════════

-- Contacts summary view
CREATE VIEW contacts_summary AS
SELECT
    status,
    COUNT(*) as count,
    MAX(created_at) as last_contact
FROM contacts
GROUP BY status;

-- Events with registration count
CREATE VIEW events_with_registrations AS
SELECT
    e.*,
    COUNT(r.id) as registration_count,
    COUNT(CASE WHEN r.status = 'pending' THEN 1 END) as pending_count
FROM events e
LEFT JOIN event_registrations r ON e.id = r.event_id
GROUP BY e.id;

-- Recent activity
CREATE VIEW recent_activity AS
SELECT
    'contact' as type,
    id,
    name as subject,
    email,
    status,
    created_at
FROM contacts
UNION ALL
SELECT
    'registration' as type,
    r.id,
    CONCAT(r.first_name, ' ', r.last_name) as subject,
    r.email,
    r.status,
    r.created_at
FROM event_registrations r;

-- ═══════════════════════════════════════════════════════════════
-- COMPLETE!
-- ═══════════════════════════════════════════════════════════════
