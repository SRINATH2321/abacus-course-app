'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './admin.module.css';

const sidebarLinks = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/courses', label: 'Courses', icon: '📚' },
  { href: '/admin/gallery', label: 'Gallery', icon: '🖼️' },
  { href: '/admin/ratings', label: 'Ratings', icon: '⭐' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.adminWrapper}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarLogo}>🧒</span>
          <div>
            <h3 className={styles.sidebarTitle}>Admin Panel</h3>
            <p className={styles.sidebarSub}>KRISH KIDS ISLAND</p>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          {sidebarLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.sidebarLink} ${pathname === link.href ? styles.sidebarLinkActive : ''}`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.backLink}>
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <header className={styles.topBar}>
          <button className={styles.menuToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <h2 className={styles.pageTitle}>
            {sidebarLinks.find(l => l.href === pathname)?.label || 'Admin'}
          </h2>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
