import { useState } from "react";

function RegistrarUsuarios({ onUsuarioAgregado }) {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value
    });
  };

  const agregarUsuario = async (e) => {
    e.preventDefault();

    const res = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoUsuario)
    });

    const data = await res.json();

    onUsuarioAgregado(data);

    setNuevoUsuario({
      email: "",
      username: "",
      password: ""
    });
  };

  return (
    <form className="form-usuario" onSubmit={agregarUsuario}>
      <h3>Registrar Usuario</h3>

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={nuevoUsuario.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={nuevoUsuario.username}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={nuevoUsuario.password}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn-agregar">
        Agregar Usuario
      </button>
    </form>
  );
}

export default RegistrarUsuarios;