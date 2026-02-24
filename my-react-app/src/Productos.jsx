import { useEffect, useState } from 'react';
import api from './Services/api';
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
        console.error('Error al obtener el producto:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  if (cargando) return <p>Cargando Productos...</p>;

  return (
    <div>
      <h2 className="section-title">Productos destacados</h2>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>${producto.price}</p>
            <button className="btn">Ver producto</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
