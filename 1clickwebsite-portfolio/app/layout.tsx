import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "1ClickWebsite - Designer Web Professionnel",
  description:
    "Je transforme vos idées en sites web ultra-rapides. Designs sur-mesure en 48h max. Sites vitrine, e-commerce et optimisation SEO.",
  keywords: "designer web, création site internet, e-commerce, SEO, développeur freelance",
  authors: [{ name: "1ClickWebsite" }],
  openGraph: {
    title: "1ClickWebsite - Designer Web Professionnel",
    description: "Sites web ultra-rapides en 48h max",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
