import { signIn, signOut } from "auth"
import { Button } from "./ui/button"
import {usePlausible} from 'next-plausible'

const plausible = usePlausible();

const handleSignInClick = () => {
  plausible('signIn');
};

const handleSignOutClick = () => {
  plausible('signOut');
};

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
        handleSignInClick();
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
        handleSignOutClick();
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
