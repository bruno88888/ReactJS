import imagen from './assets/Harry.webp';
import './ContenedorTarjeta.css';

function ContenedorTarjetas() {
    return (
        <div className="contenedorDiv">
            <TarjetaComponent titulo="Canciones" descripcion="Descubre las mejores canciones de tu artista favorito." />
            <TarjetaComponent titulo="Albums" descripcion="Explora los álbumes más populares de tu artista favorito." />
            <TarjetaComponent titulo="Conciertos" descripcion="Consulta los próximos conciertos de tu artista favorito." />
            <TarjetaComponent titulo="Merch" descripcion="Compra el merchandising oficial de tu artista favorito." />
        </div>
    );
}

function TarjetaComponent(props){
    return(
        <div className="tarjetaDiv">
            <img src={imagen} alt="Logotipo" />
            <h3>{props.titulo}</h3>
            <p>{props.descripcion} <a href="#">Ver más</a></p>
        </div>
    )
}

export default ContenedorTarjetas;