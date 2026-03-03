import './Usuarios.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarUsuarios from './RegistrarUsuario';

function Usuario() {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

    // 🔹 Obtener usuarios
    const obtenerUsuarios = async () => {
        try {
            const response = await api.get('/users');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    // 🔹 Eliminar usuario
    const eliminarUsuario = async (id) => {
        const confirmar = window.confirm("¿Seguro que deseas eliminar este usuario?");
        if (!confirmar) return;

        try {
            await api.delete(`/users/${id}`);
            alert("Usuario eliminado correctamente");
            obtenerUsuarios(); // recargar tabla
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            alert("No se pudo eliminar el usuario");
        }
    };

    if (cargando) return <p>Cargando usuarios...</p>;

    return (
        <div className="usuarios">

            <RegistrarUsuarios
                usuarioEditado={usuarioSeleccionado}
                limpiarSeleccion={() => setUsuarioSeleccionado(null)}
                onActualizacionExitosa={obtenerUsuarios}
            />

            <h1>Usuarios Registrados</h1>

            <table className="tabla-usuarios">
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
                            <td>{usuario.name?.firstname}</td>
                            <td>{usuario.name?.lastname}</td>
                            <td>
                                {usuario.address?.street}{" "}
                                {usuario.address?.number}{" "}
                                {usuario.address?.city}{" "}
                                {usuario.address?.zipcode}
                            </td>
                            <td>{usuario.phone}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.password}</td>

                            <td>
                                <button
                                    className="editar"
                                    onClick={() => setUsuarioSeleccionado(usuario)}
                                >
                                    Editar
                                </button>
                            </td>

                            <td>
                                <button
                                    className="eliminar"
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

export default Usuario;