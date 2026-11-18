import type { Metadata } from "next";
import { Software } from "../components/research";
export const metadata: Metadata = { title: "Software | Renmin Cheng" };
export default function SoftwarePage() {
  return <><h1>💻 Software</h1><p>Research projects exploring memory, reasoning, and long-horizon behavior in Minecraft agents.</p><Software /><p>More code and open-source work on <a href="https://github.com/labixiaoQ">GitHub →</a></p></>;
}
