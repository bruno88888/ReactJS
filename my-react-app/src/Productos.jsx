import { useEffect, useState } from 'react';
import api from './Services/api';
import RegistrarProducto from './registrarProducto';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
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

  const agregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    console.log("Carrito:", [...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((producto) => producto.id !== id));
  };

  if (cargando) return <p>Cargando Productos...</p>;

  return (
    <div className="productos-page">
      <h2 className="section-title">
        Productos destacados ({carrito.length} en carrito)
      </h2>

      <RegistrarProducto onProductoAgregado={agregarProducto} />

      <div className="productos-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.image} alt={producto.title} />
              <h3>{producto.title}</h3>
              <p>${producto.price}</p>

              <div className="card-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </div>
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