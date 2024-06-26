# Introduction to Module 1

## Building a smart contract with verifiable randomness

Welcome to the world of rollups! If you're an Ethereum Virtual Machine (EVM) developer, you might wonder how building on a rollup, like [OP Celestia Raspberry testnet](https://raas.gelato.network/rollups/details/public/op-celestia-testnet), compares to traditional blockchains. The truth is, the experience is designed to be seamless.

## What is a rollup?

A rollup is blockchain that outsources one of its components to a separate chain. In this case, Raspberry testnet is an OP Stack rollup that settles on Ethereum and posts data to Celestia for data availability. Posting data to Celestia instead of as `calldata` on Ethereum allows for faster and cheaper transactions without sacrificing security. Think of a rollup as a blockchain with the superpowers of scalability, efficiency, and verifiability by all.

## Building on Raspberry testnet

The Raspberry testnet is a rollup that operates with the familiarity of the EVM, making it an ideal playground for developers looking to explore the benefits of rollups without straying too far from the Ethereum development environment they know and love.

## ERC-721 on a rollup

Deploying an ERC-721 on a rollup is very similar to deploying on Ethereum. However, the added efficiency of rollups means you can expect faster transaction finality and lower gas fees. This makes the minting process of unique tokens, such as digital art, collectibles, or tokens for real world assets, more accessible and cost-effective.

Where's the proof? [Syndicate's Frame Chain](https://warpcast.com/will/0x66826dd0) allows for just 0.01 ETH to cover many millions of transactions.

![frame chain](/images/frame_chain.png)

## Integrating verifiable randomness

In the first module, we'll explore integrating a verifiable random function (VRF) with a smart contract on our rollup. VRFs provide a secure and verifiable way to generate randomness, essential for many decentralized applications. For instance, a gaming app would use a VRF to ensure fair and unpredictable outcomes.

We'll use a drand-based VRF solution compatible with the EVM. This allows us to incorporate secure randomness directly into our smart contracts with familiar EVM opcodes.

## Ready to ship?

Building on a rollup like the Raspberry testnet offers a familiar yet enhanced development experience for EVM developers. By following this tutorial, you'll learn how to deploy ERC-721 smart contract and integrate a VRF solution, all while enjoying the benefits of rollup technology.

Ready to start building? Let's embark on this journey together and unlock the potential of rollups for your next project.