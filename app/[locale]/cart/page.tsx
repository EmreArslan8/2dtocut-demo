import { Locale, LOCALES } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import CartPageView from "app/[locale]/cart/view";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = Promise<{
  locale: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Cart" });

  return constructMetadata({
    page: "Cart",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/cart`,
    canonicalUrl: `/cart`,
    availableLocales: LOCALES,
  });
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

export default function CartPage() {
  return <CartPageView />;
}
