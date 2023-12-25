import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Simulated signup logic
    const validEmail = 'test@example.com';
    const validPassword = 'password123';

    if (email === validEmail) {
      setError('Email already exists');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
    
      console.log('Signup successful!');
      setError('');
      
      history.push('/');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-900">
      <div className="p-8 bg-white rounded-md shadow-md w-96">
        <h2 className="mb-6 text-3xl font-bold text-purple-900">Signup</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-purple-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-purple-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-purple-300 rounded-md"
              placeholder="Confirm your password"
            />
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <button
            type="button"
            onClick={handleSignup}
            className="w-full p-2 text-white rounded-md bg-gold hover:bg-yellow-500"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
