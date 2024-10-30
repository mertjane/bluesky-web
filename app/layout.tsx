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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${poppins.className} `} lang="en" >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
