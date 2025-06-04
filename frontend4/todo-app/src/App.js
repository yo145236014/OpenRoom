import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Handle signup/login
  const handleAuth = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      // Signup (first-time user)
      localStorage.setItem('user', JSON.stringify({ username, password }));
      setIsLoggedIn(true);
      setAuthError('');
    } else {
      // Login (existing user)
      if (storedUser.username === username && storedUser.password === password) {
        setIsLoggedIn(true);
        setAuthError('');
      } else {
        setAuthError('Invalid username or password!');
      }
    }
  };

  // Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <div className="dashboard">
          <h2>Welcome, {username}!</h2>
          <p>This is your secure dashboard.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleAuth} className="auth-form">
          <h2>{localStorage.getItem('user') ? 'Login' : 'Sign Up'}</h2>
          {authError && <p className="error">{authError}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{localStorage.getItem('user') ? 'Login' : 'Sign Up'}</button>
        </form>
      )}
    </div>
  );
}

export default App;