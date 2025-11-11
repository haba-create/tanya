import type { Metadata } from "next"
import { Inter, Cormorant_Garamond, Raleway } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-cormorant',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tanya's Wellness Practice | Yoga & Martial Arts in Primrose Hill",
  description: "Experience transformative wellness through yoga, martial arts, and holistic practices in Primrose Hill, London. Join Tanya for classes that nurture body, mind, and spirit.",
  keywords: ["yoga", "martial arts", "wellness", "meditation", "primrose hill", "london", "fitness", "mindfulness"],
  authors: [{ name: "Tanya's Wellness Practice" }],
  openGraph: {
    title: "Tanya's Wellness Practice | Yoga & Martial Arts in Primrose Hill",
    description: "Experience transformative wellness through yoga, martial arts, and holistic practices.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, cormorant.variable, raleway.variable)}>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}
