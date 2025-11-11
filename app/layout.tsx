import type { Metadata } from "next"
import "./globals.css"

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background antialiased font-inter">
        {children}
      </body>
    </html>
  )
}
