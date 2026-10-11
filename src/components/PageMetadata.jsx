import { useEffect } from 'react';
export default function PageMetadata({ title, description, path, image = '/social-share.png' }) {
  const url = `https://jessie2e.com${path}`;
  const imageUrl = `https://jessie2e.com${image}`;
  useEffect(() => {
    document.title = title;
    const values = { 'meta[name="description"]': description, 'link[rel="canonical"]': url, 'meta[property="og:title"]': title, 'meta[property="og:description"]': description, 'meta[property="og:url"]': url, 'meta[property="og:image"]': imageUrl, 'meta[name="twitter:title"]': title, 'meta[name="twitter:description"]': description, 'meta[name="twitter:image"]': imageUrl };
    Object.entries(values).forEach(([selector, value]) => {
      const tags = [...document.head.querySelectorAll(selector)];
      tags.slice(0, -1).forEach(tag => tag.remove());
      tags.at(-1)?.setAttribute(selector.startsWith('link') ? 'href' : 'content', value);
    });
  }, [title, description, url, imageUrl]);
  return <><title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={url}/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={url}/><meta property="og:image" content={imageUrl}/><meta name="twitter:title" content={title}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={imageUrl}/></>;
}
