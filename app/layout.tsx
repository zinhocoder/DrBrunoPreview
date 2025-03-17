import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instituto Bruno Marques - Rejuvenescimento Facial e Corporal",
  description: "Tratamentos estéticos avançados para rejuvenescimento facial e corporal",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"



import './globals.css'