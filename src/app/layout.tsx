import React from "react";
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import NavBar from "@/components/Home/NavBar";
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
