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
          <h1 className="text-3xl pb-2">Smart contract with verifiable randomness</h1>
          <p className="pb-4">Welcome to the world of rollups. If you're an Ethereum Virtual Machine (EVM) developer, you might wonder how building on a rollup, like <CustomLink href="https://bubstestnet.com">Bubs testnet</CustomLink>, compares to traditional blockchains. The truth is, the experience is designed to be seamless, removing any cognitive dissonance you might have about the differences between the two.</p>
          <h1 className="text-2xl pb-2">What is a rollup?</h1>
          <p className="pb-4">A rollup is a layer 2 solution that processes and stores transaction data on a separate chain, but ultimately settles it on a main blockchain like Ethereum. In this case, Bubs testnet is an OP Stack rollup that settles on Ethereum and posts data to Celestia for data availability. This allows for faster and cheaper transactions without sacrificing security. Think of it as building on a blockchain, but with the superpowers of scalability and efficiency.</p>
          <h1 className="text-2xl pb-2">Building on Bubs testnet</h1>
          <p className="pb-4">The Bubs testnet is a rollup that operates with the familiarity of the EVM, making it an ideal playground for developers looking to explore the benefits of rollups without straying too far from the Ethereum development environment they know and love.</p>
          <h1 className="text-2xl pb-2">Dive into development</h1>
          <p className="pb-4">Let's dive into a typical development scenario on a rollup: deploying ERC-721 and ERC-1155 smart contracts. These token standards are the backbone of many decentralized applications, enabling the creation of unique (non-fungible) and semi-fungible tokens, respectively.</p>
          <h1 className="text-2xl pb-2">ERC-721 on a rollup</h1>
          <p className="pb-4">Deploying an ERC-721 on a rollup is similar to deploying on Ethereum. However, the added efficiency of rollups means you can expect faster transaction finality and lower gas fees. This makes the minting process of unique tokens, such as digital art or collectibles, more accessible and cost-effective.</p>
          <h1 className="text-2xl pb-2">Integrating verifiable randomness</h1>
          <p className="pb-2">A unique feature we'll explore is integrating a Verifiable Random Function (VRF) with our smart contracts. VRFs provide a secure and verifiable way to generate randomness, essential for many decentralized applications. For instance, a gaming app can use a VRF to ensure fair and unpredictable outcomes.</p>
          <p className="pb-4">We'll use a <CustomLink href="https://chain.link/education-hub/verifiable-random-function-vrf">drand-based VRF solution</CustomLink> compatible with the EVM. This allows us to incorporate secure randomness directly into our smart contracts with familiar EVM opcodes.</p>
          <h1 className="text-2xl pb-2">Ready to ship?</h1>
          <p className="pb-2">Building on a rollup like the Bubs testnet offers a familiar yet enhanced development experience for EVM developers. By following this tutorial, you'll learn how to deploy ERC-721 and ERC-1155 smart contracts and integrate a VRF solution, all while enjoying the benefits of rollup technology.</p>
          <p className="pb-4">Ready to start building? Let's embark on this journey together and unlock the potential of rollups for your next project.</p>
          <CustomLink href="/modules/1/bubs" className="px-4 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition duration-300 ease-in-out">
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
