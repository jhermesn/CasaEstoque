import type React from "react"
import "../styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CasaEstoque",
  description: "Gerenciador de estoque doméstico",
  manifest: "/manifest.json",
}

export const viewport = {
    themeColor: "#000000",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white flex flex-col min-h-screen`}>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="text-center py-4 bg-gray-900 border-t border-gray-800">
            <p className="text-gray-400">© {new Date().getFullYear()} <a href="https://jhermesn.dev" className="underline" target="_blank" rel="noopener noreferrer">Jorge Hermes</a>. Todos os Direitos Reservados.</p>
        </footer>
      </body>
    </html>
  )
}



import '../styles/globals.css'