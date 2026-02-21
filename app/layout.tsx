import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACTALENT Solutions Partners | Strategic Recruitment Partner",
  description: "PT ACTALENT SOLUTIONS PARTNERS - Strategic recruitment partner for SMEs. Connecting companies with professional talent through fast, flexible, and measurable processes. Headhunter, Executive Search, General Recruitment, Mass Hiring.",
  keywords: "recruitment, headhunter, executive search, talent acquisition, HR solutions, Indonesia, UMKM, SME recruitment",
  authors: [{ name: "ACTALENT Solutions Partners" }],
  openGraph: {
    title: "ACTALENT Solutions Partners | Strategic Recruitment Partner",
    description: "Strategic recruitment partner for SMEs. 100+ professional recruiters nationwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
