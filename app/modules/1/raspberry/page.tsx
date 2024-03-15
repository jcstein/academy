"use client"
import { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import CustomLink from "@/components/custom-link";

export default function Page() {
  const { data: session } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authCheckCompleted, setAuthCheckCompleted] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const currentSession = await getSession();
      if (currentSession) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setAuthCheckCompleted(true);
    };

    checkSession();
  }, []);

  if (!authCheckCompleted) {
    return <div>Loading and verifying authentication...</div>;
  }

  if (!isAuthenticated) {
    return <div>Sign in to continue.</div>;
  }

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold pb-4">Getting set up with Raspberry</h1>
      <h1 className="text-3xl pb-2">Install MetaMask</h1>
      <p className="pb-4">First, install <CustomLink href="https://metamask.io/download">download MetaMask</CustomLink> if you don't have it already.</p>
      <h1 className="text-3xl pb-2">Add Raspberry to your wallet</h1>
      <p className="pb-4">Now you can add Raspberry testnet as a chain in MetaMask from <CustomLink href="https://raas.gelato.network/rollups/details/public/op-celestia-testnet">the Raspberry testnet page</CustomLink>.</p>
      <h1 className="text-3xl pb-2">Get testnet Raspberry ETH</h1>
      <p className="pb-4">In order to deploy your first contract, you'll need some testnet ETH. You can get testnet ETH by clicking "Request Faucet Funds on Raspberry rollup" on the Raspberry testnet page. Just copy and paste your wallet address from MetaMask and request funds!</p>
      <h1 className="text-3xl pb-2">Check the explorer for your ETH</h1>
      <p className="pb-4">Copy your address and paste it into the <CustomLink href="https://blockscout.op-celestia-testnet.gelato.digital/">Raspberry explorer</CustomLink> to see your balance.</p>
      <h1 className="text-3xl pb-2">Ready to write a contract</h1>
      <p className="pb-8">Now you're ready to write your first contract on Raspberry testnet. Let's get started!</p>
      
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
      <div className="pb-4"></div>
      <p className="border border-gray-200 p-2.5 my-2.5 bg-gray-100 rounded-md">Signed in as {session?.user?.name} ({session?.user?.email})</p>
    </div>
  );
}