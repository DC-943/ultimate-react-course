import Logo from "@/app/_components/Logo"
import Navigation from "@/app/_components/Navigation"
import { Josefin_Sans } from "next/font/google"

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" })

console.log(josefin)

import "@/app/_styles/globals.css"
import Header from "./_components/Header"

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-800  text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 ps-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}
