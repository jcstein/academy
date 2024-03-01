"use client"
import CustomLink from "@/components/custom-link"
import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()
  return (
    <div className="space-y-2">
       {session ? (
        <div>
          <h1 className="text-4xl font-bold pb-4">Writing your first contract</h1>
          <h1 className="text-3xl pb-2">To be continued</h1>
          <p className="pb-4">gm</p>
          <CustomLink href="/modules/1/bubs" className="px-4 py-2 bg-purple-400 text-white font-bold rounded hover:bg-purple-500 transition duration-300 ease-in-out mr-2">
            Last page
          </CustomLink>
          <CustomLink href="/modules/1/writing-your-first-contract" className="px-4 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition duration-300 ease-in-out">
            Next page
          </CustomLink>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Sign in with GitHub to get started</h2>
        </div>
      )}
    </div>
  )
}
