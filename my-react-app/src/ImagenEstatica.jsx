import './ImagenEstatica.css';
import defaultImage from './assets/concert.jpg'; // Cambia esta ruta por la imagen que quieras

function ImagenEstatica({ imagen, titulo }) {
    const src = imagen || defaultImage;
    return (
        <div className="imagen-estatica">
            <img src={src} alt="Imagen estática" className="imagen-estatica__img" />
            <div className="imagen-estatica__overlay">
                <h1>Conciertos</h1>
            </div>
        </div>
    )
}

export default ImagenEstatica;
