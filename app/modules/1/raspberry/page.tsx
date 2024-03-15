"use client"
import { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import CustomLink from "@/components/custom-link";
import MarkdownRenderer from '@/components/MarkdownRenderer';

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
      <MarkdownRenderer filePath="/modules/1/raspberry.md" />
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