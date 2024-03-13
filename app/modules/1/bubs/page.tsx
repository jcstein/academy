"use client"
import { useSession, getSession } from "next-auth/react"
import CustomLink from "@/components/custom-link"
import { useEffect } from "react"

export default function Page() {
  const { data: session, status } = useSession()

  useEffect(() => {
    const checkSession = async () => {
      const currentSession = await getSession();
      console.log(currentSession);
      if (!currentSession) {
        console.log('No active session found.');
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    console.log(`Session status: ${status}`);
  }, [status]);

  if (status === "loading") {
    return <div>Checking if you're signed in 😎...</div>;
  }
  
  if (status === "authenticated") {
    return (
      <div className="space-y-2">
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
        
        {/* <div>
          <h2 className="text-xl font-bold pb-4">Share your progress</h2>
          <form>
            <label htmlFor="tweetLink" className="block mb-2 text-sm font-medium text-gray-900">Paste the link of your tweet</label>
            <input type="url" id="tweetLink" name="tweetLink" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 mb-4" placeholder="https://twitter.com/yourtweet" required />
            <button type="submit" className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">Submit</button>
          </form>
        </div> */}

        <CustomLink href="/modules/1/introduction" className="px-4 py-2 bg-brand-light text-white font-bold rounded hover:bg-brand transition duration-300 ease-in-out mr-2">
          Last page
        </CustomLink>
        <CustomLink href="/modules/1/writing-your-first-contract" className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">
          Next page
        </CustomLink>
        {/* <div className="pb-4"></div>
        <p className="border border-gray-200 p-2.5 my-2.5 bg-gray-100 rounded-md">Signed in as {session?.user?.name} ({session?.user?.email})</p> */}
      </div>
    )
  }

  return <CustomLink href="/api/auth/signin" className="underline">Sign in with GitHub to get started</CustomLink>
}
