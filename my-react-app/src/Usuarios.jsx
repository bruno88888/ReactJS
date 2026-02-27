import { useEffect, useState } from "react";
import RegistrarUsuarios from "./registrarUsuarios";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  const agregarUsuarioLista = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
  };

  return (
    <div className="usuarios-container">
      <h2>Gestión de Usuarios</h2>

      <RegistrarUsuarios onUsuarioAgregado={agregarUsuarioLista} />

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.email}</td>
              <td>{usuario.username}</td>
              <td>

                <button
                  className="btn-editar"
                  onClick={() => editarUsuario(usuario.id)}
                >
                  Editar
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarUsuario(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;