import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeWrapper";
import SessionWrapper from "@/components/SessionWrapper";
import ClientWrapper from '@/components/ClientWrapper';

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
