import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// ===== MOCK DATA (used when Supabase is not configured) =====

export const MOCK_SETTINGS = {
  academy_name: 'KRISH KIDS ISLAND',
  tagline: 'Unlock Your Child\'s Mental Math Superpowers',
  description: 'We are a premier abacus learning academy dedicated to developing mental arithmetic skills, concentration, and confidence in children through proven abacus techniques.',
  phone_1: '9566079479',
  phone_2: '9840883393',
  email: 'krishkidsisland@gmail.com',
  address: 'Plot No 122, Door No 7, 6th Street, JB Estate, Avadi, Chennai - 600054',
  hero_subtitle: 'Building brilliant minds through the ancient art of abacus, empowering children ages 4-14 with extraordinary mental math abilities.',
  about_mission: 'To ignite the spark of mathematical genius in every child through the time-tested abacus methodology, building confidence, concentration, and cognitive excellence.',
  about_vision: 'To be the most trusted and loved abacus academy, nurturing the next generation of brilliant minds.',
};

export const MOCK_COURSES = [
  { id: 1, title: 'Phonics', icon: '🔤' },
  { id: 2, title: 'Abacus', icon: '🧮' },
  { id: 3, title: 'Drawing', icon: '🎨' },
  { id: 4, title: 'Spell Bee', icon: '🐝' },
  { id: 5, title: 'Handwriting', icon: '✍️' },
  { id: 6, title: 'Vedic Maths', icon: '🔢' },
];

export const MOCK_RATINGS = [
  {
    id: 1,
    reviewer_name: 'Priya Sharma',
    rating: 5,
    review_text: 'My daughter has shown incredible improvement in math since joining Krish Kids Island. The teachers are patient and the curriculum is excellent!',
    created_at: '2025-12-15',
    approved: true,
  },
  {
    id: 2,
    reviewer_name: 'Rajesh Kumar',
    rating: 5,
    review_text: 'Amazing academy! My son went from struggling with basic math to winning abacus competitions. Highly recommended!',
    created_at: '2025-11-20',
    approved: true,
  },
  {
    id: 3,
    reviewer_name: 'Anitha Devi',
    rating: 4,
    review_text: 'Very professional teaching methodology. The abacus techniques they teach really work. My child\'s concentration has improved dramatically.',
    created_at: '2025-10-05',
    approved: true,
  },
  {
    id: 4,
    reviewer_name: 'Suresh Babu',
    rating: 5,
    review_text: 'Best investment in my child\'s education. The mental math skills they develop here are truly extraordinary.',
    created_at: '2025-09-18',
    approved: true,
  },
];

export const MOCK_GALLERY = [
  { id: 1, title: 'Abacus Class in Action', media_url: '/images/gallery-1.jpg', media_type: 'image', category: 'Classes' },
  { id: 2, title: 'Annual Competition', media_url: '/images/gallery-2.jpg', media_type: 'image', category: 'Events' },
  { id: 3, title: 'Student Achievement', media_url: '/images/gallery-3.jpg', media_type: 'image', category: 'Achievements' },
  { id: 4, title: 'Workshop Session', media_url: '/images/gallery-4.jpg', media_type: 'image', category: 'Classes' },
  { id: 5, title: 'Prize Distribution', media_url: '/images/gallery-5.jpg', media_type: 'image', category: 'Events' },
  { id: 6, title: 'Mental Math Demo', media_url: '/images/gallery-6.jpg', media_type: 'image', category: 'Achievements' },
];

// ===== DATA FETCHING HELPERS =====

export async function getSettings() {
  if (!supabase) return MOCK_SETTINGS;
  try {
    const { data, error } = await supabase.from('settings').select('*');
    if (error || !data || data.length === 0) return MOCK_SETTINGS;
    const settings = {};
    data.forEach(row => { settings[row.key] = row.value; });
    return { ...MOCK_SETTINGS, ...settings };
  } catch {
    return MOCK_SETTINGS;
  }
}

export async function getCourses() {
  if (!supabase) return MOCK_COURSES;
  try {
    const { data, error } = await supabase.from('courses').select('*').order('id');
    if (error || !data || data.length === 0) return MOCK_COURSES;
    return data;
  } catch {
    return MOCK_COURSES;
  }
}

export async function getRatings() {
  if (!supabase) return MOCK_RATINGS;
  try {
    const { data, error } = await supabase.from('ratings').select('*').eq('approved', true).order('created_at', { ascending: false });
    if (error || !data || data.length === 0) return MOCK_RATINGS;
    return data;
  } catch {
    return MOCK_RATINGS;
  }
}

export async function getGallery() {
  if (!supabase) return MOCK_GALLERY;
  try {
    const { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
    if (error || !data || data.length === 0) return MOCK_GALLERY;
    return data;
  } catch {
    return MOCK_GALLERY;
  }
}

export async function submitRating(reviewerName, rating, reviewText) {
  if (!supabase) return { success: true, message: 'Rating submitted (demo mode)' };
  try {
    const { error } = await supabase.from('ratings').insert([{
      reviewer_name: reviewerName,
      rating,
      review_text: reviewText,
      approved: false,
    }]);
    if (error) throw error;
    return { success: true, message: 'Thank you! Your review will appear after approval.' };
  } catch {
    return { success: false, message: 'Failed to submit rating. Please try again.' };
  }
}

export async function submitContactMessage(name, email, message) {
  if (!supabase) return { success: true, message: 'Message sent (demo mode)' };
  try {
    const { error } = await supabase.from('contact_messages').insert([{ name, email, message }]);
    if (error) throw error;
    return { success: true, message: 'Thank you! We will get back to you soon.' };
  } catch {
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
}
