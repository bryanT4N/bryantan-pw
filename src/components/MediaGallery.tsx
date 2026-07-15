import React, { useState } from 'react';
import styles from './MediaGallery.module.css';

export type MediaItem = {
  type: 'image' | 'video' | 'youtube';
  src: string;
  thumbnail?: string;
  caption?: string;
};

type Props = {
  items: MediaItem[];
};

export default function MediaGallery({ items }: Props) {
  const [selected, setSelected] = useState(0);
  if (!items.length) return null;

  const current = items[selected];

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbsOuter}>
        <div className={styles.thumbs}>
          {items.map((item, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === selected ? styles.active : ''}`}
              onClick={() => setSelected(i)}
              aria-label={item.caption || `Media ${i + 1}`}
            >
              <img
                src={item.thumbnail || item.src}
                alt=""
                className={styles.thumbImg}
                loading="lazy"
              />
              {(item.type === 'youtube' || item.type === 'video') && (
                <span className={styles.playBadge} aria-hidden="true">▶</span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.preview}>
        <div className={styles.previewFrame}>
          {current.type === 'video' ? (
            <video
              key={current.src}
              className={styles.previewMedia}
              controls
              playsInline
              preload="metadata"
              poster={current.thumbnail}
            >
              <source src={current.src} type="video/mp4" />
            </video>
          ) : current.type === 'youtube' ? (
            <iframe
              className={styles.previewMedia}
              src={current.src}
              title={current.caption || 'Video'}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <img
              src={current.src}
              alt={current.caption || ''}
              className={styles.previewMedia}
            />
          )}
        </div>
        {current.caption && (
          <p className={styles.caption}>{current.caption}</p>
        )}
      </div>
    </div>
  );
}
