'use client';
import { useState } from 'react';
import { MOCK_GALLERY } from '@/lib/supabase';

export default function AdminGallery() {
  const [items, setItems] = useState(MOCK_GALLERY);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', category: 'Classes', media_type: 'image' });

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      title: form.title,
      media_url: '',
      media_type: form.media_type,
      category: form.category,
    };
    setItems([newItem, ...items]);
    setForm({ title: '', category: 'Classes', media_type: 'image' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (confirm('Delete this gallery item?')) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--gray-700)' }}>Gallery ({items.length} items)</h3>
        <button className="btn btn-primary btn-sm" onClick={() => setShowForm(!showForm)}>+ Add Item</button>
      </div>

      {showForm && (
        <div className="admin-card" style={{ marginBottom: '1.5rem', border: '2px solid var(--teal)' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Add Gallery Item</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input className="form-input" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Item title" />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select className="form-input" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                <option value="Classes">Classes</option>
                <option value="Events">Events</option>
                <option value="Achievements">Achievements</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Type</label>
              <select className="form-input" value={form.media_type} onChange={e => setForm({...form, media_type: e.target.value})}>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: '1rem' }}>
            📁 File upload will work after connecting Supabase Storage. For now, items are added with placeholder images.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn btn-primary btn-sm" onClick={handleAdd}>Add Item</button>
            <button className="btn btn-outline btn-sm" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="admin-card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {items.map(item => (
            <div key={item.id} style={{
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--gray-200)',
            }}>
              <div style={{
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, var(--primary-light), var(--teal-dark))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                opacity: 0.5,
              }}>
                {item.media_type === 'video' ? '🎥' : '📷'}
              </div>
              <div style={{ padding: '0.75rem' }}>
                <h4 style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--gray-500)', textTransform: 'uppercase' }}>{item.category}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
