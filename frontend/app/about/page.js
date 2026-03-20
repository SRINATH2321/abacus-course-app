import styles from './about.module.css';

export const metadata = {
  title: 'About Us | KRISH KIDS ISLAND Abacus Academy',
  description: 'Learn about KRISH KIDS ISLAND — our mission, vision, and team of expert abacus instructors dedicated to nurturing brilliant young minds.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>About Us</h1>
          <p>Discover our journey of building brilliant minds</p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className={styles.label}>Our Story</span>
              <h2>From Passion to Purpose</h2>
              <p>
                KRISH KIDS ISLAND was founded with a single, powerful vision: to unlock the hidden mathematical genius in every child. Our journey began with a deep belief in the ancient abacus methodology and its proven ability to transform young minds.
              </p>
              <p>
                Over the years, we have nurtured hundreds of students, guiding them from basic number recognition to winning national-level mental math competitions. Our success lies not just in teaching calculations, but in building confidence, concentration, and a lifelong love for learning.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.storyImagePlaceholder}>
                <span>🧒</span>
                <p>Nurturing Young Minds Since Day One</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.missionVision}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To ignite the spark of mathematical genius in every child through the time-tested abacus methodology, building confidence, concentration, and cognitive excellence that lasts a lifetime.
              </p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and loved abacus academy, nurturing the next generation of brilliant minds who will lead with confidence, creativity, and exceptional analytical skills.
              </p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>💎</div>
              <h3>Our Values</h3>
              <p>
                Excellence in teaching, patience with every child, innovation in methodology, and an unwavering commitment to each student&apos;s individual growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={`section ${styles.achievements}`}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Achievements</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Numbers that speak for our dedication</p>
          <div className={styles.achieveGrid}>
            {[
              { num: '500+', label: 'Students Trained', icon: '👨‍🎓' },
              { num: '10+', label: 'Years of Excellence', icon: '📅' },
              { num: '50+', label: 'Competition Awards', icon: '🏆' },
              { num: '95%', label: 'Parent Satisfaction', icon: '❤️' },
            ].map((a, i) => (
              <div key={i} className={styles.achieveCard}>
                <span className={styles.achieveIcon}>{a.icon}</span>
                <span className={styles.achieveNum}>{a.num}</span>
                <span className={styles.achieveLabel}>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className={`section`}>
        <div className="container">
          <h2 className="section-title">Why KRISH KIDS ISLAND?</h2>
          <p className="section-subtitle">What makes us the preferred choice for abacus education</p>
          <div className={styles.whyGrid}>
            {[
              { title: 'Proven Methodology', desc: 'Our curriculum is crafted by experts with decades of experience in abacus education, ensuring systematic and effective learning.', icon: '📋' },
              { title: 'Small Batch Sizes', desc: 'We maintain small class sizes to ensure personalized attention for every student, understanding their unique learning pace.', icon: '👥' },
              { title: 'Regular Assessments', desc: 'Continuous evaluation and progress tracking ensures every child stays on the path to excellence with clear milestones.', icon: '📈' },
              { title: 'Competition Training', desc: 'Dedicated training programs to prepare students for state, national, and international abacus competitions.', icon: '🥇' },
            ].map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <span className={styles.whyIcon}>{w.icon}</span>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
