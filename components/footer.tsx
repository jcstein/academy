import CustomLink from "./custom-link"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 px-4 my-4 mx-0 w-full text-sm sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:my-12 sm:mx-auto sm:max-w-3xl sm:h-5">      <img src="/logo-light.svg" alt="Celestia" style={{ maxWidth: '100px', height: 'auto' }} className="pb-2 md:pb-0" />
      <div className="flex flex-col gap-4 sm:flex-row">
        <CustomLink href="https://t.me/modularacademyorg">Telegram</CustomLink>
        <CustomLink href="https://docs.celestia.org">Documentation</CustomLink>
        <CustomLink href="https://github.com/celestiaorg/academy">
          Source
        </CustomLink>
        <CustomLink href="/policy">Privacy</CustomLink>
      </div>
    </footer>
  )
}
