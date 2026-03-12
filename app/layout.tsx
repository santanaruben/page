import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://rubensantana.com"),
  title: "Ruben Santana - Blockchain Developer & Professor",
  description:
    "Experienced blockchain developer and computer science professor specializing in Solidity, Web3, and DeFi. 20+ projects in smart contracts and decentralized applications.",
  generator: "Next.js",
  keywords: ["blockchain", "solidity", "web3", "ethereum", "defi", "smart contracts", "professor", "developer", "ruben santana"],
  authors: [{ name: "Ruben Santana" }],
  creator: "Ruben Santana",
  publisher: "Ruben Santana",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Ruben Santana - Blockchain Developer & Professor",
    description:
      "Experienced blockchain developer and computer science professor specializing in Solidity, Web3, and DeFi. 20+ projects in smart contracts and decentralized applications.",
    type: "website",
    url: "https://rubensantana.com",
    siteName: "Ruben Santana Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Ruben Santana - Blockchain Developer & Professor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruben Santana - Blockchain Developer & Professor",
    description:
      "Experienced blockchain developer and computer science professor specializing in Solidity, Web3, and DeFi.",
    creator: "Ruben Santana",
    images: ["/thumbnail.jpg"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rubensantana.com/#person",
      name: "Ruben Santana",
      url: "https://rubensantana.com",
      jobTitle: "Smart Contract Engineer & Computer Science Professor",
      description: "Experienced blockchain developer and computer science professor specializing in Solidity, Web3, and DeFi.",
      sameAs: [
        "https://github.com/santanaruben",
        "https://www.linkedin.com/in/rubensantana/",
        "https://x.com/0xrubens",
        "https://t.me/rubensantana",
      ],
      knowsAbout: ["Blockchain", "Solidity", "Web3", "DeFi", "Smart Contracts"],
    },
    {
      "@type": "WebSite",
      "@id": "https://rubensantana.com/#website",
      url: "https://rubensantana.com",
      name: "Ruben Santana Portfolio",
      description: "Portfolio of blockchain applications, business solutions, and community platforms.",
      publisher: { "@id": "https://rubensantana.com/#person" },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
