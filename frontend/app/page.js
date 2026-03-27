import styles from './page.module.css';
import Link from 'next/link';
import { MOCK_COURSES, MOCK_RATINGS } from '@/lib/supabase';

export default function Home() {
  const avgRating = MOCK_RATINGS.reduce((sum, r) => sum + r.rating, 0) / MOCK_RATINGS.length;

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroParticles}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--delay': `${i * 0.5}s`, '--x': `${15 + i * 15}%` }}></div>
          ))}
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>🏆 Premier Abacus Academy</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroHighlight}>KRISH KIDS</span>
            <br />ISLAND
          </h1>
          <p className={styles.heroSubtitle}>
            Building brilliant minds through the ancient art of abacus, empowering children ages 4-14 with extraordinary mental math abilities.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Students Trained</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Awards Won</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{avgRating.toFixed(1)}⭐</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="section-title">Why Choose Abacus Learning?</h2>
          <p className="section-subtitle">The abacus is more than just a calculating tool — it&apos;s a complete brain development program</p>
          <div className={styles.featuresGrid}>
            {[
              { icon: '🧠', title: 'Brain Development', desc: 'Activates both left and right brain hemispheres simultaneously for holistic cognitive growth.' },
              { icon: '⚡', title: 'Lightning Speed', desc: 'Students learn to perform complex calculations faster than a calculator through mental visualization.' },
              { icon: '🎯', title: 'Laser Focus', desc: 'Regular practice significantly improves concentration, attention span, and memorization skills.' },
              { icon: '💪', title: 'Confidence Builder', desc: 'Mathematical mastery builds self-confidence that translates to all academic areas.' },
              { icon: '🏅', title: 'Competition Ready', desc: 'Our students regularly participate and win at national and international abacus competitions.' },
              { icon: '📚', title: 'Academic Excellence', desc: 'Strong number sense leads to better performance in school math and science subjects.' },
            ].map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES PREVIEW ===== */}
      <section className={`section ${styles.coursesPreview}`}>
        <div className="container">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">Comprehensive programs to develop your child&apos;s skills</p>
          <div className={styles.courseGrid}>
            {MOCK_COURSES.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <span className={styles.courseIcon}>{course.icon}</span>
                <h3 className={styles.courseTitle}>{course.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--white)' }}>What Parents Say</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Hear from the families whose children have transformed with us</p>
          <div className={styles.testimonialGrid}>
            {MOCK_RATINGS.slice(0, 3).map((r, i) => (
              <div key={r.id} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {'⭐'.repeat(r.rating)}
                </div>
                <p className={styles.testimonialText}>&quot;{r.review_text}&quot;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{r.reviewer_name.charAt(0)}</div>
                  <span className={styles.testimonialName}>{r.reviewer_name}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/ratings" className="btn btn-secondary">See All Reviews</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Unlock Your Child&apos;s Potential?</h2>
            <p className={styles.ctaText}>Enroll today and watch your child develop extraordinary mental math abilities!</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">Enroll Now</Link>
              <a href="tel:+919566079479" className="btn btn-outline" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                📞 Call: +91 9566079479
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
