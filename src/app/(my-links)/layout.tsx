import React from "react";
import { Inter } from 'next/font/google'
import '../../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Links',
  description: 'all my links',
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} w-full mx-auto px-6 font-mont bg-dark min-h-screen`} style={{maxWidth: '768px'}}>
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="flex justify-center relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
