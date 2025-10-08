import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BlogProvider } from "@/core/context/blog.context";
import type { Metadata } from "next";
import { Inter, Kumbh_Sans } from "next/font/google";
import "./globals.css";


const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Blog Tech",
  description: "Find your latest news tech in this blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-dark-08 ${kumbhSans.variable} antialiased`}
      >
        <BlogProvider>
          <Navbar />
          {children}
          <Footer />
        </BlogProvider>
      </body>
    </html>
  );
}
