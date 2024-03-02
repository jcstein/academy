"use client"
import CustomLink from "@/components/custom-link"
import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session, status } = useSession()
  if (status === "loading") {
    return <div>Checking if you're signed in 😎...</div>; // Or any other loading indicator you prefer
  }
  return (
    <div className="space-y-2">
       {session ? (
        <div>
          <h1 className="text-4xl font-bold pb-4">Introduction to Module 1</h1>
          <h1 className="text-3xl pb-2">Building a smart contract with verifiable randomness</h1>
          <p className="pb-4">Welcome to the world of rollups! If you're an Ethereum Virtual Machine (EVM) developer, you might wonder how building on a rollup, like <CustomLink href="https://bubstestnet.com">Bubs testnet</CustomLink>, compares to traditional blockchains. The truth is, the experience is designed to be seamless.</p>
          <h1 className="text-2xl pb-2">What is a rollup?</h1>
          <p className="pb-4">A rollup is blockchain that outsources one of its components to a separate chain. In this case, Bubs testnet is an OP Stack rollup that settles on Ethereum and posts data to Celestia for data availability. Posting data to Celestia instead of as <code>calldata</code> on Ethereum allows for faster and cheaper transactions without sacrificing security. Think of a rollup as a blockchain with the superpowers of scalability and efficiency.</p>
          <h1 className="text-2xl pb-2">Building on Bubs testnet</h1>
          <p className="pb-4">The Bubs testnet is a rollup that operates with the familiarity of the EVM, making it an ideal playground for developers looking to explore the benefits of rollups without straying too far from the Ethereum development environment they know and love.</p>
          <h1 className="text-2xl pb-2">ERC-721 on a rollup</h1>
          <p className="pb-2">Deploying an ERC-721 on a rollup is very similar to deploying on Ethereum. However, the added efficiency of rollups means you can expect faster transaction finality and lower gas fees. This makes the minting process of unique tokens, such as digital art, collectibles, or tokens for real world assets, more accessible and cost-effective.</p>
          <p className="pb-2">Where's the proof? <CustomLink href="https://warpcast.com/will/0x66826dd0">Syndicate's Frame Chain</CustomLink> allows for just 0.01 ETH to cover many millions of transactions.</p>
          <img src="/images/frame_chain.png" alt="Description of Image" className="pb-4 px-32"/>
          <h1 className="text-2xl pb-2">Integrating verifiable randomness</h1>
          <p className="pb-2">In the first module, we'll explore integrating a verifiable random function (VRF) with a smart contract on our rollup. VRFs provide a secure and verifiable way to generate randomness, essential for many decentralized applications. For instance, a gaming app would use a VRF to ensure fair and unpredictable outcomes.</p>
          <p className="pb-4">We'll use a drand-based VRF solution compatible with the EVM. This allows us to incorporate secure randomness directly into our smart contracts with familiar EVM opcodes.</p>
          <h1 className="text-2xl pb-2">Ready to ship?</h1>
          <p className="pb-2">Building on a rollup like the Bubs testnet offers a familiar yet enhanced development experience for EVM developers. By following this tutorial, you'll learn how to deploy ERC-721 smart contract and integrate a VRF solution, all while enjoying the benefits of rollup technology.</p>
          <p className="pb-4">Ready to start building? Let's embark on this journey together and unlock the potential of rollups for your next project.</p>
          <CustomLink href="/modules/1/bubs" className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">
            Let's ship it!
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
