import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { cn } from "@/lib/utils";
import Footer from './components/Footer';

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

export const metadata: Metadata = {
  title: 'Forgewell Precision | Component Manufacturing',
  description: 'Precision Components for Surgical & Medical Device OEMs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}