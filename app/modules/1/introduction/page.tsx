"use client"
import { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { supabase } from '@/utils/supabaseClient';


export default function Page() {
  const [answer, setAnswer] = useState('')
  const [questionId, setQuestionId] = useState('question_1')

  const { data: session } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authCheckCompleted, setAuthCheckCompleted] = useState(false);

  useEffect(() => {
    console.log('Session updated:', session);
  }, [session]);

  const handleAnswerSubmit = async () => {
    if (!session?.user?.email) {
      console.error('User email is null or undefined. User might not be signed in.');
      return;
    }
  
    const { data, error } = await supabase
      .from('module_progress')
      .insert([
        { user_id: session?.user?.email, module_id: 'module_1', question_id: questionId, answer: answer, is_correct: true },
      ]);
  
    if (error) console.error('Error submitting answer:', error);
    else console.log('Answer submitted successfully:', data);
  };

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
      <a href="/modules/1/raspberry" className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">
        Let's ship it!
      </a>
      <div className="pb-4" />
      <p>What are you most excited about in Module 1?</p>
      <input
          className="outline-none border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand-light rounded-md py-2 px-4 w-full transition duration-150 ease-in-out"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Building my first dapp!"
        />
        <button onClick={handleAnswerSubmit} className="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand-dark transition duration-300 ease-in-out">Submit Answer</button>
      <p className="border border-gray-200 p-2.5 my-2.5 bg-gray-100 rounded-md">Signed in as {session?.user?.name} ({session?.user?.email})</p>
    </div>
  );
}
