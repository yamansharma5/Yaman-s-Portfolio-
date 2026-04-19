import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements — Yaman",
  description: "Coding achievements, LeetCode stats, contest ranks, and certifications earned by Yaman.",
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
