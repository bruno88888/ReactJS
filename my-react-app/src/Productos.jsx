import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarProducto from './registrarProducto';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get('/products');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  // Función que se ejecuta cuando se agrega un producto nuevo
  const agregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  };

  if (cargando) return <p>Cargando Productos...</p>;

  return (
    <div>
      <h2 className="section-title">Productos destacados</h2>

      {/* Formulario para registrar producto */}
      <RegistrarProducto onProductoAgregado={agregarProducto} />

      <div className="productos-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.image} alt={producto.title} />
              <h3>{producto.title}</h3>
              <p>${producto.price}</p>
              <button className="btn">Ver producto</button>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default Productos;
