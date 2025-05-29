import { useState, useEffect } from 'react';

export default function EditableHeroBanner({ data, onChange }) {
  const [videoUrl, setVideoUrl] = useState(data.latestVideoUrl || '');

  // Convert full YouTube URL to embeddable iframe URL
  const getEmbedUrl = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu.be\/)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : '';
  };

  useEffect(() => {
    onChange({ ...data, latestVideoUrl: videoUrl });
  }, [videoUrl]);

  return (
    <section style={{ padding: '2rem', background: '#f4f4f4' }}>
      <h3>Video URL:</h3>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Paste YouTube link"
        style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
      />

      {getEmbedUrl(videoUrl) && (
        <div style={{ aspectRatio: '16/9', width: '100%' }}>
          <iframe
            width="100%"
            height="100%"
            src={getEmbedUrl(videoUrl)}
            frameBorder="0"
            allowFullScreen
            title="Video Preview"
          ></iframe>
        </div>
      )}
    </section>
  );
}
