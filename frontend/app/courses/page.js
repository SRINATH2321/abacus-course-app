import styles from './courses.module.css';
import Link from 'next/link';
import { MOCK_COURSES } from '@/lib/supabase';

export const metadata = {
  title: 'Courses | KRISH KIDS ISLAND Academy',
  description: 'Explore our courses: Phonics, Abacus, Drawing, Spell Bee, and Handwriting at KRISH KIDS ISLAND.',
};

export default function CoursesPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Our Courses</h1>
          <p>Comprehensive programs to develop your child&apos;s skills</p>
        </div>
      </section>

      <section className={`section`}>
        <div className="container">
          <div className={styles.courseGrid}>
            {MOCK_COURSES.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <span className={styles.courseIcon}>{course.icon}</span>
                <h2 className={styles.courseTitle}>{course.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>Interested in Enrolling?</h2>
          <p>Contact us to learn more about our courses and find the perfect fit for your child.</p>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <a href="tel:+919566079479" className="btn btn-secondary">📞 Call: +91 9566079479</a>
          </div>
        </div>
      </section>
    </>
  );
}
