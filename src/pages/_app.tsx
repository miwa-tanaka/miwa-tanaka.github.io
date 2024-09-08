import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Poppins } from "next/font/google";
import "../styles/globals.scss";
import "../../i18n";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className={poppins.className}>
      <Head>
        <title>Miwa&#39;s Projects</title>
        <meta name="description" content="Miwa's Project page" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#3a4a2f"
        />
        <meta name="msapplication-TileColor" content="#3a4a2f" />
        <meta name="theme-color" content="#3a4a2f"></meta>
        <meta property="og:title" content="Miwa's Projects" />
        <meta
          property="og:description"
          content="Welcome to Miwa's Project page"
        />
        <meta property="og:url" content="https://miwa-tanaka.github.io/" />
        <meta
          property="og:image"
          content="https://miwa-tanaka.github.io/miwa-ogp.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Miwa's Projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
