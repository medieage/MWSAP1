import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Anchored sections are parts of one page, not separate sitemap URLs.
  return siteUrl ? [{ url: `${siteUrl}/` }] : [];
}
