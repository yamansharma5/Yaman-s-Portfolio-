import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Yaman — Full Stack Developer",
  description:
    "Portfolio of Yaman, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Yaman" }],
  openGraph: {
    title: "Yaman — Full Stack Developer",
    description: "Building scalable web apps with clean code & modern design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>

        <Navbar />
        <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a2e",
              color: "#ffffff",
              border: "1px solid rgba(14, 165, 233,0.3)",
              borderRadius: "12px",
              fontSize: "0.875rem",
            },
            success: {
              iconTheme: { primary: "#0ea5e9", secondary: "#fff" },
            },
            error: {
              iconTheme: { primary: "#0ea5e9", secondary: "#fff" },
            },
          }}
        />
      </body>
    </html>
  );
}
