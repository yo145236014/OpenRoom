import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isSignupMode, setIsSignupMode] = useState(false); // Toggle between login/signup

  // Load all users from localStorage
  const getUsers = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setAuthError('');
    } else {
      setAuthError('Invalid username or password!');
    }
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    const users = getUsers();
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setAuthError('Username already taken!');
    } else {
      const newUser = { username, password };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setIsLoggedIn(true); // Auto-login after signup
      setCurrentUser(newUser);
      setAuthError('');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <div className="dashboard">
          <h2>Welcome, {currentUser.username}!</h2>
          <p>This is your secure dashboard.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form
          onSubmit={isSignupMode ? handleSignup : handleLogin}
          className="auth-form"
        >
          <h2>{isSignupMode ? 'Sign Up' : 'Login'}</h2>
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
          <button type="submit">{isSignupMode ? 'Sign Up' : 'Login'}</button>
          <p className="toggle-mode">
            {isSignupMode ? (
              <>
                Already have an account?{' '}
                <span onClick={() => setIsSignupMode(false)}>Login</span>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <span onClick={() => setIsSignupMode(true)}>Sign Up</span>
              </>
            )}
          </p>
        </form>
      )}
    </div>
  );
}

export default App;