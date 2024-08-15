import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miwa's Projects",
  description:
    "Welcome to my project page, a digital showcase of my journey and accomplishments as a software developer",
  themeColor: "#3a4a2f",
  openGraph: {
    title: "Miwa's Work",
    description: "Welcome to Miwa's Projects Page",
    url: "https://miwa-tanaka.github.io/",
    images: [
      {
        url: "https://miwa-tanaka.github.io/miwa-ogp.png",
      },
    ],
    siteName: "Miwa's Projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
