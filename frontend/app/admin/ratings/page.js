'use client';
import { useState } from 'react';
import { MOCK_RATINGS } from '@/lib/supabase';

export default function AdminRatings() {
  const [ratings, setRatings] = useState(MOCK_RATINGS);

  const toggleApproval = (id) => {
    setRatings(ratings.map(r => r.id === id ? { ...r, approved: !r.approved } : r));
  };

  const handleDelete = (id) => {
    if (confirm('Delete this review?')) {
      setRatings(ratings.filter(r => r.id !== id));
    }
  };

  const approved = ratings.filter(r => r.approved);
  const pending = ratings.filter(r => !r.approved);

  return (
    <div>
      {/* Stats */}
      <div className="admin-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="admin-stat">
          <span className="admin-stat-icon">⭐</span>
          <span className="admin-stat-value">{ratings.length}</span>
          <span className="admin-stat-label">Total Reviews</span>
        </div>
        <div className="admin-stat">
          <span className="admin-stat-icon">✅</span>
          <span className="admin-stat-value">{approved.length}</span>
          <span className="admin-stat-label">Approved</span>
        </div>
        <div className="admin-stat">
          <span className="admin-stat-icon">⏳</span>
          <span className="admin-stat-value">{pending.length}</span>
          <span className="admin-stat-label">Pending</span>
        </div>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--gray-700)' }}>All Reviews</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Reviewer</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map(r => (
              <tr key={r.id}>
                <td style={{ fontWeight: 600 }}>{r.reviewer_name}</td>
                <td>{'⭐'.repeat(r.rating)}</td>
                <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.review_text}</td>
                <td style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>
                  {new Date(r.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td>
                  <span style={{
                    background: r.approved ? 'rgba(46,204,113,0.15)' : 'rgba(243,156,18,0.15)',
                    color: r.approved ? '#1e8449' : '#c27607',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>
                    {r.approved ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-outline btn-sm" onClick={() => toggleApproval(r.id)}>
                      {r.approved ? 'Revoke' : 'Approve'}
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
