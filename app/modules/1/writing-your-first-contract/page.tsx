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
        <h1 className="text-4xl font-bold pb-4">Writing your first contract</h1>
        <h1 className="text-3xl pb-2">To be continued 1</h1>
        <p className="pb-4">gm</p>
        <CustomLink href="/modules/1/bubs" className="px-4 py-2 bg-brand-light text-white font-bold rounded hover:bg-brand transition duration-300 ease-in-out mr-2">
          Last page
        </CustomLink>
        {/* <CustomLink href="/modules/1/deploying-your-contract" className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">
          Next page
        </CustomLink> */}
        {/* <div className="pb-4"></div>
        <p className="border border-gray-200 p-2.5 my-2.5 bg-gray-100 rounded-md">Signed in as {session?.user?.name} ({session?.user?.email})</p> */}
      </div>
    )
  }

  return <CustomLink href="/api/auth/signin" className="underline">Sign in with GitHub to get started</CustomLink>
}
