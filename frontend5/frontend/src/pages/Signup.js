import { useState } from 'react';
import { signup } from '../mock/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(userData);
      navigate('/login');
    } catch (error) {
      alert('Signup failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;