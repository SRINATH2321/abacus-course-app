'use client';
import Link from 'next/link';
import { MOCK_COURSES, MOCK_RATINGS, MOCK_GALLERY } from '@/lib/supabase';

export default function AdminDashboard() {
  return (
    <div>
      {/* Stats */}
      <div className="admin-grid">
        <div className="admin-stat">
          <span className="admin-stat-icon">📚</span>
          <span className="admin-stat-value">{MOCK_COURSES.length}</span>
          <span className="admin-stat-label">Total Courses</span>
        </div>
        <div className="admin-stat">
          <span className="admin-stat-icon">⭐</span>
          <span className="admin-stat-value">{MOCK_RATINGS.length}</span>
          <span className="admin-stat-label">Reviews</span>
        </div>
        <div className="admin-stat">
          <span className="admin-stat-icon">🖼️</span>
          <span className="admin-stat-value">{MOCK_GALLERY.length}</span>
          <span className="admin-stat-label">Gallery Items</span>
        </div>
        <div className="admin-stat">
          <span className="admin-stat-icon">📩</span>
          <span className="admin-stat-value">0</span>
          <span className="admin-stat-label">Messages</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gray-700)' }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/admin/courses" className="btn btn-primary btn-sm">+ Add Course</Link>
          <Link href="/admin/gallery" className="btn btn-outline btn-sm">+ Add Photos</Link>
          <Link href="/admin/ratings" className="btn btn-outline btn-sm">View Reviews</Link>
          <Link href="/admin/settings" className="btn btn-outline btn-sm">Edit Settings</Link>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="admin-card">
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gray-700)' }}>Recent Reviews</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_RATINGS.map(r => (
              <tr key={r.id}>
                <td style={{ fontWeight: 600 }}>{r.reviewer_name}</td>
                <td>{'⭐'.repeat(r.rating)}</td>
                <td style={{ maxWidth: 250, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.review_text}</td>
                <td style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>
                  {new Date(r.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                </td>
                <td>
                  <span style={{ background: r.approved ? 'rgba(46,204,113,0.15)' : 'rgba(243,156,18,0.15)', color: r.approved ? '#1e8449' : '#c27607', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600 }}>
                    {r.approved ? 'Approved' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
