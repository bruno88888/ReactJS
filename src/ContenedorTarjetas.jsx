import defaultImage from './assets/Harry.webp';
import AcercaDe from './AcercaDe';
import './ContenedorTarjeta.css';
import PropTypes from 'prop-types';
import Encabezado from './Encabezado';

function ContenedorTarjetas({ vista }) {
    const vistas ={
        "Inicio": <Inicio/>,
        "Acerca de": <AcercaDe/>,
    }

    return (
        <div className="contenedorDiv">
            {vistas[vista] || vistas["Inicio"]}
        </div>
    );
}

function Inicio(){
    return(
        <div className="inicioDiv">
            <TarjetaComponent titulo="Canciones" descripcion="Descubre las mejores canciones de tu artista favorito." />
            <TarjetaComponent titulo="Albums" descripcion="Explora los álbumes más populares de tu artista favorito." imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRit7pfvwgLLXRQAjsLPOUAT9VuAeEMQ8kPcA&s" />
            <TarjetaComponent titulo="Conciertos" descripcion="Consulta los próximos conciertos de tu artista favorito." imagen={defaultImage} />
            <TarjetaComponent titulo="Merch" descripcion="Compra el merchandising oficial de tu artista favorito." imagen="https://cdn.marvel.com/content/2x/374sfx_com_mas_mob_01.jpg" />
        </div>
    )
}

function TarjetaComponent(props){
    const src = props.imagen || props.image || defaultImage;
    return(
        <div className="tarjetaDiv">
            <img src={src} alt={props.titulo} />
            <h3>{props.titulo}</h3>
            <p>{props.descripcion} <a href="#">Ver más</a></p>
        </div>
    )
}

TarjetaComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string
};

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

ContenedorTarjetas.propTypes = {
    vista: PropTypes.string.isRequired
};

export default ContenedorTarjetas;