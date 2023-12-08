import React, { useState } from 'react';
import '../App.css';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name);
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Enter your name to start the quiz:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <button type="submit">Begin</button>
      </form>
    </div>
  );
};

export default Login;
