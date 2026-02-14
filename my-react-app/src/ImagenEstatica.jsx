
import './ImagenEstatica.css';
import defaultImage from './assets/concert.jpg';
import MapaGeolocalizacion from './MapaGeolocalizacion';

function ImagenEstatica({ imagen, titulo }) {
    const src = imagen || defaultImage;
    return (
        <div>
        <div className="imagen-estatica">
            <img src={src} alt="Imagen estática" className="imagen-estatica__img" />
            <div className="imagen-estatica__overlay">
                <h1>Conciertos</h1> 
                
            </div>
        </div>
        <MapaGeolocalizacion />
        </div>
    )
}

export default ImagenEstatica;
