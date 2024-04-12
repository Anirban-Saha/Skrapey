import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skrapey | AI Powered Data Solutions for Enhanced Insights",
  description: "Unlock valuable insights for your business with Skrapey's cutting-edge AI-powered data solutions. Harness the power of artificial intelligence for precise data extraction and analysis. Gain a competitive edge with Skrapey's innovative approach to data interpretation.",
  keywords: "Skrapey, AI powered data solutions, artificial intelligence, data extraction, data analysis, business insights, competitive edge",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <meta name="fit" content="width=device-width, initial-scale=1"/>
      <body className={inter.className}>
       
        <div className="">{children}</div>
        </body>
    </html>
  );
}
