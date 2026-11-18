"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Homepage", href: "./index.html", page: "home" },
  { label: "About Me", href: "./index.html#about-me", section: "about-me", page: "home" },
  { label: "Education", href: "./index.html#educations", section: "educations", page: "home" },
  { label: "Selected Publications", href: "./index.html#publications", section: "publications", page: "home" },
  { label: "Full Publications", href: "./publication.html#full-publications", page: "publication" },
  { label: "Software", href: "./software.html", page: "software" },
  { label: "Blog", href: "./blog.html", page: "blog" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  useEffect(() => {
    const update = () => setHash(window.location.hash.slice(1));
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);
  const currentPage = pathname.replace(/^\//, "").replace(/\.html$/, "") || "home";
  const page = currentPage === "index" ? "home" : currentPage;

  return (
    <nav className="site-nav" aria-label="Main navigation">
      {links.map((link) => {
        const active = page === link.page && (link.section ? hash === link.section : link.page !== "home" || !links.some((item) => item.section === hash));
        return <a key={link.label} href={link.href} className={active ? "is-active" : undefined} aria-current={active ? (link.section ? "location" : "page") : undefined}>{link.label}</a>;
      })}
    </nav>
  );
}
