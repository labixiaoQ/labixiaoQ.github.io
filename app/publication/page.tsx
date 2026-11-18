import type { Metadata } from "next";
import { Publications } from "../components/research";
export const metadata: Metadata = { title: "Publications | Renmin Cheng" };
export default function PublicationPage() { return <Publications standalone />; }
