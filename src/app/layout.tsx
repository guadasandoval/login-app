
import '../../public/assets/css/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'flexy',
  description: 'app para agentes inmobiliarios',
  authors: [{ name: "Guadalupe Sandoval", url: "https://www.sandoval.com.ar" }],
  icons:'../../public/assets/static/logo.svg',
  assets:[]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">{children}</body>
    </html>
  )
}
