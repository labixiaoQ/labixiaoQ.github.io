import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "./components/site-shell";

export const metadata: Metadata = {
  title: "Renmin Cheng | Academic Home",
  description: "Academic homepage of Renmin Cheng, incoming Ph.D. student at LAMDA, Nanjing University.",
  metadataBase: new URL("https://labixiaoq.github.io"),
  openGraph: {
    title: "Renmin Cheng | Academic Home",
    description: "Game Agents, Embodied AI, and LLM Agents.",
    images: ["/renmin-cheng.png"],
  },
  twitter: {
    card: "summary",
    title: "Renmin Cheng | Academic Home",
    description: "Game Agents, Embodied AI, and LLM Agents.",
    images: ["/renmin-cheng.png"],
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
      <head><link rel="stylesheet" href="./template/css/main.css" /></head>
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
