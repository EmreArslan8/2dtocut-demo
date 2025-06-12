import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/config/site";
import { DrawerProvider } from "@/context/DrawerContext";
import { ShopProvider } from "@/context/ShopContext";
import plusJakartaSans from "@/fonts/plusJakartaSans";
import { DEFAULT_LOCALE, Locale, routing } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import "@/styles/globals.css";
import "@/styles/loading.css";
import ThemeRegistry from "@/theme/ThemeRegistery";
import { Analytics } from "@vercel/analytics/next";
import BaiDuAnalytics from "app/BaiDuAnalytics";
import GoogleAdsense from "app/GoogleAdsense";
import GoogleAnalytics from "app/GoogleAnalytics";
import PlausibleAnalytics from "app/PlausibleAnalytics";
import { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return constructMetadata({
    page: "Home",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/`,
    canonicalUrl: `/`,
    availableLocales: LOCALES,
  });
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale || DEFAULT_LOCALE} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="n6n2EfCF4_xpwn238Hwy0W5Vddi-Yq55wh052uDHDZk"
        />
      </head>

      <body
        className={plusJakartaSans.className}
        style={{ overflowX: "hidden" }}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            <ShopProvider>
              <DrawerProvider>
                {messages.Header && <Header />}
                <main className="flex-1 flex flex-col items-center">
                  {children}
                </main>
                {messages.Footer && <Footer />}
              </DrawerProvider>
            </ShopProvider>
          </ThemeRegistry>
        </NextIntlClientProvider>

        {process.env.NODE_ENV === "development" ? (
          <></>
        ) : (
          <>
            <Analytics />
            <BaiDuAnalytics />
            <GoogleAnalytics />
            <GoogleAdsense />
            <PlausibleAnalytics />
          </>
        )}
      </body>
    </html>
  );
}
