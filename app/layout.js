import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";
import { Poppins } from "next/font/google";
import Loading from "@/Components/common/Loading";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
<link rel="icon" type="image/png" sizes="100x100" href="/favicon-64x64.png" />

export const metadata = {
  title: {
    default: "Best Baby Gear",
    template: "%s | Best Baby Gear",
  },
  description: "Best baby products reviews and guides",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
        >
          <Loading />
        <Navbar /> 
        <main style={{ paddingTop: "80px" }}>  
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
