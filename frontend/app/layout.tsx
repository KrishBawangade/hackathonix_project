import "./globals.css";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import PageContainer from "@/components/layout/PageContainer";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground font-sans`}
      >
        <div className="flex h-screen w-full overflow-hidden">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Main Section */}
          <div className="flex flex-col flex-1">

            <Navbar />

            <PageContainer>
              {children}
            </PageContainer>

          </div>

        </div>
      </body>
    </html>
  );
}