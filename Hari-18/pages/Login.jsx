import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/checkout';

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = login(email, password);
    if (!success) {
      setError('Invalid credentials');
    }
  }, [email, password, login]);

  const handleDemoLogin = useCallback(() => {
    const demoEmail = 'demo@example.com';
    const demoPassword = 'password123';
    
    setEmail(demoEmail);
    setPassword(demoPassword);
    login(demoEmail, demoPassword);
  }, [login]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <p>Silakan login terlebih dahulu</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email anda"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password anda"
              className="form-input"
              required
            />
          </div>
          
          <button type="submit" className="login-btn">
            Login
          </button>
          
          <button 
            type="button" 
            onClick={handleDemoLogin}
            className="demo-btn"
          >
            Gunakan Akun Demo
          </button>
        </form>
        
        <p className="login-note">
          Note: Anda bisa menggunakan email dan password apa saja
        </p>
      </div>
    </div>
  );
};

export default Login;