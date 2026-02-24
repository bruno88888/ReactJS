import './ContenedorTarjeta.css';
import PropTypes from 'prop-types';
import Productos from './Productos.jsx';
import AcercaDe from './AcercaDe.jsx';
import Contactanos from './contactanos.jsx';
import Servicios from './Servicios.jsx';
import Sucursales from './Sucursales.jsx';
import Usuarios from './Usuarios.jsx';
import toursImage from './assets/tours.jpg';
import albumsImage from './assets/albums.png';
import merchImage from './assets/pleasingMerch.jpg';
import cancionesImage from "./assets/canciones.jpg";
import Carrito from './Carrito.jsx';



function ContenedorTarjetas({ vista }) {

    const vistas = {
        "Inicio": <Inicio />,
        "Acerca de": <AcercaDe />,
        "Productos": <Productos />,
        "Contactanos": <Contactanos />,
        "Usuarios": <Usuarios />,
        "Carrito": <Carrito />,
        "Servicios": <Servicios />,
        "Sucursales": <Sucursales />
    };

    return (
        <div className="contenedorVista">
            {vistas[vista] || vistas["Inicio"]}
        </div>
    );
}


function Inicio() {
    return (
        <div className="inicio-grid">
            <TarjetaComponent
                titulo="Canciones"
                descripcion="Descubre las mejores canciones de tu artista favorito."
                imagen={cancionesImage}
            />
            <TarjetaComponent
                titulo="Albums"
                descripcion="Explora los álbumes más populares de tu artista favorito."
                imagen={albumsImage}
            />
            <TarjetaComponent
                titulo="Tour"
                descripcion="Consulta los próximos conciertos de tu artista favorito."
                imagen={toursImage}
            />
            <TarjetaComponent
                titulo="Merch"
                descripcion="Compra el merchandising oficial de tu artista favorito."
                imagen={merchImage}
            />
        </div>
    );
}


function TarjetaComponent({ titulo, descripcion, imagen }) {
    return (
        <div className="tarjetaDiv">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descripcion} <a href="#">Ver más</a></p>
        </div>
    );
}


ContenedorTarjetas.propTypes = {
    vista: PropTypes.string.isRequired,
};

export default ContenedorTarjetas;

