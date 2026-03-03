import { useState, useEffect } from "react";
import './Usuarios.css'
import api from './Services/api'

function RegistrarUsuarios({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (usuarioEditado) {
      setUsername(usuarioEditado.username);
      setEmail(usuarioEditado.email);
      setPassword(usuarioEditado.password);
    } else {
      resetForm(); // ✅ corregido
    }
  }, [usuarioEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = { username, email, password };

    try {
      if (usuarioEditado) {
        const respuesta = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
        console.log('Usuario Actualizado', respuesta.data);
        alert('Usuario Actualizado con Exito');
        limpiarSeleccion(null);
      } else {
        const respuesta = await api.post(`/users`, nuevoUsuario);
        console.log('Usuario Registrado', respuesta.data);
        alert('¡Usuario Registrado con Exito');
      }

      resetForm();
      if (onActualizacionExitosa) onActualizacionExitosa();

    } catch (error) {
      console.error('Error al registrar', error);
      alert('¡Error al procesar la solicitud!');
    }
  };

  return (
    <div className="containerForm">
      <h2>Registrar Usuario</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Correo Electronico</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          {usuarioEditado ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </div>
  );
}

export default RegistrarUsuarios;