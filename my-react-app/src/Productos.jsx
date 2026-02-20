
import {useEffect, useState} from 'react';
import api from './Services/api';
import './Productos.css';

function Productos(){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(()=> {
        const obtenerProductos = async () => {
            try {
                const response =await api.get('/products');
                setProductos(response.data)
            }catch(error){
                console.error('Error al obtener el producto:', error);
            }finally{
                setCargando(false);
            }
        };
        obtenerProductos();
        },[]);

        if(cargando) return<p>Cargando Productos...</p>
    return (
        <div>
            <h2>Productos destacados</h2>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <p>{producto.price}</p>
                    <img src={producto.image}/>
                </div>

            ))}
        </div>
    );
     
}

export default Productos;
