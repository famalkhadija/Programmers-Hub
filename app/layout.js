import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeWrapper";
import SessionWrapper from "@/components/SessionWrapper";
import ClientWrapper from '@/components/ClientWrapper';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'], // Choose weights you need
  variable: '--font-poppins',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Programmers Discussion Hub",
  description: "discuss,solve problems and learn something new",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
</head>
  <body
    className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${poppins.variable}antialiased`}
  >
    <SessionWrapper>
    <ThemeProvider>
      <ClientWrapper>
    <Navbar />
   {children}
   </ClientWrapper>
        <Footer />
   </ThemeProvider>
   </SessionWrapper>
  </body>
</html>

  );
}
