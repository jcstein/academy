import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modular Academy",
  description: "Build whatever with Celestia underneath.",
}

export default function RootLayout({ children }: React.PropsWithChildren<{ session: any }>) {
  return (
    <SessionProvider session={children?.props.session ?? {}}>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col justify-between w-full h-full min-h-screen">
            <Header />
            <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  )
}