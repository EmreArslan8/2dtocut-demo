import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.2dtocut.com";

export const SOURCE_CODE_URL = "https://github.com/EmreArslan8/2dtocut-demo";
export const PRO_VERSION = "";

const TWITTER_URL = "";
const BSKY_URL = "";
const EMAIL_URL = "mailto:";
const GITHUB_URL = "";

export const siteConfig: SiteConfig = {
  name: "2dtocut",
  tagLine: "Cnc Cutting Solutions",
  description:
    "Precision CNC laser cutting for metal parts. Fast delivery, expert service, and reliable quality",
  url: BASE_URL,
  authors: [
    {
      name: "2dtocut",
      url: "https://www.2dtocut.com",
    },
  ],
  creator: "@2dtocut",
  socialLinks: {
    bluesky: BSKY_URL,
    twitter: TWITTER_URL,
    email: EMAIL_URL,
    github: GITHUB_URL,
  },
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  defaultNextTheme: "system", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
};
