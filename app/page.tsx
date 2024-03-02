import CustomLink from "@/components/custom-link"

export default function Index() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Welcome to Modular Academy</h1>
      {/* <div className="border border-gray-200 p-2.5 my-2.5 bg-gray-100 rounded-md">
        <p className="pb-2">Modular Academy is under construction. You got here early! 👷‍♂️</p>
        <img src="https://media1.tenor.com/m/PLL_Hgq-ezsAAAAd/american-psycho-impressive.gif" alt="Impressive. Very nice." className="rounded-md"/>
      </div> */}
      <h1 className="text-2xl font-bold">
        Build whatever with Celestia underneath ✨
      </h1>
      <p className="pb-4">From smart contracts to building customized rollups, Modular Academy will show you how to build whatever with <a href="https://celestia.org" className="text-brand hover:underline">Celestia</a> underneath, at your own pace.</p>
      <h2 className="text-xl font-bold">Smart contracts on rollups</h2>
      <p>If you're a developer who wants to deploy a smart contract on a rollup, you've come to the right place! In the first part of Modular Academy, we'll learn about the different types of smart contracts you can deploy on a rollup.</p>
      <p>We'll start by learning how to deploy an ERC-721 smart contract on a rollup with a verifiable random function (VRF). Then we'll learn how to mint an ERC-1155 on the rollup by using our ERC-721 as a prerequisite for minting.</p>
      <p>Get started with Module 1. This will show you how to create an ERC-721 smart contract on Bubs testnet with a VRF.</p>
      <p className="pb-4">Ready to ship? Sign in with GitHub in the top right and start Module 1.</p>
      <div className="pb-4">
        <CustomLink href="/modules/1/introduction" className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">
          Module 1
        </CustomLink>
      </div>
      <h2 className="text-xl font-bold">Building a custom rollup framework</h2>
      <p className="pb-4">Coming soon™</p>
      <h2 className="text-xl font-bold">Building your own RaaS setup with custom rollup framework</h2>
      <p className="pb-4">Coming soon™</p>
      <h2 className="text-xl font-bold">New module releases</h2>
      <p>Join the <a href="https://t.me/modularacademyorg" className="text-brand hover:underline">Telegram</a> for updates. This is where we'll update the community when we add new modules to Modular Academy.</p>
    </div>
  )
}
