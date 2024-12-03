import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Car Doctor NextJs",
  description: "Car Reaper Workshop",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="mx-16">
            <Navbar />
            {children}
          </div>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
