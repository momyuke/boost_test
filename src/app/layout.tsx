import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BlogProvider } from "@/core/context/blog.context";
import { ModalProvider } from "@/core/context/modal.context";
import { PaginationsProvider } from "@/core/context/pagination.context";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
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
      <body className={`bg-dark-08 ${kumbhSans.variable} antialiased`}>
        <ModalProvider>
          <PaginationsProvider>
            <BlogProvider>
              <Navbar />
              {children}
              <Footer />
            </BlogProvider>
          </PaginationsProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
