import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/* import localFont from "next/font/local"; */
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Blue Sky Alterations - Rottingdean",
  description: "Developed by DiploDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        {/* Add favicon here */}
        <link rel="icon" href="/images/logo.ico" />
        <link rel="apple-touch-icon" href="/images/logo.ico" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
