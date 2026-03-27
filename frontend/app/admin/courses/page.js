'use client';
import { useState } from 'react';
import { MOCK_COURSES } from '@/lib/supabase';

export default function AdminCourses() {
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', icon: '' });

  const openEdit = (course) => {
    setEditing(course.id);
    setForm({ title: course.title, icon: course.icon || '' });
  };

  const openNew = () => {
    setEditing('new');
    setForm({ title: '', icon: '' });
  };

  const handleSave = () => {
    if (editing === 'new') {
      const newCourse = { id: Date.now(), ...form };
      setCourses([...courses, newCourse]);
    } else {
      setCourses(courses.map(c => c.id === editing ? { ...c, ...form } : c));
    }
    setEditing(null);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--gray-700)' }}>Manage Courses ({courses.length})</h3>
        <button className="btn btn-primary btn-sm" onClick={openNew}>+ Add Course</button>
      </div>

      {editing !== null && (
        <div className="admin-card" style={{ marginBottom: '1.5rem', border: '2px solid var(--teal)' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
            {editing === 'new' ? 'Add New Course' : 'Edit Course'}
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Course Name</label>
              <input className="form-input" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. Phonics" />
            </div>
            <div className="form-group">
              <label className="form-label">Icon (emoji)</label>
              <input className="form-input" value={form.icon} onChange={e => setForm({...form, icon: e.target.value})} placeholder="e.g. 🔤" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn btn-primary btn-sm" onClick={handleSave}>Save Course</button>
            <button className="btn btn-outline btn-sm" onClick={() => setEditing(null)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Course Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td style={{ fontSize: '1.5rem' }}>{course.icon}</td>
                <td style={{ fontWeight: 600 }}>{course.title}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-outline btn-sm" onClick={() => openEdit(course)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(course.id)}>Delete</button>
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
