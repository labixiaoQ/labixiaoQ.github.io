import type { Metadata } from "next";
export const metadata: Metadata = { title: "Blog | Renmin Cheng" };
export default function BlogPage() {
  return <><h1>✍️ Blog</h1><p>No posts yet.</p><p>In the meantime, explore my <a href="./publication.html">publications</a> and <a href="./software.html">software projects</a>.</p></>;
}
