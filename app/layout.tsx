import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expert Listing",
  description: "Verified property listings for rent and sale in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon-32x32.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`euclid-font antialiased`}>{children}</body>
    </html>
  );
}
