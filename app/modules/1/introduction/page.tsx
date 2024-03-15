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
      <MarkdownRenderer filePath="/modules/1/introduction.md" />
      <CustomLink href="/modules/1/raspberry" className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">
        Let's ship it!
      </CustomLink>
      <div className="pb-4"></div>
      <p className="border border-gray-200 p-2.5 my-2.5 bg-gray-100 rounded-md">Signed in as {session?.user?.name} ({session?.user?.email})</p>
    </div>
  );
}
