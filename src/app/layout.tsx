import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavbarPage";
import Providers from "./provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoppzila",
  description:
    "Shoppzila_ Your Ultimate Shopping Destination for Quality and Convenience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          <NavBar />
         <div className=" min-h-[11.5rem] "> {children}</div>
          
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
