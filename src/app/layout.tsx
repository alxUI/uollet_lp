import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uollet - Controle Financeiro',
  description: 'Controle suas finanças de forma simples e eficaz com o uollet, o aplicativo de finanças desenvolvido por Alexander.',
  keywords: ['finance', 'finanças', 'dinheiro', 'app', 'ialexanderbrito', 'controle financeiro'],
  applicationName: 'Uollet',
  colorScheme: 'light dark',
  twitter: {
    card: "summary_large_image", 
    site: "@ialexanderbrito", 
    creator: "@ialexanderbrito", 
    "images": "https://app.uollet.com.br/assets/favicon-7d11b8ba.svg" 
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  abstract: 'Controle suas finanças de forma simples e eficaz com o uollet, o aplicativo de finanças desenvolvido por Alexander.',
  authors: [{ name: "Alexander", url: "https://www.ialexanderbrito.dev" }],
  creator: "Alexander",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#3d24a2" },
    { media: "(prefers-color-scheme: light)", color: "#5636d3" }
   ],
  icons: { icon: "src/assets/favicon.svg", apple: "src/assets/favicon.svg" }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
