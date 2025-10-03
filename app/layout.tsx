import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "ShūrāBot — Community AI for Halal Group Finance",
  description:
    "Sleek, compliant, and collaborative. Plan, track, and decide together.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="site-header">
          <div className="container nav">
            <div className="brand">
              <Image src="/logo.svg" alt="ShūrāBot" height={28} width={28} />
              <span>ShūrāBot</span>
            </div>
            <nav className="nav-links">
             <a href="#groups">Groups</a>
             <a href="#proposals">Proposals</a>
             <a href="#insights">Insights</a>
              <a href="#features">Features</a>
              <a href="#shariah">Shariah</a>
              <a href="#pricing">Pricing</a>
              <a href="#case-study">Case Study</a>
              <a href="#download">Download</a>
              <a className="btn btn-primary" href="/app/" target="_blank" rel="noopener noreferrer">Launch App</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer">
            <span>© {new Date().getFullYear()} ShūrāBot</span>
            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
