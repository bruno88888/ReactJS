import './Login.css';
import { useState } from 'react';
import api from './Services/api'; // tu instancia de axios

function Login({ onLoginExitoso }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setError('');
      const response = await api.post('/auth/login', {
        username,
        password,
      });

      const token = response.data.token;
      console.log('Token recibido:', token);

      // Guardamos el token en localStorage (opcional)
      localStorage.setItem('authToken', token);

      alert('Login exitoso!');
      if (onLoginExitoso) onLoginExitoso(token);

    } catch (err) {
      console.error('Error en login:', err);
      setError('Usuario o contraseña incorrecta');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu usuario"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="button" className="btn-login" onClick={handleLogin}>
            Acceder
          </button>

          <div className="login-options">
            <button type="button" className="btn-link">Crear cuenta</button>
            <button type="button" className="btn-link">Recuperar contraseña</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;