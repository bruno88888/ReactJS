import imagen from './assets/Harry.webp';
import concertImage from './assets/concert.jpg';
import './ContenedorTarjeta.css';
import PropTypes from 'prop-types';
import Productos from './Productos.jsx';
import AcercaDe from './AcercaDe.jsx';
import Contactanos from './contactanos.jsx';
import Servicios from './Servicios.jsx';


function ContenedorTarjetas({vista}) {
    const vistas = {
        "Inicio": <Inicio/>,
        "Acerca de": <AcercaDe/>,
        "Productos": <Productos/>,
        "Contactanos" : <Contactanos/>,
        "Servicios": <Servicios/>

    }
    return (
        <div className="contenedorDiv">
            {vistas[vista] || vistas["Inicio"]}
            </div>

    );
}


function Inicio() {
    return (
        <div className="contenedorDiv">
            <TarjetaComponent titulo="Canciones" descripcion="Descubre las mejores canciones de tu artista favorito." />
            <TarjetaComponent titulo="Albums" descripcion="Explora los álbumes más populares de tu artista favorito." />
            <TarjetaComponent titulo="Tour" descripcion="Consulta los próximos conciertos de tu artista favorito." />
            <TarjetaComponent titulo="Merch" descripcion="Compra el merchandising oficial de tu artista favorito." />
        </div>
    );
}

function TarjetaComponent(props){
    const imgSrc = props.titulo === "Conciertos" ? concertImage : imagen;
    return(
        <div className="tarjetaDiv">
            <img src={imgSrc} alt="Logotipo" />
            <h3>{props.titulo}</h3>
            <p>{props.descripcion} <a href="#">Ver más</a></p>
        </div>
    )
}



ContenedorTarjetas.propTypes = {
    vista: PropTypes.string.isRequired,
};

export default ContenedorTarjetas;