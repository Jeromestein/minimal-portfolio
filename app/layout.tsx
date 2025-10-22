import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Jiayi Wang - Software Engineer",
  description: "Software Engineer from Irvine, CA.",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/26063944?s=400&u=2da93338fa658090010ac2d37169694183a97f58&v=4",
    shortcut: "https://avatars.githubusercontent.com/u/26063944?s=400&u=2da93338fa658090010ac2d37169694183a97f58&v=4",
    apple: "https://avatars.githubusercontent.com/u/26063944?s=400&u=2da93338fa658090010ac2d37169694183a97f58&v=4",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
