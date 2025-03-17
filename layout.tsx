import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] })

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
      <body className={`${inter.className} ${bebasNeue.className}`}>{children}</body>
    </html>
  )
}

