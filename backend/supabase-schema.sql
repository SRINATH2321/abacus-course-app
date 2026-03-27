-- =====================================================
-- KRISH KIDS ISLAND — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- =====================================================

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  age_group TEXT,
  duration TEXT,
  price TEXT,
  level TEXT,
  image_url TEXT,
  features TEXT[], -- Array of feature strings
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  media_url TEXT,
  media_type TEXT DEFAULT 'image', -- 'image' or 'video'
  category TEXT DEFAULT 'Classes', -- 'Classes', 'Events', 'Achievements'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ratings / Reviews table
CREATE TABLE IF NOT EXISTS ratings (
  id BIGSERIAL PRIMARY KEY,
  reviewer_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Settings (key-value store for site configuration)
CREATE TABLE IF NOT EXISTS settings (
  id BIGSERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- Seed default settings
-- =====================================================
INSERT INTO settings (key, value) VALUES
  ('academy_name', 'KRISH KIDS ISLAND'),
  ('tagline', 'Unlock Your Child''s Mental Math Superpowers'),
  ('phone_1', '9566079479'),
  ('phone_2', '9840883393'),
  ('email', 'info@krishkidsisland.com'),
  ('address', 'Krish Kids Island Abacus Academy, Chennai, Tamil Nadu, India'),
  ('working_hours', 'Mon - Sat: 9:00 AM - 7:00 PM'),
  ('hero_subtitle', 'Building brilliant minds through the ancient art of abacus, empowering children ages 4-14 with extraordinary mental math abilities.'),
  ('about_mission', 'To ignite the spark of mathematical genius in every child through the time-tested abacus methodology.'),
  ('about_vision', 'To be the most trusted and loved abacus academy, nurturing the next generation of brilliant minds.')
ON CONFLICT (key) DO NOTHING;

-- =====================================================
-- Row Level Security (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Public read courses" ON courses FOR SELECT USING (true);
CREATE POLICY "Public read gallery" ON gallery FOR SELECT USING (true);
CREATE POLICY "Public read approved ratings" ON ratings FOR SELECT USING (approved = true);
CREATE POLICY "Public read settings" ON settings FOR SELECT USING (true);

-- Public insert for ratings and contact messages
CREATE POLICY "Public insert ratings" ON ratings FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert contact_messages" ON contact_messages FOR INSERT WITH CHECK (true);

-- Admin policies (authenticated users)
CREATE POLICY "Admin full access courses" ON courses FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access gallery" ON gallery FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access ratings" ON ratings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access settings" ON settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read contact_messages" ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');
