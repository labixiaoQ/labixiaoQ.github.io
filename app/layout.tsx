import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Academic Home",
  description: "Academic homepage for Your Name.",
  metadataBase: new URL("https://labixiaoq.github.io"),
  openGraph: {
    title: "Your Name | Academic Home",
    description: "Academic homepage for Your Name.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Academic Home",
    description: "Academic homepage for Your Name.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
