"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface FormProps {
  activeTab: 'login' | 'signup';
}

export default function Form({ activeTab }: FormProps) {
  const router = useRouter(); // Initialize the useRouter hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    router.push('/search'); // to go to search page after submitting form
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 py-10 px-5">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" placeholder="name@email.com" className="focus:outline-none rounded " required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="•••••••••••" className="focus:outline-none rounded" required />
      
      {activeTab === 'signup' && (
        <>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="•••••••••••" className="focus:outline-none rounded" required />
        </>
      )}
      
      <input className="w-auto px-4 py-2 rounded-lg shadow-lg bg-theme-orange hover:bg-theme-orange-light text-white" type="submit" value="Let's Go" />
    </form>
  );
}
