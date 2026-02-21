import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a3a4a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://actalent.id"),
  title: {
    default: "ACTALENT Solutions Partners | Strategic Recruitment Partner",
    template: "%s | ACTALENT Solutions Partners",
  },
  description: "PT ACTALENT SOLUTIONS PARTNERS - Strategic recruitment partner for SMEs. Connecting companies with professional talent through fast, flexible, and measurable processes.",
  keywords: ["recruitment", "headhunter", "executive search", "talent acquisition", "HR solutions", "Indonesia", "SME recruitment"],
  authors: [{ name: "ACTALENT Solutions Partners" }],
  creator: "ACTALENT Solutions Partners",
  publisher: "ACTALENT Solutions Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "business",
  classification: "Recruitment Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
