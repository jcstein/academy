import CustomLink from "./custom-link"

export default function Footer() {
  return (
    <footer className="flex flex-col w-full px-4 mx-0 my-4 space-y-1 text-sm md:max-w-3xl md:my-12 md:mx-auto sm:px-6 md:h-5 md:items-center md:space-y-0 md:space-x-4 md:flex-row">
      <img src="/logo-light.svg" alt="Celestia" style={{ maxWidth: '100px', height: 'auto' }} className="pb-2" />
      <CustomLink href="https://t.me/modularacademyorg">Telegram</CustomLink>
      <CustomLink href="https://docs.celestia.org">Documentation</CustomLink>
      <CustomLink href="https://github.com/celestiaorg/academy">
        Source
      </CustomLink>
      <CustomLink href="/policy">Privacy</CustomLink>
    </footer>
  )
}
