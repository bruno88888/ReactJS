import './Login.css';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form className="login-form">
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

          <button type="button" className="btn-login">Acceder</button>

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