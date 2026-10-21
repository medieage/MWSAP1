import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { seo, siteUrl } from "@/lib/seo";
import { artist } from "@/data/artist";
import "./globals.css";
import "./background.css";
import "./marquee.css";
import "./chat.css";
import { SiteBackground } from "@/components/site-background";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  title: seo.title,
  description: seo.description,
  applicationName: artist.name,
  authors: [{ name: artist.name }],
  creator: artist.name,
  robots: { index: Boolean(siteUrl), follow: true },
  openGraph: {
    title: seo.title, description: seo.description, type: 'website', locale: 'ru_RU', siteName: artist.name,
    ...(siteUrl ? { url: siteUrl, images: [{ url: `${siteUrl}/images/artem-popov-portrait.png`, width: 1254, height: 1254, alt: artist.name }] } : {}),
  },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description, ...(siteUrl ? { images: [`${siteUrl}/images/artem-popov-portrait.png`] } : {}) },
};

export const viewport: Viewport = { themeColor: '#111310', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name, description: artist.biography,
    ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/images/artem-popov-portrait.png` } : {}),
    jobTitle: 'Автор песен', email: artist.email,
    homeLocation: { '@type': 'Place', name: 'Обоянь, Курская область, Россия' },
    sameAs: [...artist.socials, ...artist.platforms].map(({ url }) => url),
  };
  // Browser extensions such as TokenPocket inject attributes on <html> before hydration.
  return <html lang="ru" suppressHydrationWarning><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /><SiteBackground />{children}
    <Script id="livetex-chat" strategy="afterInteractive">{`
      window.liveTex = true;
      window.liveTexID = 182813;
      window.liveTex_object = true;
      (function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://cs15.livetex.ru/js/client.js';
        document.body.appendChild(script);
      })();
    `}</Script>
  </body></html>;
}
