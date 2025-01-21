'use client'; // Required if using the App Router

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Correct import for App Router

export default function SignIn() {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);

      // Save the token to localStorage or cookies
      localStorage.setItem('token', res.data.token);

      // Redirect to the home page
      router.push('/');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center  h-screen">
    <div className=" bg-white p-8 rounded-lg  shadow-md">
      <h1 className="text-2xl font-semibold text-center text-gray-800">Sign In</h1>
      <form onSubmit={handleSubmit}>
      <div className="m-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            
        />
        </div>
        <div className="m-4">
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        />
        </div>
        <button
            type="submit"
            className="w-1/3 ml-auto text-white bg-cyan-500 rounded-md hover:bg-cyan-600 focus:outline-none"
          >
            Sign In
          </button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}
