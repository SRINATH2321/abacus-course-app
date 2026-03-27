'use client';
import { useState } from 'react';
import { MOCK_SETTINGS } from '@/lib/supabase';

export default function AdminSettings() {
  const [settings, setSettings] = useState(MOCK_SETTINGS);
  const [saved, setSaved] = useState(false);

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
    setSaved(false);
  };

  const handleSave = () => {
    // In production, this would save to Supabase
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const fields = [
    { key: 'academy_name', label: 'Academy Name', type: 'text' },
    { key: 'tagline', label: 'Tagline', type: 'text' },
    { key: 'phone_1', label: 'Phone Number 1', type: 'text' },
    { key: 'phone_2', label: 'Phone Number 2', type: 'text' },
    { key: 'email', label: 'Email Address', type: 'text' },
    { key: 'address', label: 'Address', type: 'text' },
    { key: 'hero_subtitle', label: 'Hero Subtitle', type: 'textarea' },
    { key: 'description', label: 'About Description', type: 'textarea' },
    { key: 'about_mission', label: 'Mission Statement', type: 'textarea' },
    { key: 'about_vision', label: 'Vision Statement', type: 'textarea' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--gray-700)' }}>Site Settings</h3>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {saved && (
            <span style={{ color: 'var(--success)', fontWeight: 600, fontSize: '0.9rem' }}>
              ✓ Saved successfully!
            </span>
          )}
          <button className="btn btn-primary btn-sm" onClick={handleSave}>💾 Save All Changes</button>
        </div>
      </div>

      <div className="admin-card">
        <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: '2rem', padding: '0.75rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
          ℹ️ Edit your institution details below. After connecting Supabase, changes will persist to the database.
        </p>

        {fields.map(field => (
          <div key={field.key} className="form-group">
            <label className="form-label">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                className="form-input form-textarea"
                value={settings[field.key] || ''}
                onChange={e => handleChange(field.key, e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="form-input"
                value={settings[field.key] || ''}
                onChange={e => handleChange(field.key, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
