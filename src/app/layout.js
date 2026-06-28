import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  
});

export const metadata = {
  title: "TicketBari",
  description: " A Ticket Booking platform",
  icons: {
    icon: "/assets/Logo.png",
    shortcut: "/assets/Logo.png",
    apple: "/assets/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" 
     suppressHydrationWarning
      className={`${manrope.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
           <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
          <Footer></Footer>
        </ThemeProvider></body>
    </html>
  );
}
