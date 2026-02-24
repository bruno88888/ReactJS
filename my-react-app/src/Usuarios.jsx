import { useEffect, useState } from "react";
import api from "./Services/api";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get("/users");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerUsuarios();
  }, []);

  const handleEditar = (usuario) => {
    console.log("Editar usuario:", usuario);
    // Aquí luego puedes abrir un modal
  };

  const handleEliminar = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (confirmar) {
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
      console.log("Usuario eliminado:", id);
    }
  };

  if (cargando) {
    return (
      <div className="contenedorVista">
        <p>Cargando usuarios...</p>
      </div>
    );
  }

  return (
    <div className="contenedorVista">
      <h2 className="section-title">Usuarios Registrados</h2>

      <table className="tablaUsuarios">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Username</th>
            <th>Password</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.name.firstname}</td>
              <td>{usuario.name.lastname}</td>
              <td>
                {usuario.address.street} {usuario.address.number},{" "}
                {usuario.address.city}
              </td>
              <td>{usuario.phone}</td>
              <td>{usuario.email}</td>
              <td>{usuario.username}</td>
              <td>{usuario.password}</td>

              <td>
                <button
                  className="btn-editar"
                  onClick={() => handleEditar(usuario)}
                >
                  Editar
                </button>
              </td>

              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => handleEliminar(usuario.id)}
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