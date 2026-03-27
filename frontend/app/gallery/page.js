'use client';
import { useState } from 'react';
import styles from './gallery.module.css';

const GALLERY_PHOTOS = [
  { id: 1, title: 'Gallery Photo 1', src: '/images/gallery-1.jpeg' },
  { id: 2, title: 'Gallery Photo 2', src: '/images/gallery-2.jpeg' },
  { id: 3, title: 'Gallery Photo 3', src: '/images/gallery-3.jpeg' },
  { id: 4, title: 'Gallery Photo 4', src: '/images/gallery-4.jpeg' },
  { id: 5, title: 'Gallery Photo 5', src: '/images/gallery-5.jpeg' },
  { id: 6, title: 'Gallery Photo 6', src: '/images/gallery-6.jpeg' },
  { id: 7, title: 'Gallery Photo 7', src: '/images/gallery-7.jpeg' },
  { id: 8, title: 'Gallery Photo 8', src: '/images/gallery-8.jpeg' },
  { id: 9, title: 'Gallery Photo 9', src: '/images/gallery-9.jpeg' },
  { id: 10, title: 'Gallery Photo 10', src: '/images/gallery-10.jpeg' },
  { id: 11, title: 'Gallery Photo 11', src: '/images/gallery-11.jpeg' },
  { id: 12, title: 'Gallery Photo 12', src: '/images/gallery-12.jpeg' },
  { id: 13, title: 'Gallery Photo 13', src: '/images/gallery-13.jpeg' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Gallery</h1>
          <p>Moments of learning, achievement, and joy</p>
        </div>
      </section>

      <section className={`section`}>
        <div className="container">
          <div className={styles.grid}>
            {GALLERY_PHOTOS.map((item) => (
              <div
                key={item.id}
                className={styles.galleryItem}
                onClick={() => setLightbox(item)}
              >
                <div className={styles.galleryImage}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className={styles.photo}
                    loading="lazy"
                  />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.overlayIcon}>🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className={styles.lightboxPhoto}
            />
          </div>
        </div>
      )}
    </>
  );
}
