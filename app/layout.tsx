import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renmin Cheng | Academic Home",
  description: "Academic homepage of Renmin Cheng, incoming Ph.D. student at LAMDA, Nanjing University.",
  metadataBase: new URL("https://labixiaoq.github.io"),
  openGraph: {
    title: "Renmin Cheng | Academic Home",
    description: "Game Agents, Embodied AI, and LLM Agents.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renmin Cheng | Academic Home",
    description: "Game Agents, Embodied AI, and LLM Agents.",
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
