import './Usuarios.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarUsuario from './RegistrarUsuario';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
            const obtenerUsuarios = async () => {
            try{
                const response = await api.get('/users');
                setUsuarios(response.data);
            }catch(error){
                console.error('error al obtener usuarios', error);
            }finally{
                setCargando(false);
            }
        };
    useEffect(() => {
        obtenerUsuarios();
    },[]);

    if(cargando) return <p>Cargando usuarios.......</p>;

    return (
        <div className="usuarios">
            <RegistrarUsuario 
            usuarioEditado={usuarioSeleccionado}
            limpiarSeleccion={setUsuarioSeleccionado}
            onActualizacionExitosa={obtenerUsuarios}
            />

            <h1>Usuarios Registrados</h1>
            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Rol</th>
                        <th>Fecha de Registro</th>

                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.username}</td>
                            <td>{usuario.direccion}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.password}</td>
                            <td>{usuario.rol || "cliente"}</td>
                            <td>{usuario.fechaRegistro || new Date().toLocaleDateString()}</td>
                            <td><button className="editar" onClick={()=>setUsuarioSeleccionado(usuario)}>Editar</button></td>
                            <td><button className="eliminar">Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;