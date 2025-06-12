const DEFAULT_LOCALE = 'en';
const LOCALES = ['en','tr'];
const siteConfig = { url: 'https://www.2dtocut.com' };

function getAlternateLanguages({ availableLocales, canonicalUrl }) {
  const locales = (availableLocales && availableLocales.length) ? availableLocales : LOCALES;
  return locales.reduce((acc, lang) => {
    const path = canonicalUrl ? `/${lang === DEFAULT_LOCALE ? '' : lang}${canonicalUrl}` : `/${lang === DEFAULT_LOCALE ? '' : lang}`;
    acc[lang] = `${siteConfig.url}${path}`;
    return acc;
  }, {});
}

function test() {
  const alt1 = getAlternateLanguages({ availableLocales: ['en'], canonicalUrl: '/about' });
  if ('tr' in alt1) throw new Error('Unexpected hreflang for tr');
  const alt2 = getAlternateLanguages({ availableLocales: ['en','tr'], canonicalUrl: '/about' });
  if (!('tr' in alt2)) throw new Error('Missing hreflang for tr');
  console.log('hreflang check passed');
}

try {
  test();
} catch (e) {
  console.error(e);
  process.exit(1);
}
