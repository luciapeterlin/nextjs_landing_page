// import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from '@/components/navbar';

export const metadata = {
  title: "AeroNex",
  description: "Challenge Next.js + Tailwind CSS",
};


const dinPro = localFont({
  src: [
    {
      path: '../public/fonts/medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dinPro.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
