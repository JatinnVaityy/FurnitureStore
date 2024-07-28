import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [secretKey, setSecretKey] = useState(''); // For admin secret key
  const [error, setError] = useState(null); // State for error handling

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form default submission behavior
    setError(null); // Clear any previous errors

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role, secretKey }), // Include secretKey if admin
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store token in local storage
        navigate('/'); // Redirect to the home page or dashboard
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

    } catch (error) {
      setError(error.message); // Set error message to be displayed
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {role === 'admin' && (
            <input
              type="text"
              placeholder="Secret Key"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              required
            />
          )}
          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
              />
              Admin
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <p>Don't have an account? <a className="blue" href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
