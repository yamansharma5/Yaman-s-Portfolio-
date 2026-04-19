import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Yaman",
  description: "A showcase of full-stack projects built by Yaman — from AI chatbots to location-based apps.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
