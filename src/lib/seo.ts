const configuredUrl = process.env.SITE_URL?.trim() || 'https://mwsap.ru';

function siteOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('SITE_URL must be an HTTP(S) site URL without credentials.');
  }
  return url.origin;
}

export const siteUrl = siteOrigin(configuredUrl);
export const seo = {
  title: 'Артём Попов',
  description: 'Артём Попов — автор песен из Обояни Курской области. Музыка и релизы, поздравления в стихах и прозе, тосты и речи на заказ. Срок 1–3 дня.',
};
