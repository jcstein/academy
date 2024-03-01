"use client"
import CustomLink from "@/components/custom-link"
import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()
  return (
    <div className="space-y-2">
       {session ? (
        <div>
          <h1 className="text-4xl font-bold pb-4">Getting set up with Bubs</h1>
          <h1 className="text-3xl pb-2">Install MetaMask</h1>
          <p className="pb-4">First, install <CustomLink href="https://metamask.io/download">download MetaMask</CustomLink> if you don't have it already.</p>
          <h1 className="text-3xl pb-2">Add Bubs to your wallet</h1>
          <p className="pb-4">Now you can add Bubs testnet as a chain in MetaMask from <CustomLink href="https://bubstestnet.com">the Bubs testnet page</CustomLink>.</p>
          <h1 className="text-3xl pb-2">Get testnet Bubs GETH</h1>
          <p className="pb-4">In order to deploy your first contract, you'll need some testnet ETH, in this situation, the symbol is GETH. You can get testnet GETH by clicking "Request Faucet Funds on Bubs rollup" on the Bubs testnet page. Just copy and paste your wallet address from MetaMask and request funds!</p>
          <h1 className="text-3xl pb-2">Check the explorer for your GETH</h1>
          <p className="pb-4">Copy your address and paste it into the <CustomLink href="https://bubs.calderaexplorer.xyz/">Bubs explorer</CustomLink> to see your balance.</p>
          <h1 className="text-3xl pb-2">Ready to write a contract</h1>
          <p className="pb-8">Now you're ready to write your first contract on Bubs testnet. Let's get started!</p>
          <CustomLink href="/modules/1/introduction" className="px-4 py-2 bg-purple-400 text-white font-bold rounded hover:bg-purple-500 transition duration-300 ease-in-out mr-2">
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
