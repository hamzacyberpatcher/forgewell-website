import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}