'use client';
import { useState } from 'react';
import styles from './ratings.module.css';
import { MOCK_RATINGS } from '@/lib/supabase';

export default function RatingsPage() {
  const [form, setForm] = useState({ name: '', rating: 5, review: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const ratings = MOCK_RATINGS;
  const avgRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: ratings.filter(r => r.rating === star).length,
    pct: (ratings.filter(r => r.rating === star).length / ratings.length) * 100,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setStatus({ type: 'success', text: 'Thank you for your review! It will appear after approval.' });
    setForm({ name: '', rating: 5, review: '' });
    setLoading(false);
  };

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Rate Us</h1>
          <p>Share your experience with KRISH KIDS ISLAND</p>
        </div>
      </section>

      <section className={`section`}>
        <div className="container">
          {/* Rating Summary */}
          <div className={styles.summaryCard}>
            <div className={styles.summaryLeft}>
              <div className={styles.avgRating}>{avgRating.toFixed(1)}</div>
              <div className={styles.avgStars}>
                {[1, 2, 3, 4, 5].map(s => (
                  <span key={s} className={s <= Math.round(avgRating) ? styles.starFilled : styles.starEmpty}>★</span>
                ))}
              </div>
              <p className={styles.totalReviews}>{ratings.length} reviews</p>
            </div>
            <div className={styles.summaryRight}>
              {ratingCounts.map(rc => (
                <div key={rc.star} className={styles.ratingBar}>
                  <span className={styles.ratingLabel}>{rc.star} ★</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${rc.pct}%` }}></div>
                  </div>
                  <span className={styles.ratingCount}>{rc.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.grid}>
            {/* Review Form */}
            <div className={styles.formCard}>
              <h3>Write a Review</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Rating *</label>
                  <div className={styles.starInput}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <button
                        key={s}
                        type="button"
                        className={`${styles.starBtn} ${s <= (hoverRating || form.rating) ? styles.starBtnActive : ''}`}
                        onClick={() => setForm({ ...form, rating: s })}
                        onMouseEnter={() => setHoverRating(s)}
                        onMouseLeave={() => setHoverRating(0)}
                      >
                        ★
                      </button>
                    ))}
                    <span className={styles.ratingText}>
                      {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][form.rating]}
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Review *</label>
                  <textarea
                    className="form-input form-textarea"
                    placeholder="Share your experience with us..."
                    value={form.review}
                    onChange={e => setForm({ ...form, review: e.target.value })}
                    required
                  ></textarea>
                </div>
                {status && (
                  <div className={`${styles.alert} ${styles[status.type]}`}>
                    {status.text}
                  </div>
                )}
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </div>

            {/* Reviews List */}
            <div className={styles.reviewsList}>
              <h3>Recent Reviews</h3>
              {ratings.map(r => (
                <div key={r.id} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewAvatar}>{r.reviewer_name.charAt(0)}</div>
                    <div>
                      <h4 className={styles.reviewName}>{r.reviewer_name}</h4>
                      <div className={styles.reviewStars}>
                        {[1, 2, 3, 4, 5].map(s => (
                          <span key={s} className={s <= r.rating ? styles.starFilled : styles.starEmpty}>★</span>
                        ))}
                      </div>
                    </div>
                    <span className={styles.reviewDate}>
                      {new Date(r.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className={styles.reviewText}>{r.review_text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
