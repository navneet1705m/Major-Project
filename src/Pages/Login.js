import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      // Simulated login logic
      const validEmail = 'test@example.com';
      const validPassword = 'password123';
  
      if (email === validEmail && password === validPassword) {
        console.log('Login successful!');
        setError('');
        history.push('/');
      } else {
        setError('Invalid email or password');
      }
    };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-900">
      <div className="p-8 bg-white rounded-md shadow-md w-96">
        <h2 className="mb-6 text-3xl font-bold text-purple-900">Login</h2>
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
          <button
            type="button"
            onClick={handleLogin}
            className="w-full p-2 text-white rounded-md bg-gold hover:bg-yellow-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
